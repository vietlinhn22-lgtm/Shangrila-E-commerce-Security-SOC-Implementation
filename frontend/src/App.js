import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingCart, Search, Bell, Facebook, Instagram, Smartphone, 
  LogIn, LayoutDashboard, LogOut, RotateCcw, ShieldCheck, Truck, HelpCircle, X, Maximize2,
  Watch, BookOpen, Baby, Home, PlusCircle, ChevronLeft, ChevronRight,
  HeartPulse, Wallet, Dumbbell, UserPlus, Trash2, PackagePlus, ShieldAlert, RefreshCw, User, Phone, CreditCard,
  Filter, ArrowUpDown, Image as ImageIcon, Tag, DollarSign, Layers, KeyRound, Plus, Edit, Mail, Calendar, ClipboardList, Activity
} from 'lucide-react';

const BANNERS = [
  "https://i.ibb.co/SDwn92Sv/1.png",
  "https://i.ibb.co/bMjjN5ds/3.png",
  "https://i.ibb.co/sdgRkfS7/2.png"
];

const API_URL = `http://${window.location.hostname}:5000`;

// --- HELPER: GỬI LOG VỀ HỆ THỐNG GIÁM SÁT ---
const sendToSIEM = (level, event, data) => {
    fetch(`${API_URL}/api/system/logs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ level, event, data })
    }).catch(() => {}); // Im lặng nếu lỗi log
};

function App() {
  const [view, setView] = useState('shop');
  const [adminTab, setAdminTab] = useState('orders');
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [hasNewNotif, setHasNewNotif] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [showCartModal, setShowCartModal] = useState(false);
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newCategoryName, setNewCategoryName] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortType, setSortType] = useState('newest');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [checkoutInfo, setCheckoutInfo] = useState({
    fullName: '', phone: '', email: '', address: ''
  });
  const [passwordData, setPasswordData] = useState({ oldPass: '', newPass: '', confirmPass: '' });

  const existingCategories = [...new Set(products.map(p => p.category))].filter(Boolean);

  const isSQLValid = (str) => {
    if (!str) return false;
    const sqlRegex = /^[a-zA-Z0-9@._\s\u00C0-\u1EF9]+$/;
    const isValid = sqlRegex.test(str.toString());
    if(!isValid) {
        sendToSIEM('warn', 'SQL_INJECTION_ATTEMPT', { input: str });
    }
    return isValid;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && isSQLValid(email);
  };

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(code);
  };

  const syncCartWithServer = (username, newCart) => {
    fetch(`${API_URL}/api/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, items: newCart })
    });
  };

  useEffect(() => {
    fetch(`${API_URL}/api/notifications-history`)
      .then(res => res.json())
      .then(data => setNotifications(data))
      .catch(err => console.error("Lỗi lấy lịch sử thông báo:", err));

    const eventSource = new EventSource(`${API_URL}/api/events`);
    eventSource.onmessage = (event) => {
      const newNotif = JSON.parse(event.data);
      setNotifications(prev => [newNotif, ...prev].slice(0, 100));
      if (view !== 'public_notifications') {
        setHasNewNotif(true);
      }
    };
    return () => eventSource.close();
  }, [view]);

  useEffect(() => {
    sessionStorage.removeItem('shangrila_user'); 
  }, []);

  useEffect(() => {
    if (view === 'shop') {
      const timer = setInterval(() => {
        setCurrentBanner((prev) => (prev + 1) % BANNERS.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [view]);

  useEffect(() => {
    fetch(`${API_URL}/api/products`)
      .then(res => res.json())
      .then(data => {
        const productList = Array.isArray(data) ? data : [];
        setProducts(productList);
        if (productList.length > 0 && !selectedCategory) {
          setSelectedCategory(productList[0].category);
        }
      })
      .catch(() => setProducts([]));
  }, []);

  const onRegister = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    const confirm = e.target.confirm.value;
    const systemCode = e.target.systemCode.value;

    if (!isSQLValid(username) || !isSQLValid(password) || (systemCode && !isSQLValid(systemCode))) {
      alert("Thông tin đăng ký chứa ký tự không hợp lệ");
      return;
    }
    if (password !== confirm) { alert("Mật khẩu xác nhận không khớp!"); return; }
    
    const newUser = { username, password, systemCode };
    fetch(`${API_URL}/api/register`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) { 
        alert("Đăng ký thành công!"); 
        setShowRegisterModal(false);
        setShowLoginModal(true);
        generateCaptcha();
      } 
      else alert(res.message || "Lỗi đăng ký!");
    });
  };

  const onLogin = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (!isSQLValid(username) || !isSQLValid(password) || !isSQLValid(captchaInput)) {
      alert("Thông tin đăng nhập chứa ký tự không hợp lệ!");
      return;
    }
    if (captchaInput !== captcha) {
      alert("Mã CAPCHA không chính xác!");
      sendToSIEM('warn', 'CAPTCHA_FAILURE', { username });
      generateCaptcha();
      setCaptchaInput('');
      return;
    }
    const creds = { username, password, captcha: captchaInput };
    fetch(`${API_URL}/api/login`, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(creds)
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) {
        const loggedInUser = { username: res.username, role: res.role };
        setUser(loggedInUser);
        sessionStorage.setItem('shangrila_user', JSON.stringify(loggedInUser));
        fetch(`${API_URL}/api/cart/${res.username}`).then(r => r.json()).then(data => setCart(Array.isArray(data) ? data : []));
        setShowLoginModal(false);
        if(loggedInUser.role === 'admin') setView('admin');
        else setView('shop');
      } else { alert(res.message || "Sai thông tin!"); generateCaptcha(); }
    });
  };

  const onLogout = () => {
    sendToSIEM('info', 'LOGOUT', { username: user?.username });
    setUser(null);
    setCart([]);
    sessionStorage.removeItem('shangrila_user');
    setView('shop');
  };

  const onCheckout = () => {
    if (!user) { alert("Vui lòng đăng nhập!"); setShowLoginModal(true); generateCaptcha(); return; }
    if (cart.length === 0) { alert("Giỏ hàng của bạn đang trống!"); return; }

    const { fullName, phone, email, address } = checkoutInfo;
    if (!fullName || !phone || !email || !address) {
      alert("Vui lòng nhập đầy đủ thông tin thanh toán!");
      return;
    }
    if (!isSQLValid(fullName) || !isSQLValid(phone) || !isSQLValid(address)) {
      alert("Thông tin chứa ký tự không hợp lệ!");
      return;
    }
    if (!validateEmail(email)) {
      alert("Email không hợp lệ!");
      return;
    }

    const order = {
      id: Date.now(),
      customer: user.username,
      items: cart,
      total: cart.reduce((s, i) => s + i.price, 0),
      fullName, phone, email, address,
      status: "Đã xác nhận",
      date: new Date().toLocaleString()
    };
    fetch(`${API_URL}/api/orders`, {
      method: 'POST', 
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify(order)
    })
    .then(() => {
      alert("Đặt hàng thành công!");
      setCart([]); 
      setCheckoutInfo({ fullName: '', phone: '', email: '', address: '' });
      setShowCartModal(false);
      fetch(`${API_URL}/api/admin/orders`).then(res => res.json()).then(data => setOrders(Array.isArray(data) ? data : []));
    });
  };

  const onAddProduct = (e) => {
    e.preventDefault();
    const finalCategory = selectedCategory === 'NEW' ? newCategoryName : selectedCategory;
    const pname = e.target.pname.value;
    const pprice = e.target.pprice.value;
    const pimage = e.target.pimage.value;
    if (!isSQLValid(pname) || !isSQLValid(finalCategory)) {
      alert("Thông tin sản phẩm không hợp lệ!");
      return;
    }

    const variants = [];
    for(let i=1; i<=4; i++) {
      const vName = e.target[`v${i}name`].value;
      const vPrice = e.target[`v${i}price`].value;
      const vImage = e.target[`v${i}image`].value;
      if(vName && vPrice && vImage) {
        if (!isSQLValid(vName)) { alert(`Tùy chọn ${i} không hợp lệ!`); return; }
        variants.push({ id: Date.now() + i, name: vName, price: parseInt(vPrice), image: vImage });
      }
    }
    const newProduct = { name: pname, price: parseInt(pprice), image: pimage, category: finalCategory, variants };
    fetch(`${API_URL}/api/admin/products`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct)
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) { 
        alert("Thêm thành công!"); 
        setProducts([...products, { ...newProduct, id: res.id || Date.now() }]);
        setShowAddForm(false); 
        setNewCategoryName('');
      }
    });
  };

  const onUpdateProduct = (e) => {
    e.preventDefault();
    const finalCategory = selectedCategory === 'NEW' ? newCategoryName : selectedCategory;
    const pname = e.target.pname.value;
    if (!isSQLValid(pname) || !isSQLValid(finalCategory)) {
      alert("Thông tin cập nhật không hợp lệ!");
      return;
    }

    const variants = [];
    for(let i=1; i<=4; i++) {
      const vName = e.target[`v${i}name`].value;
      const vPrice = e.target[`v${i}price`].value;
      const vImage = e.target[`v${i}image`].value;
      if(vName && vPrice && vImage) {
        if (!isSQLValid(vName)) { alert(`Tùy chọn ${i} không hợp lệ!`); return; }
        variants.push({ id: Date.now() + i, name: vName, price: parseInt(vPrice), image: vImage });
      }
    }

    const updatedProduct = {
      ...editingProduct,
      name: pname,
      price: parseInt(e.target.pprice.value),
      image: e.target.pimage.value,
      category: finalCategory,
      variants
    };
    fetch(`${API_URL}/api/admin/products/${editingProduct.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedProduct)
    })
    .then(res => res.json())
    .then(res => {
      if(res.success) {
        alert("Cập nhật thành công!");
        setProducts(prev => prev.map(p => p.id === editingProduct.id ? updatedProduct : p));
        setEditingProduct(null);
      } else {
        alert("Lỗi: " + (res.message || "Không thể cập nhật"));
      }
    });
  };

  const deleteProduct = (id) => {
    if(window.confirm("Xóa sản phẩm?")) {
      fetch(`${API_URL}/api/admin/products/${id}`, { method: 'DELETE' }).then(() => setProducts(products.filter(p => p.id !== id)));
    }
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    if (user) syncCartWithServer(user.username, newCart);
  };

  useEffect(() => {
    if ((view === 'admin' && user?.role === 'admin') || (view === 'profile' && user)) {
      fetch(`${API_URL}/api/admin/orders`).then(res => res.json()).then(data => setOrders(Array.isArray(data) ? data : []));
    }
  }, [view, user]);

  const getMinPrice = (p) => p.variants?.length > 0 ? Math.min(...p.variants.map(v => v.price)) : p.price;
  const handleBuyNowClick = (product) => {
    if (product.variants && product.variants.length > 0) { setSelectedProduct(product); return; }
    const nCart = [...cart, product];
    setCart(nCart);
    if (user) syncCartWithServer(user.username, nCart);
  };

  const getFilteredOrders = () => {
    let result = [...orders];
    if (statusFilter !== 'all') { result = result.filter(o => o.status === statusFilter); } 
    result.sort((a, b) => {
      if (sortType === 'newest') return (b.id || 0) - (a.id || 0);
      if (sortType === 'price-desc') return b.total - a.total;
      if (sortType === 'price-asc') return a.total - b.total;
      return 0;
    });
    return result;
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>
      <header style={{ background: '#FFC0CB', color: 'white', padding: '10px 10%', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '10px', opacity: 0.9 }}>
          <div>Kênh Người Bán | <Facebook size={14} style={{verticalAlign:'middle'}}/> <Instagram size={14} style={{verticalAlign:'middle'}}/></div>
          <div style={{ display: 'flex', gap: '20px', cursor: 'pointer', alignItems: 'center' }}>
            <span 
              onClick={() => {
                if(user?.role === 'admin') {
                  setView('public_notifications');
                  setHasNewNotif(false);
                } else {
                  sendToSIEM('warn', 'UNAUTHORIZED_ACCESS', { view: 'notifications', user: user?.username || 'guest' });
                  alert("Chỉ quản trị viên mới có quyền xem nhật ký hệ thống!");
                }
              }}
              style={{ position: 'relative' }}
            >
                <Bell size={14}/> Thông báo
                {hasNewNotif && (
                  <span style={{ position: 'absolute', top: -2, right: -5, width: '8px', height: '8px', background: '#ef4444', borderRadius: '50%', border: '1px solid white' }}></span>
                )}
            </span>
            {user ? (
              <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <span onClick={() => setView('profile')} style={{ fontWeight: '600' }}><User size={14}/> {user.username}</span>
                <span onClick={onLogout}><LogOut size={14}/> Thoát</span>
              </div>
            ) : (
              <div style={{display:'flex', gap:'15px'}}>
                <span onClick={() => { setShowLoginModal(true); generateCaptcha(); }}><LogIn size={14}/> Đăng nhập</span>
                <span onClick={() => setShowRegisterModal(true)}><UserPlus size={14}/> Đăng ký</span>
              </div>
            )}
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px' }}>
          <img src="https://i.ibb.co/spZJdKFh/2.png" alt="Logo" onClick={() => setView('shop')} style={{ cursor: 'pointer', height: '60px', filter: 'brightness(1.1)'}} />
          <div style={{ flex: 1, display: 'flex', background: 'white', borderRadius: '8px', padding: '4px', overflow: 'hidden' }}>
            <input placeholder="Tìm kiếm sản phẩm..." style={{ flex: 1, border: 'none', padding: '10px 15px', outline: 'none', color: '#333' }} />
            <button style={{ background: '#FFC0CB', border: 'none', padding: '0 25px', color: 'white', cursor: 'pointer', borderRadius: '6px' }}><Search size={20}/></button>
          </div>
          <div style={{ position: 'relative', cursor: 'pointer', display: 'flex', gap: '20px', alignItems: 'center' }} >
            <div onClick={() => setShowCartModal(true)} style={{ position: 'relative' }}>
                <ShoppingCart size={28} />
                {cart.length > 0 && <span style={{ position: 'absolute', top: -8, right: -8, background: '#4ade80', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px', fontWeight: 'bold', border: '2px solid #FFC0CB' }}>{cart.length}</span>}
            </div>
            {user?.role === 'admin' && <LayoutDashboard onClick={() => setView('admin')} style={{ cursor: 'pointer', color: view === 'admin' ? '#fff' : 'rgba(255,255,255,0.7)' }} size={28} />}
          </div>
        </div>
      </header>

      <main style={{ padding: '30px 10%' }}>
        {view === 'shop' && (
          <>
            <div style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
              <div style={{ flex: 2, position: 'relative', borderRadius: '12px', overflow: 'hidden', height: '350px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                {BANNERS.map((url, index) => (
                  <div key={index} style={{ position: 'absolute', inset: 0, backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundPosition: 'center', opacity: currentBanner === index ? 1 : 0, transition: 'opacity 0.8s ease' }} />
                ))}
                <div style={{ position: 'absolute', top: '50%', left: '15px', cursor: 'pointer', background: 'rgba(0,0,0,0.2)', padding: '8px', borderRadius: '50%' }} onClick={() => setCurrentBanner((currentBanner - 1 + BANNERS.length) % BANNERS.length)}><ChevronLeft color="white"/></div>
                <div style={{ position: 'absolute', top: '50%', right: '15px', cursor: 'pointer', background: 'rgba(0,0,0,0.2)', padding: '8px', borderRadius: '50%' }} onClick={() => setCurrentBanner((currentBanner + 1) % BANNERS.length)}><ChevronRight color="white"/></div>
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ flex: 1, background: '#f1f5f9', borderRadius: '12px', overflow: 'hidden' }}><img src="https://i.ibb.co/0R75B33k/Gemini-Generated-Image-mnpzsamnpzsamnpz.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                <div style={{ flex: 1, background: '#f1f5f9', borderRadius: '12px', overflow: 'hidden' }}><img src="https://i.ibb.co/yckb3zLr/Gemini-Generated-Image-ciwu6dciwu6dciwu.png" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
              {products.map(p => (
                <div key={p.id} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', transition: 'transform 0.2s', border: '1px solid #f1f5f9' }}>
                  <img src={p.image} style={{ width: '100%', height: '200px', objectFit: 'cover' }} onClick={() => setZoomedImage(p.image)} />
                  <div style={{ padding: '15px' }}>
                    <h4 style={{ margin: '0 0 10px', fontSize: '15px', color: '#1e293b', fontWeight: '600' }} dangerouslySetInnerHTML={{ __html: p.name }}></h4>
                    <p style={{ color: '#ef4444', fontWeight: '700', fontSize: '16px' }}>{getMinPrice(p).toLocaleString()}đ</p>
                    <button onClick={() => handleBuyNowClick(p)} style={{ width: '100%', marginTop: '12px', background: '#4ade80', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer' }}>Mua ngay</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {view === 'public_notifications' && user?.role === 'admin' && (
          <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', overflow: 'hidden', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ background: 'linear-gradient(90deg, #FF69B4, #FFB6C1)', padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ color: 'white', margin: 0, fontSize: '22px', fontWeight: '700', display:'flex', alignItems:'center', gap:'10px' }}>
                <Activity size={24}/> Nhật ký hoạt động Shangri-la
              </h2>
              <button onClick={() => setView('shop')} style={{ background: 'white', border: 'none', padding: '8px 15px', borderRadius: '8px', color: '#FF69B4', fontWeight: 'bold', cursor: 'pointer' }}>Đóng</button>
            </div>
            <div style={{ padding: '30px' }}>
              <div style={{ display:'flex', flexDirection:'column', gap:'12px' }}>
                {notifications.length === 0 ? (
                  <div style={{ textAlign:'center', padding:'40px', color:'#94a3b8' }}>Chưa có sự kiện nào được ghi nhận.</div>
                ) : (
                  notifications.map(n => (
                    <div key={n.id} style={{ background: '#f8fafc', border: '1px solid #f1f5f9', padding: '15px 20px', borderRadius: '12px', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                      <div style={{ display:'flex', gap:'15px', alignItems:'center' }}>
                        <div style={{ width:'8px', height:'8px', borderRadius:'50%', background:'#FF69B4'}}></div>
                        <div style={{ fontSize:'15px', color:'#1e293b' }}>{n.message}</div>
                      </div>
                      <div style={{ color:'#94a3b8', fontSize:'12px' }}>{n.time}</div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {view === 'admin' && user?.role === 'admin' && (
          <div style={{ background: 'white', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', overflow: 'hidden' }}>
            <div style={{ background: 'linear-gradient(90deg, #FF69B4, #FFB6C1)', padding: '25px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ background: 'white', padding: '10px', borderRadius: '12px', boxShadow: '0 4px 10px rgba(255,105,180,0.2)' }}>
                  <LayoutDashboard color="#FF69B4" size={24} />
                </div>
                <div>
                  <h2 style={{ color: 'white', margin: 0, fontSize: '22px', fontWeight: '700' }}>Hệ thống Quản trị</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, fontSize: '13px' }}>Chào mừng trở lại, {user?.username}</p>
                </div>
              </div>
              <div style={{ display: 'flex', background: 'rgba(255,255,255,0.2)', padding: '5px', borderRadius: '12px', backdropFilter: 'blur(5px)' }}>
                <button onClick={() => setAdminTab('orders')} style={{ padding: '10px 20px', background: adminTab === 'orders' ? '#fff' : 'transparent', border: 'none', borderRadius: '10px', cursor:'pointer', fontWeight: '700', color: adminTab === 'orders' ? '#FF69B4' : 'white', transition: '0.3s' }}>
                  <ClipboardList size={16} style={{marginRight:'8px', verticalAlign:'middle'}}/> Đơn hàng
                </button>
                <button onClick={() => setAdminTab('products')} style={{ padding: '10px 20px', background: adminTab === 'products' ? '#fff' : 'transparent', border: 'none', borderRadius: '10px', cursor:'pointer', fontWeight: '700', color: adminTab === 'products' ? '#FF69B4' : 'white', transition: '0.3s' }}>
                  <Layers size={16} style={{marginRight:'8px', verticalAlign:'middle'}}/> Kho hàng
                </button>
              </div>
            </div>

            <div style={{ padding: '30px 40px' }}>
              {adminTab === 'orders' && (
                <div>
                  <div style={{ display: 'flex', gap: '20px', marginBottom: '25px', background: '#f8fafc', padding: '15px 25px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Filter size={18} color="#64748b"/>
                      <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ padding: '8px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', outline: 'none', fontSize: '14px' }}>
                        <option value="all">Tất cả trạng thái</option>
                        <option value="Đã xác nhận">Đã xác nhận</option>
                        <option value="Chưa xác nhận">Chưa xác nhận</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <ArrowUpDown size={18} color="#64748b"/>
                      <select value={sortType} onChange={(e) => setSortType(e.target.value)} style={{ padding: '8px 15px', borderRadius: '8px', border: '1px solid #e2e8f0', background: 'white', outline: 'none', fontSize: '14px' }}>
                        <option value="newest">Đơn mới nhất</option>
                        <option value="price-desc">Giá cao nhất</option>
                        <option value="price-asc">Giá thấp nhất</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 15px' }}>
                      <thead>
                        <tr style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          <th style={{ padding: '0 20px', textAlign: 'left' }}>Tài khoản đặt hàng</th>
                          <th style={{ padding: '0 20px', textAlign: 'left' }}>Thông tin liên hệ</th>
                          <th style={{ padding: '0 20px', textAlign: 'left' }}>Sản phẩm</th>
                          <th style={{ padding: '0 20px', textAlign: 'right' }}>Tổng tiền</th>
                          <th style={{ padding: '0 20px', textAlign: 'center' }}>Trạng thái</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getFilteredOrders().map(o => (
                          <tr key={o.id} style={{ background: 'white', boxShadow: '0 2px 10px rgba(0,0,0,0.02)', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '20px', borderTopLeftRadius: '12px', borderBottomLeftRadius: '12px' }}>
                              <div style={{ display:'flex', alignItems:'center', gap:'12px'}}>
                                <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '10px' }}><User size={20} color="#64748b"/></div>
                                <div>
                                  <div style={{ fontWeight: '700', color: '#1e293b', fontSize: '15px' }}>{o.customer}</div>
                                  <div style={{ fontSize: '12px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12}/> {o.date}</div>
                                </div>
                              </div>
                            </td>
                            <td style={{ padding: '20px' }}>
                              <div style={{ fontSize: '13px', color: '#475569', display: 'grid', gap: '6px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><ShieldCheck size={14} color="#FF69B4"/> {o.fullName || 'Ẩn danh'}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14} color="#FF69B4"/> {o.phone || 'N/A'}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} color="#FF69B4"/> {o.email || 'N/A'}</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}><Home size={14}/> {o.address || 'Tại quầy'}</div>
                              </div>
                            </td>
                            <td style={{ padding: '20px' }}>
                              <div style={{ maxWidth: '250px' }}>
                                {o.items.map((item, idx) => (
                                  <span key={idx} style={{ display: 'inline-block', background: '#f8fafc', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', margin: '2px', border: '1px solid #e2e8f0', color: '#64748b' }}>{item.name}</span>
                                ))}
                              </div>
                            </td>
                            <td style={{ padding: '20px', textAlign: 'right' }}>
                              <div style={{ fontWeight: '800', color: '#FF69B4', fontSize: '16px' }}>{o.total.toLocaleString()}đ</div>
                            </td>
                            <td style={{ padding: '20px', textAlign: 'center', borderTopRightRadius: '12px', borderBottomRightRadius: '12px' }}>
                              <span style={{ padding: '8px 15px', borderRadius: '10px', fontSize: '12px', fontWeight: '700', background: o.status === 'Đã xác nhận' ? '#dcfce7' : '#fee2e2', color: o.status === 'Đã xác nhận' ? '#16a34a' : '#dc2626', border: `1px solid ${o.status === 'Đã xác nhận' ? '#bbf7d0' : '#fecaca'}` }}>
                                {o.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {adminTab === 'products' && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                    <h3 style={{ margin: 0, color: '#1e293b', fontSize: '18px', fontWeight: '700' }}>Danh sách sản phẩm ({products.length})</h3>
                    <button onClick={() => setShowAddForm(!showAddForm)} style={{ padding: '10px 25px', background: showAddForm ? '#64748b' : '#4ade80', border: 'none', color: 'white', cursor: 'pointer', borderRadius: '10px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {showAddForm ? <X size={18}/> : <PackagePlus size={18}/>} {showAddForm ? "Đóng Form" : "Thêm sản phẩm"}
                    </button>
                  </div>

                  {(showAddForm || editingProduct) && (
                    <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '16px', marginBottom: '30px', border: '2px dashed #FFC0CB' }}>
                       <h4 style={{ color: '#FF69B4', marginTop: 0, marginBottom: '20px' }}>{editingProduct ? `Cập nhật: ${editingProduct.name}` : "Thông tin sản phẩm mới"}</h4>
                       <form onSubmit={editingProduct ? onUpdateProduct : onAddProduct} style={{ display: 'grid', gap: '20px' }}>
                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                            <input name="pname" defaultValue={editingProduct?.name || ''} placeholder="Tên sản phẩm (SQL Format)" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} required />
                            <input name="pprice" type="number" defaultValue={editingProduct?.price || ''} placeholder="Giá cơ bản" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} required />
                            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                              <option value="">Chọn danh mục</option>
                              {existingCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                              <option value="NEW">+ Thêm danh mục mới</option>
                            </select>
                            <input name="pimage" defaultValue={editingProduct?.image || ''} placeholder="Link ảnh (https://...)" style={{ padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0' }} required />
                         </div>
                         {selectedCategory === 'NEW' && <input placeholder="Tên danh mục mới" style={{ padding: '12px', borderRadius: '8px', border: '2px solid #FFC0CB', width: '30%' }} value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} required />}
                         
                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', background: 'white', padding: '15px', borderRadius: '12px' }}>
                            {[1,2,3,4].map(i => (
                              <div key={i} style={{ border: '1px solid #f1f5f9', padding: '10px', borderRadius: '8px' }}>
                                <div style={{ fontSize: '11px', color: '#FF69B4', fontWeight: 'bold', marginBottom: '8px' }}>MẶT HÀNG {i}</div>
                                <input name={`v${i}name`} defaultValue={editingProduct?.variants?.[i-1]?.name || ''} placeholder="Tên loại" style={{ width: '90%', padding: '6px', marginBottom: '5px', fontSize: '12px' }} />
                                <input name={`v${i}price`} defaultValue={editingProduct?.variants?.[i-1]?.price || ''} type="number" placeholder="Giá" style={{ width: '90%', padding: '6px', marginBottom: '5px', fontSize: '12px' }} />
                                <input name={`v${i}image`} defaultValue={editingProduct?.variants?.[i-1]?.image || ''} placeholder="Link ảnh" style={{ width: '90%', padding: '6px', fontSize: '12px' }} />
                              </div>
                            ))}
                         </div>
                         <div style={{ display: 'flex', gap: '10px' }}>
                            <button type="submit" style={{ flex: 2, background: '#4ade80', color: 'white', border: 'none', padding: '15px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>XÁC NHẬN LƯU</button>
                            {editingProduct && <button type="button" onClick={() => setEditingProduct(null)} style={{ flex: 1, background: '#e2e8f0', padding: '15px', borderRadius: '10px', border: 'none', cursor: 'pointer' }}>HỦY</button>}
                         </div>
                       </form>
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
                    {products.map(p => (
                      <div key={p.id} style={{ background: 'white', border: '1px solid #f1f5f9', borderRadius: '16px', padding: '15px', display: 'flex', gap: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                        <div style={{ position: 'relative' }}>
                          <img src={p.image} style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '12px' }} />
                          <span style={{ position: 'absolute', top: '-8px', left: '-8px', background: '#FFC0CB', color: 'white', fontSize: '10px', padding: '4px 10px', borderRadius: '20px', fontWeight: 'bold' }}>{p.category}</span>
                        </div>
                        <div style={{ flex: 1 }}>
                          <h5 style={{ margin: '0 0 8px 0', fontSize: '15px', color: '#1e293b' }} dangerouslySetInnerHTML={{ __html: p.name }}></h5>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#FF69B4', fontWeight: 'bold', fontSize: '16px' }}>
                            <DollarSign size={14}/> {getMinPrice(p).toLocaleString()}đ
                          </div>
                          <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '10px' }}>Mặt hàng: {p.variants?.length || 0} mẫu</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', justifyContent: 'center' }}>
                          <button onClick={() => {setEditingProduct(p); setView('admin'); setSelectedCategory(p.category); window.scrollTo(0,0);}} style={{ border: 'none', background: '#f0fdf4', color: '#16a34a', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}><Edit size={18}/></button>
                          <button onClick={() => deleteProduct(p.id)} style={{ border: 'none', background: '#fef2f2', color: '#dc2626', padding: '10px', borderRadius: '10px', cursor: 'pointer' }}><Trash2 size={18}/></button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div style={{ padding: '20px 40px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'center' }}>
               <button onClick={() => setView('shop')} style={{ background: 'transparent', border: '1px solid #cbd5e1', padding: '10px 30px', borderRadius: '10px', color: '#64748b', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', fontWeight: '600' }}><RotateCcw size={16}/> Quay lại cửa hàng</button>
            </div>
          </div>
        )}

        {view === 'profile' && user && (
          <div style={{ maxWidth: '1000px', margin: '20px auto', background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', border: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '2px solid #fff1f2', paddingBottom: '30px', marginBottom: '30px' }}>
              <div style={{ background: 'linear-gradient(135deg, #FFC0CB, #FF69B4)', width: '70px', height: '70px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User color="white" size={35} />
              </div>
              <div>
                <h2 style={{ margin: 0, color: '#1e293b', fontSize: '26px', fontWeight: '800' }}>Hồ sơ của {user.username}</h2>
                <p style={{ margin: '5px 0 0', color: '#94a3b8', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <ShieldCheck size={14} color="#4ade80"/> Tài khoản chính chủ
                </p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <ClipboardList size={20} color="#FF69B4"/> Thông tin cá nhân
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700', color: '#64748b', marginLeft: '4px' }}>HỌ VÀ TÊN</label>
                    <div style={{ position: 'relative' }}>
                      <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#cbd5e1' }}/>
                      <input placeholder="Họ và tên..." value={checkoutInfo.fullName} onChange={e => setCheckoutInfo({...checkoutInfo, fullName: e.target.value})} style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: '700', color: '#64748b', marginLeft: '4px' }}>SỐ ĐIỆN THOẠI</label>
                    <div style={{ position: 'relative' }}>
                      <Phone size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#cbd5e1' }}/>
                      <input placeholder="" value={checkoutInfo.phone} onChange={e => setCheckoutInfo({...checkoutInfo, phone: e.target.value})} style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#64748b', marginLeft: '4px' }}>ĐỊA CHỈ EMAIL</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#cbd5e1' }}/>
                    <input placeholder="email@example.com" value={checkoutInfo.email} onChange={e => setCheckoutInfo({...checkoutInfo, email: e.target.value})} style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', boxSizing: 'border-box' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '13px', fontWeight: '700', color: '#64748b', marginLeft: '4px' }}>ĐỊA CHỈ GIAO HÀNG</label>
                  <div style={{ position: 'relative' }}>
                    <Home size={18} style={{ position: 'absolute', left: '12px', top: '15px', color: '#cbd5e1' }}/>
                    <textarea placeholder="Nhập địa chỉ chi tiết..." value={checkoutInfo.address} onChange={e => setCheckoutInfo({...checkoutInfo, address: e.target.value})} style={{ width: '100%', padding: '12px 12px 12px 40px', borderRadius: '12px', border: '1px solid #e2e8f0', outline: 'none', minHeight: '100px', boxSizing: 'border-box', fontFamily: 'inherit' }} />
                  </div>
                </div>
                <button onClick={() => {
                  if (isSQLValid(checkoutInfo.fullName) && isSQLValid(checkoutInfo.phone) && validateEmail(checkoutInfo.email) && isSQLValid(checkoutInfo.address)) {
                    alert("Cập nhật thông tin thành công!");
                  } else {
                    alert("Thông tin không hợp lệ hoặc chứa ký tự đặc biệt!");
                  }
                }} style={{ background: '#4ade80', color: 'white', border: 'none', padding: '16px', borderRadius: '12px', fontWeight: '800', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <ShieldCheck size={20}/> LƯU THÔNG TIN HỒ SƠ
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ background: '#f8fafC', padding: '30px', borderRadius: '20px', border: '1px solid #e2e8f0' }}>
                  <h3 style={{ margin: '0 0 20px', fontSize: '18px', fontWeight: '700', color: '#334155', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <KeyRound size={20} color="#FF69B4"/> Bảo mật
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8' }}>MẬT KHẨU MỚI</label>
                      <input type="password" placeholder="••••••••" value={passwordData.newPass} onChange={e => setPasswordData({...passwordData, newPass: e.target.value})} style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '12px', fontWeight: '700', color: '#94a3b8' }}>XÁC NHẬN MẬT KHẨU</label>
                      <input type="password" placeholder="••••••••" value={passwordData.confirmPass} onChange={e => setPasswordData({...passwordData, confirmPass: e.target.value})} style={{ padding: '12px', borderRadius: '10px', border: '1px solid #e2e8f0', outline: 'none' }} />
                    </div>
                    <button onClick={() => {
                      if(!passwordData.newPass || !passwordData.confirmPass) { alert("Vui lòng điền đủ mật khẩu!"); }
                      else if(passwordData.newPass !== passwordData.confirmPass) { alert("Mật khẩu xác nhận không khớp!"); }
                      else if(!isSQLValid(passwordData.newPass)) { alert("Mật khẩu chứa ký tự không an toàn!"); }
                      else {
                        fetch(`${API_URL}/api/change-password`, {
                          method: 'POST',
                          headers: {'Content-Type': 'application/json'},
                          body: JSON.stringify({ username: user.username, newPassword: passwordData.newPass })
                        })
                        .then(res => res.json())
                        .then(res => {
                          if(res.success) { alert("Đổi mật khẩu thành công!"); setPasswordData({ oldPass: '', newPass: '', confirmPass: '' }); }
                          else { alert(res.message); }
                        });
                      }
                    }} style={{ background: '#4ade80', color: 'white', border: 'none', padding: '14px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer' }}>
                      XÁC NHẬN ĐỔI MẬT KHẨU
                    </button>
                  </div>
                </div>
                <div style={{ background: 'linear-gradient(135deg, #FF69B4, #FFB6C1)', padding: '25px', borderRadius: '20px', color: 'white' }}>
                  <p style={{ margin: '0 0 5px', fontSize: '12px' }}>Tài khoản đang đăng nhập:</p>
                  <h4 style={{ margin: 0, fontSize: '20px', fontWeight: '800' }}>{user.username}</h4>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(255,255,255,0.2)', borderRadius: '10px', fontSize: '12px' }}>
                    Vai trò: <span style={{ fontWeight: '700' }}>{user.role === 'admin' ? 'Quản trị viên' : 'Khách hàng'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {showLoginModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 3000, backdropFilter: 'blur(4px)' }}>
          <div style={{ width: '380px', background: 'white', padding: '40px', borderRadius: '24px', position: 'relative', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>
            <button onClick={() => setShowLoginModal(false)} style={{ position: 'absolute', top: '20px', right: '20px', border: 'none', background: 'none', cursor: 'pointer' }}><X size={24} color="#94a3b8"/></button>
            <h2 style={{ textAlign: 'center', color: '#1e293b', marginBottom: '30px' }}>Đăng nhập</h2>
            <form onSubmit={onLogin} style={{ display: 'grid', gap: '15px' }}>
              <input name="username" placeholder="Tên đăng nhập" style={{ padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }} required />
              <input name="password" type="password" placeholder="Mật khẩu" style={{ padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }} required />
              <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '12px', textAlign: 'center' }}>
                 <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '10px' }}>Mã bảo vệ:</div>
                 <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: '800', letterSpacing: '4px', color: '#FF69B4', userSelect: 'none' }}>{captcha}</div>
                    <RefreshCw size={20} color="#FF69B4" onClick={generateCaptcha} style={{cursor:'pointer'}} />
                 </div>
              </div>
              <input value={captchaInput} onChange={e => setCaptchaInput(e.target.value)} placeholder="Nhập mã xác minh" style={{ padding: '14px', borderRadius: '12px', border: '2px solid #FFC0CB' }} required />
              <button type="submit" style={{ background: '#FFC0CB', color: 'white', border: 'none', padding: '15px', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', marginTop: '10px' }}>VÀO CỬA HÀNG</button>
            </form>
          </div>
        </div>
      )}

      {showRegisterModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 3000 }}>
          <div style={{ width: '380px', background: 'white', padding: '40px', borderRadius: '24px', position: 'relative' }}>
            <button onClick={() => setShowRegisterModal(false)} style={{ position: 'absolute', top: '20px', right: '20px', border: 'none', background: 'none', cursor: 'pointer' }}><X size={24}/></button>
            <h2 style={{ textAlign: 'center', color: '#1e293b', marginBottom: '30px' }}>Tham gia ngay</h2>
            <form onSubmit={onRegister} style={{ display: 'grid', gap: '15px' }}>
              <input name="username" placeholder="Tên tài khoản (SQL Format)" style={{ padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }} required />
              <input name="password" type="password" placeholder="Mật khẩu" style={{ padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }} required />
              <input name="confirm" type="password" placeholder="Xác nhận mật khẩu" style={{ padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }} required />
              <input name="systemCode" placeholder="Mã mời (Tùy chọn)" style={{ padding: '14px', borderRadius: '12px', border: '1px solid #e2e8f0' }} />
              <button type="submit" style={{ background: '#4ade80', color: 'white', border: 'none', padding: '15px', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>ĐĂNG KÝ TÀI KHOẢN</button>
            </form>
          </div>
        </div>
      )}

      {showCartModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 3000 }}>
          <div style={{ width: '450px', background: 'white', padding: '30px', borderRadius: '24px', position: 'relative' }}>
            <button onClick={() => setShowCartModal(false)} style={{ position: 'absolute', top: '20px', right: '20px', border: 'none', background: 'none', cursor: 'pointer' }}><X size={24}/></button>
            <h3 style={{ color: '#1e293b', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}><ShoppingCart color="#FFC0CB"/> Giỏ hàng của bạn</h3>
            <div style={{ maxHeight: '200px', overflowY: 'auto', marginBottom: '20px', paddingRight: '10px' }}>
              {cart.map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #f1f5f9' }}>
                  <span style={{ fontSize: '14px', color: '#475569' }}>{item.name}</span>
                  <div style={{ display:'flex', gap:'10px', alignItems:'center'}}>
                    <b style={{ color: '#FF69B4' }}>{item.price.toLocaleString()}đ</b>
                    <Trash2 size={16} color="#ef4444" onClick={() => removeFromCart(i)} style={{cursor:'pointer'}} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gap: '10px', marginBottom: '20px' }}>
               <input placeholder="Họ tên người nhận" value={checkoutInfo.fullName} onChange={e => setCheckoutInfo({...checkoutInfo, fullName: e.target.value})} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
               <input placeholder="Email liên hệ" value={checkoutInfo.email} onChange={e => setCheckoutInfo({...checkoutInfo, email: e.target.value})} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
               <input placeholder="Số điện thoại" value={checkoutInfo.phone} onChange={e => setCheckoutInfo({...checkoutInfo, phone: e.target.value})} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }} />
               <textarea placeholder="Địa chỉ giao hàng" value={checkoutInfo.address} onChange={e => setCheckoutInfo({...checkoutInfo, address: e.target.value})} style={{ padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0', minHeight:'60px', fontFamily:'inherit' }} />
            </div>
            <div style={{ textAlign: 'right', fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '20px' }}>Tổng: {cart.reduce((s, i) => s + i.price, 0).toLocaleString()}đ</div>
            <button onClick={onCheckout} style={{ width: '100%', background: '#FFC0CB', color: 'white', border: 'none', padding: '15px', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>XÁC NHẬN THANH TOÁN</button>
          </div>
        </div>
      )}

      {selectedProduct && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 4000 }}>
          <div style={{ background: 'white', padding: '30px', borderRadius: '24px', width: '90%', maxWidth: '900px', position: 'relative' }}>
            <button onClick={() => setSelectedProduct(null)} style={{ position: 'absolute', top: '20px', right: '20px', border: 'none', background: 'none', cursor: 'pointer' }}><X size={24}/></button>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#FF69B4' }}>Danh mục tuỳ chọn:</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
              {selectedProduct.variants.map((v, i) => (
                <div key={i} style={{ border: '1px solid #f1f5f9', padding: '15px', borderRadius: '16px', textAlign: 'center', transition: '0.2s' }}>
                  <img src={v.image} style={{ width: '100%', height: '140px', objectFit: 'contain', marginBottom: '10px' }} />
                  <div style={{ fontWeight: '600', marginBottom: '5px' }}>{v.name}</div>
                  <div style={{ color: '#ef4444', fontWeight: '700', marginBottom: '15px' }}>{v.price.toLocaleString()}đ</div>
                  <button onClick={() => { const n = [...cart, v]; setCart(n); if (user) syncCartWithServer(user.username, n); setSelectedProduct(null); }} style={{ background: '#FFC0CB', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', width: '100%', cursor: 'pointer', fontWeight: 'bold' }}>CHỌN MUA</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {zoomedImage && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 5000 }} onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '12px' }} />
        </div>
      )}
    </div>
  );
}

export default App;