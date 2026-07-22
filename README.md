MỤC LỤC
CHƯƠNG 1: KHÁI QUÁT VỀ DOANH NGHIỆP	7
1.0	Sơ đồ Logical.	7
1.1	Sơ đồ Physical.	7
1.2	Quy hoạch phân bổ IP.	8
1.3	Hệ thống Website Công ty Shangri-La	8
1.3.1	Sơ đồ hệ thống Hybrid Cloud Shangri-la	8
1.3.2	Sơ đồ vận hành Website Shangri-la	8
1.3.3	Các tính năng của Website	9
CHƯƠNG 2: HIỆN TRẠNG DOANH NGHIỆP	11
2.0	Hệ thống đang vận hành và mối lo của doanh nghiệp	11
2.0.1	Hệ thống đang vận hành	11
2.0.2	Mối lo của doanh nghiệp	11
2.1	Hạng mục kiểm thử hệ thống	12
2.2	Công cụ sử dụng mô phỏng tấn công	13
2.3	Yêu cầu doanh nghiệp	13
2.3.1	Ngăn chặn tấn công dò mật khẩu tài khoản quản trị.	14
2.3.2	Thu thập và phân tích dấu vết kỹ thuật số.	14
2.3.3	Phòng tránh quét port trái phép.	14
2.3.4	Bảo vệ hệ thống Cloud trước khai thác lỗ hổng SSRF.	14
2.3.5	Phòng chống tấn công SQL Injection vào website.	14
2.3.6	Phát hiện tấn công bằng hệ thống giám sát tập trung.	14
2.3.7	Bảo vệ Database trước tấn công trích xuất dữ liệu tự động.	14
2.3.8	Ngăn chặn nghe lén dữ liệu mạng nội bộ.	14
2.3.9	Phản ứng tức thời với Honeypot và nền tảng SOAR.	14
2.3.10	Bảo vệ hệ thống xác thực AD trước tấn công Kerberoasting.	14
2.3.11	Ngăn chặn chiếm quyền điều khiển và Reverse Shell.	14
2.3.12	Bảo vệ Website khỏi tình trạng làm treo hệ thống.	14
2.3.13	Ngăn chặn lừa đảo chiếm đoạt tài khoản qua Email.	15
2.3.14	Ứng dụng A.I Agent vào tự động hóa phòng thủ hệ thống.	15
2.3.15	Chiến lược dự phòng và phục hồi dữ liệu.	15
2.4	Tóm tắt Giải pháp triển khai	15
CHƯƠNG 3: KỊCH BẢN KIỂM THỬ	16
3.1 Kiểm thử Brute-Force vào tài khoản quản trị hệ thống Active Directory	16
3.2 Ứng dụng A.I trong quá trình Footprinting và Port Scanning	17
3.3 Tấn công Nghe lén dữ liệu (Man-In-The-Middle / ARP Spoofing)	18
3.4 Kiểm thử Broken Access Control và triển khai xác thực API.	19
3.5 Bảo vệ Active Directory trước các kỹ thuật khai thác định danh	20
3.6 Khai thác SSRF để lấy thông tin hệ thống trên Azure	21
3.7 Ngăn chặn Reverse Shell và leo thang đặc quyền vào máy trạm.	22
3.8 Bảo vệ hệ thống trước chiến dịch tấn công lừa đảo qua Email	23
3.9 Giới hạn tốc độ truy cập và thời lượng kết nối đến trang Web	24
3.10 Dùng WAF tự động chặn các cú pháp tấn công nhằm vào địa chỉ Web	25
3.11 Tự động hóa phân tích và Phản ứng sự cố bảo mật với Intelligent SOC	26
3.12 Tích hợp Wireguard VPN và Giám sát DNS Sinkhole để Quản lý truy cập	27
3.13 Tích hợp Intelligent SOC trên Azure và Phân tích sự cố qua OpenAI	28
3.14 Tạo bẫy Honeypot tích hợp Netmiko tự động khoá Port tấn công	29
3.15 Ứng dụng A.I Agent trong tự động hóa phòng thủ hệ thống	30
3.16 Phục hồi sau sự cố & Tích hợp cơ chế Zero Trust cùng Llama 3 A.I	31
CHƯƠNG 4: ĐỀ XUẤT GIẢI PHÁP	32
4.1 Xác thực đa yếu tố & Khóa tài khoản (Brute-force AD)	32
4.2 Firewall & WAF bảo vệ Cloud (Footprinting/Scanning/SSRF)	32
4.3 Phòng chống SQL Injection & Sqlmap	32
4.4 Giám sát tập trung & Cảnh báo (Splunk)	32
4.5 Ngăn chặn nghe lén (MITM)	32
4.6 Kiểm soát kết nối & Toàn vẹn dữ liệu (Reverse Shell/Data Integrity)	33
4.0	Bảo vệ tài khoản dịch vụ (Kerberoasting)	33
4.1	Giới hạn tốc độ truy cập (DDoS Slowloris)	33
4.2	Email Security & Least Privilege	33
4.3	Phục hồi dữ liệu sạch (Recovery)	33
CHƯƠNG 5: ĐIỀU TRA SỐ	34
5.0	Quy trình và Nguyên tắc Điều tra số	34
5.1	Bộ công cụ Điều tra chuyên dụng (Forensic Toolset)	34
5.2	Thực thi Điều tra số theo Kịch bản tấn công (Forensic Scenarios)	35
5.2.1	Web & Database Forensics (Ứng dụng Node.js/React & MariaDB)	35
5.2.2	Identity & OS Forensics (Máy chủ Domain Controller - Windows Server 2022)	35
5.2.3	Cloud Forensics (Microsoft Azure & Hybrid Cloud)	35
5.2.4	Network & Mail Forensics (Mạng nội bộ và Email lừa đảo)	36
CHƯƠNG 6: ĐÁNH GIÁ ĐỀ TÀI	36
6.0	Hiệu quả kỹ thuật theo từng phân vùng	36
6.1	Năng lực giám sát và Phản ứng sự cố (SOC)	36
6.2	Bảo toàn dữ liệu và Phục hồi sau sự cố	37
6.3	Đánh giá tổng quát	37
6.3.1	Tổng quan	37
6.3.2	Kết quả đạt được	37
6.3.3	Kiến thức và Kỹ năng tiếp thu	37
6.3.4	Ưu điểm	37
6.3.5	Nhược điểm	38
CHƯƠNG 7: ĐỊNH HƯỚNG PHÁT TRIỂN	38
7.1. Nâng cấp Hệ thống Giám sát và Phản ứng (Từ SIEM lên SOAR & XDR)	38
7.2. Hiện thực hóa Kiến trúc An ninh Không tin cậy (Zero Trust Architecture)	38
7.3. Tích hợp Bảo mật vào Vòng đời Phát triển Phần mềm (DevSecOps)	38
7.4. Ứng dụng Trí tuệ Nhân tạo và Học máy cho Blue Team	39
7.5. Kế hoạch Phục hồi sau Thảm họa (Disaster Recovery & Business Continuity)	39
LỜI NÓI ĐẦU
Trong bối cảnh kỷ nguyên số bùng nổ, thương mại điện tử đã trở thành một phần không thể thiếu của nền kinh tế, nhưng đồng thời cũng là mục tiêu hàng đầu của các cuộc tấn công mạng ngày càng tinh vi và phức tạp. Các lỗ hổng như SQL Injection, XSS hay các chiến dịch Phishing không chỉ đe dọa đến dữ liệu người dùng mà còn gây thiệt hại nặng nề về uy tín và tài chính cho doanh nghiệp.Dự án "Shangri-la Cyber Shield" được ra đời không chỉ với mục tiêu xây dựng một nền tảng mua sắm trực tuyến hiện đại trên nền tảng Node.js và Azure VM, mà quan trọng hơn, là thiết lập một hệ sinh thái phòng thủ toàn diện dựa trên mô hình Red Team vs Blue Team thay vì chỉ xây dựng các lớp bảo mật thụ động, Thông qua việc áp dụng quy trình điều tra số (Digital Forensics) và hướng tới tiêu chuẩn Zero Trust, dự án Triển khai bảo mật và giám sát an ninh cho công ty Shangri-la kỳ vọng sẽ mang lại một mô hình bảo mật mẫu mực, nơi an toàn thông tin được đặt làm trọng tâm của quá trình phát triển bền vững.
CHƯƠNG 1: KHÁI QUÁT VỀ DOANH NGHIỆP
1.0	Sơ đồ Logical.
1.1	Sơ đồ Physical.
BẢNG QUY HOẠCH IP TRUNG TÂM
Khu Vực	Thiết bị	Port/Vlan	Subnet
Tầng 1	Fortinet	Port 1	192.168.63.150/24
		Port 2	172.16.200.2/24
		Port 3	172.16.210.2/24
		Port 7	192.168.100.1/24
		Port 8	192.168.56.2/24
	SWL3-1	200	172.16.200.1/24
	SWL3-2	210	172.16.210.1/24
	SWL2-1	10,20	172.16.10.0/24, 172.16.20.0/24
Tầng 2	SWL2-2	30,40	172.16.30.0/24, 172.16.40.0/24
	Servers Farm	DC/Member Controller	192.168.56.0/24
		Ubuntu Linux	192.168.65.166/24
		Ubuntu Manager	192.168.65.164/24
		Splunk	192.168.65.164:8000
1.2	Quy hoạch phân bổ IP.
1.3	Hệ thống Website Công ty Shangri-La
1.3.1	Sơ đồ hệ thống Hybrid Cloud Shangri-la
1.3.2	Sơ đồ vận hành Website Shangri-la
1.3.3	Các tính năng của Website
-	Mua sắm đa năng: Hỗ trợ tìm kiếm, phân loại sản phẩm và chọn các phiên bản (variants) khác nhau về giá/hình ảnh.
-	Giỏ hàng & Thanh toán: Quản lý giỏ hàng trực tuyến và quy trình đặt hàng kèm thông tin vận chuyển chi tiết.
-	Quản lý tài khoản: Hệ thống đăng ký/đăng nhập phân quyền Admin/User, bảo vệ bởi mã CAPTCHA và tính năng đổi mật khẩu.
-	Quản lý kho hàng: Giao diện thêm, sửa, xóa sản phẩm và up hình ảnh trực tiếp lên máy chủ.
-	Kiểm soát đơn hàng: Theo dõi trạng thái đơn hàng, lọc và sắp xếp theo doanh thu hoặc thời gian.
-	Nhật ký hoạt động: Theo dõi dòng sự kiện (SSE) thời gian thực về mọi tương tác của người dùng trên hệ thống.
CHƯƠNG 2: HIỆN TRẠNG DOANH NGHIỆP
2.0	Hệ thống đang vận hành và mối lo của doanh nghiệp
2.0.1	Hệ thống đang vận hành
Hiện tại, Công ty Thương mại điện tử Shangri-la (Shangri-la E-Commerce) đang vận hành mô hình hạ tầng công nghệ kết hợp (Hybrid) giữa nền tảng đám mây Azure và hệ thống mạng nội bộ (On-premise), được chia thành các phân vùng chức năng như sau:
•	Phân vùng Ứng dụng Web & Cloud (Azure Cloud): Hệ thống Website thương mại điện tử phục vụ khách hàng qua Internet, được bảo vệ vòng ngoài bởi tường lửa ứng dụng Web App Firewall (WAF) và cổng điều phối Application Gateway. Các dịch vụ cốt lõi chạy trên nền tảng Linux Application Service kết hợp với cơ sở dữ liệu đám mây Azure MariaDB. 
•	Phân vùng Biên mạng mạng nội bộ (DMZ Zone): Sử dụng dải IP 192.168.65.0/24, là nơi thiết lập máy chủ Linux WebServer để tiếp nhận luồng dữ liệu, hệ thống Database nội bộ và các bộ chuyển tiếp dữ liệu Splunk Forwarder. 
•	Phân vùng Lõi hệ thống (FARM ZONE): Sử dụng dải IP 192.168.56.0/24, nơi tập trung các tài sản số và hệ thống quản trị quan trọng nhất bao gồm Máy chủ điều khiển miền Active Directory (Domain Controller), các máy chủ thành viên (Member Domain), hệ thống Mail Server, và máy chủ lưu trữ bản sao lưu dữ liệu dự phòng (shangrila-db-backup). 
•	Phân vùng Máy trạm (LAN Zone): Được phân tách thành nhiều vùng mạng độc lập qua các thiết bị chuyển mạch Core Switch (SWL2, SWL3) tương ứng với các VLAN (VLAN10, VLAN20, VLAN30, VLAN40) cấp phát cho từng phòng ban và máy trạm của nhân viên. 
•	Trung tâm Giám sát và Phản ứng Sự cố (SIEM/SOC Zone): Sử dụng dải IP quản trị 192.168.100.0/24, tích hợp nền tảng Splunk Enterprise làm đầu não thu thập toàn bộ nhật ký hoạt động (log) từ Tường lửa, Web Server, Active Directory cho đến các máy chủ Linux Monitor nhằm phân tích và phát hiện bất thường. Hệ thống vận hành cơ chế phòng thủ chủ động thông qua nền tảng n8n (SOAR Engine), tích hợp các đoạn mã điều khiển cấu hình Switch Cisco qua thư viện Netmiko, kết hợp bẫy mồi nhử OpenCanary Honeypot và cơ chế tự động đẩy cảnh báo tức thời về nhóm Telegram của đội ngũ Blue Team. 
2.0.2	Mối lo của doanh nghiệp
Mặc dù hệ thống trang bị lớp bảo mật từ vùng biên đến nội bộ, doanh nghiệp vẫn phải đối mặt với các mối lo ngại và nguy cơ an ninh nghiêm trọng tương ứng với các kịch bản tấn công thực tế:
•	Nguy cơ sụp đổ hệ thống định danh Active Directory (AD): Doanh nghiệp lo ngại kẻ tấn công sử dụng các công cụ dò quét tự động (như Hydra) để thực hiện tấn công Brute-force mật khẩu tài khoản quản trị AD qua giao thức SMB. Nguy hiểm hơn là kỹ thuật tấn công ngoại tuyến Kerberoasting – nơi hacker xin cấp các vé dịch vụ (TGS Request) từ Domain Controller, trích xuất mã băm (Hash dump) rồi dùng các công cụ chuyên dụng (Hashcat/John the Ripper) để bẻ khóa mật khẩu gốc của các tài khoản dịch vụ (Service Accounts), từ đó chiếm đặc quyền Admin tối cao để thao túng toàn bộ hệ thống. 
•	Sự phát triển tinh vi của các công cụ tấn công ứng dụng Trí tuệ nhân tạo (AI): Tin tặc có thể tối ưu hóa quy trình tấn công bằng cách sử dụng AI (như ShellGPT, Grok) để tự động hóa hoàn toàn việc thu thập thông tin tình báo (A.I Footprinting) từ tên miền, email, bản ghi DNS, subnet cho đến các công nghệ doanh nghiệp đang sử dụng trên môi trường công khai (Shodan, GitHub, Google Dorks). Đồng thời, AI còn được dùng để thực hiện quét cổng mạng (A.I Port Scanning) tốc độ cao, nhận diện chính xác các dịch vụ mở (HTTP, SSH, FTP, RDP) để tìm ra điểm mù bảo mật nhanh hơn con người. 
•	Các lỗ hổng ứng dụng Web và lỗ hổng Cloud thường trực: Hệ thống E-Commerce luôn là mục tiêu hàng đầu của các kỹ thuật khai thác mã độc:
o	Lỗ hổng SSRF trên Cloud: Hacker lợi dụng lỗi mã nguồn để ép máy chủ Azure tự động gọi vào địa chỉ IP dịch vụ Metadata nội bộ (169.254.169.254), đánh cắp Access Token quản trị nhằm leo thang đặc quyền trên hạ tầng đám mây. 
o	Lỗ hổng SQL Injection: Nguy cơ tống tiền và rò rỉ cơ sở dữ liệu nhạy cảm khi kẻ tấn công chèn các chuỗi lệnh độc hại (như ?id=1 OR 1=1) hoặc sử dụng công cụ Sqlmap với tham số --dump để tự động vét sạch dữ liệu trong cơ sở dữ liệu Azure MariaDB hoặc database nội bộ. 
•	Rủi ro gián đoạn do tấn công từ chối dịch vụ (DDoS): Các chiến dịch tấn công nghẽn mạng Website bằng phương thức Slowloris, cố tình duy trì hàng loạt kết nối HTTP mở chậm để làm cạn kiệt tài nguyên xử lý (Server Exhaustion) của Linux WebServer, khiến trang web bị treo hoàn toàn, gây tổn hại nghiêm trọng đến doanh thu và uy tín của doanh nghiệp. 
•	Nguy cơ từ các chiến dịch Email lừa đảo và mã độc nằm vùng: Nỗi lo về việc nhân viên thiếu cảnh giác bị dính các chiến dịch Phishing Email giả mạo (sử dụng Gophish/SET) dẫn đến bị đánh cắp thông tin xác thực hoặc vô tình tải về các tệp độc hại. Từ đó, hacker dễ dàng upload mã độc lên ứng dụng Web, kích hoạt kết nối ngược Reverse Shell về máy chủ điều khiển (C2) của tin tặc để thực hiện kỹ thuật Bypass UAC, chiếm quyền SYSTEM, tắt Windows Defender và cài cắm mã độc nằm vùng sâu trong hệ thống. Thậm chí, mã độc có thể lây nhiễm vào cả hệ thống sao lưu dữ liệu, dẫn đến rủi ro tái nhiễm mã độc khi doanh nghiệp thực hiện khôi phục Database sau thảm họa. 
•	Vấn nạn nghe lén dữ liệu trong nội bộ mạng LAN (MITM): Lo ngại về tình huống hacker đã kiểm soát được một máy trạm trong mạng nội bộ (VLAN10) và sử dụng công cụ Ettercap thực hiện kỹ thuật giả mạo gói tin ARP (ARP Spoofing). Hành vi này cho phép tin tặc đánh chặn luồng giao tiếp nội bộ, đọc toàn bộ dữ liệu dạng rõ (cleartext) chưa được mã hóa như tài khoản đăng nhập, email nội bộ hoặc thực hiện tấn công Phishing leo thang. 
•	Áp lực về thời gian phản ứng sự cố thủ công (Dwell Time): Do doanh nghiệp vận hành mô hình lớn, việc đội ngũ Blue Team dò tìm dấu vết tấn công, phân tích log thủ công trên Splunk khi có hàng loạt sự kiện lỗi xảy ra sẽ tốn rất nhiều thời gian. Nếu không có sự hỗ trợ của các kịch bản tự động hóa phòng thủ (SOAR) kết hợp A.I Agent để tự động ra quyết định, phân tích mã độc và kích hoạt cô lập vật lý (Shutdown Port trên Switch Cisco via Netmiko/chặn IP trên Firewall) theo thời gian thực, doanh nghiệp sẽ không thể giảm thiểu tối đa Dwell Time của hacker trong hệ thống. 
2.1	Hạng mục kiểm thử hệ thống
Hạng mục kiểm thử	Hệ thống mục tiêu
Kiểm thử rà quét và thu thập thông tin	A.I Footprinting: Tự động thu thập thông tin và dấu vết kỹ thuật số.  
A.I Port Scanning: Quét cổng, nhận diện dịch vụ mở và điểm yếu.
Kiểm thử Ứng dụng Web & Cloud	Khai thác SSRF: Lợi dụng lỗ hổng Web để đánh cắp Token của hệ thống Azure.  
SQL Injection: Chèn mã độc để truy xuất trái phép hoặc tự động lấy cắp dữ liệu database
Tấn công Slowloris: Tạo kết nối ảo làm nghẽn mạng để kiểm tra sức chịu tải của Website
Tấn công Mạng nội bộ (LAN) & Hệ thống AD	Brute-force AD: Dò pass quản trị Active Directory.  
Kerberoasting: Khai thác lỗ hổng xác thực để đánh cắp mật khẩu tài khoản dịch vụ.  
MITM (Nghe lén): Đánh chặn giao tiếp và nghe lén dữ liệu trong mạng LAN.  
Reverse Shell: Upload mã độc để chiếm quyền điều khiển máy chủ/máy trạm.  
Kiểm thử Năng lực Phòng thủ & Tự động hóa	Hệ thống SIEM/SOC: Kiểm thử khả năng ghi nhận log, phát hiện và cảnh báo tấn công của Splunk.  
Honeypot & SOAR: Đánh giá bẫy mồi nhử và kịch bản tự động cách ly mạng khi bị xâm nhập.  
A.I Agent: Thử nghiệm AI trong việc tự động phân tích log và ra lệnh chặn IP tấn công.
Nhận thức Người dùng & Dự phòng Dữ liệu	Phishing Email: Giả lập chiến dịch lừa đảo qua email để kiểm tra mức độ cảnh giác của nhân viên.  
Backup & Recovery: Kiểm thử cô lập máy chủ khi Database nghi nhiễm mã độc; đưa bản sao lưu vào môi trường phòng sạch (Sandbox) để A.I kiểm tra trước khi khôi phục dịch vụ nhằm chống tái nhiễm.
2.2	Công cụ sử dụng mô phỏng tấn công
Công cụ	Chức năng chính
curl	→ Kết hợp vòng lặp bash script gửi liên tục HTTP request
Sqlmap	→ Tự động khai thác SQL Injection và trích xuất dữ liệu
msfvenom	→ Dùng để khởi tạo các tệp mã độc (payload)
msfconsole, netcat	→ Thiết lập trình lắng nghe thông qua module
certutil.exe	→ Lợi dụng để tải vào lén lút các tệp tin độc hại
GetNPUsers, GetUserSPNs	→ Thu thập mã băm của tài khoản không yêu cầu xác thực trước
→ Yêu cầu ticket của service account đã được thiết lập SPN
John the Ripper	→ Công cụ bẻ khóa mật khẩu offline
netdiscover, NetExec	→ Quét dải mạng nội bộ và kiểm tra quyền truy cập vào thư mục 
slowloris.py	→ Để gửi hàng ngàn kết nối HTTP không hoàn chỉnh
Gophish	→ Tạo Campaign lừa đảo.
→ Tạo cấu hình gửi thư
→ Thiết kế giao diện trang web giả mạo
→ Theo dõi trực tiếp kết quả của chiến dịch.
n8n (Nền tảng SOAR)	→ Tự điều phối luồng công việc tự động, dùng để tích hợp AI Agent vào việc phân tích payload lo
CrackMapExec	→ Brute-force để tạo ra các log đăng nhập thất bại
Honeypot (OpenCanary)	→ Giả lập dịch vụ MySQL và SSH để ghi nhận xâm nhập.
Netmiko	→ Script tự động kết nối SSH vào các thiết bị mạng
Telegram (Bot)	→ Giúp Blue Team nhận cảnh báo real-time từ Splunk/n8n
Llama 3 A.I	→ Phân tích và kiểm thử bản sao lưu local và đưa ra kết quả
Logic App, WAF, Log Analytics, 	→ Công cụ bảo mật và giám sát lưu lượng truy cập trên Azure
2.3	Yêu cầu doanh nghiệp
Nhằm giải quyết triệt để các rủi ro trong vận hành và bảo vệ tài sản số của Công ty Shangri-la, doanh nghiệp đã đưa ra các yêu cầu thực tế dựa trên các kịch bản bảo mật sau:
2.3.1	Ngăn chặn tấn công dò mật khẩu tài khoản quản trị.
•	Ngăn chặn hành vi dò mật khẩu tài khoản quản trị trên Active Directory (Brute-force AD). 
•	Áp dụng xác thực tài khoản đa yếu tố & khoá đăng nhập khi sai mật khẩu nhiều lần. 
2.3.2	Thu thập và phân tích dấu vết kỹ thuật số.
•	Sử dụng AI để thu thập thông tin mục tiêu (A.I Footprinting) nhằm chủ động nhận diện bề mặt tấn công. 
2.3.3	Phòng tránh quét port trái phép.
•	Ứng dụng AI vào việc quét cổng (A.I Port Scanning) để tự động nhận diện dịch vụ mở và đánh giá rủi ro. 
•	Dùng Firewall để lọc & kiểm soát truy cập chặt chẽ theo địa chỉ IP và Port. 
2.3.4	Bảo vệ hệ thống Cloud trước khai thác lỗ hổng SSRF.
•	Ngăn chặn lợi dụng lỗ hổng Web lấy thông tin hệ thống trên Azure thông qua kỹ thuật SSRF. 
•	Dùng Web Application Firewall (WAF) cho phép truy cập dữ liệu hợp lệ và chặn đứng các yêu cầu độc hại hướng vào nội bộ. 
2.3.5	Phòng chống tấn công SQL Injection vào website.
•	Nhận diện và phòng chống các cuộc tấn công SQL Injection nhằm vào ứng dụng Web. 
•	Dùng WAF tự động chặn các cú pháp tấn công nhằm vào địa chỉ Web. 
2.3.6	Phát hiện tấn công bằng hệ thống giám sát tập trung.
•	Triển khai hệ thống SIEM (Splunk) để giám sát và cảnh báo theo thời gian thực. 
•	Khai thác lỗ hổng Web & kiểm thử khả năng truy vết hệ thống SIEM khi có dấu hiệu bất thường. 
2.3.7	Bảo vệ Database trước tấn công trích xuất dữ liệu tự động.
•	Phòng chống tấn công tự động nhằm lấy cắp dữ liệu database thông qua công cụ Sqlmap. 
•	Nhận diện và chặn đứng kịp thời các dấu hiệu tấn công đặc trưng của Sqlmap. 
2.3.8	Ngăn chặn nghe lén dữ liệu mạng nội bộ.
•	Phát hiện và chặn kỹ thuật tấn công nghe lén dữ liệu trong mạng nội bộ (MITM). 
•	Chuyển đổi dữ liệu sang giao thức bảo mật và được mã hoá để chống đánh cắp thông tin. 
2.3.9	Phản ứng tức thời với Honeypot và nền tảng SOAR. 
•	Mô phỏng tấn công SQL & thực hiện cách ly mạng của hacker bằng hệ thống SOAR Automation. 
•	Tạo bẫy Honeypot tích hợp với script Netmiko để tự động khóa Port tấn công khi có dấu hiệu xâm nhập. 
2.3.10	Bảo vệ hệ thống xác thực AD trước tấn công Kerberoasting. 
•	Bảo vệ Active Directory trước kỹ thuật khai thác định danh và đánh cắp tài khoản dịch vụ. 
•	Ngăn chặn hành vi tấn công Kerberos trong Active Directory và khai thác lỗ hổng xác thực. 
2.3.11	Ngăn chặn chiếm quyền điều khiển và Reverse Shell.
•	Ngăn chặn kẻ tấn công khai thác lỗ hổng Web đến kiểm soát hệ thống Windows 10. 
•	Phát hiện & ngăn chặn kỹ thuật Reverse Shell, chống leo thang đặc quyền vào các máy trạm. 
2.3.12	Bảo vệ Website khỏi tình trạng làm treo hệ thống.
•	Ngăn chặn nỗ lực tấn công nghẽn mạng Website và kiểm tra khả năng chịu tải của máy chủ. 
•	Áp dụng các biện pháp giới hạn tốc độ truy cập và thời lượng kết nối đến trang Web để duy trì tính sẵn sàng. 
2.3.13	Ngăn chặn lừa đảo chiếm đoạt tài khoản qua Email.
•	Bảo vệ hệ thống trước các chiến dịch tấn công lừa đảo qua Email nhằm vào nhân viên. 
•	Mô phỏng việc gửi Phishing Email để đánh giá nhận thức và kiểm thử khả năng đánh cắp thông tin xác thực của người dùng. 
2.3.14	Ứng dụng A.I Agent vào tự động hóa phòng thủ hệ thống.
•	Ứng dụng A.I Agent kết hợp nền tảng SOAR trong tự động hóa phòng thủ hệ thống. 
•	Đảm bảo khả năng Detect attacks, trace malicious IPs, alert via Telegram, and auto-block hackers in real time. 
2.3.15	Chiến lược dự phòng và phục hồi dữ liệu.
•	Đảm bảo quy trình phục hồi Database an toàn và toàn vẹn trong tình trạng dữ liệu nghi ngờ có mã độc. 
2.4	Tóm tắt Giải pháp triển khai
Công cụ	Mô tả
1. Dò mật khẩu tài khoản quản trị 	Sử dụng Crackmapexec qua SMB dò mật khẩu AD liên tục.  
2. Footprinting/Port Scanning với AI	Dùng để thu thập/quét cổng mạng, nhận diện và phân tích lỗ hổng.  
3. Khai thác SSRF trên Azure	Lợi dụng lỗ hổng Web ép máy chủ Azure truy cập địa chỉ nội bộ (169.254.169.254) nhằm đánh cắp Token quản trị.
4.  Tấn công SQL Injection	Kẻ tấn công chèn mã độc hoặc dùng công cụ tự động Sqlmap để trích xuất trái phép dữ liệu nhạy cảm từ Database.  
5. Nghe lén dữ liệu mạng nội bộ MITM	Dùng công cụ Ettercap thực hiện ARP Spoofing để đánh chặn và đọc các dữ liệu không mã hóa (cleartext) trong mạng LAN.
6. Kerberoasting (Đánh cắp tài khoản dịch vụ):	Xin vé truy cập TGS, trích xuất mã băm và dùng Hashcat bẻ khóa ngoại tuyến để lấy mật khẩu gốc của hệ thống Active Directory.
7. (Chiếm quyền): Reverse Shell	Upload mã độc ngụy trang lên Web, qua mặt cảnh báo và thiết lập kết nối ngược (Reverse Shell) để chiếm quyền thực thi lệnh từ xa.  
8. Làm treo Website (DDoS Slowloris)	Tạo và duy trì hàng ngàn kết nối HTTP mở nhưng không hoàn thành để làm cạn kiệt tài nguyên máy chủ, gây từ chối dịch vụ.  
9. Lừa đảo qua Email (Phishing):	Dùng công cụ như Gophish/SET để gửi email giả mạo hàng loạt nhằm dụ nạn nhân tải file độc hại hoặc nhập thông tin tài khoản.
10 Tích hợp VPN và Giám sát DNS Sinkhole	Thiết lập mạng riêng ảo (VPN) bảo mật an toàn nhằm bảo vệ các truy cập vào hệ thống Web Shangri-la.
11.  Intelligent SOC & SOAR và OpenAI	Tự động hóa ghi nhận tấn công tại vùng biên và gửi dữ liệu thông qua OpenAI tiến hành giải nghĩa, nhận diện và đánh giá rủi ro.
12.  Phân tích và phản ứng sự cố với Intelligent SOC	
12.  WAF chặn các cú pháp tấn công	Sử dụng Web Application Firewall tự động nhận diện và chặn đứng các cú pháp tấn công SQL Injection hoặc SSRF. 
14.  Phản ứng tức thời với Honeypot & Netmiko	Khi hacker tấn công bẫy mồi nhử, hệ thống tự động dùng script Netmiko truy cập Switch shutdown cổng mạng, cách ly tức thời
15.  Ứng dụng A.I Agent trong phòng thủ tự động	Tích hợp Splunk, nền tảng n8n và AI Agent phân tích log. AI sẽ đẩy thông báo qua Telegram kèm các nút tương tác để quản trị viên có thể chọn "Chặn IP ngay" hoặc "Khởi động lại máy" từ xa.
16.  Phục hồi thảm họa dữ liệu	Khi Database nghi nhiễm mã độc, quy trình tự cô lập máy chủ, đưa backup vào Sandbox để A.I phân tích, xóa sạch Database bị nhiễm và khôi phục lại dữ liệu sạch để đảm bảo dịch vụ.
CHƯƠNG 3: KỊCH BẢN KIỂM THỬ
3.1 Kiểm thử Brute-Force vào tài khoản quản trị hệ thống Active Directory
Brute-Force testing of the Active Directory Administrator Account
3.2 Ứng dụng A.I trong quá trình Footprinting và Port Scanning
Application of using AI in Footprinting and Port Scanning
3.3 Tấn công Nghe lén dữ liệu (Man-In-The-Middle / ARP Spoofing)
Nghe lén dữ liệu trong mạng nội bộ (MITM)
3.4 Kiểm thử Broken Access Control và triển khai xác thực API.
Testing Broken Access Control and Implementing API Authentication.
3.5 Bảo vệ Active Directory trước các kỹ thuật khai thác định danh
Active Directory Kerberos Attacks & Exploit Authentication Flaws
3.6 Khai thác SSRF để lấy thông tin hệ thống trên Azure
Exploiting SSRF to retrieve information systems on Azure
3.7 Ngăn chặn Reverse Shell và leo thang đặc quyền vào máy trạm.
Web Exploitation to Full System Control
3.8 Bảo vệ hệ thống trước chiến dịch tấn công lừa đảo qua Email
Email Phishing Stimulation & Credential Harvesting
3.9 Giới hạn tốc độ truy cập và thời lượng kết nối đến trang Web 
Database Exhaustion Attack & Stress Test Registration
3.10 Dùng WAF tự động chặn các cú pháp tấn công nhằm vào địa chỉ Web
Tấn công SQL Injection vào website
3.11 Tự động hóa phân tích và Phản ứng sự cố bảo mật với Intelligent SOC
Automating security incident analysis and response with Intelligent SOC
3.12 Tích hợp Wireguard VPN và Giám sát DNS Sinkhole để Quản lý truy cập
Integrating Wireguard VPN and DNS Sinkhole Monitoring for Access Management
3.13 Tích hợp Intelligent SOC trên Azure và Phân tích sự cố qua OpenAI
Integrating Intelligent SOC and Incident Analysis via OpenAI
3.14 Tạo bẫy Honeypot tích hợp Netmiko tự động khoá Port tấn công
Deploy a Netmiko-integrated Honeypot automatically blocking attack ports
3.15 Ứng dụng A.I Agent trong tự động hóa phòng thủ hệ thống
Detect attacks, Trace malicious IPs, Alert via Telegram, and Auto-block hackers in real time
3.16 Phục hồi sau sự cố & Tích hợp cơ chế Zero Trust cùng Llama 3 A.I
Disaster Recovery & Zero Trust Mechanism Integration with Llama 3 A.I.
CHƯƠNG 4: ĐỀ XUẤT GIẢI PHÁP
4.1 Xác thực đa yếu tố & Khóa tài khoản (Brute-force AD) 
•	Cấu hình Group Policy Object (GPO): Thiết lập Account Lockout Threshold trên Windows Server 2022 để khóa tài khoản (ví dụ: sau 5 lần nhập sai) và quy định thời gian khóa qua Account Lockout Duration nhằm chặn đứng các cuộc tấn công Brute-force ồ ạt. 
•	Triển khai MFA: Bắt buộc áp dụng Xác thực đa yếu tố cho các tài khoản đặc quyền (Admin/Service Account). 
•	Giám sát chống dò rỉ rả (Low and Slow): Để khắc phục hạn chế của GPO (tin tặc có thể dò dưới 5 lần/ngày để né luật khóa), hệ thống sử dụng Splunk truy vấn tương quan Event ID 4625 (Logon Failure) và 4740 (Account Locked). Cấu hình Splunk đếm tổng số lần đăng nhập sai trải dài qua nhiều giờ hoặc từ nhiều IP, đảm bảo phát hiện mọi nỗ lực dò mật khẩu tinh vi. 
4.2 Firewall & WAF bảo vệ Cloud (Footprinting/Scanning/SSRF) 
•	Kiểm soát bề mặt mạng (Firewall): Cấu hình Fortinet và Azure NSG với nguyên tắc "Deny All" mặc định. Chỉ cho phép mở cổng 80/443 ra Internet; các cổng quản trị như 3389/22 bị chặn hoàn toàn và chỉ cho phép truy cập từ dải IP VPN nội bộ. 
•	Ngăn chặn SSRF từ gốc (IMDSv2): Kích hoạt Azure WAF ở chế độ Prevention Mode, cấu hình Custom Rules chặn các truy vấn hướng tới dải IP Metadata của Azure (169.254.169.254). Quan trọng hơn, hệ thống vô hiệu hóa IMDSv1 (dễ bị khai thác qua HTTP GET đơn giản) và chuyển sang IMDSv2. Giao thức này yêu cầu phương thức HTTP PUT kèm Header đặc biệt (Metadata: true), khiến tin tặc gần như không thể giả mạo yêu cầu đánh cắp Token thông qua lỗ hổng SSRF trên Web. 
4.3 Phòng chống SQL Injection & Sqlmap 
•	Phòng thủ vòng ngoài (Web Application Firewall): Triển khai Azure WAF kết hợp bộ luật OWASP Core Rule Set (CRS) để tự động nhận diện và chặn các dấu hiệu tấn công đặc trưng của công cụ Sqlmap (như UNION SELECT, SLEEP() hoặc User-Agent bất thường). 
•	Giải quyết cốt lõi tại Backend (Prepared Statements): Do WAF có nguy cơ bị vượt qua (Bypass) bằng các kỹ thuật mã hóa (URL/Hex Encoding), hệ thống áp dụng Prepared Statements (Tham số hóa câu lệnh) trong thư viện mysql2 của Node.js. Kỹ thuật này tách biệt hoàn toàn "cấu trúc lệnh SQL" khỏi "dữ liệu đầu vào", khiến mọi payload độc hại bị ép hiểu như một chuỗi văn bản vô hại. 
4.4 Giám sát tập trung & Cảnh báo (Splunk) 
•	Gom log thời gian thực: Cài đặt Splunk Universal Forwarder trên toàn bộ máy chủ Web và AD để đẩy log về máy chủ giám sát trung tâm. 
•	Tự động hóa SOAR có kiểm soát (Human-in-the-loop): Splunk được thiết lập Alert Action kích hoạt script Python gọi Telegram API để cảnh báo. Để tránh rủi ro hệ thống tự động nhận diện nhầm (False Positive) và cắt mạng máy chủ quan trọng, giải pháp SOAR (n8n) được tích hợp danh sách trắng (White-list) cho MAC/IP quản trị. Mọi hành động cô lập vật lý qua Netmiko đều được đẩy về Telegram để Blue Team xác nhận trước khi thực thi. 
4.5 Ngăn chặn nghe lén (MITM) 
•	Bảo vệ toàn vẹn truyền tải (Layer 7): Cấu hình tiêu chuẩn SSL/TLS (HTTPS) cho toàn bộ Website Shangri-la và Database nội bộ để mã hóa dữ liệu, chống đọc lén cleartext. 
•	Chống giả mạo gói tin (Layer 2): Kích hoạt Dynamic ARP Inspection (DAI) và DHCP Snooping trên thiết bị Switch Cisco. Cơ chế DAI sẽ đối chiếu mọi gói tin ARP với cơ sở dữ liệu cấp phát (DHCP Snooping Binding Database). Khi Ettercap tung gói tin giả mạo chứa cặp MAC-IP sai lệch với dữ liệu ban đầu, Switch lập tức tự động loại bỏ (Drop), chặn đứng hoàn toàn kỹ thuật ARP Spoofing. 
4.6 Kiểm soát kết nối & Toàn vẹn dữ liệu (Reverse Shell/Data Integrity) 
•	Lọc luồng đi (Egress Filtering) & DPI: Cấu hình Firewall áp dụng Egress Filtering để chặn các cổng kết nối ngược phổ biến (ví dụ: cổng 4444), chỉ mở các luồng ra hợp lệ (ví dụ: cổng 443 để update). Nếu tin tặc cố tình thiết lập Reverse Shell qua cổng 443 để ngụy trang, tính năng Deep Packet Inspection (DPI) trên NGFW sẽ phân tích cấu trúc gói tin (nhận diện đặc tính Command Line thay vì Web) để cắt đứt kết nối. 
•	Input Validation: Backend kiểm tra và làm sạch chặt chẽ mọi dữ liệu người dùng nhập vào, ngăn chặn hành vi sử dụng Burp Suite để can thiệp, thay đổi giá trị đơn hàng hoặc giá sản phẩm. 
4.0	Bảo vệ tài khoản dịch vụ (Kerberoasting) 
•	Nâng cấp độ phức tạp và mã hóa: Yêu cầu mật khẩu siêu mạnh (> 25 ký tự) cho các tài khoản SPN (Service Principal Name). Đồng thời, hệ thống vô hiệu hóa chuẩn mã hóa RC4 lỗi thời, chuyển sang mã hóa Kerberos AES-256, khiến thời gian bẻ khóa ngoại tuyến (Offline Cracking) bằng Hashcat tốn tài nguyên và thời gian không tưởng. 
•	Giám sát yêu cầu nội tuyến: Tuy không thể ngăn tin tặc crack mã băm tại máy cá nhân, hệ thống theo dõi sát sao bước gom mã băm nội tuyến bằng cách dùng Splunk truy vết Event ID 4769. Việc xuất hiện lượng lớn TGS Request bất thường trong thời gian ngắn sẽ ngay lập tức kích hoạt cô lập hệ thống.
4.1	Giới hạn tốc độ truy cập (DDoS Slowloris) 
•	Cấu hình Nginx chống cạn kiệt tài nguyên: Khác với DDoS tràn băng thông, Slowloris duy trì hàng ngàn kết nối ảo để làm cạn kiệt Pool Connection. Server Nginx được cấu hình module limit_conn và limit_req để giới hạn số kết nối từ một IP. Các thông số Timeout được tinh chỉnh cực ngắn nhằm chủ động ngắt (Drop) các phiên kết nối cố tình câu giờ. 
•	Giảm tải ứng dụng Layer 7: Kết hợp Azure Front Door để tự động nhận diện, hấp thụ lưu lượng và ngắt các luồng kết nối không hoàn thành hoặc kéo dài bất thường từ Internet. 
4.2	Email Security & Least Privilege 
•	Bộ ba xác thực Email chống Phishing: Triển khai đồng thời cơ chế SPF (kiểm tra IP nguồn), DKIM (ký điện tử chống thay đổi nội dung) và DMARC (chính sách cách ly/từ chối khi trượt xác thực) cho Mail Server. Sự kết hợp này triệt tiêu hoàn toàn các kỹ thuật giả mạo tên miền Shangri-la gửi email lừa đảo cho nhân viên. 
•	Nguyên tắc Đặc quyền tối thiểu (RBAC): Áp dụng Role-Based Access Control khắt khe. Các tài khoản (như kế toán) chỉ được cấp quyền xem đơn hàng, tuyệt đối không có quyền xóa sản phẩm hoặc thao tác trực tiếp với Database, thu hẹp tối đa bán kính thiệt hại (Blast Radius) nếu một tài khoản bị lộ. 
4.3	Phục hồi dữ liệu sạch (Recovery) 
•	Quy tắc sao lưu 3-2-1: Duy trì 1 bản backup trên Cloud Azure, 1 bản tại máy chủ Backup nội bộ và 1 bản lưu trữ ngoại tuyến (Offline) ngắt hoàn toàn kết nối mạng. 
•	Quy trình Air-Gapped Sandboxing: Khi xảy ra sự cố, toàn bộ dữ liệu dự phòng phải được bung ra môi trường cách ly (Phòng sạch - Sandbox). Phân vùng này cô lập vật lý và logic, không có định tuyến (Routing) ngược về mạng vận hành (Production). Tại đây, quy trình quét mã độc nằm vùng bằng công cụ Forensic được thực hiện ngoại tuyến, đảm bảo dữ liệu "Sạch" 100% trước khi cấp phép khôi phục dịch vụ. 

CHƯƠNG 5: ĐIỀU TRA SỐ
Quá trình điều tra số tại Shangri-la đóng vai trò then chốt trong việc truy vết sự cố, đánh giá thiệt hại và cung cấp bằng chứng kỹ thuật sau các đợt kiểm thử xâm nhập (Pentest) hoặc khi đối mặt với các rủi ro thực tế.
5.0	Quy trình và Nguyên tắc Điều tra số
Để đảm bảo tính toàn vẹn và giá trị pháp lý của các bằng chứng thu thập được trên cả hạ tầng On-premise và Azure Cloud, đội ngũ Blue Team tuân thủ quy trình 4 bước chuẩn:
1.	Thu thập: Trích xuất Dữ liệu thô (RAM dump, Disk image, PCAP, Azure Logs) với mức độ xâm lấn tối thiểu. Ưu tiên thu thập theo thứ tự dữ liệu dễ bay hơi (Order of Volatility).
2.	Khảo sát: Trích xuất và lập chỉ mục dữ liệu thô thành các định dạng có thể phân tích.
3.	Phân tích: Ghép nối các sự kiện, dựng lại Timeline tấn công để tìm ra nguyên nhân gốc rễ dựa trên các kịch bản đã bị Red Team khai thác.
4.	Báo cáo: Lập biên bản điều tra (Incident Report) đính kèm bằng chứng (Evidence) rõ ràng.
5.1	Bộ công cụ Điều tra chuyên dụng (Forensic Toolset)
Hệ thống phòng thủ của Shangri-la sử dụng sự kết hợp giữa các công cụ mã nguồn mở và nền tảng giám sát doanh nghiệp:
-	Công cụ Thu thập:
•	FTK Imager: Dùng để chụp lại toàn bộ bộ nhớ RAM (Memory Dump) hoặc tạo bản sao ổ cứng (Disk Image) của máy chủ Windows Server 2022 / Ubuntu Linux ngay khi phát hiện sự cố mà không làm thay đổi hiện trường.
•	Phân tích Bộ nhớ & Ổ đĩa (Memory & OS Forensics):
o	Volatility: "Vũ khí hạng nặng" phân tích file memory dump từ FTK Imager để tìm các tiến trình (process) độc hại chạy ngầm (Fileless malware) hoặc các kết nối Reverse Shell bị giấu đi.
o	Autopsy: Phân tích Disk Image, khôi phục các tệp tin mã độc (như shell.php) mà hacker đã xóa để phi tang bằng chứng, rà soát lịch sử thay đổi file hệ thống.
•	Phân tích Log & Sự kiện (Log Analysis):
o	Splunk Enterprise & Sysmon: Sysmon ghi lại chi tiết từng lệnh command line, ID tiến trình và đẩy về Splunk. Rất hữu ích để điều tra các vụ Kerberoasting hoặc Brute-force trên Domain Controller.
o	Azure Monitor & Log Analytics (KQL): Sử dụng Kusto Query Language để săn tìm dấu vết tấn công trên môi trường Cloud (SSRF, dò IP bất thường).
•	Phân tích Mạng (Network Forensics):
o	Wireshark: Trích xuất và phân tích các file PCAP để tìm gói tin HTTP chứa thông tin đăng nhập bị đọc lén (khi bị MITM/ARP Spoofing).
o	Brim Security / Zeek: Xử lý các file PCAP dung lượng lớn, lọc nhanh các luồng traffic độc hại.
•	Phân tích Payload & Tệp tin:
o	ExifTool & Binwalk: Kiểm tra metadata và trích xuất các mã độc bị nhúng ẩn (Steganography) bên trong tệp tin hình ảnh tải lên website.
 
5.2	Thực thi Điều tra số theo Kịch bản tấn công (Forensic Scenarios)
Dựa trên các kịch bản kiểm thử của hệ thống Shangri-la, quá trình điều tra số được phân chia thành 4 mảng chính:
5.2.1	Web & Database Forensics (Ứng dụng Node.js/React & MariaDB)
•	Tình huống: Website bị khai thác lỗ hổng SQL Injection (tự động bằng Sqlmap), Upload mã độc, hoặc thiết lập Reverse Shell.
•	Hành động điều tra:
o	Phân tích Log (Splunk & Azure WAF): Rà soát log Nginx và WAF để tìm các payload đặc trưng như UNION SELECT, OR '1'='1 hoặc các tham số --dump từ Sqlmap.
o	Phân tích Payload (ExifTool/Binwalk): Thu thập các file ảnh/tài liệu đáng ngờ trên thư mục upload của Web Server. Phân tích để tìm mã thực thi PHP/Node.js bị chèn giấu.
o	Phân tích RAM (Volatility): Nếu phát hiện dấu hiệu chiếm quyền, dump RAM của Web Server để tìm các kết nối outbound đáng ngờ (cổng 4444) trỏ về IP của máy Kali Linux (Attacker).
o	Khôi phục hiện trường (Autopsy): Trích xuất Disk Image của Web Server để quét thư mục webroot, tìm lại các web shell đã bị hacker tự động xóa.
5.2.2	Identity & OS Forensics (Máy chủ Domain Controller - Windows Server 2022)
•	Tình huống: Máy chủ quản lý miền bị Brute-force qua SMB hoặc tấn công Kerberoasting lấy cắp mật khẩu Service Account.
•	Hành động điều tra:
o	Truy vết Event Logs: Sử dụng Splunk truy vấn các Windows Event ID như 4625 (Đăng nhập thất bại nhiều lần - Brute force) và 4769 (Yêu cầu vé dịch vụ TGS bất thường - Kerberoasting).
o	Phân tích Sysmon: Đào sâu vào log Sysmon trên máy chủ DC để xem hacker có thực thi các lệnh powershell, sử dụng công cụ Impacket hay cố gắng leo thang đặc quyền (Privilege Escalation) hay không.
o	Bảo lưu bằng chứng: Trích xuất các log xung đột xác thực và danh sách tài khoản bị khóa làm biên bản báo cáo rủi ro cho phòng IT.
5.2.3	Cloud Forensics (Microsoft Azure & Hybrid Cloud)
•	Tình huống: Bị khai thác SSRF để truy xuất Metadata trái phép hoặc bị tấn công từ chối dịch vụ (DDoS Slowloris) làm cạn kiệt tài nguyên.
•	Hành động điều tra:
o	Truy vấn KQL (Kusto Query Language): Phân tích Azure Log Analytics để tìm các nỗ lực truy cập bất thường vào dải IP nội bộ dành riêng của Azure (169.254.169.254).
o	Phân tích lưu lượng: Xác định các địa chỉ IP mở hàng ngàn kết nối HTTP mà không hoàn thành (đặc trưng của Slowloris), trích xuất biểu đồ biến động CPU và số lượng kết nối để đánh giá mức độ thiệt hại.
5.2.4	Network & Mail Forensics (Mạng nội bộ và Email lừa đảo)
•	Tình huống: Mạng LAN bị nghe lén (Man-in-the-Middle qua Ettercap) và nhân viên bị gửi Email Phishing.
•	Hành động điều tra:
o	Điều tra MITM (Wireshark/Brim): Thu thập các bản ghi PCAP tại Switch trung tâm. Tìm kiếm các xung đột địa chỉ MAC (MAC Conflict Logs) và các bản tin ARP giả mạo. Phân tích sâu để xem liệu có dữ liệu nhạy cảm nào bị truyền dưới dạng cleartext (HTTP, Telnet) không.
o	Điều tra Email: Thu thập thư điện tử nghi ngờ. Phân tích Header Email để tìm nguồn gốc giả mạo (Spoofed IP/Domain) và dùng các công cụ sandbox để phân tích mã độc chứa trong attachment gửi tới nhân viên.
CHƯƠNG 6: ĐÁNH GIÁ ĐỀ TÀI
6.0	Hiệu quả kỹ thuật theo từng phân vùng
Phân vùng	Tình trạng trước khi Pentest	Kết quả sau khi triển khai giải pháp
Quản trị hệ thống (AD/DC)	Dễ bị Brute-force mật khẩu và tấn công Kerberoasting chiếm quyền Admin.	Đã bật MFA bắt buộc, chính sách khóa tài khoản tự động và nâng cấp mã hóa lên AES-256.
Ứng dụng Web (Shangri-la)	Tồn tại lỗ hổng SQL Injection (thủ công & tự động), SSRF trên Azure, và lỗi phân quyền IDOR.	Triển khai WAF chặn payload độc hại, áp dụng Prepared Statements và kiểm tra quyền tại Backend (RBAC).
Hạ tầng mạng nội bộ	Dễ bị nghe lén dữ liệu (MITM) qua ARP Spoofing và bị chiếm quyền qua Reverse Shell.	Bật Dynamic ARP Inspection (DAI), mã hóa toàn bộ bằng HTTPS/TLS và cấu hình Egress Filtering chặn kết nối lạ ra ngoài.
Hạ tầng Cloud (Azure)	Thiếu giám sát nhật ký truy cập, dễ bị tấn công DDoS tầng ứng dụng.	Sử dụng KQL (Kusto Query Language) để săn tìm dấu vết tấn công và cấu hình Rate Limiting chặn đứng DDoS Slowloris.
6.1	Năng lực giám sát và Phản ứng sự cố (SOC)
Thay vì kiểm tra log thủ công, hệ thống hiện tại đã đạt được khả năng tự động hóa cao:
-	Giám sát tập trung: Sử dụng Splunk để theo dõi mọi hành vi đáng ngờ. Hệ thống sẽ tự động gửi cảnh báo qua Telegram nếu phát hiện một IP đăng nhập sai quá 20 lần.
-	Xử lý mã độc: Triển khai cơ chế No-Execute tại các thư mục tải lên và tự động đổi tên tệp tin để ngăn chặn thực thi script độc hại (Shell.php).
-	Phòng chống Phishing: Thiết lập bộ lọc cho Mail Server kết hợp đào tạo nhận thức giúp giảm thiểu nguy cơ lộ lọt tài khoản qua Email.
 
6.2	Bảo toàn dữ liệu và Phục hồi sau sự cố
Hệ thống sao lưu đã được chuẩn hóa để đảm bảo tính sẵn sàng cao nhất cho doanh nghiệp:
-	Quy tắc 3-2-1: Áp dụng nghiêm ngặt việc lưu trữ 3 bản sao trên 2 loại phương tiện khác nhau và 1 bản Offsite (Cloud Azure).
-	Cam kết chỉ số: Đã thực hiện kiểm thử phục hồi định kỳ, đảm bảo đạt mục tiêu RTO (Thời gian phục hồi) và RPO (Điểm phục hồi) theo yêu cầu kinh doanh.
________________________________________
6.3	Đánh giá tổng quát
6.3.1	Tổng quan
-	Đề tài đã hoàn thành đúng mục tiêu nghiên cứu và triển khai bảo mật cho hệ thống thương mại điện tử Shangri-la trong môi trường Hybrid Cloud. Nhóm đã không chỉ dừng lại ở việc kiểm thử các lỗ hổng web cơ bản mà còn mở rộng sang các kịch bản tấn công hạ tầng Active Directory (AD) và khai thác dịch vụ đám mây Azure.
6.3.2	Kết quả đạt được
-	Mô phỏng kịch bản tấn công thực tế: Nhóm đã thực hiện thành công các kỹ thuật từ mức độ thâm nhập ban đầu (Footprinting/Scanning với AI) đến khai thác chuyên sâu (SQL Injection, SSRF, Kerberoasting) và chiếm quyền điều khiển (Reverse Shell).
-	Bảo mật website Shangri-la toàn diện: Khắc phục triệt để các lỗi thuộc OWASP Top 10 như Broken Access Control (IDOR), SQL Injection và Data Integrity Failure (Upload mã độc) thông qua giải pháp WAF và chuẩn hóa mã nguồn.
-	Nâng cao năng lực giám sát (Blue Team): Ứng dụng Splunk và Azure Monitor (KQL) để thiết lập hệ thống cảnh báo tự động khi phát hiện dấu vết tấn công Brute-force hoặc quét mạng trái phép.
-	Chuẩn hóa quy trình dự phòng: Thiết lập chiến lược sao lưu dữ liệu theo quy tắc 3-2-1, đảm bảo các chỉ số RTO/RPO cho database và file server của hệ thống Shangri-la.
6.3.3	Kiến thức và Kỹ năng tiếp thu
-	Kiến thức chuyên sâu: Hiểu rõ cơ chế hoạt động của các giao thức bảo mật hiện đại (TLS/SSL, Kerberos AES-256) và cách thức vận hành của một trung tâm điều hành an ninh (SOC).
-	Công cụ: Thành thạo các bộ công cụ "hạng nặng" trong ngành như Burp Suite, Metasploit, Sqlmap, Hydra, Ettercap và các ngôn ngữ truy vấn chuyên dụng như KQL.
-	Tư duy phản biện: Khả năng phân tích dấu vết kỹ thuật số (Forensics) từ nhật ký hệ thống (Event Logs) để truy tìm nguồn gốc cuộc tấn công.
________________________________________
6.3.4	Ưu điểm
-	Tính thực tiễn cao: Các kịch bản tấn công được xây dựng dựa trên những nguy cơ thực tế nhất hiện nay như lừa đảo qua Email (Phishing) hay khai thác lỗi logic trong phân quyền người dùng.
-	Tích hợp công nghệ tiên tiến: Việc đưa trí tuệ nhân tạo (AI) vào giai đoạn thu thập thông tin và quét lỗ hổng giúp tăng tốc độ triển khai dự án đáng kể.
-	Bằng chứng thuyết phục: Mỗi kịch bản đều có sự đối chiếu rõ ràng giữa hành động tấn công của Hacker và phản ứng phòng thủ của quản trị viên hệ thống .
6.3.5	Nhược điểm
-	Rào cản về tài chính: Một số giải pháp như SIEM Splunk hay hệ thống Azure WAF chuyên dụng đòi hỏi kinh phí duy trì lớn, có thể gây khó khăn cho các doanh nghiệp quy mô nhỏ.
-	Độ phức tạp kỹ thuật: Việc vận hành và viết các luật truy vấn KQL/Splunk đòi hỏi đội ngũ nhân sự phải được đào tạo bài bản và liên tục cập nhật kiến thức.
CHƯƠNG 7: ĐỊNH HƯỚNG PHÁT TRIỂN
7.1. Nâng cấp Hệ thống Giám sát và Phản ứng (Từ SIEM lên SOAR & XDR)
Hệ thống giám sát hiện tại đã cấu hình tốt việc thu thập log tập trung và cảnh báo chủ động, nhưng vẫn cần sự can thiệp thủ công của con người khi có sự cố. Định hướng tiếp theo sẽ tập trung vào tự động hóa và mở rộng kiến trúc giám sát:
•	Tự động hóa phản ứng bằng SOAR (Security Orchestration, Automation, and Response): Nâng cấp các script Python và hệ thống Splunk hiện tại lên mô hình SOAR. Khi phát hiện hành vi tấn công (ví dụ: SQL Injection hoặc Brute-force), hệ thống sẽ tự động kích hoạt các kịch bản phản ứng (Playbooks) như: tự động cấu hình Firewall để chặn IP của kẻ tấn công, cô lập tài khoản bị nghi ngờ mà không cần chờ quản trị viên phê duyệt thủ công.
•	Tích hợp giải pháp giám sát xâm nhập máy chủ (HIDS/XDR): Bên cạnh việc thu thập log từ thiết bị ngoại vi như Firewall và Nginx, hệ thống sẽ tích hợp thêm các giải pháp phát hiện xâm nhập chuyên dụng trên host (HIDS). Giải pháp này sẽ giám sát sâu vào tính toàn vẹn của file cấu hình, kiểm tra Registry trên Windows Server 2022 và các tiến trình chạy ngầm trên Linux Web Server, tạo nên một hệ sinh thái SOC (Security Operations Center) toàn diện từ tầng mạng đến tầng lõi máy chủ.
7.2. Hiện thực hóa Kiến trúc An ninh Không tin cậy (Zero Trust Architecture)
Hạ tầng hiện tại vẫn đang phụ thuộc nhiều vào ranh giới mạng truyền thống (bảo vệ bằng VLAN và chính sách cấu hình Port trên Firewall). Để tối ưu bảo mật, hệ thống cần chuyển sang mô hình Zero Trust với nguyên tắc cốt lõi: "Không bao giờ tin tưởng, luôn luôn xác minh".
•	Kiểm soát điểm cuối toàn diện (EDR - Endpoint Detection and Response): Máy trạm của nhân viên là điểm đầu vào ưa thích và dễ bị khai thác nhất của tin tặc. Định hướng sẽ triển khai các giải pháp EDR trực tiếp trên từng máy trạm nhằm giám sát chặt chẽ vòng đời và hành vi của các tiến trình (process execution), ngăn chặn mã độc thực thi ngay tại thiết bị của người dùng trước khi chúng kịp lan rộng vào mạng nội bộ.
•	Áp dụng Xác thực đa yếu tố (MFA) và Quản lý đặc quyền (PAM): Bắt buộc triển khai cấu hình MFA cho toàn bộ tài khoản trên Active Directory và các tài khoản quản trị viên tối cao trên nền tảng đám mây Azure. Giải pháp này kết hợp với việc siết chặt quyền truy cập đặc quyền sẽ bẻ gãy hoàn toàn các kịch bản tấn công chiếm quyền tinh vi như Kerberoasting hay dò quét mật khẩu diện rộng (Brute-force).
7.3. Tích hợp Bảo mật vào Vòng đời Phát triển Phần mềm (DevSecOps)
Ứng dụng Web Shangri-la (phát triển trên nền tảng Node.js/React và MariaDB) cần được bảo vệ ngay từ những dòng mã đầu tiên thay vì chỉ dựa vào việc kiểm thử, rà quét lỗ hổng bằng Burp Suite hay SQLmap sau khi sản phẩm đã hoàn thiện (giai đoạn muộn).
•	Kiểm thử an ninh tĩnh (SAST - Static Application Security Testing): Tích hợp các công cụ tự động quét và phân tích mã nguồn nguồn tĩnh trực tiếp vào quy trình CI/CD. Công cụ sẽ phát hiện sớm các lỗi lập trình nguy hiểm trong code React và Node.js (như thiếu kiểm tra dữ liệu đầu vào, dùng thư viện lỗi thời) ngay khi lập trình viên vừa đẩy mã nguồn lên hệ thống quản lý phiên bản.
•	Kiểm thử an ninh động (DAST - Dynamic Application Security Testing): Cấu hình tự động rà quét và giả lập tấn công vào ứng dụng đang chạy trong môi trường thử nghiệm (Staging) trước khi cho phép đóng gói và triển khai chính thức lên dịch vụ Azure Application Service, đảm bảo không có lỗ hổng nghiêm trọng nào bị lọt ra môi trường thực tế.
7.4. Ứng dụng Trí tuệ Nhân tạo và Học máy cho Blue Team
Khi các nhóm tấn công (Red Team) đã bắt đầu ứng dụng sức mạnh của AI (như sử dụng các công cụ dạng ShellGPT) để tối ưu hóa quá trình rà quét và tự động hóa các kịch bản khai thác lỗ hổng, đội phòng thủ Blue Team bắt buộc phải nâng cấp vũ khí tương xứng.
•	Phân tích hành vi người dùng và thực thể (UEBA - User and Entity Behavior Analytics): Tích hợp các mô hình Học máy (Machine Learning) vào nền tảng giám sát log Splunk.
•	Cơ chế hoạt động thông minh: Thay vì chỉ dựa vào các tập luật tĩnh, xơ cứng (ví dụ: chỉ cảnh báo khi phát hiện một IP nhập sai mật khẩu quá 20 lần), hệ thống AI sẽ tự học "Baseline" – tức là nhịp độ và hành vi hoạt động bình thường của từng người dùng và máy chủ trong hệ thống. Từ đó, AI có khả năng phát hiện các bất thường cực kỳ nhỏ và lén lút, chẳng hạn như hành vi âm thầm trích xuất dữ liệu ngầm (Data Exfiltration) diễn ra với tần suất thấp trong thời gian dài để kịp thời ngăn chặn.
7.5. Kế hoạch Phục hồi sau Thảm họa (Disaster Recovery & Business Continuity)
Hạ tầng hiện tại đã có các giải pháp sẵn sàng cao và chống thắt nút cổ chai rất tốt (sử dụng giao thức HSRP cho hệ thống Switch nội bộ và tính năng Auto-scale tự động co giãn trên đám mây Azure). Tuy nhiên, để đảm bảo tính sống còn của doanh nghiệp, chiến lược sao lưu cần được nâng cấp toàn diện:
•	Xây dựng chính sách sao lưu định kỳ nghiêm ngặt: Áp dụng cho các thành phần cốt lõi bao gồm Cơ sở dữ liệu MariaDB (chứa toàn bộ thông tin giao dịch, khách hàng) và máy chủ Domain Controller (quản lý định danh toàn hệ thống).
•	Triển khai Lưu trữ ngoại tuyến (Offline/Offsite Backup): Các bản sao lưu phải được lưu trữ biệt lập hoàn toàn với mạng sản xuất hoặc lưu ở một phân vùng đám mây có tính năng bất biến (Immutable Storage). Cơ chế này đảm bảo tính toàn vẹn tuyệt đối cho dữ liệu trong kịch bản tồi tệ nhất: toàn bộ máy chủ đang hoạt động bị tấn công và mã hóa hàng loạt bởi Ransomware (mã độc tống tiền), giúp doanh nghiệp có thể nhanh chóng khôi phục hệ thống sạch và đưa hoạt động kinh doanh trở lại bình thường trong thời gian ngắn nhất.
