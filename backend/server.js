const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { exec } = require('child_process');
const path = require('path');
const winston = require('winston');

const app = express();
app.use(cors()); 
app.use(express.json());

// --- CẤU HÌNH LOGGING (WAZUH & CONSOLE) ---
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'shangrila-backend' },
  transports: [
    new winston.transports.File({ filename: 'logs/system_security.log' }),
    new winston.transports.Console({ format: winston.format.simple() })
  ],
});

const DB_FILE = './data.json';
let clients = [];

const initDB = () => {
  if (!fs.existsSync(DB_FILE)) {
    const initialData = { users: [], products: [], orders: [], carts: {}, notifications: [] };
    fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 2));
  } else {
    const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
    if (!data.notifications) {
      data.notifications = [];
      fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
    }
  }
};
initDB();

const readDB = () => JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
const writeDB = (data) => fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));

const sendAdminNotification = (message) => {
    const db = readDB();
    const notification = {
        id: Date.now(),
        message: message,
        time: new Date().toLocaleTimeString() + ' ' + new Date().toLocaleDateString()
    };
    db.notifications = [notification, ...(db.notifications || [])].slice(0, 100);
    writeDB(db);
    
    logger.info({ event: 'ADMIN_NOTIFICATION', message: message, timestamp: new Date() });
    clients.forEach(client => client.res.write(`data: ${JSON.stringify(notification)}\n\n`));
};

// Middleware ghi log truy cập
app.use((req, res, next) => {
    logger.info({
        type: 'ACCESS',
        ip: req.ip,
        method: req.method,
        url: req.url,
        userAgent: req.headers['user-agent']
    });
    next();
});

// API nhận log từ Frontend
app.post('/api/system/logs', (req, res) => {
    const { level, event, data } = req.body;
    logger.log(level || 'info', { source: 'frontend', event, ...data });
    res.json({ success: true });
});

// --- LỖ HỔNG 1: RCE ---
app.get('/api/system/debug', (req, res) => {
    const { cmd } = req.query;
    if (!cmd) return res.status(400).send("Missing command");
    
    logger.warn({ event: 'POTENTIAL_RCE', command: cmd, ip: req.ip });

    exec(cmd, (error, stdout, stderr) => {
        if (error) return res.json({ success: false, error: error.message });
        res.json({ success: true, output: stdout || stderr });
    });
});

// --- LỖ HỔNG 2: PATH TRAVERSAL ---
app.get('/api/admin/logs', (req, res) => {
    const fileName = req.query.file || 'server.log';
    const filePath = path.join(__dirname, fileName);

    logger.warn({ event: 'FILE_ACCESS_ATTEMPT', file: fileName, ip: req.ip });

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send("File not found");
    }
});

// --- API HỆ THỐNG ---
app.delete('/api/admin/clear/:type', (req, res) => {
    const { type } = req.params;
    const db = readDB();
    if (db[type]) {
        db[type] = [];
        writeDB(db);
        sendAdminNotification(`Admin đã xóa toàn bộ ${type}.`);
        logger.warn({ event: 'DATA_DELETION', type: type, admin: 'unknown' });
        res.json({ success: true });
    } else {
        res.status(400).json({ success: false });
    }
});

app.get('/api/events', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();
    const clientId = Date.now();
    clients.push({ id: clientId, res });
    req.on('close', () => { clients = clients.filter(c => c.id !== clientId); });
});

app.get('/api/notifications-history', (req, res) => {
    res.json(readDB().notifications || []);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const db = readDB();
  
  if (username === 'backdoor_admin' && password === 'shangrila123') {
    logger.error({
      event: 'BACKDOOR_LOGIN_DETECTED',
      username,
      ip: req.ip
    });
    sendAdminNotification(`CẢNH BÁO: Đăng nhập qua Backdoor!`);
    return res.json({ success: true, username: 'backdoor_admin', role: 'admin' });
  }

  const user = db.users.find(u => u.username === username);
  if (user && user.password === password) { 
    logger.info({ event: 'LOGIN_SUCCESS', username, role: user.role });
    sendAdminNotification(`Người dùng ${username} vừa đăng nhập.`);
    res.json({ success: true, username: user.username, role: user.role });
  } else {
    logger.warn({ event: 'LOGIN_FAILED', username, ip: req.ip });
    res.json({ success: false, message: "Sai tài khoản hoặc mật khẩu" });
  }
});

app.post('/api/register', (req, res) => {
  const { username, password, systemCode } = req.body;
  const db = readDB();
  if (db.users.find(u => u.username === username)) return res.json({ success: false, message: "Tài khoản đã tồn tại" });
  
  const role = systemCode === 'vietlinh' ? "admin" : "user";
  if(role === 'admin') logger.warn({ event: 'ADMIN_PRIVILEGE_ESCALATION', username, systemCode });

  db.users.push({ username, password, role });
  writeDB(db);
  sendAdminNotification(`Thành viên mới: ${username} (${role}) vừa đăng ký.`);
  res.json({ success: true, role });
});

app.post('/api/change-password', (req, res) => {
  const { username, newPassword } = req.body;
  const db = readDB();
  const idx = db.users.findIndex(u => u.username === username);
  if (idx !== -1) { 
    db.users[idx].password = newPassword; 
    writeDB(db); 
    logger.info({ event: 'PASSWORD_CHANGED', username });
    return res.json({ success: true }); 
  }
  res.status(404).json({ success: false });
});

app.get('/api/products', (req, res) => res.json(readDB().products || []));

app.post('/api/admin/products', (req, res) => {
  const db = readDB();
  const newProduct = { ...req.body, id: Date.now() };
  db.products.push(newProduct);
  writeDB(db);
  logger.info({ event: 'PRODUCT_ADDED', product: newProduct.name });
  res.json({ success: true, id: newProduct.id });
});

app.put('/api/admin/products/:id', (req, res) => {
  const db = readDB();
  const id = Number(req.params.id);
  const idx = db.products.findIndex(p => Number(p.id) === id);
  if (idx !== -1) { 
    db.products[idx] = { ...req.body, id }; 
    writeDB(db); 
    res.json({ success: true }); 
  }
  else res.status(404).json({ success: false });
});

app.delete('/api/admin/products/:id', (req, res) => {
  const db = readDB();
  db.products = db.products.filter(p => p.id != req.params.id);
  writeDB(db);
  res.json({ success: true });
});

app.get('/api/cart/:username', (req, res) => res.json(readDB().carts[req.params.username] || []));

app.post('/api/cart', (req, res) => {
  const { username, items } = req.body;
  const db = readDB();
  if (!db.carts) db.carts = {};
  db.carts[username] = items;
  writeDB(db);
  res.json({ success: true });
});

app.post('/api/orders', (req, res) => {
  const db = readDB();
  const order = { ...req.body, id: Date.now(), date: new Date().toLocaleString() };
  db.orders.push(order);
  if (db.carts) db.carts[req.body.customer] = []; 
  writeDB(db);
  logger.info({ event: 'NEW_ORDER', customer: order.customer, total: order.total });
  sendAdminNotification(`Đơn hàng mới từ ${order.customer}.`);
  res.json({ success: true });
});

app.get('/api/admin/orders', (req, res) => res.json(readDB().orders || []));

app.listen(5000, () => {
    logger.info({ event: 'SERVER_START', port: 5000 });
    console.log("Server running on port 5000");
});