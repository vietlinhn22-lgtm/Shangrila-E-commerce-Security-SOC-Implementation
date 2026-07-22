# 🛡️ Shangri-la Cyber Shield: Enterprise Security & SOC Implementation

![Azure](https://img.shields.io/badge/Microsoft_Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)
![Splunk](https://img.shields.io/badge/Splunk-000000?style=for-the-badge&logo=splunk&logoColor=white)
![Windows Server](https://img.shields.io/badge/Windows_Server-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)

## 📌 Project Overview
**Shangri-la Cyber Shield** is a comprehensive cybersecurity and monitoring project tailored for a modern e-commerce platform built on Node.js and Azure VM. 

Moving beyond passive security layers, this project establishes a robust defense ecosystem based on the **Red Team vs. Blue Team** operational model[cite: 6]. It encompasses threat simulation, automated incident response via SOAR and AI Agents, and rigorous Digital Forensics, aiming to achieve a Zero Trust architecture[cite: 6].

## 🏗️ Hybrid Cloud Architecture
The infrastructure operates on a Hybrid IT model combining Microsoft Azure Cloud and On-premise networks, segmented into specialized zones[cite: 6]:
*   **Azure Cloud Zone:** Hosts the public-facing e-commerce Web App, protected by Azure WAF, Application Gateway, and Azure MariaDB[cite: 6].
*   **DMZ Zone:** Serves as the internal perimeter, hosting the Linux WebServer and Splunk Forwarders[cite: 6].
*   **FARM ZONE (Core):** Houses critical assets including the Active Directory Domain Controller, Member Domains, Mail Server, and Offline Backup storage[cite: 6].
*   **SIEM/SOC Zone:** The central monitoring and response hub utilizing Splunk Enterprise, n8n (SOAR), and AI Agents for real-time alerting and automated isolation[cite: 6].

## ✨ Key Security Implementations (Blue Team)

### 1. Cloud & Web Application Security
*   **SSRF Mitigation:** Prevented Server-Side Request Forgery by configuring Azure WAF to block access to the Azure Metadata IP (`169.254.169.254`) and upgrading to IMDSv2[cite: 6].
*   **SQL Injection Prevention:** Deployed Azure WAF with OWASP Core Rule Set (CRS) and implemented Prepared Statements in the Node.js backend to neutralize malicious SQL payloads[cite: 6].
*   **DDoS Protection (Slowloris):** Configured Nginx rate limiting (`limit_conn`, `limit_req`) and short timeouts, combined with Azure Front Door, to drop incomplete connections and prevent resource exhaustion[cite: 6].

### 2. Identity & Internal Network Security
*   **Active Directory Defense:** Thwarted Brute-force and Kerberoasting attacks by enforcing MFA, strict Account Lockout Group Policies (GPO), and upgrading to AES-256 Kerberos encryption[cite: 6].
*   **MITM Prevention:** Neutralized ARP Spoofing attacks (e.g., via Ettercap) by enabling Dynamic ARP Inspection (DAI) and DHCP Snooping on Cisco Switches, alongside HTTPS/TLS encryption[cite: 6].
*   **Reverse Shell Blocking:** Applied Egress Filtering and Deep Packet Inspection (DPI) on firewalls to block outbound connections to suspicious ports, effectively stopping remote takeovers[cite: 6].

### 3. Intelligent SOC & Automated Response (SOAR)
*   **Centralized SIEM:** Utilized Splunk Enterprise to aggregate real-time logs from Firewalls, Web Servers, and Active Directory via Universal Forwarders[cite: 6].
*   **Honeypot & SOAR Automation:** Deployed OpenCanary as a honeypot. Upon intrusion detection, Splunk triggers a Python script via n8n (SOAR) using the Netmiko library to automatically shutdown the compromised Cisco switch port[cite: 6].
*   **AI Agent Integration:** Integrated ShellGPT and Llama 3 AI to analyze raw logs, extract attacker IPs, and push real-time actionable alerts to the Blue Team via Telegram bots[cite: 6].

### 4. Zero Trust Disaster Recovery
*   **Air-Gapped Sandbox Analysis:** In the event of database corruption or malware infection, backups are restored into an isolated Sandbox[cite: 6].
*   **AI-Powered Verification:** Llama 3 AI is used to scan offline payloads (e.g., Web Shells) for malware before clean data is restored to the production environment via SCP/SSH[cite: 6].

## 🔎 Digital Forensics
To investigate simulated breaches, a strict 4-step forensic process (Collect, Examine, Analyze, Report) was followed using specialized tools[cite: 6]:
*   **Memory & OS Forensics:** Utilized **FTK Imager** for RAM/Disk dumping and **Volatility** to uncover fileless malware and hidden processes[cite: 6].
*   **Log & Cloud Forensics:** Used Kusto Query Language (KQL) in Azure Log Analytics and Splunk to trace SSRF attempts and AD authentication failures (Event IDs 4625, 4769)[cite: 6].
*   **Network & Payload Forensics:** Analyzed PCAP files using **Wireshark** to investigate MITM attacks, and applied **ExifTool/Binwalk** to extract hidden malware in uploaded files[cite: 6].

## 🛠️ Technology Stack
*   **Cloud & Infrastructure:** Microsoft Azure (WAF, NSG, Front Door), Cisco IOS, Windows Server 2022, Ubuntu Linux[cite: 6].
*   **Security & SOC:** Splunk Enterprise, n8n (SOAR), Fortinet Firewall, OpenCanary, Netmiko[cite: 6].
*   **Forensics & Attack Tools:** Kali Linux, Sqlmap, Burp Suite, Hydra, Hashcat, FTK Imager, Volatility, Wireshark[cite: 6].
*   **AI & Automation:** ShellGPT, Llama 3, Telegram API, Python[cite: 6].

## 📸 System Showcases
*(Hãy tạo thư mục `images` trong repo GitHub và lưu các ảnh chụp màn hình từ tài liệu của bạn vào đây)*

### 1. Hybrid Cloud & SOC Topology
`![Architecture Diagram](./images/hybrid-cloud-topology.png)`

### 2. Automated Threat Isolation via Honeypot & Netmiko
`![SOAR Workflow](./images/honeypot-soar.png)`

### 3. Splunk SIEM Monitoring Dashboard
`![Splunk Monitoring](./images/splunk-dashboard.png)`

## 👨‍💻 Team 8 (Authors)
*   **Quách Thành Tân** (JK-ENR-HA-11618)[cite: 6]
*   **Nguyễn Việt Linh** (JK-ENR-HA-11617)[cite: 6]
*   **Trần Quốc Huy** (JK-ENR-HA-11617)[cite: 6]

*Developed as the Semester IV Design Document Project at FPT Jetking International Training Institute.*[cite: 6]
