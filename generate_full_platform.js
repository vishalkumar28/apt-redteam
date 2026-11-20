const fs = require('fs');

console.log('Building generate_full_platform.js with complete resources...');

const phases = JSON.parse(fs.readFileSync('data_modules.json', 'utf8'));

const courses = [
  { provider: "Hackers-Arise", name: "Getting Started Becoming a Master Hacker", modules: "Module 01", domain: "Foundation", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Network Basics for Hackers", modules: "Module 02", domain: "Networking", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Nmap for Hackers", modules: "Modules 02, 22, 25", domain: "Network Discovery", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Linux Basics for Hackers", modules: "Module 03", domain: "Linux", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Linux Firewalls", modules: "Modules 03, 25", domain: "Linux Defense", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Advanced Linux for Hackers", modules: "Modules 03, 13, 26", domain: "Advanced Linux", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Infrastructure Basics for Hackers", modules: "Modules 02, 22, 25", domain: "Infrastructure", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Python Basics for Hackers", modules: "Module 05", domain: "Programming", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Advanced Python for Hackers", modules: "Module 05", domain: "Automation", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Scripting for Hackers", modules: "Modules 05–06", domain: "Automation", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "PowerShell for Hackers", modules: "Modules 04, 06, 12–13", domain: "Windows Automation", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Active Directory for Hackers", modules: "Modules 12, 13, 27", domain: "Enterprise Identity", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Cyber Threat Intelligence for Hackers", modules: "Modules 08–10", domain: "CTI", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "MITRE ATT&CK Framework for Security Analyst", modules: "Modules 08, 10, 13, 30", domain: "Threat Frameworks", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Ultimate OSINT Beginner", modules: "Module 09", domain: "OSINT", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Open Source Intelligence", modules: "Module 09", domain: "OSINT", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Remaining Anonymous", modules: "Module 09", domain: "OPSEC", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Phishing Analysis for Security Analyst", modules: "Module 11", domain: "Threat Analysis", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "The Science and Art of Social Engineering", modules: "Module 11", domain: "Social Engineering", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "The Art of Social Engineering in the Era of AI", modules: "Module 11", domain: "Social Engineering", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Digital Forensics", modules: "Module 17", domain: "DFIR", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Advanced Digital Forensics", modules: "Modules 17–18", domain: "DFIR", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Memory Forensics", modules: "Module 18", domain: "DFIR", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Network Forensics", modules: "Module 19", domain: "DFIR", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Reverse Engineering Malware Part I", modules: "Module 14", domain: "Malware Analysis", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Reverse Engineering Malware Part II", modules: "Modules 14–15", domain: "Reverse Engineering", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Reverse Engineering Malware Part III", modules: "Modules 14–15", domain: "Advanced Malware", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Splunk for Security Monitoring", modules: "Module 21", domain: "SIEM", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Incident Response", modules: "Module 20", domain: "DFIR", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Investigating a Cyber Attack", modules: "Modules 10, 17, 20", domain: "Investigation", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "x86 Assembler Language", modules: "Modules 07, 15", domain: "Low-Level", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Red Team Operator Part I", modules: "Module 30", domain: "Red Team", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Exploit Development Part I", modules: "Module 29", domain: "Exploit Research", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Exploit Development Part II", modules: "Module 29", domain: "Advanced Exploit Dev", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "CWE V2", modules: "Module 22", domain: "Vulnerability Assessment", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Web App Hacking", modules: "Module 23", domain: "Web Security", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Advanced Web App Hacking", modules: "Module 23", domain: "Web Security", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Hacking APIs", modules: "Module 24", domain: "API Security", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Bug Bounty Training", modules: "Module 23", domain: "Web Assessment", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Metasploit Basics for Hackers", modules: "Modules 22, 25", domain: "Offensive Tooling", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Advanced Metasploit", modules: "Modules 22, 25", domain: "Advanced Tooling", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Privilege Escalation", modules: "Module 26", domain: "Privilege Escalation", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Wireshark for Cybersecurity", modules: "Modules 02, 19", domain: "Packet Analysis", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Snort for Hackers", modules: "Modules 19, 21", domain: "Detection Engineering", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Honeypots and Honeynets", modules: "Module 21", domain: "Deception Tech", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Ransomware Training", modules: "Modules 14, 31", domain: "Malware Specialization", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Anti-Forensics", modules: "Module 17", domain: "Forensics", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "SOC Analyst Level 1", modules: "Modules 20–21", domain: "SOC Operations", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Mobile Hacking and Security", modules: "Module 33", domain: "Mobile Security", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Android Hacking", modules: "Module 33", domain: "Android Security", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Mobile Forensics", modules: "Module 33", domain: "Mobile DFIR", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Bluetooth Hacking", modules: "Module 33", domain: "Wireless Security", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "IoT Hacking", modules: "Module 33", domain: "IoT Security", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "SCADA/ICS/OT Hacking", modules: "Module 33", domain: "Industrial Control Systems", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Advanced SCADA", modules: "Module 33", domain: "OT Security", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Car Hacking", modules: "Module 33", domain: "Automotive Security", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Drone Hacking", modules: "Module 33", domain: "Hardware/RF", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Cryptography Basics for Hackers", modules: "Module 35", domain: "Cryptography", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Intermediate Cryptography", modules: "Module 35", domain: "Cryptography", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Preparing Your Network for the Post-Quantum World", modules: "Module 35", domain: "Post-Quantum Cryptography", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "CCSP+ Training", modules: "Module 28", domain: "Cloud Governance", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "CISSP Bootcamp", modules: "Module 36", domain: "Security Leadership", url: "https://www.hackers-arise.com/", free: false },
  { provider: "Hackers-Arise", name: "Security Awareness and Risk Management", modules: "Module 36", domain: "Governance & Risk", url: "https://www.hackers-arise.com/", free: false },
  { provider: "HTB Academy", name: "Information Security Foundations", modules: "Modules 01–04", domain: "Foundations", url: "https://academy.hackthebox.com/", free: false },
  { provider: "HTB Academy", name: "Networking Fundamentals", modules: "Module 02", domain: "Networking", url: "https://academy.hackthebox.com/", free: false },
  { provider: "HTB Academy", name: "Linux Fundamentals", modules: "Module 03", domain: "Linux", url: "https://academy.hackthebox.com/", free: false },
  { provider: "HTB Academy", name: "Windows Fundamentals", modules: "Module 04", domain: "Windows", url: "https://academy.hackthebox.com/", free: false },
  { provider: "HTB Academy", name: "Introduction to Python", modules: "Module 05", domain: "Programming", url: "https://academy.hackthebox.com/", free: false },
  { provider: "HTB Academy", name: "Penetration Tester Path (CPTS)", modules: "Modules 22–26", domain: "Penetration Testing", url: "https://academy.hackthebox.com/path/preview/penetration-tester", free: false },
  { provider: "HTB Academy", name: "Active Directory Penetration Tester", modules: "Modules 12, 27", domain: "Active Directory", url: "https://academy.hackthebox.com/path/preview/active-directory-penetration-tester", free: false },
  { provider: "HTB Academy", name: "Web Penetration Tester (CBBH)", modules: "Modules 23–24", domain: "Web Security", url: "https://academy.hackthebox.com/", free: false },
  { provider: "HTB Academy", name: "Linux Privilege Escalation", modules: "Module 26", domain: "Privilege Escalation", url: "https://academy.hackthebox.com/", free: false },
  { provider: "HTB Academy", name: "Windows Privilege Escalation", modules: "Module 26", domain: "Privilege Escalation", url: "https://academy.hackthebox.com/", free: false },
  { provider: "HTB Academy", name: "Certified Defensive Security Analyst (CDSA)", modules: "Modules 17–21", domain: "SOC & DFIR", url: "https://academy.hackthebox.com/", free: false },
  { provider: "HTB Academy", name: "Active Directory Evasion & Persistence", modules: "Module 30", domain: "Adversary Emulation", url: "https://academy.hackthebox.com/", free: false },
  { provider: "TryHackMe", name: "Pre Security Path", modules: "Modules 01–04", domain: "Foundations", url: "https://tryhackme.com/path/outline/presecurity", free: true },
  { provider: "TryHackMe", name: "Cyber Security 101", modules: "Modules 01–04", domain: "Foundations", url: "https://tryhackme.com/", free: true },
  { provider: "TryHackMe", name: "SOC Level 1 Path", modules: "Modules 20–21", domain: "SOC Operations", url: "https://tryhackme.com/path/outline/soclevel1", free: false },
  { provider: "TryHackMe", name: "Jr Penetration Tester Path", modules: "Modules 22–26", domain: "Penetration Testing", url: "https://tryhackme.com/path/outline/jrpenetrationtester", free: false },
  { provider: "TryHackMe", name: "Red Teaming Path", modules: "Modules 13, 30", domain: "Red Team", url: "https://tryhackme.com/path/outline/redteam", free: false },
  { provider: "PortSwigger", name: "Web Security Academy Learning Paths", modules: "Module 23", domain: "Web Security", url: "https://portswigger.net/web-security/learning-paths", free: true },
  { provider: "PortSwigger", name: "API Testing Learning Path", modules: "Module 24", domain: "API Security", url: "https://portswigger.net/web-security/learning-paths/api-testing", free: true },
  { provider: "CyberDefenders", name: "DFIR and SOC Investigation Challenges", modules: "Modules 17–21", domain: "DFIR Investigation", url: "https://cyberdefenders.org/", free: true },
  { provider: "OST2", name: "Architecture 1001 & x86-64 Foundations", modules: "Modules 01, 07, 15", domain: "Low-Level Foundations", url: "https://ost2.fyi/", free: true },
  { provider: "OST2", name: "Introductory Software Exploitation", modules: "Module 29", domain: "Exploit Research", url: "https://ost2.fyi/", free: true },
  { provider: "OffSec", name: "PEN-200 / OSCP+ Certification Course", modules: "Modules 22–26", domain: "Penetration Testing", url: "https://www.offsec.com/courses/pen-200/", free: false },
  { provider: "OffSec", name: "PEN-300 / OSEP Advanced Evasion", modules: "Module 30", domain: "Red Team Evasion", url: "https://www.offsec.com/courses/pen-300/", free: false },
  { provider: "OffSec", name: "WEB-300 / OSWE Advanced Web Attacks", modules: "Module 23", domain: "Advanced Web Security", url: "https://www.offsec.com/courses/web-300/", free: false },
  { provider: "OffSec", name: "EXP-301 / OSED Windows Exploit Development", modules: "Module 29", domain: "Exploit Development", url: "https://www.offsec.com/courses/exp-301/", free: false },
  { provider: "SANS", name: "FOR578: Cyber Threat Intelligence / GCTI", modules: "Modules 08–10", domain: "Threat Intelligence", url: "https://www.sans.org/cyber-security-courses/cyber-threat-intelligence/", free: false },
  { provider: "SANS", name: "SEC565: Red Team Operations & Adversary Emulation", modules: "Module 30", domain: "Red Team Operations", url: "https://www.sans.org/cyber-security-courses/red-team-operations-adversary-emulation/", free: false },
  { provider: "GIAC", name: "GCFA Certified Forensic Analyst", modules: "Modules 17–20", domain: "Host Forensics", url: "https://www.giac.org/certifications/certified-forensic-analyst-gcfa/", free: false },
  { provider: "GIAC", name: "GREM Reverse Engineering Malware", modules: "Modules 14–16", domain: "Malware Reverse Engineering", url: "https://www.giac.org/certifications/reverse-engineering-malware-grem/", free: false },
  { provider: "CRTP", name: "Certified Red Team Professional (Altered Security)", modules: "Modules 12, 27", domain: "Active Directory", url: "https://www.alteredsecurity.com/", free: false },
  { provider: "CRTE", name: "Certified Red Team Expert (Altered Security)", modules: "Module 27", domain: "Advanced Active Directory", url: "https://www.alteredsecurity.com/", free: false }
];

const starterPlan = [
  { period: "Days 1–3", task: "Computer architecture, CPU, registers, ALU and instruction cycle", deliverable: "Architecture diagram" },
  { period: "Days 4–6", task: "ISA, x86/x64, binary/hex, memory and cache", deliverable: "Instruction and memory notes" },
  { period: "Days 7–9", task: "Virtual memory, paging, stack and heap", deliverable: "Memory diagram" },
  { period: "Days 10–12", task: "Processes, threads, scheduling and context switching", deliverable: "Process lifecycle diagram" },
  { period: "Days 13–15", task: "Kernel, user mode, system calls and OS architecture", deliverable: "OS architecture notes" },
  { period: "Days 16–18", task: "Linux filesystem, users, permissions and processes", deliverable: "Linux practical log" },
  { period: "Days 19–21", task: "Windows processes, services, registry and security", deliverable: "Windows practical log" },
  { period: "Days 22–24", task: "Filesystems, permissions, handles and ACLs", deliverable: "Comparison report" },
  { period: "Days 25–27", task: "Sysinternals, Linux tracing and system logs", deliverable: "Evidence notebook" },
  { period: "Days 28–30", task: "Revision and practical assessment", deliverable: "Module 1 report" },
  { period: "Days 31–33", task: "OSI, TCP/IP, Ethernet and MAC", deliverable: "Network diagram" },
  { period: "Days 34–36", task: "IPv4, IPv6, subnetting and routing", deliverable: "Subnetting exercises" },
  { period: "Days 37–39", task: "TCP, UDP, ports and sockets", deliverable: "Packet analysis" },
  { period: "Days 40–42", task: "DNS and DHCP", deliverable: "DNS investigation" },
  { period: "Days 43–45", task: "HTTP and HTTPS", deliverable: "HTTP analysis" },
  { period: "Days 46–48", task: "TLS, certificates and proxies", deliverable: "TLS report" },
  { period: "Days 49–51", task: "SSH, SMB, LDAP and Kerberos concepts", deliverable: "Protocol notes" },
  { period: "Days 52–54", task: "Wireshark and PCAP analysis", deliverable: "Packet report" },
  { period: "Days 55–57", task: "Zeek and network logs", deliverable: "Network investigation" },
  { period: "Days 58–60", task: "Networking practical assessment", deliverable: "PCAP capstone" },
  { period: "Days 61–63", task: "Linux shell, filesystem and package management", deliverable: "Command notebook" },
  { period: "Days 64–66", task: "Users, groups, permissions and sudo", deliverable: "Permission lab" },
  { period: "Days 67–69", task: "Processes, services and systemd", deliverable: "Process report" },
  { period: "Days 70–72", task: "Linux logs, auditing and firewall", deliverable: "Log investigation" },
  { period: "Days 73–75", task: "Windows architecture and registry", deliverable: "Registry report" },
  { period: "Days 76–78", task: "Windows services, processes and permissions", deliverable: "Process investigation" },
  { period: "Days 79–81", task: "Event Logs and Sysmon", deliverable: "Event analysis" },
  { period: "Days 82–84", task: "PowerShell and Windows security", deliverable: "Script project" },
  { period: "Days 85–87", task: "Linux versus Windows security", deliverable: "Comparison report" },
  { period: "Days 88–90", task: "Complete foundation assessment", deliverable: "Foundation capstone" }
];

const capstones = [
  { id: "cap0", title: "APT Intelligence Research Capstone", desc: "Actor profile, source register, campaign timeline, ATT&CK mapping, infrastructure evidence, attribution confidence, detection recommendations and executive summary." },
  { id: "cap1", title: "Malware & DFIR Investigation Capstone", desc: "Safe training dataset, evidence inventory, hashes, static analysis, memory/network findings, timeline, YARA/Sigma detections and incident report." },
  { id: "cap2", title: "Enterprise Security Assessment Capstone", desc: "Authorised scope, asset inventory, methodology, validated findings, evidence, risk ratings, remediation and retest results." },
  { id: "cap3", title: "Threat-Informed Red/Purple Team Exercise Capstone", desc: "Fictional enterprise, threat brief, ATT&CK mapping, approved test plan, telemetry review, detection gaps, remediation and final report." }
];

const certs = [
  { id: "sec-plus", name: "CompTIA Security+", org: "CompTIA", domain: "Broad Security Foundations", stage: "Foundations", prereqs: "Basic networking & OS knowledge", skills: "Threats, attacks, architecture, identity, risk, cryptography", examFormat: "90 questions (multiple choice & PBQs), 90 mins", effort: "80–120 hours", url: "https://www.comptia.org/certifications/security" },
  { id: "cysa-plus", name: "CompTIA CySA+", org: "CompTIA", domain: "Defensive Security & SOC", stage: "Intermediate Defense", prereqs: "Security+ or equivalent knowledge", skills: "Threat detection, vulnerability management, security operations", examFormat: "85 questions, 165 mins", effort: "100–150 hours", url: "https://www.comptia.org/certifications/cybersecurity-analyst" },
  { id: "pentest-plus", name: "CompTIA PenTest+", org: "CompTIA", domain: "Penetration Testing", stage: "Intermediate Offensive", prereqs: "Network+, Security+", skills: "Scoping, vulnerability scanning, attacks, reporting", examFormat: "85 questions, 165 mins", effort: "100–140 hours", url: "https://www.comptia.org/certifications/pentest" },
  { id: "btl1", name: "Blue Team Level 1 (BTL1)", org: "Security Blue Team", domain: "Defensive Operations & DFIR", stage: "Practical Defense", prereqs: "Practical networking & OS fundamentals", skills: "Phishing analysis, threat intelligence, digital forensics, SIEM", examFormat: "24-hour practical incident response exam", effort: "120–180 hours", url: "https://www.securityblue.team/courses/blue-team-level-1" },
  { id: "htb-cpts", name: "HTB CPTS", org: "Hack The Box", domain: "Practical Penetration Testing", stage: "Professional Pentest", prereqs: "HTB Penetration Tester Path completion", skills: "Network, Active Directory, Web, Pivoting, Privilege Escalation, Professional Reporting", examFormat: "10-day practical lab (assessment + formal report)", effort: "250–350 hours", url: "https://academy.hackthebox.com/path/preview/penetration-tester" },
  { id: "htb-cbbh", name: "HTB CBBH", org: "Hack The Box", domain: "Web Security & Bug Bounty", stage: "Specialist Web", prereqs: "HTB Bug Bounty Hunter Path", skills: "OWASP Top 10, advanced web exploitation, logic bugs, web reporting", examFormat: "7-day practical web app assessment", effort: "200–280 hours", url: "https://academy.hackthebox.com/" },
  { id: "htb-cdsa", name: "HTB CDSA", org: "Hack The Box", domain: "Defensive Analysis & SOC", stage: "Professional Defense", prereqs: "HTB SOC Analyst Path", skills: "SIEM triage, event log forensics, network analysis, malware detection", examFormat: "4-day practical defense investigation & report", effort: "200–300 hours", url: "https://academy.hackthebox.com/" },
  { id: "crtp", name: "CRTP (Certified Red Team Professional)", org: "Altered Security", domain: "Active Directory Security", stage: "AD Offensive", prereqs: "Windows & PowerShell administration", skills: "Active Directory reconnaissance, Kerberoast, DCSync, Constrained Delegation, Lateral Movement", examFormat: "24-hour lab + 24-hour reporting window", effort: "80–120 hours", url: "https://www.alteredsecurity.com/" },
  { id: "crte", name: "CRTE (Certified Red Team Expert)", org: "Altered Security", domain: "Advanced Active Directory", stage: "Advanced AD", prereqs: "CRTP or extensive AD attack experience", skills: "Multi-forest trusts, ADCS abuse, SQL server links, LAPS, bypass defenses", examFormat: "48-hour practical lab + 48-hour reporting", effort: "120–180 hours", url: "https://www.alteredsecurity.com/" },
  { id: "oscp-plus", name: "OSCP+ / PEN-200", org: "OffSec", domain: "Penetration Testing", stage: "Professional Standard", prereqs: "Strong Linux/Windows CLI, scripting, networking", skills: "Network discovery, web exploitation, client attacks, privilege escalation, AD set", examFormat: "24-hour hands-on lab + 24-hour reporting", effort: "300–450 hours", url: "https://www.offsec.com/courses/pen-200/" },
  { id: "osep", name: "OSEP / PEN-300", org: "OffSec", domain: "Advanced Evasion & Red Team", stage: "Advanced Offensive", prereqs: "OSCP and C# / PowerShell proficiency", skills: "Antivirus evasion, process injection, application whitelisting bypass, AD delegation", examFormat: "48-hour practical lab + 24-hour reporting", effort: "250–350 hours", url: "https://www.offsec.com/courses/pen-300/" },
  { id: "oswe", name: "OSWE / WEB-300", org: "OffSec", domain: "Advanced Web Application Security", stage: "Advanced Web / Code Review", prereqs: "Web vulnerabilities, whitebox code review in Python/PHP/Java", skills: "Source code auditing, complex auth bypass, deserialization, blind SQLi chaining", examFormat: "48-hour whitebox practical + 24-hour reporting", effort: "250–350 hours", url: "https://www.offsec.com/courses/web-300/" },
  { id: "osed", name: "OSED / EXP-301", org: "OffSec", domain: "Windows Exploit Development", stage: "Low-Level Research", prereqs: "C, x86 assembly, reverse engineering, 32-bit exploitation", skills: "Custom shellcode, stack overflows, ROP chain creation, ASLR/DEP bypass", examFormat: "48-hour hands-on exploit dev + 24-hour reporting", effort: "300–400 hours", url: "https://www.offsec.com/courses/exp-301/" },
  { id: "gcia", name: "GIAC GCIA", org: "GIAC / SANS", domain: "Intrusion Analysis & Network Monitoring", stage: "Specialist Network", prereqs: "SANS SEC503 course recommended", skills: "Packet analysis, Snort/Suricata rules, Zeek, traffic anomalies", examFormat: "106 questions, 4 hours", effort: "150–220 hours", url: "https://www.giac.org/certifications/certified-intrusion-analyst-gcia/" },
  { id: "gcfa", name: "GIAC GCFA", org: "GIAC / SANS", domain: "Advanced Forensic Analysis & Incident Response", stage: "Specialist Forensics", prereqs: "SANS FOR508 course recommended", skills: "Enterprise incident response, memory forensics, timeline analysis, NTFS artifacts", examFormat: "82 questions, 3 hours", effort: "150–220 hours", url: "https://www.giac.org/certifications/certified-forensic-analyst-gcfa/" },
  { id: "grem", name: "GIAC GREM", org: "GIAC / SANS", domain: "Reverse Engineering Malware", stage: "Specialist Malware", prereqs: "SANS FOR610 course recommended", skills: "Static/dynamic malware analysis, Ghidra, x64dbg, unpacking, shellcode analysis", examFormat: "75 questions, 3 hours", effort: "150–220 hours", url: "https://www.giac.org/certifications/reverse-engineering-malware-grem/" },
  { id: "sec565", name: "SANS SEC565", org: "SANS", domain: "Red Team Operations & Adversary Emulation", stage: "Elite Red Team", prereqs: "Offensive assessment & Active Directory experience", skills: "Threat intelligence mapping, Red Team engagement lifecycle, command & control design, purple teaming", examFormat: "Course with capstone & hands-on ranges", effort: "180–250 hours", url: "https://www.sans.org/cyber-security-courses/red-team-operations-adversary-emulation/" }
];

const skills = [
  { id: "net", name: "Networking", domain: "Foundations", desc: "TCP/IP, routing, switching, packet inspection, TLS handshake, DNS, RFC standards" },
  { id: "linux", name: "Linux Internals", domain: "Foundations", desc: "Kernel vs user space, permissions, systemd, /proc, auditd, namespaces, cgroups, bash" },
  { id: "win", name: "Windows Internals", domain: "Foundations", desc: "Executive objects, handles, tokens, integrity levels, registry, PE structure, Event Logs" },
  { id: "py", name: "Python Automation", domain: "Programming", desc: "Automating research, parsing binary structures, socket programming, STIX/JSON pipelines" },
  { id: "cpp", name: "C / C++ & Assembly", domain: "Low-Level", desc: "Pointers, memory layout, x86/x64 calling conventions, disassembling binaries, GDB" },
  { id: "pwsh", name: "PowerShell & Automation", domain: "Programming", desc: "Object pipeline, CIM/WMI queries, script block logging, enterprise inventory collection" },
  { id: "ad", name: "Active Directory Security", domain: "Identity", desc: "Kerberos mechanics, delegation, ACL abuse, BloodHound graph analysis, tiering models" },
  { id: "web", name: "Web Application Security", domain: "Offensive", desc: "OWASP Top 10, PortSwigger paths, SSRF, Deserialization, HTTP Request Smuggling" },
  { id: "api", name: "API Security", domain: "Offensive", desc: "REST, GraphQL, BOLA, BFLA, JWT cryptographic flaws, mass assignment, OpenAPI" },
  { id: "osint", name: "OSINT & Infrastructure", domain: "Intelligence", desc: "Passive DNS, Certificate Transparency, JARM fingerprinting, Shodan/Censys pivoting" },
  { id: "cti", name: "Threat Intelligence", domain: "Intelligence", desc: "MITRE ATT&CK mapping, Diamond Model, Admiralty Code, threat actor profiles, STIX" },
  { id: "malware", name: "Malware Analysis", domain: "DFIR & Research", desc: "Static and dynamic analysis, PE headers, entropy, sandbox baselining, YARA rules" },
  { id: "re", name: "Reverse Engineering", domain: "DFIR & Research", desc: "Control flow graph reconstruction, Ghidra decompilation, debugging with x64dbg, crypto routines" },
  { id: "dfir", name: "Digital Forensics", domain: "DFIR", desc: "$MFT parsing, Prefetch, Shimcache, super-timeline generation, chain of custody" },
  { id: "mem", name: "Memory Forensics", domain: "DFIR", desc: "Volatility 3, unlinked processes, code injection detection (malfind), kernel structures" },
  { id: "ir", name: "Incident Response", domain: "DFIR", desc: "NIST SP 800-61 lifecycle, Velociraptor VQL hunting, root cause analysis, containment" },
  { id: "detect", name: "Detection Engineering", domain: "Defense", desc: "Sigma rule authoring, detection-as-code pipelines, telemetry coverage validation" },
  { id: "siem", name: "SIEM & Telemetry", domain: "Defense", desc: "Splunk SPL, Defender KQL, Wazuh, log ingestion and normalization, alert tuning" },
  { id: "cloud", name: "Cloud Security", domain: "Cloud & DevSecOps", desc: "AWS IAM policies, Azure RBAC, IMDSv2 metadata abuse, Kubernetes cluster security" },
  { id: "pentest", name: "Enterprise Penetration Testing", domain: "Offensive", desc: "NIST SP 800-115, PTES methodology, network exploitation, privilege escalation, reporting" },
  { id: "redteam", name: "Red Team Operations", domain: "Red Team", desc: "Rules of Engagement, redirector infrastructure, OPSEC, C2 frameworks, purple teaming" },
  { id: "advem", name: "Adversary Emulation", domain: "Red Team", desc: "CALDERA, Atomic Red Team, executing threat-informed intelligence plans safely" },
  { id: "report", name: "Technical Reporting & Research", domain: "Professional", desc: "Executive summaries, technical proof-of-concept documentation, coordinated disclosure" }
];

const tools = [
  { name: "Wireshark", category: "Network Scanning", purpose: "Interactive packet analyzer and protocol dissection", site: "https://www.wireshark.org/", docs: "https://www.wireshark.org/docs/", os: "Windows, Linux, macOS" },
  { name: "tshark", category: "Network Scanning", purpose: "Command-line packet capture and extraction engine", site: "https://www.wireshark.org/", docs: "https://www.wireshark.org/docs/man-pages/tshark.html", os: "Linux, Windows, macOS" },
  { name: "Nmap", category: "Network Scanning", purpose: "Network exploration and vulnerability scanner", site: "https://nmap.org/", docs: "https://nmap.org/book/man.html", os: "Cross-platform" },
  { name: "Zeek", category: "Network Scanning", purpose: "High-performance behavioral network analysis and telemetry", site: "https://zeek.org/", docs: "https://docs.zeek.org/", os: "Linux, macOS" },
  { name: "Suricata", category: "Network Scanning", purpose: "Network threat detection, IDS/IPS, and PCAP analysis", site: "https://suricata.io/", docs: "https://docs.suricata.io/", os: "Linux, Windows" },
  { name: "Subfinder", category: "OSINT", purpose: "Fast passive subdomain enumeration tool", site: "https://projectdiscovery.io/", docs: "https://docs.projectdiscovery.io/tools/subfinder", os: "Cross-platform" },
  { name: "Amass", category: "OSINT", purpose: "In-depth attack surface mapping and asset discovery", site: "https://owasp.org/www-project-amass/", docs: "https://github.com/owasp-amass/amass", os: "Cross-platform" },
  { name: "Shodan", category: "OSINT", purpose: "Search engine for Internet-connected devices", site: "https://www.shodan.io/", docs: "https://help.shodan.io/", os: "Web / CLI" },
  { name: "Censys", category: "OSINT", purpose: "Search engine for Internet attack surface monitoring", site: "https://censys.io/", docs: "https://docs.censys.io/", os: "Web / CLI" },
  { name: "Maltego", category: "OSINT", purpose: "Link analysis tool for investigating relationships and graphs", site: "https://www.maltego.com/", docs: "https://docs.maltego.com/", os: "Windows, Linux, macOS" },
  { name: "Burp Suite", category: "Web Security", purpose: "Industry-standard web application vulnerability testing platform", site: "https://portswigger.net/burp", docs: "https://portswigger.net/burp/documentation", os: "Cross-platform" },
  { name: "Caido", category: "Web Security", purpose: "Lightweight, fast web security proxy written in Rust", site: "https://caido.io/", docs: "https://docs.caido.io/", os: "Cross-platform" },
  { name: "ffuf", category: "Web Security", purpose: "High-speed web fuzzer for directory, parameter, and header discovery", site: "https://github.com/ffuf/ffuf", docs: "https://github.com/ffuf/ffuf/wiki", os: "Cross-platform" },
  { name: "sqlmap", category: "Web Security", purpose: "Automated SQL injection testing and database takeover tool", site: "https://sqlmap.org/", docs: "https://github.com/sqlmapproject/sqlmap/wiki", os: "Cross-platform" },
  { name: "BloodHound", category: "Active Directory", purpose: "Six degrees of domain admin graph relationship analysis", site: "https://github.com/BloodHoundAD/BloodHound", docs: "https://bloodhound.readthedocs.io/", os: "Cross-platform" },
  { name: "Impacket", category: "Active Directory", purpose: "Python library and collection of tools for network protocol abuse", site: "https://github.com/fortra/impacket", docs: "https://www.secureauth.com/labs/open-source-tools/impacket/", os: "Cross-platform" },
  { name: "Rubeus", category: "Active Directory", purpose: "C# toolset for raw Kerberos interaction and abuses", site: "https://github.com/GhostPack/Rubeus", docs: "https://github.com/GhostPack/Rubeus", os: "Windows" },
  { name: "Certipy", category: "Active Directory", purpose: "Active Directory Certificate Services (ADCS) auditing and abuse", site: "https://github.com/ly4k/Certipy", docs: "https://github.com/ly4k/Certipy", os: "Cross-platform" },
  { name: "NetExec", category: "Active Directory", purpose: "Automated multi-protocol network security assessment tool", site: "https://github.com/Pennyw0rth/NetExec", docs: "https://www.netexec.org/", os: "Cross-platform" },
  { name: "Mimikatz", category: "Active Directory", purpose: "Windows credentials extraction and ticket injection utility", site: "https://github.com/gentilkiwi/mimikatz", docs: "https://github.com/gentilkiwi/mimikatz/wiki", os: "Windows" },
  { name: "Ghidra", category: "Reverse Engineering", purpose: "NSA software reverse engineering framework and decompiler", site: "https://ghidra-sre.org/", docs: "https://ghidra-sre.org/CheatSheet.html", os: "Cross-platform" },
  { name: "x64dbg", category: "Reverse Engineering", purpose: "Open-source x64/x32 debugger for Windows binaries", site: "https://x64dbg.com/", docs: "https://help.x64dbg.com/", os: "Windows" },
  { name: "GDB (pwndbg)", category: "Reverse Engineering", purpose: "GNU Debugger with exploit research and memory enhancements", site: "https://pwndbg.re/", docs: "https://pwndbg.re/", os: "Linux" },
  { name: "PE-bear", category: "Malware Analysis", purpose: "Reversing tool for PE header inspection and section viewing", site: "https://hshrzd.wordpress.com/pe-bear/", docs: "https://github.com/hasherezade/pe-bear", os: "Windows, Linux" },
  { name: "capa", category: "Malware Analysis", purpose: "Identifies capabilities in executable files automatically", site: "https://github.com/mandiant/capa", docs: "https://github.com/mandiant/capa/wiki", os: "Cross-platform" },
  { name: "YARA", category: "Malware Analysis", purpose: "Pattern matching Swiss knife for malware researchers", site: "https://virustotal.github.io/yara/", docs: "https://yara.readthedocs.io/", os: "Cross-platform" },
  { name: "FLOSS", category: "Malware Analysis", purpose: "Automatically deobfuscates strings in malware binaries", site: "https://github.com/mandiant/flare-floss", docs: "https://github.com/mandiant/flare-floss", os: "Cross-platform" },
  { name: "Volatility 3", category: "Digital Forensics", purpose: "Advanced volatile memory forensics framework", site: "https://volatilityfoundation.org/", docs: "https://volatility3.readthedocs.io/", os: "Cross-platform" },
  { name: "Autopsy", category: "Digital Forensics", purpose: "Digital forensics platform and GUI for The Sleuth Kit", site: "https://www.autopsy.com/", docs: "https://www.autopsy.com/support/", os: "Windows, Linux" },
  { name: "KAPE", category: "Digital Forensics", purpose: "Kroll Artifact Parser and Extractor for rapid incident triage", site: "https://www.kroll.com/en/services/cyber-risk/incident-response-litigation-support/kroll-artifact-parser-extractor-kape", docs: "https://ericzimmerman.github.io/", os: "Windows" },
  { name: "Eric Zimmerman Tools", category: "Digital Forensics", purpose: "Suite of high-speed open-source Windows forensic artifact parsers", site: "https://ericzimmerman.github.io/", docs: "https://ericzimmerman.github.io/", os: "Windows" },
  { name: "Velociraptor", category: "Incident Response", purpose: "Endpoint visibility and live digital forensic investigation platform", site: "https://docs.velociraptor.app/", docs: "https://docs.velociraptor.app/", os: "Cross-platform" },
  { name: "Chainsaw", category: "Incident Response", purpose: "Rapid hunting in Windows Event Logs using Sigma and custom rules", site: "https://github.com/WithSecureLabs/chainsaw", docs: "https://github.com/WithSecureLabs/chainsaw", os: "Cross-platform" },
  { name: "Hayabusa", category: "Incident Response", purpose: "Fast Windows event log timeline generator and threat hunting tool", site: "https://github.com/Yamato-Security/hayabusa", docs: "https://github.com/Yamato-Security/hayabusa", os: "Cross-platform" },
  { name: "MISP", category: "Threat Intelligence", purpose: "Open-source threat sharing and threat intelligence platform", site: "https://www.misp-project.org/", docs: "https://docs.misp-project.org/", os: "Linux" },
  { name: "OpenCTI", category: "Threat Intelligence", purpose: "Unified open-source platform for cyber threat intelligence management", site: "https://www.opencti.io/", docs: "https://docs.opencti.io/", os: "Cross-platform" },
  { name: "Sigma", category: "Detection Engineering", purpose: "Generic signature format for SIEM and log detection rules", site: "https://sigmahq.io/", docs: "https://sigmahq.io/docs/", os: "Cross-platform" },
  { name: "Sysmon", category: "Detection Engineering", purpose: "System Monitor Windows system service for deep security telemetry", site: "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon", docs: "https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon", os: "Windows, Linux" },
  { name: "Wazuh", category: "Detection Engineering", purpose: "Open-source security monitoring, SIEM, and XDR platform", site: "https://wazuh.com/", docs: "https://documentation.wazuh.com/", os: "Cross-platform" },
  { name: "Atomic Red Team", category: "Adversary Emulation", purpose: "Simple, automated, library of mapped MITRE ATT&CK atomic tests", site: "https://atomicredteam.io/", docs: "https://github.com/redcanaryco/atomic-red-team", os: "Cross-platform" },
  { name: "CALDERA", category: "Adversary Emulation", purpose: "Cyber adversary emulation system built on the MITRE ATT&CK framework", site: "https://caldera.mitre.org/", docs: "https://caldera.readthedocs.io/", os: "Cross-platform" },
  { name: "Sliver", category: "Adversary Emulation", purpose: "Cross-platform adversary emulation and Red Team implant framework", site: "https://sliver.sh/", docs: "https://sliver.sh/docs", os: "Cross-platform" },
  { name: "ScoutSuite", category: "Cloud Security", purpose: "Multi-cloud security-auditing tool for AWS, Azure, GCP", site: "https://github.com/nccgroup/ScoutSuite", docs: "https://github.com/nccgroup/ScoutSuite/wiki", os: "Cross-platform" },
  { name: "Prowler", category: "Cloud Security", purpose: "Cloud security assessment and CIS compliance scanner", site: "https://prowler.com/", docs: "https://docs.prowler.com/", os: "Cross-platform" },
  { name: "CloudFox", category: "Cloud Security", purpose: "Command-line tool helping penetration testers find situational awareness in cloud environments", site: "https://github.com/BishopFox/cloudfox", docs: "https://github.com/BishopFox/cloudfox", os: "Cross-platform" },
  { name: "MobSF", category: "Mobile Security", purpose: "Mobile Security Framework automated static and dynamic analysis", site: "https://mobsf.live/", docs: "https://mobsf.github.io/docs/", os: "Cross-platform" },
  { name: "Frida", category: "Mobile Security", purpose: "Dynamic instrumentation toolkit for developers, reverse engineers, and security researchers", site: "https://frida.re/", docs: "https://frida.re/docs/home/", os: "Cross-platform" },
  { name: "Binwalk", category: "IoT Security", purpose: "Firmware analysis tool for reverse engineering embedded devices", site: "https://github.com/ReFirmLabs/binwalk", docs: "https://github.com/ReFirmLabs/binwalk/wiki", os: "Linux, macOS" }
];

const initialLabs = [
  { id: "lab-1", name: "Forest", platform: "Hack The Box", difficulty: "Easy", domain: "Active Directory", skill: "AS-REP Roasting, DCSync, BloodHound", status: "Completed", dateStarted: "2026-10-01", dateCompleted: "2026-10-02", timeSpent: 180, writeupUrl: "https://0xdf.gitlab.io/2019/09/28/htb-forest.html", notes: "Classic AD machine demonstrating AS-REP roasting on service accounts and PrivExchange/Exchange permissions leading to DCSync." },
  { id: "lab-2", name: "Active", platform: "Hack The Box", difficulty: "Easy", domain: "Active Directory", skill: "GPP cpassword decryption, Kerberoasting", status: "Completed", dateStarted: "2026-10-05", dateCompleted: "2026-10-05", timeSpent: 120, writeupUrl: "", notes: "Demonstrates Group Policy Preferences (GPP) password exposure in SYSVOL and subsequent Kerberoasting." },
  { id: "lab-3", name: "Sauna", platform: "Hack The Box", difficulty: "Easy", domain: "Active Directory", skill: "AS-REP Roasting, Winlogon Autologon, Mimikatz", status: "In Progress", dateStarted: "2026-11-10", dateCompleted: "", timeSpent: 90, writeupUrl: "", notes: "Initial access through AS-REP roasting followed by registry inspection for saved credentials." },
  { id: "lab-4", name: "SQL Injection: Union Attack", platform: "PortSwigger", difficulty: "Apprentice", domain: "Web Security", skill: "SQLi column enumeration, data extraction", status: "Completed", dateStarted: "2026-10-12", dateCompleted: "2026-10-12", timeSpent: 45, writeupUrl: "", notes: "Standard UNION-based injection to extract usernames and password hashes from database." },
  { id: "lab-5", name: "SSRF with whitelist-based input filter", platform: "PortSwigger", difficulty: "Practitioner", domain: "Web Security", skill: "URL parsing inconsistency bypass", status: "Planned", dateStarted: "", dateCompleted: "", timeSpent: 0, writeupUrl: "", notes: "Exploiting URL parser discrepancies to bypass whitelist and hit internal metadata server." },
  { id: "lab-6", name: "RedLine Investigation", platform: "CyberDefenders", difficulty: "Medium", domain: "Digital Forensics", skill: "Memory triage, malware process detection", status: "Planned", dateStarted: "", dateCompleted: "", timeSpent: 0, writeupUrl: "", notes: "Investigate memory capture from compromised workstation containing RedLine infostealer." }
];

const notebookTemplates = [
  {
    id: "apt-analysis",
    name: "APT Group Analysis Dossier",
    tags: "CTI, APT, Profiling",
    content: `# Threat Actor Profile: [APT Name / Alias]

## 1. Executive Summary
- **Origin / Attribution:** [Attributed State / Group / Unknown]
- **Active Since:** [Year / Approximate timeline]
- **Motivation:** [Espionage / Financial / Sabotage / Disruption]
- **Target Sectors:** [Government, Defense, Energy, Telecommunications, Finance]
- **Confidence Level:** [Low / Moderate / High] (Provide rationale)

## 2. Threat Actor Aliases & Clusters
- Vendor Aliases: [e.g., Cozy Bear, NOBELIUM, Midnight Blizzard, APT29]

## 3. Diamond Model Analysis
- **Adversary:** [Group identity and infrastructure operators]
- **Capability:** [Custom implants, LOLBIN abuse, zero-day exploits]
- **Infrastructure:** [Bulletproof hosting, compromised routers, cloud tenants, CDN fronting]
- **Victimology:** [Geographic regions, specific industry verticals]

## 4. Key Campaigns & Observed Operations
| Campaign Date | Target Sector | Primary Initial Vector | Key Malware Used |
|---|---|---|---|
| [Date] | [Sector] | [Spearphishing / Supply Chain / Exploitation] | [Malware family] |

## 5. ATT&CK TTP Mapping
- **Initial Access:** [T1566.001 - Spearphishing Attachment, T1190 - Exploit Public-Facing Application]
- **Execution:** [T1059.001 - PowerShell, T1059.005 - VBScript]
- **Persistence:** [T1547.001 - Registry Run Keys, T1053.005 - Scheduled Tasks]
- **Privilege Escalation:** [T1068 - Exploitation for Privilege Escalation]
- **Defense Evasion:** [T1027 - Obfuscated Files, T1070 - Indicator Removal]
- **Credential Access:** [T1003.001 - LSASS Memory, T1558.003 - Kerberoasting]
- **Lateral Movement:** [T1021.002 - SMB/Windows Admin Shares, T1021.006 - WinRM]
- **Command and Control:** [T1071.001 - Web Protocols, T1105 - Ingress Tool Transfer]

## 6. Detection & Defensive Mitigations
- Key Sigma Detection Rules:
- Sysmon telemetry points:
- Preventative hardening recommendations:`
  },
  {
    id: "malware-analysis",
    name: "Malware Technical Analysis Report",
    tags: "Malware, Reversing, YARA",
    content: `# Malware Analysis Report: [Sample Name]

## 1. Sample Metadata
- **File Name:** [sample.exe]
- **SHA-256:** \`[64-character hex hash]\`
- **MD5:** \`[32-character hex hash]\`
- **File Size:** [e.g., 425 KB]
- **File Type:** [PE32+ executable (GUI) x86-64]
- **Compilation Timestamp:** [Timestamp / Epoch]
- **Entropy:** [e.g., 7.64 (Likely Packed)]

## 2. Static Analysis
- **Sections:**
  - \`.text\`: Entropy [6.2], Virtual Size [...], Raw Size [...]
  - \`.rdata\`: Entropy [5.1], Virtual Size [...], Raw Size [...]
  - \`.data\`: Entropy [7.8], Virtual Size [...], Raw Size [...]
- **Interesting Strings:**
  - Decoded / Extracted URLs:
  - Registry keys referenced:
  - Cryptographic markers:
- **Imported DLLs & Critical APIs:**
  - \`kernel32.dll\`: \`VirtualAlloc\`, \`WriteProcessMemory\`, \`CreateRemoteThread\`
  - \`wininet.dll\`: \`InternetOpenA\`, \`InternetConnectA\`

## 3. Dynamic Behavioral Analysis
- **Process Activity:** Injected into \`svchost.exe\` or spawned \`cmd.exe\`
- **Filesystem Modifications:** Dropped persistence file in \`%APPDATA%\\...\`
- **Registry Changes:** Created Autostart Run key
- **Network Telemetry:**
  - C2 IP/Port: [IP:PORT]
  - Protocol: HTTP POST with custom XOR encoding
  - Beacon Interval: ~45 seconds with 15% jitter

## 4. Reconstructed Logic & Capabilities
[Explain the functional execution flow: unpacking, staging, environment checking, payload execution, C2 communication.]

## 5. YARA Detection Rule
\`\`\`yara
rule APT_Malware_Family_Identifier {
    meta:
        description = "Detects [Malware Family] loader component"
        author = "APT//REDTEAM Research"
        date = "[Current Date]"
    strings:
        $magic = { 4D 5A }
        $str1 = "malicious_string_literal" ascii wide
        $byte_pattern = { 48 89 5C 24 ?? 48 89 74 24 ?? 57 48 83 EC 20 }
    condition:
        $magic at 0 and ($str1 or $byte_pattern)
}
\`\`\`

## 6. Indicators of Compromise (IOCs)
- Domains:
- IPs:
- Hashes:`
  },
  {
    id: "cti-report",
    name: "Cyber Threat Intelligence Brief",
    tags: "CTI, Strategic, Incident",
    content: `# Cyber Threat Intelligence Brief: [Campaign Title]

**TLP / Classification:** TLP:AMBER (or appropriate mark)  
**Date of Release:** [YYYY-MM-DD]  
**Analytic Confidence:** [High / Moderate / Low]  

## 1. Executive Statement
[A concise 3-paragraph summary answering Who, What, When, Where, Why, and So What for leadership.]

## 2. Threat Vector & Technical Analysis
- Initial Compromise Method:
- Exploited Vulnerabilities: [CVE-XXXX-YYYY]
- Infrastructure Fingerprints (Certificates, ASNs, Domains):

## 3. Observed Tactics, Techniques, and Procedures (TTPs)
[Bullet list mapped to MITRE ATT&CK]

## 4. Business & Defensive Impact
[Operational disruption, data exposure, intellectual property loss risks]

## 5. Actionable Recommendations
- **Immediate (0-24 hrs):** Hunt for IOCs, block network indicators
- **Short-Term (1-7 days):** Patch vulnerable external appliances, audit privileged accounts
- **Long-Term (30+ days):** Deploy phishing-resistant MFA, enforce tiered administration`
  },
  {
    id: "vuln-research",
    name: "Vulnerability Research & Exploit Analysis",
    tags: "ExploitDev, Vulnerability, Low-Level",
    content: `# Vulnerability Root Cause Analysis: [Target Application / CVE]

## 1. Vulnerability Overview
- **Identifier:** [CVE-XXXX-YYYY / Unassigned]
- **Target Software:** [Application Name & Exact Version]
- **Vulnerability Class:** [e.g., Stack Buffer Overflow / Heap Use-After-Free / Integer Truncation]
- **CVSS v3.1 Score:** [e.g., 9.8 Critical]

## 2. Vulnerable Source Code / Disassembly
\`\`\`c
// Snippet of vulnerable C code or disassembled instructions
void vulnerable_function(char *user_input, size_t input_len) {
    char stack_buffer[256];
    // Flaw: Unbounded copy or incorrect integer comparison
    memcpy(stack_buffer, user_input, input_len);
}
\`\`\`

## 3. Root Cause Analysis
[Explain precisely why the flaw exists in memory management, bounds validation, or concurrency control.]

## 4. Exploitation Mechanism & Mitigation Bypass
- **Stack / Heap State at Crash:**
- **Control Flow Hijack:** [Overwriting Return Address / SEH / Function Pointer]
- **Mitigation Status:**
  - DEP/NX: [Enabled / Bypassed via ROP]
  - ASLR: [Enabled / Bypassed via Information Leak]
  - Stack Canary: [Enabled / Overwritten or absent]

## 5. Remediation & Patch Analysis
\`\`\`c
// Corrected safe implementation
\`\`\``
  },
  {
    id: "redteam-op",
    name: "Red Team Operation Plan & Debrief",
    tags: "RedTeam, ROE, AdversaryEmulation",
    content: `# Red Team Operation Execution Plan & Assessment

## 1. Engagement Governance
- **Target Organization:** [Fictional / Authorized Scope]
- **Authorization Reference:** [Engagement Letter / RoE Document Date]
- **Operation Lead:** [Lead Operator Name]
- **White Team / Trusted Agent Contacts:** [Names and emergency contact numbers]
- **Rules of Engagement (ROE) Constraints:** [No denial of service, operating hours, production data restrictions]

## 2. Threat Scenario & Emulated Adversary
- **Emulated Actor:** [e.g., APT29 / FIN7]
- **Primary Objective:** [Access fictional core payment database / Extract Domain Admin credentials]

## 3. Attack Narrative & Chronology
| Phase | Action Executed | Tool / Artifact | Detection Result (Blue Team) |
|---|---|---|---|
| Recon | Passive OSINT, Certificate lookup | crt.sh, Subfinder | Undetected |
| Access | Password spray against external OWA | Custom script | Alerted after 15 attempts |
| Persistence | Scheduled task on workstation | LotL schtasks | Sysmon Event 1 detected |
| Lateral | DCSync via DRSUAPI | Mimikatz / Impacket | Blocked by EDR agent |

## 4. Detection Gaps & Defense Validation
- Findings where preventative controls failed:
- Findings where detections alerted promptly:
- Mean Time to Detect (MTTD) during exercise:

## 5. Remediation Roadmap for Blue Team
[Prioritized actionable defensive recommendations]`
  },
  {
    id: "lab-writeup",
    name: "Hands-on Practical Lab Write-up",
    tags: "Labs, HTB, Walkthrough",
    content: `# Lab Write-up: [Target Machine / Challenge Name]

- **Platform:** [Hack The Box / TryHackMe / PortSwigger]
- **Difficulty:** [Easy / Medium / Hard / Insane]
- **Domain:** [Active Directory / Linux / Web / DFIR]
- **Date Completed:** [YYYY-MM-DD]
- **Time Spent:** [e.g., 2 hours 15 minutes]

## 1. High-Level Summary
[Brief overview of the vulnerability chain and compromise path.]

## 2. Phase 1: Port Scanning & Enumeration
\`\`\`bash
nmap -sC -sV -p- -T4 target_ip
\`\`\`
- Findings:
  - Port 80: HTTP web service
  - Port 445: SMB service with anonymous access

## 3. Phase 2: Vulnerability Exploitation & Initial Access
[Step-by-step reproduction with commands and screenshots/logs]

## 4. Phase 3: Privilege Escalation
[Local enumeration, finding configuration flaws, executing exploit to root/SYSTEM]

## 5. Key Learning Outcomes & Takeaways
- What went well:
- Mistakes or rabbit holes encountered:
- How this applies to real-world adversary operations:`
  },
  {
    id: "tech-spec",
    name: "Detection Engineering & Telemetry Spec",
    tags: "Detection, Sigma, Telemetry",
    content: `# Detection Engineering Specification: [Technique Name]

- **ATT&CK ID:** [e.g., T1059.001 - PowerShell]
- **Target Platform:** Windows / Linux
- **Log Source Required:** Microsoft-Windows-Sysmon / Auditd / Endpoint Sensor

## 1. Threat Behavior Description
[Detailed description of what the attacker is doing and why this behavior indicates malicious intent.]

## 2. Required Telemetry & Event Fields
- **Event ID:** [e.g., Sysmon Event ID 1 - Process Creation]
- **Required Fields:**
  - \`Image\`: Binary path
  - \`CommandLine\`: Arguments executed
  - \`ParentImage\`: Spawning process
  - \`User\`: Executing context

## 3. Sigma Detection Rule Logic
\`\`\`yaml
title: Suspicious PowerShell Encoded Command Execution
status: experimental
description: Detects base64 encoded command arguments in PowerShell
logsource:
    category: process_creation
    product: windows
detection:
    selection:
        Image|endswith:
            - '\\powershell.exe'
            - '\\pwsh.exe'
        CommandLine|contains:
            - ' -e '
            - ' -enc '
            - ' -encodedcommand '
    condition: selection
falsepositives:
    - Legitimate administrative provisioning scripts
level: medium
\`\`\`

## 4. Validation & Test Plan
- Execution command using Atomic Red Team:
- Expected alert output:`
  }
];

// Now compile the entire comprehensive HTML page
console.log('Writing comprehensive HTML application...');

const htmlContent = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>APT//REDTEAM · Cybersecurity Learning Command Center</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root {
  --bg: #080B12;
  --surface-1: #0F1420;
  --surface-2: #151C2B;
  --surface-3: #1C2436;
  --surface-hover: #1E293B;
  --surface-active: #22304A;
  --border: #253044;
  --border-light: #334155;
  --accent-primary: #8B5CF6;
  --accent-secondary: #38BDF8;
  --accent-glow: rgba(139, 92, 246, 0.15);
  --success: #22C55E;
  --success-bg: rgba(34, 197, 94, 0.12);
  --warning: #F59E0B;
  --warning-bg: rgba(245, 158, 11, 0.12);
  --danger: #EF4444;
  --danger-bg: rgba(239, 68, 68, 0.12);
  --info: #3B82F6;
  --text: #F1F5F9;
  --text-muted: #94A3B8;
  --text-subtle: #64748B;
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-xl: 18px;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --sidebar-w: 280px;
  --topbar-h: 64px;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  font-size: 14px;
  line-height: 1.5;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
button, input, select, textarea { font-family: inherit; font-size: inherit; color: inherit; }
button { cursor: pointer; border: none; background: none; }
a { color: var(--accent-secondary); text-decoration: none; }
a:hover { text-decoration: underline; }

/* Scrollbars */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--surface-3); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--border-light); }

/* App Shell */
.app-container {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
aside.sidebar {
  width: var(--sidebar-w);
  background: var(--surface-1);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  height: 100vh;
  z-index: 40;
  transition: width 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  flex-shrink: 0;
}
.sidebar-header {
  padding: 18px 20px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand-box {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}
.brand-logo-mark {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  color: white;
  font-family: var(--font-mono);
  font-size: 15px;
  letter-spacing: -0.5px;
  box-shadow: 0 0 12px var(--accent-glow);
}
.brand-title {
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 0.5px;
  color: var(--text);
  font-family: var(--font-mono);
}
.brand-title span { color: var(--accent-primary); }
.brand-badge {
  font-size: 10px;
  font-weight: 700;
  background: var(--surface-3);
  color: var(--accent-secondary);
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid var(--border);
}
.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.nav-section-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: var(--text-subtle);
  padding: 0 10px 6px 10px;
}
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 9px 12px;
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  font-size: 13px;
  font-weight: 500;
  transition: all 0.15s ease;
  position: relative;
  text-align: left;
}
.nav-item:hover {
  background: var(--surface-hover);
  color: var(--text);
}
.nav-item.active {
  background: var(--surface-2);
  color: var(--text);
  font-weight: 600;
  border-left: 3px solid var(--accent-primary);
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.nav-item svg {
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  stroke-width: 2;
}
.nav-badge {
  margin-left: auto;
  font-size: 11px;
  background: var(--surface-3);
  padding: 2px 7px;
  border-radius: 10px;
  color: var(--text-muted);
  font-family: var(--font-mono);
}
.nav-item.active .nav-badge {
  background: var(--accent-primary);
  color: white;
}
.sidebar-footer {
  padding: 16px;
  border-top: 1px solid var(--border);
  background: var(--surface-1);
}
.sidebar-mini-progress {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 12px;
}
.progress-meta-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 6px;
}
.progress-meta-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-subtle);
}
.progress-meta-pct {
  font-family: var(--font-mono);
  font-size: 14px;
  font-weight: 700;
  color: var(--accent-secondary);
}
.progress-bar-bg {
  height: 6px;
  background: var(--surface-3);
  border-radius: 99px;
  overflow: hidden;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 99px;
  transition: width 0.3s ease;
}
.storage-tag-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  font-size: 11px;
  color: var(--text-subtle);
}
.status-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background: var(--success);
  border-radius: 50%;
  margin-right: 4px;
  box-shadow: 0 0 6px var(--success);
}

/* Main Content Area */
.main-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

/* Topbar */
header.topbar {
  height: var(--topbar-h);
  background: rgba(15, 20, 32, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  position: sticky;
  top: 0;
  z-index: 30;
}
.topbar-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.mobile-nav-toggle {
  display: none;
  padding: 8px;
  border-radius: var(--radius-sm);
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
}
.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text-muted);
}
.breadcrumb-separator {
  color: var(--text-subtle);
  font-size: 11px;
}
.breadcrumb-active {
  color: var(--text);
  font-weight: 600;
}
.topbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Study Timer Pill */
.timer-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  padding: 5px 12px;
  border-radius: 99px;
  font-size: 12px;
}
.timer-pill.running {
  border-color: var(--accent-primary);
  background: rgba(139, 92, 246, 0.1);
}
.timer-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-subtle);
}
.timer-pill.running .timer-indicator {
  background: var(--accent-primary);
  box-shadow: 0 0 8px var(--accent-primary);
  animation: pulse 1.8s infinite;
}
@keyframes pulse {
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
}
.timer-digits {
  font-family: var(--font-mono);
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--text);
}
.timer-btn {
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 6px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}
.timer-btn:hover {
  background: var(--surface-3);
  color: var(--text);
}

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-size: 13px;
  font-weight: 600;
  background: var(--surface-2);
  border: 1px solid var(--border);
  color: var(--text);
  transition: all 0.15s ease;
  white-space: nowrap;
}
.btn:hover {
  background: var(--surface-hover);
  border-color: var(--border-light);
}
.btn-primary {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: white;
  box-shadow: 0 2px 8px rgba(139, 92, 246, 0.25);
}
.btn-primary:hover {
  background: #7c4ee4;
  border-color: #7c4ee4;
}
.btn-secondary {
  background: var(--surface-3);
  border-color: var(--border);
}
.btn-danger {
  background: var(--danger-bg);
  border-color: rgba(239, 68, 68, 0.4);
  color: #fca5a5;
}
.btn-danger:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: var(--danger);
  color: white;
}
.btn-sm {
  padding: 5px 10px;
  font-size: 12px;
}
.btn-icon {
  padding: 7px;
  border-radius: var(--radius-sm);
}

/* Global Search Trigger */
.search-trigger-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  padding: 7px 12px;
  border-radius: var(--radius-sm);
  color: var(--text-muted);
  font-size: 12px;
  min-width: 200px;
  transition: border-color 0.15s ease;
}
.search-trigger-btn:hover {
  border-color: var(--border-light);
  color: var(--text);
}
.search-kbd {
  margin-left: auto;
  font-family: var(--font-mono);
  font-size: 10px;
  background: var(--surface-3);
  border: 1px solid var(--border);
  padding: 2px 5px;
  border-radius: 4px;
  color: var(--text-subtle);
}

/* Page Body */
main.main-content {
  padding: 32px 36px 64px;
  max-width: 1540px;
  width: 100%;
  margin: 0 auto;
}

/* View Header */
.view-header {
  margin-bottom: 28px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
}
.view-pretitle {
  color: var(--accent-secondary);
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 6px;
}
.view-title {
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.4px;
  color: var(--text);
  line-height: 1.2;
}
.view-description {
  color: var(--text-muted);
  font-size: 14px;
  max-width: 820px;
  margin-top: 6px;
}
.view-actions {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

/* Cards & Surfaces */
.card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 20px;
  position: relative;
  transition: border-color 0.15s ease;
}
.card:hover {
  border-color: var(--border-light);
}

/* KPI Stat Cards Grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 28px;
}
.stat-card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 18px 20px;
  display: flex;
  flex-direction: column;
}
.stat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.stat-label {
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--text-subtle);
}
.stat-icon {
  color: var(--text-subtle);
  display: flex;
}
.stat-value {
  font-size: 30px;
  font-weight: 800;
  font-family: var(--font-mono);
  color: var(--text);
  line-height: 1.1;
  margin-bottom: 6px;
}
.stat-subtext {
  font-size: 12px;
  color: var(--text-muted);
}

/* Visual Roadmap Section */
.roadmap-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
}
.roadmap-phase-card {
  background: var(--surface-1);
  border: 1fr solid var(--border);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all 0.2s ease;
}
.roadmap-phase-header {
  padding: 16px 20px;
  background: var(--surface-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.roadmap-phase-header:hover {
  background: var(--surface-hover);
}
.phase-title-group {
  display: flex;
  align-items: center;
  gap: 12px;
}
.phase-status-badge {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: var(--radius-sm);
  background: var(--surface-3);
  color: var(--text-muted);
  border: 1px solid var(--border);
}
.phase-status-badge.completed {
  background: var(--success-bg);
  color: var(--success);
  border-color: rgba(34, 197, 94, 0.3);
}
.phase-status-badge.in-progress {
  background: rgba(56, 189, 248, 0.12);
  color: var(--accent-secondary);
  border-color: rgba(56, 189, 248, 0.3);
}
.phase-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--text);
}
.phase-meta-info {
  font-size: 12px;
  color: var(--text-muted);
}
.phase-right-meta {
  display: flex;
  align-items: center;
  gap: 16px;
}
.phase-pct-text {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--accent-secondary);
}
.phase-chevron {
  transition: transform 0.2s ease;
  color: var(--text-subtle);
}
.roadmap-phase-card.collapsed .phase-chevron {
  transform: rotate(-90deg);
}
.roadmap-phase-body {
  padding: 16px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 14px;
}
.roadmap-phase-card.collapsed .roadmap-phase-body {
  display: none;
}

/* Module Card */
.module-card {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 16px;
  display: flex;
  flex-direction: column;
  transition: all 0.15s ease;
  cursor: pointer;
}
.module-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-2px);
  box-shadow: 0 4px 14px rgba(0,0,0,0.3);
}
.module-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}
.module-id-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  color: var(--accent-secondary);
  background: rgba(56, 189, 248, 0.1);
  padding: 2px 7px;
  border-radius: 4px;
}
.module-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 6px;
  line-height: 1.3;
}
.module-desc {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.45;
  margin-bottom: 14px;
  flex: 1;
}
.module-card-bottom {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.module-progress-row {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: var(--text-subtle);
  font-family: var(--font-mono);
}

/* Two-column layout */
.two-col-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 28px;
}

/* Toolbars & Filters */
.toolbar-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
.input-search {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 9px 14px;
  color: var(--text);
  font-size: 13px;
  flex: 1;
  min-width: 240px;
  transition: border-color 0.15s ease;
}
.input-search:focus {
  outline: none;
  border-color: var(--accent-primary);
}
.select-filter {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 9px 12px;
  color: var(--text);
  font-size: 13px;
  min-width: 160px;
}
.select-filter:focus {
  outline: none;
  border-color: var(--accent-primary);
}

/* Tables & Lists */
.data-table-container {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  overflow: hidden;
}
.data-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 13px;
}
.data-table th {
  background: var(--surface-2);
  padding: 12px 16px;
  font-weight: 700;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--text-subtle);
  border-bottom: 1px solid var(--border);
}
.data-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  color: var(--text);
}
.data-table tr:last-child td {
  border-bottom: none;
}
.data-table tr:hover td {
  background: var(--surface-hover);
}

/* Checklists & Interactive Task Items */
.checklist-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.check-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
  transition: all 0.15s ease;
  cursor: pointer;
  user-select: none;
}
.check-item:hover {
  border-color: var(--border-light);
  background: var(--surface-hover);
}
.check-item.done {
  border-color: rgba(34, 197, 94, 0.25);
  background: rgba(34, 197, 94, 0.04);
}
.check-item input[type="checkbox"] {
  width: 17px;
  height: 17px;
  margin-top: 2px;
  accent-color: var(--accent-primary);
  cursor: pointer;
  flex-shrink: 0;
}
.check-item-text {
  font-size: 13px;
  line-height: 1.45;
  color: var(--text);
  flex: 1;
}
.check-item.done .check-item-text {
  color: var(--text-muted);
  text-decoration: line-through;
}

/* Module Detail View Components */
.module-detail-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 28px;
  align-items: flex-start;
}
.module-main-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.module-side-col {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: sticky;
  top: 84px;
}
.section-card {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 24px;
}
.section-title {
  font-size: 17px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.section-title svg {
  color: var(--accent-primary);
}
.prose {
  font-size: 14px;
  line-height: 1.65;
  color: #cbd5e1;
}
.prose p { margin-bottom: 12px; }
.prose ul, .prose ol {
  margin: 10px 0 16px 20px;
}
.prose li {
  margin-bottom: 6px;
}

/* Code & Cheatsheet Blocks */
.code-block {
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 12px 16px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: #e2e8f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.code-block code {
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-all;
}
.copy-btn {
  color: var(--text-subtle);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 11px;
}
.copy-btn:hover {
  background: var(--surface-3);
  color: var(--text);
}

/* Badges & Tags */
.badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 8px;
  border-radius: 99px;
  background: var(--surface-3);
  color: var(--text-muted);
  border: 1px solid var(--border);
}
.badge-primary { background: rgba(139, 92, 246, 0.15); color: #c4b5fd; border-color: rgba(139, 92, 246, 0.3); }
.badge-secondary { background: rgba(56, 189, 248, 0.15); color: #7dd3fc; border-color: rgba(56, 189, 248, 0.3); }
.badge-success { background: var(--success-bg); color: var(--success); border-color: rgba(34, 197, 94, 0.3); }
.badge-warning { background: var(--warning-bg); color: var(--warning); border-color: rgba(245, 158, 11, 0.3); }
.badge-danger { background: var(--danger-bg); color: var(--danger); border-color: rgba(239, 68, 68, 0.3); }

/* Activity Log Timeline */
.timeline {
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 20px;
}
.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--border);
}
.timeline-item {
  position: relative;
  padding-bottom: 20px;
}
.timeline-item:last-child {
  padding-bottom: 0;
}
.timeline-dot {
  position: absolute;
  left: -20px;
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--surface-1);
  border: 2px solid var(--accent-primary);
}
.timeline-content {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 10px 14px;
}
.timeline-meta {
  font-size: 11px;
  color: var(--text-subtle);
  font-family: var(--font-mono);
  margin-bottom: 4px;
}

/* Modals */
.modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(8, 11, 18, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
}
.modal-backdrop.open {
  opacity: 1;
  visibility: visible;
}
.modal-box {
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  width: 100%;
  max-width: 640px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  transform: translateY(12px) scale(0.98);
  transition: all 0.2s ease;
}
.modal-backdrop.open .modal-box {
  transform: translateY(0) scale(1);
}
.modal-header {
  padding: 20px 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.modal-title {
  font-size: 18px;
  font-weight: 700;
  color: var(--text);
}
.modal-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.modal-footer {
  padding: 16px 24px;
  border-top: 1px solid var(--border);
  background: var(--surface-2);
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

/* Form Controls */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-label {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-muted);
}
.form-input, .form-textarea, .form-select {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 9px 12px;
  color: var(--text);
  font-size: 13px;
  transition: border-color 0.15s ease;
  width: 100%;
}
.form-input:focus, .form-textarea:focus, .form-select:focus {
  outline: none;
  border-color: var(--accent-primary);
}
.form-textarea {
  min-height: 100px;
  resize: vertical;
}

/* Command Palette (Cmd+K) */
.cmd-modal-box {
  max-width: 600px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--surface-1);
}
.cmd-input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border);
  background: var(--surface-2);
}
.cmd-input {
  background: none;
  border: none;
  outline: none;
  color: var(--text);
  font-size: 16px;
  width: 100%;
}
.cmd-results-list {
  max-height: 380px;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cmd-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  cursor: pointer;
  color: var(--text-muted);
  font-size: 13px;
  transition: all 0.1s ease;
}
.cmd-item:hover, .cmd-item.selected {
  background: var(--surface-hover);
  color: var(--text);
}
.cmd-item-type {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  background: var(--surface-3);
  padding: 2px 6px;
  border-radius: 4px;
  color: var(--text-subtle);
}

/* Toast Notifications */
.toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 120;
  display: flex;
  flex-direction: column;
  gap: 10px;
  pointer-events: none;
}
.toast {
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--text);
  font-size: 13px;
  font-weight: 500;
  box-shadow: 0 10px 25px rgba(0,0,0,0.5);
  pointer-events: auto;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}
.toast.show {
  transform: translateY(0);
  opacity: 1;
}
.toast.success { border-color: rgba(34, 197, 94, 0.4); }
.toast.success svg { color: var(--success); }
.toast.error { border-color: rgba(239, 68, 68, 0.4); }
.toast.error svg { color: var(--danger); }

/* Responsive Media Queries */
@media (max-width: 1080px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .two-col-grid { grid-template-columns: 1fr; }
  .module-detail-layout { grid-template-columns: 1fr; }
  .module-side-col { position: static; }
}
@media (max-width: 860px) {
  aside.sidebar {
    position: fixed;
    left: -100%;
    box-shadow: 20px 0 40px rgba(0,0,0,0.5);
  }
  aside.sidebar.mobile-open {
    left: 0;
  }
  .mobile-nav-toggle {
    display: flex;
  }
  main.main-content {
    padding: 20px 16px 40px;
  }
  header.topbar {
    padding: 0 16px;
  }
  .search-trigger-btn { min-width: auto; }
}
@media (max-width: 600px) {
  .stats-grid { grid-template-columns: 1fr; }
  .view-header { flex-direction: column; align-items: stretch; }
  .toolbar-row { flex-direction: column; align-items: stretch; }
  .select-filter { width: 100%; }
}
</style>
</head>
<body>

<div class="app-container">
  <!-- Sidebar -->
  <aside class="sidebar" id="appSidebar">
    <div class="sidebar-header">
      <a href="#" class="brand-box" onclick="navigate('dashboard'); return false;">
        <div class="brand-logo-mark">//</div>
        <div>
          <div class="brand-title">APT<span>//</span>REDTEAM</div>
        </div>
      </a>
      <span class="brand-badge">v2.4</span>
    </div>

    <nav class="sidebar-nav">
      <!-- WORKSPACE -->
      <div class="nav-section-group">
        <div class="nav-section-title">Workspace</div>
        <button class="nav-item active" data-view="dashboard" onclick="navigate('dashboard')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          <span>Overview</span>
        </button>
        <button class="nav-item" data-view="learning-path" onclick="navigate('learning-path')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/></svg>
          <span>My Learning Path</span>
        </button>
        <button class="nav-item" data-view="planner" onclick="navigate('planner')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
          <span>Daily Planner</span>
        </button>
      </div>

      <!-- CURRICULUM -->
      <div class="nav-section-group">
        <div class="nav-section-title">Curriculum</div>
        <button class="nav-item" data-view="curriculum" onclick="navigate('curriculum')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
          <span>All 36 Modules</span>
          <span class="nav-badge" id="sideDoneModulesCount">0/36</span>
        </button>
      </div>

      <!-- PRACTICE -->
      <div class="nav-section-group">
        <div class="nav-section-title">Practice</div>
        <button class="nav-item" data-view="labs" onclick="navigate('labs')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
          <span>Lab Tracker</span>
          <span class="nav-badge" id="sideLabsCount">0</span>
        </button>
        <button class="nav-item" data-view="capstones" onclick="navigate('capstones')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
          <span>Capstone Projects</span>
        </button>
      </div>

      <!-- RESOURCES -->
      <div class="nav-section-group">
        <div class="nav-section-title">Resources</div>
        <button class="nav-item" data-view="courses" onclick="navigate('courses')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
          <span>Course Library</span>
          <span class="nav-badge" id="sideCoursesCount">0</span>
        </button>
        <button class="nav-item" data-view="certs" onclick="navigate('certs')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
          <span>Certifications</span>
        </button>
        <button class="nav-item" data-view="tools" onclick="navigate('tools')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
          <span>Tools Directory</span>
        </button>
        <button class="nav-item" data-view="notebook" onclick="navigate('notebook')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          <span>Research Notebook</span>
        </button>
      </div>

      <!-- ANALYTICS -->
      <div class="nav-section-group">
        <div class="nav-section-title">Analytics</div>
        <button class="nav-item" data-view="skills" onclick="navigate('skills')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          <span>Skills Matrix</span>
        </button>
        <button class="nav-item" data-view="analytics" onclick="navigate('analytics')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          <span>Learning Analytics</span>
        </button>
        <button class="nav-item" data-view="history" onclick="navigate('history')">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Activity History</span>
        </button>
      </div>
    </nav>

    <div class="sidebar-footer">
      <div class="sidebar-mini-progress">
        <div class="progress-meta-row">
          <span class="progress-meta-label">Curriculum Progress</span>
          <span class="progress-meta-pct" id="sideOverallPct">0%</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" id="sideOverallBar" style="width: 0%"></div>
        </div>
        <div class="storage-tag-row">
          <span><span class="status-dot"></span>Local-first storage</span>
          <span id="sideTaskFraction">0 / 0</span>
        </div>
      </div>
    </div>
  </aside>

  <!-- Main Content Wrapper -->
  <div class="main-wrapper">
    <!-- Topbar -->
    <header class="topbar">
      <div class="topbar-left">
        <button class="mobile-nav-toggle" id="mobileMenuBtn" onclick="toggleMobileSidebar()">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        <div class="breadcrumbs" id="topBreadcrumbs">
          <span>Workspace</span>
          <span class="breadcrumb-separator">/</span>
          <span class="breadcrumb-active">Overview</span>
        </div>
      </div>

      <div class="topbar-right">
        <!-- Live Study Timer Component -->
        <div class="timer-pill" id="globalTimerPill">
          <div class="timer-indicator"></div>
          <span class="timer-digits" id="globalTimerDisplay">00:00:00</span>
          <button class="timer-btn" id="globalTimerToggle" onclick="toggleStudyTimer()">Start</button>
          <button class="timer-btn" id="globalTimerLog" onclick="openLogTimerModal()">Log</button>
        </div>

        <!-- Global Search Trigger -->
        <button class="search-trigger-btn" onclick="openCommandPalette()">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          <span>Search or jump to...</span>
          <span class="search-kbd">Ctrl K</span>
        </button>

        <!-- Quick Backup Action -->
        <button class="btn btn-secondary btn-sm" onclick="exportDataBackup()" title="Export JSON Progress Backup">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"/></svg>
          <span>Backup</span>
        </button>
        <button class="btn btn-secondary btn-sm" onclick="triggerImport()" title="Import JSON Progress Backup">
          <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
          <span>Restore</span>
        </button>
        <input type="file" id="importFileInput" accept="application/json" style="display: none;" onchange="handleFileImport(event)">
      </div>
    </header>

    <!-- Main View Dynamic Container -->
    <main class="main-content" id="mainContent">
      <!-- Views will be dynamically injected here -->
    </main>
  </div>
</div>

<!-- Command Palette Modal -->
<div class="modal-backdrop" id="cmdModal">
  <div class="modal-box cmd-modal-box">
    <div class="cmd-input-wrapper">
      <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="color: var(--text-muted);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
      <input type="text" class="cmd-input" id="cmdInput" placeholder="Type a command, module title, tool, or certification..." oninput="handleCmdInput(this.value)">
    </div>
    <div class="cmd-results-list" id="cmdResults">
      <!-- Dynamic search results -->
    </div>
  </div>
</div>

<!-- Add/Edit Lab Modal -->
<div class="modal-backdrop" id="labModal">
  <div class="modal-box">
    <div class="modal-header">
      <div class="modal-title" id="labModalTitle">Add Hands-on Lab</div>
      <button class="btn btn-icon" onclick="closeModal('labModal')">✕</button>
    </div>
    <div class="modal-body">
      <input type="hidden" id="labIdInput">
      <div class="form-group">
        <label class="form-label">Lab / Machine Name</label>
        <input type="text" class="form-input" id="labNameInput" placeholder="e.g., Forest, Kenobi, SQLi Union Attack">
      </div>
      <div class="two-col-grid" style="margin-bottom: 0;">
        <div class="form-group">
          <label class="form-label">Platform</label>
          <select class="form-select" id="labPlatformInput">
            <option value="Hack The Box">Hack The Box</option>
            <option value="TryHackMe">TryHackMe</option>
            <option value="PortSwigger">PortSwigger Web Academy</option>
            <option value="CyberDefenders">CyberDefenders</option>
            <option value="Blue Team Labs Online">Blue Team Labs Online</option>
            <option value="VulnHub">VulnHub</option>
            <option value="Custom Lab">Custom Private Lab</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Difficulty</label>
          <select class="form-select" id="labDifficultyInput">
            <option value="Apprentice">Apprentice / Easy</option>
            <option value="Medium">Practitioner / Medium</option>
            <option value="Hard">Expert / Hard</option>
            <option value="Insane">Insane / Master</option>
          </select>
        </div>
      </div>
      <div class="two-col-grid" style="margin-bottom: 0;">
        <div class="form-group">
          <label class="form-label">Domain</label>
          <input type="text" class="form-input" id="labDomainInput" placeholder="e.g., Active Directory, Web, DFIR">
        </div>
        <div class="form-group">
          <label class="form-label">Status</label>
          <select class="form-select" id="labStatusInput">
            <option value="Planned">Planned</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Revisit">Revisit</option>
            <option value="Stuck">Stuck</option>
          </select>
        </div>
      </div>
      <div class="two-col-grid" style="margin-bottom: 0;">
        <div class="form-group">
          <label class="form-label">Time Spent (Minutes)</label>
          <input type="number" class="form-input" id="labTimeInput" placeholder="e.g., 90">
        </div>
        <div class="form-group">
          <label class="form-label">Write-up / Evidence URL</label>
          <input type="url" class="form-input" id="labWriteupInput" placeholder="https://...">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">Personal Notes & Takeaways</label>
        <textarea class="form-textarea" id="labNotesInput" placeholder="Key vulnerabilities, command notes, privilege escalation path..."></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('labModal')">Cancel</button>
      <button class="btn btn-primary" onclick="saveLabEntry()">Save Lab</button>
    </div>
  </div>
</div>

<!-- Log Study Timer Modal -->
<div class="modal-backdrop" id="timerLogModal">
  <div class="modal-box">
    <div class="modal-header">
      <div class="modal-title">Log Study Session</div>
      <button class="btn btn-icon" onclick="closeModal('timerLogModal')">✕</button>
    </div>
    <div class="modal-body">
      <div class="form-group">
        <label class="form-label">Session Duration (Minutes)</label>
        <input type="number" class="form-input" id="sessionMinutesInput" value="60">
      </div>
      <div class="form-group">
        <label class="form-label">Category</label>
        <select class="form-select" id="sessionCategoryInput">
          <option value="Course / Theory">Course / Theory</option>
          <option value="Documentation">Technical Documentation</option>
          <option value="Guided Lab">Guided Practical Lab</option>
          <option value="Independent Research">Independent Research / Coding</option>
          <option value="Reporting / Notes">Reporting & Notes</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Associated Module or Topic</label>
        <input type="text" class="form-input" id="sessionTopicInput" placeholder="e.g., Module 01: Computer Architecture">
      </div>
      <div class="form-group">
        <label class="form-label">Session Notes</label>
        <textarea class="form-textarea" id="sessionNotesInput" placeholder="Summary of what was studied, problems encountered, and next steps..."></textarea>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" onclick="closeModal('timerLogModal')">Cancel</button>
      <button class="btn btn-primary" onclick="confirmLogTimerSession()">Save Session</button>
    </div>
  </div>
</div>

<!-- Toast Notification Container -->
<div class="toast-container" id="toastContainer"></div>

<!-- Embedded Application Data & Core Logic -->
<script>
// Data Store
const DATA = {
  phases: ${JSON.stringify(phases)},
  courses: ${JSON.stringify(courses)},
  starterPlan: ${JSON.stringify(starterPlan)},
  capstones: ${JSON.stringify(capstones)},
  certs: ${JSON.stringify(certs)},
  skills: ${JSON.stringify(skills)},
  tools: ${JSON.stringify(tools)},
  initialLabs: ${JSON.stringify(initialLabs)},
  notebookTemplates: ${JSON.stringify(notebookTemplates)}
};

// Storage Keys
const STORAGE_KEY_V2 = "aptRedTeamTracker_v2";
const STORAGE_KEY_V1 = "aptRedTeamTracker_v1";

// State Management
let appState = {
  version: 2,
  lastUpdated: Date.now(),
  tasks: {},
  courses: {},
  labs: [...DATA.initialLabs],
  skills: {},
  certs: {},
  plannerTasks: [],
  notebook: [],
  studyLog: [],
  activityLog: [],
  timer: {
    running: false,
    startTime: 0,
    accumulatedSeconds: 0,
    activeTopic: ""
  }
};

// Initialize State with Migration
function initStorage() {
  const v2Raw = localStorage.getItem(STORAGE_KEY_V2);
  if (v2Raw) {
    try {
      const parsed = JSON.parse(v2Raw);
      appState = Object.assign({}, appState, parsed);
      // Ensure arrays exist
      if (!appState.labs || !appState.labs.length) appState.labs = [...DATA.initialLabs];
      if (!appState.notebook) appState.notebook = [];
      if (!appState.studyLog) appState.studyLog = [];
      if (!appState.activityLog) appState.activityLog = [];
      if (!appState.plannerTasks) appState.plannerTasks = [];
      if (!appState.tasks) appState.tasks = {};
      if (!appState.courses) appState.courses = {};
      if (!appState.skills) appState.skills = {};
      if (!appState.certs) appState.certs = {};
      return;
    } catch (e) {
      console.error("Failed to parse v2 state:", e);
    }
  }

  // Check v1 legacy state
  const v1Raw = localStorage.getItem(STORAGE_KEY_V1);
  if (v1Raw) {
    try {
      const v1Parsed = JSON.parse(v1Raw);
      if (v1Parsed.tasks) appState.tasks = v1Parsed.tasks;
      if (v1Parsed.courses) appState.courses = v1Parsed.courses;
      if (v1Parsed.notes) {
        appState.notebook.push({
          id: "migrated-v1-notes",
          name: "Imported Legacy Notes",
          tags: "Archive, Legacy",
          content: v1Parsed.notes,
          updatedAt: Date.now()
        });
      }
      logActivity("system", "Migrated legacy tracker progress to APT//REDTEAM v2 format.");
      saveState();
      return;
    } catch (e) {
      console.error("Failed to parse v1 legacy state:", e);
    }
  }

  // Default initial seed
  DATA.notebookTemplates.slice(0, 2).forEach(t => {
    appState.notebook.push({
      id: "note-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
      name: t.name,
      tags: t.tags,
      content: t.content,
      updatedAt: Date.now()
    });
  });

  saveState();
}

function saveState() {
  appState.lastUpdated = Date.now();
  localStorage.setItem(STORAGE_KEY_V2, JSON.stringify(appState));
  updateGlobalStats();
}

// Activity Logging
function logActivity(type, title, meta) {
  appState.activityLog.unshift({
    id: "act-" + Date.now() + "-" + Math.random().toString(36).substr(2, 4),
    timestamp: Date.now(),
    type,
    title,
    meta: meta || ""
  });
  if (appState.activityLog.length > 200) appState.activityLog.pop();
}

// UI Notifications
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast " + type;
  const icon = type === "success" 
    ? '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
    : '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';
  toast.innerHTML = icon + '<span>' + message + '</span>';
  container.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add("show"));
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Stats & Metrics Calculation
function getAllTasksList() {
  const list = [];
  DATA.phases.forEach((p, pi) => {
    p.modules.forEach((m, mi) => {
      const topics = m.topicsStr.split("; ");
      const practical = m.practicalStr.split("; ");
      topics.forEach((_, ti) => list.push({ key: pi + "|" + mi + "|" + ti, pi, mi, type: "topic" }));
      practical.forEach((_, piIdx) => list.push({ key: pi + "|" + mi + "|" + (topics.length + piIdx), pi, mi, type: "practical" }));
    });
  });
  return list;
}

function getModuleStats(pi, mi) {
  const m = DATA.phases[pi].modules[mi];
  const topics = m.topicsStr.split("; ");
  const practical = m.practicalStr.split("; ");
  const total = topics.length + practical.length;
  let done = 0;
  for (let i = 0; i < total; i++) {
    if (appState.tasks[pi + "|" + mi + "|" + i]) done++;
  }
  return {
    done,
    total,
    pct: total ? Math.round((done / total) * 100) : 0
  };
}

function updateGlobalStats() {
  const allTasks = getAllTasksList();
  const doneTasks = allTasks.filter(t => appState.tasks[t.key]).length;
  const overallPct = allTasks.length ? Math.round((doneTasks / allTasks.length) * 100) : 0;

  let completedModules = 0;
  DATA.phases.forEach((p, pi) => {
    p.modules.forEach((_, mi) => {
      if (getModuleStats(pi, mi).pct === 100) completedModules++;
    });
  });

  const selectedCourses = Object.values(appState.courses).filter(c => c && c.selected).length;
  const completedLabs = appState.labs.filter(l => l.status === "Completed").length;

  // Sidebar widgets
  const sideOverallPct = document.getElementById("sideOverallPct");
  if (sideOverallPct) sideOverallPct.textContent = overallPct + "%";
  const sideOverallBar = document.getElementById("sideOverallBar");
  if (sideOverallBar) sideOverallBar.style.width = overallPct + "%";
  const sideTaskFraction = document.getElementById("sideTaskFraction");
  if (sideTaskFraction) sideTaskFraction.textContent = doneTasks + " / " + allTasks.length + " tasks";

  const sideDoneMods = document.getElementById("sideDoneModulesCount");
  if (sideDoneMods) sideDoneMods.textContent = completedModules + "/36";
  const sideLabsCount = document.getElementById("sideLabsCount");
  if (sideLabsCount) sideLabsCount.textContent = completedLabs;
  const sideCoursesCount = document.getElementById("sideCoursesCount");
  if (sideCoursesCount) sideCoursesCount.textContent = selectedCourses;

  // Overview KPIs if on dashboard
  const kpiOverallPct = document.getElementById("kpiOverallPct");
  if (kpiOverallPct) kpiOverallPct.textContent = overallPct + "%";
  const kpiOverallBar = document.getElementById("kpiOverallBar");
  if (kpiOverallBar) kpiOverallBar.style.width = overallPct + "%";
  const kpiTasksCount = document.getElementById("kpiTasksCount");
  if (kpiTasksCount) kpiTasksCount.textContent = doneTasks;
  const kpiTasksTotal = document.getElementById("kpiTasksTotal");
  if (kpiTasksTotal) kpiTasksTotal.textContent = "of " + allTasks.length + " activities";
  const kpiModulesCount = document.getElementById("kpiModulesCount");
  if (kpiModulesCount) kpiModulesCount.textContent = completedModules;
  const kpiCoursesCount = document.getElementById("kpiCoursesCount");
  if (kpiCoursesCount) kpiCoursesCount.textContent = selectedCourses;
  const kpiLabsCount = document.getElementById("kpiLabsCount");
  if (kpiLabsCount) kpiLabsCount.textContent = completedLabs;
}

// Router & Navigation
let currentView = "dashboard";
let currentModuleTarget = null; // { pi, mi }

function navigate(view, params = {}) {
  currentView = view;
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Update sidebar active state
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.dataset.view === view);
  });

  // Close mobile sidebar if open
  document.getElementById("appSidebar").classList.remove("mobile-open");

  // Update Breadcrumbs
  updateBreadcrumbs(view, params);

  // Render Target View
  const main = document.getElementById("mainContent");
  if (view === "dashboard") renderDashboardView(main);
  else if (view === "learning-path") renderLearningPathView(main);
  else if (view === "curriculum") renderCurriculumView(main);
  else if (view === "module-detail") renderModuleDetailView(main, params.pi, params.mi);
  else if (view === "labs") renderLabsView(main);
  else if (view === "courses") renderCoursesView(main);
  else if (view === "planner") renderPlannerView(main);
  else if (view === "capstones") renderCapstonesView(main);
  else if (view === "certs") renderCertsView(main);
  else if (view === "tools") renderToolsView(main);
  else if (view === "notebook") renderNotebookView(main);
  else if (view === "skills") renderSkillsView(main);
  else if (view === "analytics") renderAnalyticsView(main);
  else if (view === "history") renderHistoryView(main);
}

function updateBreadcrumbs(view, params) {
  const bc = document.getElementById("topBreadcrumbs");
  const titles = {
    "dashboard": "Overview",
    "learning-path": "My Learning Path",
    "curriculum": "Full Curriculum",
    "module-detail": "Module Details",
    "labs": "Practical Lab Tracker",
    "courses": "Course Library",
    "planner": "Daily Study Planner",
    "capstones": "Capstone Projects",
    "certs": "Certification Roadmap",
    "tools": "Tools Directory",
    "notebook": "Research Notebook",
    "skills": "Skills Matrix",
    "analytics": "Learning Analytics",
    "history": "Activity History"
  };

  if (view === "module-detail" && params.pi !== undefined && params.mi !== undefined) {
    const mod = DATA.phases[params.pi].modules[params.mi];
    bc.innerHTML = '<span>Curriculum</span><span class="breadcrumb-separator">/</span><span>Phase ' + params.pi + '</span><span class="breadcrumb-separator">/</span><span class="breadcrumb-active">MOD-' + mod.num + ' ' + mod.title + '</span>';
  } else {
    bc.innerHTML = '<span>APT//REDTEAM</span><span class="breadcrumb-separator">/</span><span class="breadcrumb-active">' + (titles[view] || "Platform") + '</span>';
  }
}

function toggleMobileSidebar() {
  document.getElementById("appSidebar").classList.toggle("mobile-open");
}

// -------------------------------------------------------------
// VIEW 1: DASHBOARD
// -------------------------------------------------------------
function renderDashboardView(container) {
  let nextMod = null;
  DATA.phases.some((p, pi) => {
    return p.modules.some((m, mi) => {
      const s = getModuleStats(pi, mi);
      if (s.pct < 100) {
        nextMod = { pi, mi, m, s };
        return true;
      }
      return false;
    });
  });

  const allTasks = getAllTasksList();
  const doneTasks = allTasks.filter(t => appState.tasks[t.key]).length;
  const overallPct = allTasks.length ? Math.round((doneTasks / allTasks.length) * 100) : 0;

  let totalLoggedMins = 0;
  appState.studyLog.forEach(s => totalLoggedMins += (Number(s.minutes) || 0));
  const loggedHours = (totalLoggedMins / 60).toFixed(1);

  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Mission Operations · Tactical Headquarters</div>
        <h1 class="view-title">APT // RED TEAM Learning Operating System</h1>
        <div class="view-description">A systematic, multi-year learning path taking an aspiring operator from core computer architecture and networking to elite adversary emulation and exploit research.</div>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" onclick="continueLearning()">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Continue Learning</span>
        </button>
        <button class="btn btn-secondary" onclick="openNewNoteModal()">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          <span>Quick Research Note</span>
        </button>
      </div>
    </div>

    <!-- Stats Grid -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Curriculum Completion</span>
          <span class="stat-icon"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>
        </div>
        <div class="stat-value" id="kpiOverallPct">\${overallPct}%</div>
        <div class="progress-bar-bg" style="margin-bottom: 6px;">
          <div class="progress-bar-fill" id="kpiOverallBar" style="width: \${overallPct}%"></div>
        </div>
        <div class="stat-subtext" id="kpiTasksTotal">of \${allTasks.length} activities completed</div>
      </div>

      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Tasks Verified</span>
          <span class="stat-icon"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg></span>
        </div>
        <div class="stat-value" id="kpiTasksCount">\${doneTasks}</div>
        <div class="stat-subtext">Across theoretical & practical topics</div>
      </div>

      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Practical Labs</span>
          <span class="stat-icon"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg></span>
        </div>
        <div class="stat-value" id="kpiLabsCount">\${appState.labs.filter(l => l.status === "Completed").length}</div>
        <div class="stat-subtext">\${appState.labs.length} total targets tracked</div>
      </div>

      <div class="stat-card">
        <div class="stat-header">
          <span class="stat-label">Logged Study Time</span>
          <span class="stat-icon"><svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>
        </div>
        <div class="stat-value">\${loggedHours} <span style="font-size: 16px; font-weight: 500; color: var(--text-muted);">hrs</span></div>
        <div class="stat-subtext">\${appState.studyLog.length} verified sessions logged</div>
      </div>
    </div>

    <!-- Active Resume Card + Daily Objectives -->
    <div class="two-col-grid">
      <div class="card">
        <div class="stat-header">
          <span class="stat-label">Continue Learning</span>
          <span class="badge badge-primary">Next Up</span>
        </div>
        \${nextMod ? \`
          <div style="margin: 8px 0 12px;">
            <div style="font-family: var(--font-mono); font-size: 12px; color: var(--accent-secondary); margin-bottom: 4px;">\${DATA.phases[nextMod.pi].name} · MOD-\${nextMod.m.num}</div>
            <h3 style="font-size: 18px; font-weight: 700; color: var(--text); margin-bottom: 6px;">\${nextMod.m.title}</h3>
            <p style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 16px;">\${nextMod.m.whyMatters}</p>
            <div class="progress-meta-row" style="margin-bottom: 6px;">
              <span style="font-size: 12px; color: var(--text-subtle);">Module Progress</span>
              <span style="font-family: var(--font-mono); font-size: 13px; font-weight: 700; color: var(--accent-secondary);">\${nextMod.s.pct}% (\${nextMod.s.done}/\${nextMod.s.total} items)</span>
            </div>
            <div class="progress-bar-bg" style="margin-bottom: 16px;">
              <div class="progress-bar-fill" style="width: \${nextMod.s.pct}%"></div>
            </div>
            <button class="btn btn-primary" onclick="openModuleDetail(\${nextMod.pi}, \${nextMod.mi})">
              <span>Resume Module →</span>
            </button>
          </div>
        \` : \`
          <div style="padding: 24px; text-align: center; color: var(--success);">
            <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="margin: 0 auto 10px;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div style="font-weight: 700; font-size: 16px;">Exceptional Work! All 36 modules completed!</div>
            <p style="font-size: 13px; color: var(--text-muted); margin-top: 6px;">Review capstones, publish research, or begin expert specialisation track.</p>
          </div>
        \`}
      </div>

      <div class="card">
        <div class="stat-header">
          <span class="stat-label">Daily Study Objectives</span>
          <button class="btn btn-secondary btn-sm" onclick="navigate('planner')">Open Planner</button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; background: var(--surface-2); border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge badge-secondary">90 Min</span>
              <span style="font-weight: 600; font-size: 13px;">Core Theory & Architecture</span>
            </div>
            <span style="font-size: 12px; color: var(--text-subtle);">OSTEP / Protocol RFCs</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; background: var(--surface-2); border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge badge-primary">90 Min</span>
              <span style="font-weight: 600; font-size: 13px;">Hands-On Lab Execution</span>
            </div>
            <span style="font-size: 12px; color: var(--text-subtle);">HTB / PortSwigger Labs</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; background: var(--surface-2); border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge badge-warning">60 Min</span>
              <span style="font-weight: 600; font-size: 13px;">Tooling & Code Analysis</span>
            </div>
            <span style="font-size: 12px; color: var(--text-subtle);">Python / C / Assembly</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; padding: 10px 12px; background: var(--surface-2); border-radius: var(--radius-sm); border: 1px solid var(--border);">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge badge-success">30 Min</span>
              <span style="font-weight: 600; font-size: 13px;">Documentation & Evidence</span>
            </div>
            <span style="font-size: 12px; color: var(--text-subtle);">Research Notebook</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Phase Completion Overview Bars -->
    <div class="card" style="margin-bottom: 28px;">
      <div class="stat-header">
        <span class="stat-label">Curriculum Phase Mastery</span>
        <button class="btn btn-secondary btn-sm" onclick="navigate('learning-path')">Explore Roadmap</button>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 10px;">
        \${DATA.phases.map((p, pi) => {
          let pDone = 0, pTotal = 0;
          p.modules.forEach((_, mi) => {
            const s = getModuleStats(pi, mi);
            pDone += s.done;
            pTotal += s.total;
          });
          const pPct = pTotal ? Math.round((pDone / pTotal) * 100) : 0;
          return \`
            <div>
              <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px; margin-bottom: 6px;">
                <span style="font-weight: 600; color: var(--text); cursor: pointer;" onclick="navigate('curriculum', { phase: \${pi} })">\${p.name}</span>
                <span style="font-family: var(--font-mono); font-size: 12px; color: var(--text-muted);">\${pPct}% · \${pDone}/\${pTotal} tasks</span>
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: \${pPct}%"></div>
              </div>
            </div>
          \`;
        }).join("")}
      </div>
    </div>

    <!-- Recent Activity Feed -->
    <div class="card">
      <div class="stat-header">
        <span class="stat-label">Recent Activity Log</span>
        <button class="btn btn-secondary btn-sm" onclick="navigate('history')">View Full History</button>
      </div>
      <div class="timeline" style="margin-top: 14px;">
        \${appState.activityLog.length ? appState.activityLog.slice(0, 6).map(act => \`
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-meta">\${new Date(act.timestamp).toLocaleString()} · \${act.type.toUpperCase()}</div>
              <div style="font-size: 13px; font-weight: 600; color: var(--text);">\${act.title}</div>
              \${act.meta ? \`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">\${act.meta}</div>\` : ''}
            </div>
          </div>
        \`).join("") : \`
          <div style="padding: 20px; text-align: center; color: var(--text-subtle); font-size: 13px;">
            No activities recorded yet. Complete topics, mark labs, or log study time to populate this verified activity log.
          </div>
        \`}
      </div>
    </div>
  \`;

  container.innerHTML = html;
}

function continueLearning() {
  let target = null;
  DATA.phases.some((p, pi) => {
    return p.modules.some((m, mi) => {
      if (getModuleStats(pi, mi).pct < 100) {
        target = { pi, mi };
        return true;
      }
      return false;
    });
  });
  if (target) {
    openModuleDetail(target.pi, target.mi);
  } else {
    navigate("curriculum");
  }
}

// -------------------------------------------------------------
// VIEW 2: VISUAL LEARNING PATH / ROADMAP
// -------------------------------------------------------------
function renderLearningPathView(container) {
  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Adversary Emulation Roadmap</div>
        <h1 class="view-title">My Structured Learning Path</h1>
        <div class="view-description">Follow the structured progression from low-level systems fundamentals to autonomous threat research and complex multi-forest adversary emulation.</div>
      </div>
    </div>

    <div class="roadmap-container">
      \${DATA.phases.map((p, pi) => {
        let pDone = 0, pTotal = 0, pModsDone = 0;
        p.modules.forEach((_, mi) => {
          const s = getModuleStats(pi, mi);
          pDone += s.done;
          pTotal += s.total;
          if (s.pct === 100) pModsDone++;
        });
        const pPct = pTotal ? Math.round((pDone / pTotal) * 100) : 0;
        const statusClass = pPct === 100 ? "completed" : (pPct > 0 ? "in-progress" : "");
        const statusLabel = pPct === 100 ? "Completed" : (pPct > 0 ? "In Progress" : "Available");

        return \`
          <div class="roadmap-phase-card" id="phaseCard_\${pi}">
            <div class="roadmap-phase-header" onclick="togglePhaseCollapse(\${pi})">
              <div class="phase-title-group">
                <span class="phase-status-badge \${statusClass}">\${statusLabel}</span>
                <div>
                  <div class="phase-name">\${p.name}</div>
                  <div class="phase-meta-info">\${p.period} · \${p.goal}</div>
                </div>
              </div>
              <div class="phase-right-meta">
                <span class="phase-pct-text">\${pPct}% (\${pModsDone}/\${p.modules.length} Modules)</span>
                <svg class="phase-chevron" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </div>
            </div>
            <div class="roadmap-phase-body">
              \${p.modules.map((m, mi) => {
                const s = getModuleStats(pi, mi);
                return \`
                  <div class="module-card" onclick="openModuleDetail(\${pi}, \${mi})">
                    <div class="module-card-top">
                      <span class="module-id-tag">MOD-\${m.num}</span>
                      <span class="badge \${s.pct === 100 ? 'badge-success' : (s.pct > 0 ? 'badge-primary' : '')}">\${s.pct}%</span>
                    </div>
                    <div class="module-title">\${m.title}</div>
                    <div class="module-desc">\${m.whyMatters}</div>
                    <div class="module-card-bottom">
                      <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: \${s.pct}%"></div>
                      </div>
                      <div class="module-progress-row">
                        <span>\${s.done} of \${s.total} items</span>
                        <span>Open Details →</span>
                      </div>
                    </div>
                  </div>
                \`;
              }).join("")}
            </div>
          </div>
        \`;
      }).join("")}
    </div>
  \`;
  container.innerHTML = html;
}

function togglePhaseCollapse(pi) {
  const el = document.getElementById("phaseCard_" + pi);
  if (el) el.classList.toggle("collapsed");
}

// -------------------------------------------------------------
// VIEW 3: FULL CURRICULUM GRID WITH FILTERS
// -------------------------------------------------------------
function renderCurriculumView(container) {
  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Complete Curriculum Database</div>
        <h1 class="view-title">36 Technical Learning Modules</h1>
        <div class="view-description">Filter across domains, search specific tools, technologies, and protocol keywords, and jump into in-depth technical checklists.</div>
      </div>
    </div>

    <div class="toolbar-row">
      <input type="text" class="input-search" id="curriculumSearch" placeholder="Search modules, concepts, protocols (e.g. Kerberos, PE, Sysmon, ROP, XSS)..." oninput="filterCurriculum()">
      <select class="select-filter" id="curriculumPhaseFilter" onchange="filterCurriculum()">
        <option value="all">All Learning Phases</option>
        \${DATA.phases.map((p, i) => \`<option value="\${i}">\${p.name}</option>\`).join("")}
      </select>
      <select class="select-filter" id="curriculumStatusFilter" onchange="filterCurriculum()">
        <option value="all">All Statuses</option>
        <option value="not">Not Started</option>
        <option value="progress">In Progress</option>
        <option value="done">Completed</option>
      </select>
    </div>

    <div id="curriculumModulesGrid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 16px;">
      <!-- Populated by filterCurriculum() -->
    </div>
  \`;
  container.innerHTML = html;
  filterCurriculum();
}

function filterCurriculum() {
  const query = (document.getElementById("curriculumSearch")?.value || "").toLowerCase();
  const phaseVal = document.getElementById("curriculumPhaseFilter")?.value || "all";
  const statusVal = document.getElementById("curriculumStatusFilter")?.value || "all";
  const grid = document.getElementById("curriculumModulesGrid");
  if (!grid) return;

  const matches = [];
  DATA.phases.forEach((p, pi) => {
    if (phaseVal !== "all" && phaseVal !== String(pi)) return;
    p.modules.forEach((m, mi) => {
      const s = getModuleStats(pi, mi);
      if (statusVal === "done" && s.pct !== 100) return;
      if (statusVal === "not" && s.done !== 0) return;
      if (statusVal === "progress" && (s.done === 0 || s.pct === 100)) return;

      const searchableText = (m.title + " " + m.whyMatters + " " + m.topicsStr + " " + (m.tools ? m.tools.join(" ") : "")).toLowerCase();
      if (query && !searchableText.includes(query)) return;

      matches.push({ pi, mi, m, s, phaseName: p.name });
    });
  });

  if (!matches.length) {
    grid.innerHTML = '<div style="grid-column: 1/-1; padding: 48px; text-align: center; color: var(--text-subtle); background: var(--surface-1); border-radius: var(--radius-lg); border: 1px dashed var(--border);">No cybersecurity modules match the specified search or filter criteria.</div>';
    return;
  }

  grid.innerHTML = matches.map(item => \`
    <div class="module-card" onclick="openModuleDetail(\${item.pi}, \${item.mi})">
      <div class="module-card-top">
        <span class="module-id-tag">MOD-\${item.m.num}</span>
        <span class="badge \${item.s.pct === 100 ? 'badge-success' : (item.s.pct > 0 ? 'badge-primary' : '')}">\${item.s.pct}%</span>
      </div>
      <div style="font-size: 11px; color: var(--text-subtle); font-family: var(--font-mono); margin-bottom: 4px;">\${item.phaseName}</div>
      <div class="module-title">\${item.m.title}</div>
      <div class="module-desc">\${item.m.whyMatters}</div>
      <div class="module-card-bottom">
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: \${item.s.pct}%"></div>
        </div>
        <div class="module-progress-row">
          <span>\${item.s.done} of \${item.s.total} verified</span>
          <span>View Module Details →</span>
        </div>
      </div>
    </div>
  \`).join("");
}

// -------------------------------------------------------------
// VIEW 4: MODULE DETAIL PAGE (THE 20-POINT CURRICULUM ENGINE)
// -------------------------------------------------------------
function openModuleDetail(pi, mi) {
  navigate("module-detail", { pi, mi });
}

function renderModuleDetailView(container, pi, mi) {
  if (pi === undefined || mi === undefined || !DATA.phases[pi] || !DATA.phases[pi].modules[mi]) {
    container.innerHTML = '<div style="padding: 40px; text-align: center;">Module not found. <button class="btn btn-secondary" onclick="navigate(\\'curriculum\\')">Back to Curriculum</button></div>';
    return;
  }

  const p = DATA.phases[pi];
  const m = p.modules[mi];
  const s = getModuleStats(pi, mi);

  const topics = m.topicsStr.split("; ");
  const practicalTasks = m.practicalStr.split("; ");
  const coursesList = m.coursesStr.split(". ").filter(Boolean);

  const prevMi = mi > 0 ? mi - 1 : (pi > 0 ? DATA.phases[pi - 1].modules.length - 1 : null);
  const prevPi = mi > 0 ? pi : (pi > 0 ? pi - 1 : null);

  const nextMi = mi < p.modules.length - 1 ? mi + 1 : (pi < DATA.phases.length - 1 ? 0 : null);
  const nextPi = mi < p.modules.length - 1 ? pi : (pi < DATA.phases.length - 1 ? pi + 1 : null);

  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">\${p.name} · \${p.period}</div>
        <h1 class="view-title">MOD-\${m.num}: \${m.title}</h1>
        <div class="view-description">\${m.whyMatters}</div>
      </div>
      <div class="view-actions">
        <button class="btn btn-secondary" onclick="navigate('curriculum')">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          <span>Curriculum</span>
        </button>
        \${prevPi !== null ? \`<button class="btn btn-secondary" onclick="openModuleDetail(\${prevPi}, \${prevMi})">← Previous</button>\` : ''}
        \${nextPi !== null ? \`<button class="btn btn-primary" onclick="openModuleDetail(\${nextPi}, \${nextMi})">Next Module →</button>\` : ''}
      </div>
    </div>

    <div class="module-detail-layout">
      <!-- Main Content Column -->
      <div class="module-main-col">
        <!-- 1 & 2: Overview & Why This Topic Matters -->
        <div class="section-card">
          <div class="section-title">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span>1. Module Overview & Technical Importance</span>
          </div>
          <div class="prose">
            <p>\${m.whyMatters}</p>
            <p>Mastery of this module equips you with foundational and operational knowledge essential for threat hunting, digital forensics, defensive engineering, and adversary emulation.</p>
          </div>
        </div>

        <!-- 3: Subtopics & Technical Deep Dive -->
        \${m.subtopics ? \`
          <div class="section-card">
            <div class="section-title">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              <span>2. Technical Deep Dive & Key Concepts</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 14px;">
              \${m.subtopics.map(st => \`
                <div style="background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 14px;">
                  <div style="font-weight: 700; color: var(--accent-secondary); margin-bottom: 4px;">\${st.title}</div>
                  <div style="font-size: 13px; color: #cbd5e1; line-height: 1.5;">\${st.detail}</div>
                </div>
              \`).join("")}
            </div>
          </div>
        \` : ''}

        <!-- 4: Complete Topic Breakdown (Checklist) -->
        <div class="section-card">
          <div class="section-title">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/></svg>
            <span>3. Theoretical Knowledge Checklist</span>
          </div>
          <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">Tick a topic only after you can explain the architecture, protocol nuances, and security boundaries without referring to notes.</p>
          <div class="checklist-container">
            \${topics.map((t, i) => {
              const k = pi + "|" + mi + "|" + i;
              const checked = !!appState.tasks[k];
              return \`
                <label class="check-item \${checked ? 'done' : ''}">
                  <input type="checkbox" \${checked ? 'checked' : ''} onchange="toggleModuleCheck('\${k}', this.checked, \${pi}, \${mi})">
                  <span class="check-item-text">\${t}</span>
                </label>
              \`;
            }).join("")}
          </div>
        </div>

        <!-- 5: Practical Demonstrations & Guided Labs Checklist -->
        <div class="section-card">
          <div class="section-title">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/></svg>
            <span>4. Hands-on Practical Tasks & Evidence Checklist</span>
          </div>
          <p style="font-size: 12px; color: var(--text-muted); margin-bottom: 12px;">Only mark these after executing the tasks in an authorized lab environment and gathering command output or evidence.</p>
          <div class="checklist-container">
            \${practicalTasks.map((t, i) => {
              const k = pi + "|" + mi + "|" + (topics.length + i);
              const checked = !!appState.tasks[k];
              return \`
                <label class="check-item \${checked ? 'done' : ''}">
                  <input type="checkbox" \${checked ? 'checked' : ''} onchange="toggleModuleCheck('\${k}', this.checked, \${pi}, \${mi})">
                  <span class="check-item-text">\${t}</span>
                </label>
              \`;
            }).join("")}
          </div>
        </div>

        <!-- 6: Commands & Technical Cheatsheet -->
        \${m.commands && m.commands.length ? \`
          <div class="section-card">
            <div class="section-title">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              <span>5. Technical Command Reference & Snippets</span>
            </div>
            <div>
              \${m.commands.map(c => \`
                <div class="code-block">
                  <div>
                    <code>\${escapeHtml(c.cmd)}</code>
                    <div style="font-size: 11px; color: var(--text-subtle); margin-top: 4px; font-family: var(--font-sans);">\${c.desc}</div>
                  </div>
                  <button class="copy-btn" onclick="copyToClipboard('\${escapeJs(c.cmd)}')">Copy</button>
                </div>
              \`).join("")}
            </div>
          </div>
        \` : ''}

        <!-- 7: Knowledge Assessment Questions -->
        \${m.knowledgeAssessment && m.knowledgeAssessment.length ? \`
          <div class="section-card">
            <div class="section-title">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span>6. Technical Comprehension Assessment</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              \${m.knowledgeAssessment.map((q, i) => \`
                <div style="background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 12px 14px; font-size: 13px;">
                  <span style="font-weight: 700; color: var(--accent-primary); margin-right: 6px;">Q\${i+1}:</span>
                  <span style="color: var(--text);">\${q}</span>
                </div>
              \`).join("")}
            </div>
          </div>
        \` : ''}

        <!-- 8: Required Deliverable & Completion Criteria -->
        <div class="section-card">
          <div class="section-title">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
            <span>7. Required Portfolio Deliverable & Completion Criteria</span>
          </div>
          <div class="prose">
            <p><strong>Deliverable:</strong> \${m.deliverable}</p>
            <p><strong>Standard:</strong> Keep documented evidence, commands executed, PCAP files or screenshots, and a concise write-up in your local Research Notebook or Git portfolio repository before marking this module fully mastered.</p>
          </div>
        </div>
      </div>

      <!-- Sidebar Column -->
      <div class="module-side-col">
        <!-- Progress Summary Widget -->
        <div class="section-card">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-subtle); letter-spacing: 1px; margin-bottom: 6px;">Module Status</div>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 8px;">
            <span style="font-size: 26px; font-weight: 800; font-family: var(--font-mono); color: var(--accent-secondary);">\${s.pct}%</span>
            <span style="font-size: 12px; color: var(--text-muted);">\${s.done} of \${s.total} items</span>
          </div>
          <div class="progress-bar-bg" style="margin-bottom: 16px;">
            <div class="progress-bar-fill" style="width: \${s.pct}%"></div>
          </div>
          <button class="btn btn-secondary btn-sm" style="width: 100%; justify-content: center;" onclick="quickNoteForModule('\${m.title}')">
            + New Note for this Module
          </button>
        </div>

        <!-- Tools To Learn -->
        \${m.tools && m.tools.length ? \`
          <div class="section-card">
            <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-subtle); letter-spacing: 1px; margin-bottom: 10px;">Tools to Master</div>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              \${m.tools.map(t => \`<span class="badge badge-secondary">\${t}</span>\`).join("")}
            </div>
          </div>
        \` : ''}

        <!-- Recommended Learning Resources & Documentation -->
        <div class="section-card">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-subtle); letter-spacing: 1px; margin-bottom: 10px;">Official Documentation & Sites</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            \${m.urls && m.urls.length ? m.urls.map(u => \`
              <a href="\${u.url}" target="_blank" rel="noopener noreferrer" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 10px; background: var(--surface-2); border-radius: var(--radius-sm); border: 1px solid var(--border); font-size: 12px; text-decoration: none;">
                <span style="color: var(--text); font-weight: 500;">\${u.name}</span>
                <span style="color: var(--accent-secondary);">↗</span>
              </a>
            \`).join("") : ''}
          </div>
        </div>

        <!-- Recommended Courses -->
        <div class="section-card">
          <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-subtle); letter-spacing: 1px; margin-bottom: 10px;">Curated Course Alignment</div>
          <div style="font-size: 12px; color: var(--text-muted); line-height: 1.5;">
            \${coursesList.map(c => \`<div style="margin-bottom: 6px; padding-bottom: 6px; border-bottom: 1px solid var(--border);">• \${c}</div>\`).join("")}
          </div>
        </div>
      </div>
    </div>
  \`;

  container.innerHTML = html;
}

function toggleModuleCheck(k, v, pi, mi) {
  appState.tasks[k] = v;
  const mod = DATA.phases[pi].modules[mi];
  logActivity("task", (v ? "Completed" : "Unchecked") + " learning task in MOD-" + mod.num, mod.title);
  saveState();
  // Refresh detail view
  renderModuleDetailView(document.getElementById("mainContent"), pi, mi);
}

function quickNoteForModule(modTitle) {
  navigate("notebook");
  openNewNoteModal("Research Note: " + modTitle);
}

// -------------------------------------------------------------
// VIEW 5: LAB TRACKER
// -------------------------------------------------------------
function renderLabsView(container) {
  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Hands-On Practical Management</div>
        <h1 class="view-title">Practical Lab Tracker</h1>
        <div class="view-description">Track hands-on machines, CTF targets, and cloud ranges across Hack The Box, TryHackMe, PortSwigger, and CyberDefenders.</div>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" onclick="openAddLabModal()">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          <span>Add Custom Lab Target</span>
        </button>
      </div>
    </div>

    <!-- Toolbar -->
    <div class="toolbar-row">
      <input type="text" class="input-search" id="labSearch" placeholder="Search lab name, target domain, or exploitation skill..." oninput="filterLabsTable()">
      <select class="select-filter" id="labPlatformFilter" onchange="filterLabsTable()">
        <option value="all">All Platforms</option>
        <option value="Hack The Box">Hack The Box</option>
        <option value="TryHackMe">TryHackMe</option>
        <option value="PortSwigger">PortSwigger</option>
        <option value="CyberDefenders">CyberDefenders</option>
        <option value="Blue Team Labs Online">Blue Team Labs Online</option>
      </select>
      <select class="select-filter" id="labStatusFilter" onchange="filterLabsTable()">
        <option value="all">All Statuses</option>
        <option value="Planned">Planned</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        <option value="Revisit">Revisit</option>
        <option value="Stuck">Stuck</option>
      </select>
    </div>

    <!-- Table Container -->
    <div class="data-table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Lab Target</th>
            <th>Platform</th>
            <th>Difficulty</th>
            <th>Domain / Skills</th>
            <th>Status</th>
            <th>Time Spent</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="labsTableBody">
          <!-- Populated by filterLabsTable() -->
        </tbody>
      </table>
    </div>
  \`;
  container.innerHTML = html;
  filterLabsTable();
}

function filterLabsTable() {
  const query = (document.getElementById("labSearch")?.value || "").toLowerCase();
  const platform = document.getElementById("labPlatformFilter")?.value || "all";
  const status = document.getElementById("labStatusFilter")?.value || "all";
  const tbody = document.getElementById("labsTableBody");
  if (!tbody) return;

  const filtered = appState.labs.filter(l => {
    if (platform !== "all" && l.platform !== platform) return false;
    if (status !== "all" && l.status !== status) return false;
    const txt = (l.name + " " + l.domain + " " + (l.skill || "") + " " + (l.notes || "")).toLowerCase();
    if (query && !txt.includes(query)) return false;
    return true;
  });

  if (!filtered.length) {
    tbody.innerHTML = '<tr><td colspan="7" style="text-align: center; color: var(--text-subtle); padding: 32px;">No practical labs match your criteria.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(l => {
    const statusBadges = {
      "Completed": "badge-success",
      "In Progress": "badge-primary",
      "Planned": "",
      "Revisit": "badge-warning",
      "Stuck": "badge-danger"
    };

    return \`
      <tr>
        <td>
          <div style="font-weight: 700; color: var(--text);">\${escapeHtml(l.name)}</div>
          \${l.writeupUrl ? \`<a href="\${escapeHtml(l.writeupUrl)}" target="_blank" rel="noopener" style="font-size: 11px;">View Write-up ↗</a>\` : ''}
        </td>
        <td><span class="badge">\${escapeHtml(l.platform)}</span></td>
        <td><span style="font-size: 12px; color: var(--text-muted);">\${escapeHtml(l.difficulty || "Standard")}</span></td>
        <td>
          <div style="font-size: 13px; font-weight: 500;">\${escapeHtml(l.domain)}</div>
          <div style="font-size: 11px; color: var(--text-subtle);">\${escapeHtml(l.skill || "")}</div>
        </td>
        <td><span class="badge \${statusBadges[l.status] || ''}">\${l.status}</span></td>
        <td style="font-family: var(--font-mono); font-size: 12px;">\${l.timeSpent ? l.timeSpent + ' min' : '—'}</td>
        <td>
          <div style="display: flex; gap: 6px;">
            <button class="btn btn-secondary btn-sm" onclick="editLabEntry('\${l.id}')">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteLabEntry('\${l.id}')">Delete</button>
          </div>
        </td>
      </tr>
    \`;
  }).join("");
}

function openAddLabModal() {
  document.getElementById("labModalTitle").textContent = "Add Hands-on Lab Target";
  document.getElementById("labIdInput").value = "";
  document.getElementById("labNameInput").value = "";
  document.getElementById("labDomainInput").value = "";
  document.getElementById("labTimeInput").value = "0";
  document.getElementById("labWriteupInput").value = "";
  document.getElementById("labNotesInput").value = "";
  document.getElementById("labStatusInput").value = "Planned";
  openModal("labModal");
}

function editLabEntry(id) {
  const lab = appState.labs.find(l => l.id === id);
  if (!lab) return;
  document.getElementById("labModalTitle").textContent = "Edit Hands-on Lab Target";
  document.getElementById("labIdInput").value = lab.id;
  document.getElementById("labNameInput").value = lab.name;
  document.getElementById("labPlatformInput").value = lab.platform;
  document.getElementById("labDifficultyInput").value = lab.difficulty;
  document.getElementById("labDomainInput").value = lab.domain;
  document.getElementById("labStatusInput").value = lab.status;
  document.getElementById("labTimeInput").value = lab.timeSpent || 0;
  document.getElementById("labWriteupInput").value = lab.writeupUrl || "";
  document.getElementById("labNotesInput").value = lab.notes || "";
  openModal("labModal");
}

function saveLabEntry() {
  const id = document.getElementById("labIdInput").value;
  const name = document.getElementById("labNameInput").value.trim();
  if (!name) {
    alert("Please provide a lab name.");
    return;
  }

  const labObj = {
    id: id || ("lab-" + Date.now()),
    name: name,
    platform: document.getElementById("labPlatformInput").value,
    difficulty: document.getElementById("labDifficultyInput").value,
    domain: document.getElementById("labDomainInput").value.trim() || "General",
    status: document.getElementById("labStatusInput").value,
    timeSpent: Number(document.getElementById("labTimeInput").value) || 0,
    writeupUrl: document.getElementById("labWriteupInput").value.trim(),
    notes: document.getElementById("labNotesInput").value.trim(),
    dateStarted: id ? undefined : new Date().toISOString().split("T")[0]
  };

  if (id) {
    const idx = appState.labs.findIndex(l => l.id === id);
    if (idx !== -1) {
      if (labObj.status === "Completed" && appState.labs[idx].status !== "Completed") {
        labObj.dateCompleted = new Date().toISOString().split("T")[0];
      }
      appState.labs[idx] = Object.assign({}, appState.labs[idx], labObj);
      logActivity("lab", "Updated lab target: " + name, "Status: " + labObj.status);
    }
  } else {
    appState.labs.unshift(labObj);
    logActivity("lab", "Added new practical lab target: " + name, labObj.platform);
  }

  saveState();
  closeModal("labModal");
  filterLabsTable();
  showToast("Lab target saved successfully.");
}

function deleteLabEntry(id) {
  if (!confirm("Are you sure you want to remove this lab entry?")) return;
  appState.labs = appState.labs.filter(l => l.id !== id);
  logActivity("lab", "Removed lab entry", id);
  saveState();
  filterLabsTable();
  showToast("Lab entry deleted.");
}

// -------------------------------------------------------------
// VIEW 6: COURSE LIBRARY
// -------------------------------------------------------------
function renderCoursesView(container) {
  const providers = [...new Set(DATA.courses.map(c => c.provider))];

  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Curated Training Catalog</div>
        <h1 class="view-title">Course & Academy Library</h1>
        <div class="view-description">Browse 90+ verified courses across Hackers-Arise, HTB Academy, TryHackMe, PortSwigger, OffSec, and SANS. Select courses for your active curriculum.</div>
      </div>
    </div>

    <div class="toolbar-row">
      <input type="text" class="input-search" id="courseSearch" placeholder="Search course title, module, or domain (e.g. Active Directory, Python, Wireshark)..." oninput="filterCoursesList()">
      <select class="select-filter" id="courseProviderFilter" onchange="filterCoursesList()">
        <option value="all">All Providers</option>
        \${providers.map(p => \`<option value="\${p}">\${p}</option>\`).join("")}
      </select>
      <select class="select-filter" id="courseStatusFilter" onchange="filterCoursesList()">
        <option value="all">All Statuses</option>
        <option value="selected">Selected for Study</option>
        <option value="completed">Completed</option>
        <option value="unselected">Unselected</option>
      </select>
    </div>

    <div id="coursesContainer" style="display: flex; flex-direction: column; gap: 10px;">
      <!-- Populated by filterCoursesList() -->
    </div>
  \`;
  container.innerHTML = html;
  filterCoursesList();
}

function filterCoursesList() {
  const q = (document.getElementById("courseSearch")?.value || "").toLowerCase();
  const provider = document.getElementById("courseProviderFilter")?.value || "all";
  const status = document.getElementById("courseStatusFilter")?.value || "all";
  const container = document.getElementById("coursesContainer");
  if (!container) return;

  const matches = [];
  DATA.courses.forEach((c, idx) => {
    const s = appState.courses[idx] || {};
    if (provider !== "all" && c.provider !== provider) return;
    if (status === "selected" && !s.selected) return;
    if (status === "completed" && !s.done) return;
    if (status === "unselected" && s.selected) return;

    const txt = (c.name + " " + c.provider + " " + c.modules + " " + c.domain).toLowerCase();
    if (q && !txt.includes(q)) return;

    matches.push({ c, idx, s });
  });

  if (!matches.length) {
    container.innerHTML = '<div style="padding: 40px; text-align: center; color: var(--text-subtle); background: var(--surface-1); border-radius: var(--radius-lg); border: 1px dashed var(--border);">No courses match the current filters.</div>';
    return;
  }

  container.innerHTML = matches.map(item => {
    const isSelected = !!item.s.selected;
    const isDone = !!item.s.done;

    return \`
      <div style="background: var(--surface-1); border: 1px solid var(--border); border-radius: var(--radius-md); padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; gap: 16px;">
        <div style="display: flex; align-items: flex-start; gap: 14px; flex: 1;">
          <input type="checkbox" style="margin-top: 4px; width: 17px; height: 17px; accent-color: var(--accent-primary); cursor: pointer;" \${isSelected ? 'checked' : ''} onchange="toggleCourseSelection(\${item.idx}, this.checked)">
          <div>
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
              <span style="font-weight: 700; font-size: 14px; color: var(--text);">\${escapeHtml(item.c.name)}</span>
              \${item.c.free ? '<span class="badge badge-success">Free Resource</span>' : ''}
            </div>
            <div style="font-size: 12px; color: var(--text-muted);">
              <span style="font-weight: 600; color: var(--text-subtle);">\${escapeHtml(item.c.provider)}</span> · 
              <span>\${escapeHtml(item.c.modules)}</span> · 
              <span class="badge" style="font-size: 10px;">\${escapeHtml(item.c.domain)}</span>
            </div>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 14px;">
          <label style="display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-muted); cursor: pointer;">
            <input type="checkbox" style="width: 15px; height: 15px; accent-color: var(--success);" \${isDone ? 'checked' : ''} \${!isSelected ? 'disabled' : ''} onchange="toggleCourseCompleted(\${item.idx}, this.checked)">
            <span>Completed</span>
          </label>
          \${item.c.url ? \`<a href="\${item.c.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size: 11px;">Open ↗</a>\` : ''}
        </div>
      </div>
    \`;
  }).join("");
}

function toggleCourseSelection(idx, selected) {
  appState.courses[idx] = appState.courses[idx] || {};
  appState.courses[idx].selected = selected;
  if (!selected) appState.courses[idx].done = false;
  const course = DATA.courses[idx];
  logActivity("course", (selected ? "Selected" : "Deselected") + " course: " + course.name, course.provider);
  saveState();
  filterCoursesList();
}

function toggleCourseCompleted(idx, done) {
  appState.courses[idx] = appState.courses[idx] || {};
  appState.courses[idx].done = done;
  const course = DATA.courses[idx];
  logActivity("course", (done ? "Marked completed: " : "Unmarked: ") + course.name, course.provider);
  saveState();
  filterCoursesList();
}

// -------------------------------------------------------------
// VIEW 7: DAILY STUDY PLANNER & TIMER
// -------------------------------------------------------------
function renderPlannerView(container) {
  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Discipline & Time Allocation</div>
        <h1 class="view-title">Study Planner & Routine</h1>
        <div class="view-description">Maintain a disciplined 5–6 hour daily training routine combining theory, system internals, guided labs, independent execution, and reporting.</div>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" onclick="openLogTimerModal()">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <span>Log Study Session</span>
        </button>
      </div>
    </div>

    <!-- Suggested Time Blocks -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Theory / Architecture</div>
        <div class="stat-value">90 <span style="font-size: 15px; font-weight: 500; color: var(--text-muted);">min</span></div>
        <div class="stat-subtext">OSTEP, RFCs, Windows Internals</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">System Internals</div>
        <div class="stat-value">60 <span style="font-size: 15px; font-weight: 500; color: var(--text-muted);">min</span></div>
        <div class="stat-subtext">Sysinternals, strace, API docs</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Guided Practical Lab</div>
        <div class="stat-value">90 <span style="font-size: 15px; font-weight: 500; color: var(--text-muted);">min</span></div>
        <div class="stat-subtext">HTB, PortSwigger, CyberDefenders</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Independent Work & Notes</div>
        <div class="stat-value">60 <span style="font-size: 15px; font-weight: 500; color: var(--text-muted);">min</span></div>
        <div class="stat-subtext">Write-ups, scripts, Sigma rules</div>
      </div>
    </div>

    <!-- 90-Day Foundation Plan -->
    <div class="card" style="margin-bottom: 24px;">
      <div class="stat-header">
        <span class="stat-label">90-Day Foundation Master Plan</span>
        <span class="badge badge-secondary">First 3 Months Milestone</span>
      </div>
      <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 16px;">Tick each 3-day block after completing the hands-on practical deliverable.</p>
      <div class="checklist-container">
        \${DATA.starterPlan.map((step, idx) => {
          const k = "starter" + idx;
          const checked = !!appState.tasks[k];
          return \`
            <label class="check-item \${checked ? 'done' : ''}">
              <input type="checkbox" \${checked ? 'checked' : ''} onchange="toggleStarterCheck('\${k}', this.checked, '\${step.period}')">
              <div class="check-item-text">
                <span style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-secondary); margin-right: 6px;">\${step.period}:</span>
                <span>\${step.task}</span>
                <span style="display: block; font-size: 11px; color: var(--text-subtle); margin-top: 2px;">Deliverable: \${step.deliverable}</span>
              </div>
            </label>
          \`;
        }).join("")}
      </div>
    </div>

    <!-- Logged Sessions Table -->
    <div class="card">
      <div class="stat-header">
        <span class="stat-label">Verified Study Log History</span>
      </div>
      <div class="data-table-container" style="margin-top: 10px;">
        <table class="data-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Category</th>
              <th>Module / Focus</th>
              <th>Duration</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            \${appState.studyLog.length ? appState.studyLog.slice(0, 15).map(s => \`
              <tr>
                <td style="font-family: var(--font-mono); font-size: 12px;">\${s.date}</td>
                <td><span class="badge">\${escapeHtml(s.category)}</span></td>
                <td style="font-weight: 600;">\${escapeHtml(s.topic || "General")}</td>
                <td style="font-family: var(--font-mono); font-weight: 700; color: var(--accent-secondary);">\${s.minutes} min</td>
                <td style="font-size: 12px; color: var(--text-muted);">\${escapeHtml(s.notes || "—")}</td>
              </tr>
            \`).join("") : '<tr><td colspan="5" style="text-align: center; color: var(--text-subtle); padding: 20px;">No sessions logged yet. Use the top timer or Log Session button to record study time.</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  \`;
  container.innerHTML = html;
}

function toggleStarterCheck(k, checked, period) {
  appState.tasks[k] = checked;
  logActivity("planner", (checked ? "Completed" : "Unmarked") + " 90-day milestone: " + period);
  saveState();
  renderPlannerView(document.getElementById("mainContent"));
}

// -------------------------------------------------------------
// VIEW 8: CAPSTONE PROJECTS
// -------------------------------------------------------------
function renderCapstonesView(container) {
  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Proof of Real-World Capability</div>
        <h1 class="view-title">Portfolio Capstone Projects</h1>
        <div class="view-description">Four exhaustive, multi-discipline capstones that transform theoretical knowledge and isolated exercises into rigorous, demonstrable cybersecurity tradecraft.</div>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 16px;">
      \${DATA.capstones.map((c, i) => {
        const k = "cap" + i;
        const checked = !!appState.tasks[k];
        return \`
          <div class="card" style="border-left: 4px solid \${checked ? 'var(--success)' : 'var(--accent-primary)'};">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px;">
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
                  <span class="badge \${checked ? 'badge-success' : 'badge-primary'}">Capstone 0\${i+1}</span>
                  <h3 style="font-size: 17px; font-weight: 700; color: var(--text);">\${c.title}</h3>
                </div>
                <p style="font-size: 13px; color: #cbd5e1; line-height: 1.5; margin-bottom: 12px;">\${c.desc}</p>
                <div style="font-size: 12px; color: var(--text-subtle);">
                  Requires formal PDF report, raw logs/PCAPs, reproducible code snippets, and executive summary.
                </div>
              </div>
              <label style="display: flex; align-items: center; gap: 8px; background: var(--surface-2); padding: 8px 14px; border-radius: var(--radius-sm); border: 1px solid var(--border); cursor: pointer;">
                <input type="checkbox" style="width: 17px; height: 17px; accent-color: var(--success);" \${checked ? 'checked' : ''} onchange="toggleCapstoneCheck('\${k}', this.checked, '\${escapeJs(c.title)}')">
                <span style="font-weight: 600; font-size: 13px; color: \${checked ? 'var(--success)' : 'var(--text)'};">\${checked ? 'Mastered' : 'Mark Complete'}</span>
              </label>
            </div>
          </div>
        \`;
      }).join("")}
    </div>
  \`;
  container.innerHTML = html;
}

function toggleCapstoneCheck(k, v, title) {
  appState.tasks[k] = v;
  logActivity("capstone", (v ? "Achieved" : "Unmarked") + " Capstone Milestone: " + title);
  saveState();
  renderCapstonesView(document.getElementById("mainContent"));
}

// -------------------------------------------------------------
// VIEW 9: CERTIFICATION ROADMAP
// -------------------------------------------------------------
function renderCertsView(container) {
  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Credentialing & Milestone Validation</div>
        <h1 class="view-title">Certification Roadmap</h1>
        <div class="view-description">A structured, realistic evaluation of industry certifications across technical domains. Track preparation status, required prerequisites, and official exam requirements.</div>
      </div>
    </div>

    <div style="display: flex; flex-direction: column; gap: 14px;">
      \${DATA.certs.map(cert => {
        const userCert = appState.certs[cert.id] || { status: "Planned" };
        const statusColors = {
          "Passed": "badge-success",
          "Booked": "badge-warning",
          "Preparing": "badge-primary",
          "Planned": "",
          "Deferred": "badge-danger"
        };

        return \`
          <div class="card" style="padding: 18px 22px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap;">
              <div>
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 4px;">
                  <span style="font-weight: 800; font-size: 16px; color: var(--text);">\${cert.name}</span>
                  <span class="badge">\${cert.org}</span>
                  <span class="badge badge-secondary">\${cert.stage}</span>
                </div>
                <div style="font-size: 13px; color: var(--text-muted); margin-bottom: 8px;">\${cert.domain}</div>
              </div>

              <div style="display: flex; align-items: center; gap: 10px;">
                <select class="form-select" style="width: auto; padding: 5px 10px; font-size: 12px;" onchange="updateCertStatus('\${cert.id}', this.value, '\${cert.name}')">
                  \${["Planned", "Preparing", "Booked", "Passed", "Deferred"].map(opt => \`
                    <option value="\${opt}" \${userCert.status === opt ? 'selected' : ''}>\${opt}</option>
                  \`).join("")}
                </select>
                <a href="\${cert.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size: 11px;">Official Site ↗</a>
              </div>
            </div>

            <div class="two-col-grid" style="margin: 12px 0 0; font-size: 12px;">
              <div>
                <span style="color: var(--text-subtle); font-weight: 600;">Prerequisites:</span>
                <span style="color: #cbd5e1;">\${cert.prereqs}</span>
              </div>
              <div>
                <span style="color: var(--text-subtle); font-weight: 600;">Exam Format:</span>
                <span style="color: #cbd5e1;">\${cert.examFormat}</span>
              </div>
              <div>
                <span style="color: var(--text-subtle); font-weight: 600;">Skills Evaluated:</span>
                <span style="color: #cbd5e1;">\${cert.skills}</span>
              </div>
              <div>
                <span style="color: var(--text-subtle); font-weight: 600;">Estimated Effort:</span>
                <span style="font-family: var(--font-mono); color: var(--accent-secondary);">\${cert.effort}</span>
              </div>
            </div>
          </div>
        \`;
      }).join("")}
    </div>
  \`;
  container.innerHTML = html;
}

function updateCertStatus(id, status, name) {
  appState.certs[id] = appState.certs[id] || {};
  appState.certs[id].status = status;
  logActivity("cert", "Certification status updated: " + name, "Status: " + status);
  saveState();
  showToast(name + " marked as " + status);
}

// -------------------------------------------------------------
// VIEW 10: TOOLS DIRECTORY
// -------------------------------------------------------------
function renderToolsView(container) {
  const categories = [...new Set(DATA.tools.map(t => t.category))];

  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Tradecraft Tooling Database</div>
        <h1 class="view-title">Cybersecurity Tools Directory</h1>
        <div class="view-description">Curated, official command-line utilities, frameworks, and investigation suites used across offensive, defensive, and research disciplines.</div>
      </div>
    </div>

    <div class="toolbar-row">
      <input type="text" class="input-search" id="toolSearch" placeholder="Search tool name or purpose (e.g., Ghidra, Volatility, Mimikatz)..." oninput="filterToolsList()">
      <select class="select-filter" id="toolCategoryFilter" onchange="filterToolsList()">
        <option value="all">All Tool Categories</option>
        \${categories.map(c => \`<option value="\${c}">\${c}</option>\`).join("")}
      </select>
    </div>

    <div class="data-table-container">
      <table class="data-table">
        <thead>
          <tr>
            <th>Tool Name</th>
            <th>Category</th>
            <th>Primary Purpose</th>
            <th>Supported OS</th>
            <th>Documentation</th>
          </tr>
        </thead>
        <tbody id="toolsTableBody">
          <!-- Populated by filterToolsList() -->
        </tbody>
      </table>
    </div>
  \`;
  container.innerHTML = html;
  filterToolsList();
}

function filterToolsList() {
  const q = (document.getElementById("toolSearch")?.value || "").toLowerCase();
  const category = document.getElementById("toolCategoryFilter")?.value || "all";
  const tbody = document.getElementById("toolsTableBody");
  if (!tbody) return;

  const filtered = DATA.tools.filter(t => {
    if (category !== "all" && t.category !== category) return false;
    const txt = (t.name + " " + t.category + " " + t.purpose).toLowerCase();
    if (q && !txt.includes(q)) return false;
    return true;
  });

  if (!filtered.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: var(--text-subtle); padding: 30px;">No tools match the specified search.</td></tr>';
    return;
  }

  tbody.innerHTML = filtered.map(t => \`
    <tr>
      <td style="font-weight: 700; color: var(--text); font-family: var(--font-mono);">\${escapeHtml(t.name)}</td>
      <td><span class="badge">\${escapeHtml(t.category)}</span></td>
      <td style="font-size: 13px; color: #cbd5e1;">\${escapeHtml(t.purpose)}</td>
      <td style="font-size: 11px; color: var(--text-subtle);">\${escapeHtml(t.os || "Cross-platform")}</td>
      <td>
        <div style="display: flex; gap: 8px;">
          \${t.site ? \`<a href="\${t.site}" target="_blank" rel="noopener noreferrer" style="font-size: 12px;">Website ↗</a>\` : ''}
          \${t.docs ? \`<a href="\${t.docs}" target="_blank" rel="noopener noreferrer" style="font-size: 12px; color: var(--accent-primary);">Docs ↗</a>\` : ''}
        </div>
      </td>
    </tr>
  \`).join("");
}

// -------------------------------------------------------------
// VIEW 11: RESEARCH NOTEBOOK
// -------------------------------------------------------------
function renderNotebookView(container) {
  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Personal Knowledge Base</div>
        <h1 class="view-title">Technical Research Notebook</h1>
        <div class="view-description">Maintain structured adversary dossiers, malware analysis reports, root-cause vulnerability analyses, and incident playbooks with ready-made templates.</div>
      </div>
      <div class="view-actions">
        <button class="btn btn-primary" onclick="openNewNoteModal()">
          <svg width="15" height="15" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
          <span>New Research Note</span>
        </button>
      </div>
    </div>

    <!-- Pre-built Templates Quick Bar -->
    <div style="margin-bottom: 20px;">
      <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; color: var(--text-subtle); letter-spacing: 1px; margin-bottom: 8px;">Instantiate from Engineering Template</div>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        \${DATA.notebookTemplates.map(t => \`
          <button class="btn btn-secondary btn-sm" onclick="createNoteFromTemplate('\${t.id}')">
            <span>+ \${t.name}</span>
          </button>
        \`).join("")}
      </div>
    </div>

    <!-- Notes List -->
    <div style="display: flex; flex-direction: column; gap: 14px;">
      \${appState.notebook.length ? appState.notebook.map(n => \`
        <div class="card" style="padding: 18px 22px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; margin-bottom: 10px;">
            <div>
              <div style="font-size: 16px; font-weight: 700; color: var(--text); margin-bottom: 4px;">\${escapeHtml(n.name)}</div>
              <div style="display: flex; gap: 6px;">
                \${n.tags ? n.tags.split(',').map(tag => \`<span class="badge" style="font-size: 10px;">\${escapeHtml(tag.trim())}</span>\`).join("") : ''}
                <span style="font-size: 11px; color: var(--text-subtle); margin-left: 6px;">Updated \${new Date(n.updatedAt || Date.now()).toLocaleDateString()}</span>
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="btn btn-secondary btn-sm" onclick="editNote('\${n.id}')">Edit</button>
              <button class="btn btn-secondary btn-sm" onclick="exportSingleNote('\${n.id}')">Export</button>
              <button class="btn btn-danger btn-sm" onclick="deleteNote('\${n.id}')">Delete</button>
            </div>
          </div>
          <pre style="background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-sm); padding: 12px; font-family: var(--font-mono); font-size: 12px; color: #cbd5e1; max-height: 180px; overflow-y: auto; white-space: pre-wrap; word-break: break-all;">\${escapeHtml(n.content.slice(0, 1000) + (n.content.length > 1000 ? '\\n... [Content truncated for preview]' : ''))}</pre>
        </div>
      \`).join("") : \`
        <div style="padding: 48px; text-align: center; color: var(--text-subtle); background: var(--surface-1); border-radius: var(--radius-lg); border: 1px dashed var(--border);">
          Your research notebook is empty. Select a template above or click New Research Note to start authoring technical documentation.
        </div>
      \`}
    </div>
  \`;
  container.innerHTML = html;
}

function openNewNoteModal(defaultTitle = "") {
  const title = prompt("Enter note title:", defaultTitle || "Untitled Research Note");
  if (!title) return;
  const newNote = {
    id: "note-" + Date.now(),
    name: title,
    tags: "General, Research",
    content: "# " + title + "\\n\\nRecord findings, technical commands, and investigation logs here.",
    updatedAt: Date.now()
  };
  appState.notebook.unshift(newNote);
  logActivity("note", "Created research note: " + title);
  saveState();
  navigate("notebook");
  showToast("Note created.");
}

function createNoteFromTemplate(templateId) {
  const t = DATA.notebookTemplates.find(x => x.id === templateId);
  if (!t) return;
  const newNote = {
    id: "note-" + Date.now(),
    name: t.name + " (" + new Date().toISOString().split("T")[0] + ")",
    tags: t.tags,
    content: t.content,
    updatedAt: Date.now()
  };
  appState.notebook.unshift(newNote);
  logActivity("note", "Created note from template: " + t.name);
  saveState();
  navigate("notebook");
  showToast("Created note from " + t.name);
}

function editNote(id) {
  const note = appState.notebook.find(n => n.id === id);
  if (!note) return;
  const newContent = prompt("Edit note markdown content (or paste updated notes):", note.content);
  if (newContent !== null) {
    note.content = newContent;
    note.updatedAt = Date.now();
    logActivity("note", "Updated note: " + note.name);
    saveState();
    navigate("notebook");
    showToast("Note updated.");
  }
}

function exportSingleNote(id) {
  const note = appState.notebook.find(n => n.id === id);
  if (!note) return;
  const blob = new Blob([note.content], { type: "text/markdown" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = note.name.toLowerCase().replace(/[^a-z0-9]/g, "-") + ".md";
  a.click();
  URL.revokeObjectURL(a.href);
}

function deleteNote(id) {
  if (!confirm("Are you sure you want to delete this research note?")) return;
  appState.notebook = appState.notebook.filter(n => n.id !== id);
  logActivity("note", "Deleted research note", id);
  saveState();
  navigate("notebook");
  showToast("Note deleted.");
}

// -------------------------------------------------------------
// VIEW 12: SKILLS MATRIX
// -------------------------------------------------------------
function renderSkillsView(container) {
  const levels = ["Unfamiliar", "Beginner", "Intermediate", "Advanced", "Expert"];

  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Competency Evaluation</div>
        <h1 class="view-title">Cybersecurity Skills Matrix</h1>
        <div class="view-description">Self-assess your technical depth across 22 essential disciplines. Skills should reflect demonstrable, hands-on ability rather than passive video completion.</div>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 14px;">
      \${DATA.skills.map(sk => {
        const userSk = appState.skills[sk.id] || { level: 1, notes: "" };
        const lvlIdx = Math.max(1, Math.min(5, userSk.level || 1));

        return \`
          <div class="card" style="padding: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 6px;">
              <div>
                <span class="badge badge-secondary" style="font-size: 10px; margin-bottom: 4px;">\${sk.domain}</span>
                <div style="font-weight: 700; font-size: 15px; color: var(--text);">\${sk.name}</div>
              </div>
              <span class="badge \${lvlIdx >= 4 ? 'badge-success' : (lvlIdx >= 2 ? 'badge-primary' : '')}">\${levels[lvlIdx-1]}</span>
            </div>
            <p style="font-size: 12px; color: var(--text-muted); line-height: 1.4; margin-bottom: 12px;">\${sk.desc}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
              <span style="font-size: 11px; color: var(--text-subtle);">Proficiency:</span>
              <div style="display: flex; gap: 4px;">
                \${[1, 2, 3, 4, 5].map(lvl => \`
                  <button style="width: 28px; height: 26px; border-radius: 4px; border: 1px solid var(--border); font-size: 11px; font-weight: 700; background: \${lvlIdx === lvl ? 'var(--accent-primary)' : 'var(--surface-2)'}; color: \${lvlIdx === lvl ? 'white' : 'var(--text-muted)'};" onclick="setSkillLevel('\${sk.id}', \${lvl}, '\${sk.name}')">\${lvl}</button>
                \`).join("")}
              </div>
            </div>
          </div>
        \`;
      }).join("")}
    </div>
  \`;
  container.innerHTML = html;
}

function setSkillLevel(skillId, level, skillName) {
  appState.skills[skillId] = appState.skills[skillId] || {};
  appState.skills[skillId].level = level;
  logActivity("skill", "Updated competency level: " + skillName, "Level " + level + "/5");
  saveState();
  renderSkillsView(document.getElementById("mainContent"));
  showToast(skillName + " updated to Level " + level);
}

// -------------------------------------------------------------
// VIEW 13: LEARNING ANALYTICS
// -------------------------------------------------------------
function renderAnalyticsView(container) {
  const allTasks = getAllTasksList();
  const doneTasks = allTasks.filter(t => appState.tasks[t.key]).length;
  const overallPct = allTasks.length ? Math.round((doneTasks / allTasks.length) * 100) : 0;

  let totalLoggedMins = 0;
  appState.studyLog.forEach(s => totalLoggedMins += (Number(s.minutes) || 0));

  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Metrics & Verification</div>
        <h1 class="view-title">Learning Analytics Dashboard</h1>
        <div class="view-description">Accurate metrics calculated strictly from completed activities, logged study sessions, and verified practical deliverables.</div>
      </div>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Completion Velocity</div>
        <div class="stat-value">\${overallPct}%</div>
        <div class="stat-subtext">\${doneTasks} of \${allTasks.length} tasks</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Total Study Logged</div>
        <div class="stat-value">\${(totalLoggedMins / 60).toFixed(1)} <span style="font-size: 15px; color: var(--text-muted);">hours</span></div>
        <div class="stat-subtext">\${appState.studyLog.length} recorded sessions</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Practical Labs Mastered</div>
        <div class="stat-value">\${appState.labs.filter(l => l.status === 'Completed').length}</div>
        <div class="stat-subtext">of \${appState.labs.length} total lab targets</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Courses Engaged</div>
        <div class="stat-value">\${Object.values(appState.courses).filter(c => c && c.selected).length}</div>
        <div class="stat-subtext">\${Object.values(appState.courses).filter(c => c && c.done).length} marked fully complete</div>
      </div>
    </div>

    <!-- Phase Completion Breakdown -->
    <div class="card" style="margin-bottom: 24px;">
      <div class="stat-header">
        <span class="stat-label">Phase-by-Phase Completion</span>
      </div>
      <div style="display: flex; flex-direction: column; gap: 14px; margin-top: 12px;">
        \${DATA.phases.map((p, pi) => {
          let pDone = 0, pTotal = 0;
          p.modules.forEach((_, mi) => {
            const s = getModuleStats(pi, mi);
            pDone += s.done;
            pTotal += s.total;
          });
          const pct = pTotal ? Math.round((pDone / pTotal) * 100) : 0;
          return \`
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 4px;">
                <span style="font-weight: 600;">\${p.name}</span>
                <span style="font-family: var(--font-mono); color: var(--text-muted);">\${pct}% (\${pDone}/\${pTotal})</span>
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: \${pct}%"></div>
              </div>
            </div>
          \`;
        }).join("")}
      </div>
    </div>
  \`;
  container.innerHTML = html;
}

// -------------------------------------------------------------
// VIEW 14: ACTIVITY HISTORY
// -------------------------------------------------------------
function renderHistoryView(container) {
  let html = \`
    <div class="view-header">
      <div>
        <div class="view-pretitle">Audit Trail & Action Feed</div>
        <h1 class="view-title">Progress Activity History</h1>
        <div class="view-description">Complete immutable chronological timeline of learning events, completed checklists, logged study blocks, and certification milestones.</div>
      </div>
      <div class="view-actions">
        <button class="btn btn-secondary btn-sm" onclick="clearActivityHistory()">Clear History</button>
      </div>
    </div>

    <div class="card">
      <div class="timeline">
        \${appState.activityLog.length ? appState.activityLog.map(act => \`
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <div class="timeline-meta">\${new Date(act.timestamp).toLocaleString()} · \${act.type.toUpperCase()}</div>
              <div style="font-size: 13px; font-weight: 600; color: var(--text);">\${escapeHtml(act.title)}</div>
              \${act.meta ? \`<div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">\${escapeHtml(act.meta)}</div>\` : ''}
            </div>
          </div>
        \`).join("") : '<div style="padding: 24px; text-align: center; color: var(--text-subtle);">No activity recorded yet.</div>'}
      </div>
    </div>
  \`;
  container.innerHTML = html;
}

function clearActivityHistory() {
  if (!confirm("Clear activity history log? Your module and lab progress will NOT be affected.")) return;
  appState.activityLog = [];
  saveState();
  renderHistoryView(document.getElementById("mainContent"));
  showToast("Activity history cleared.");
}

// -------------------------------------------------------------
// TIMER IMPLEMENTATION
// -------------------------------------------------------------
let timerInterval = null;

function toggleStudyTimer() {
  const pill = document.getElementById("globalTimerPill");
  const btn = document.getElementById("globalTimerToggle");

  if (!appState.timer.running) {
    appState.timer.running = true;
    appState.timer.startTime = Date.now();
    btn.textContent = "Pause";
    pill.classList.add("running");
    timerInterval = setInterval(updateTimerDisplay, 1000);
    showToast("Study session started.");
  } else {
    appState.timer.running = false;
    appState.timer.accumulatedSeconds += Math.floor((Date.now() - appState.timer.startTime) / 1000);
    btn.textContent = "Resume";
    pill.classList.remove("running");
    clearInterval(timerInterval);
    showToast("Timer paused.");
  }
  saveState();
}

function updateTimerDisplay() {
  let totalSecs = appState.timer.accumulatedSeconds;
  if (appState.timer.running) {
    totalSecs += Math.floor((Date.now() - appState.timer.startTime) / 1000);
  }
  const hrs = String(Math.floor(totalSecs / 3600)).padStart(2, "0");
  const mins = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, "0");
  const secs = String(totalSecs % 60).padStart(2, "0");
  const disp = document.getElementById("globalTimerDisplay");
  if (disp) disp.textContent = hrs + ":" + mins + ":" + secs;
}

function openLogTimerModal() {
  let totalSecs = appState.timer.accumulatedSeconds;
  if (appState.timer.running) {
    totalSecs += Math.floor((Date.now() - appState.timer.startTime) / 1000);
  }
  const mins = Math.max(5, Math.round(totalSecs / 60));
  document.getElementById("sessionMinutesInput").value = mins;
  openModal("timerLogModal");
}

function confirmLogTimerSession() {
  const minutes = Number(document.getElementById("sessionMinutesInput").value) || 0;
  const category = document.getElementById("sessionCategoryInput").value;
  const topic = document.getElementById("sessionTopicInput").value.trim() || "General Study";
  const notes = document.getElementById("sessionNotesInput").value.trim();

  appState.studyLog.unshift({
    id: "sess-" + Date.now(),
    date: new Date().toISOString().split("T")[0],
    minutes,
    category,
    topic,
    notes
  });

  // Reset timer
  appState.timer.running = false;
  appState.timer.accumulatedSeconds = 0;
  clearInterval(timerInterval);
  document.getElementById("globalTimerPill").classList.remove("running");
  document.getElementById("globalTimerToggle").textContent = "Start";
  updateTimerDisplay();

  logActivity("study", "Logged study session: " + minutes + " mins", category + " · " + topic);
  saveState();
  closeModal("timerLogModal");
  showToast("Study session of " + minutes + " mins logged!");
  if (currentView === "planner" || currentView === "dashboard") {
    navigate(currentView);
  }
}

// -------------------------------------------------------------
// COMMAND PALETTE (Ctrl+K)
// -------------------------------------------------------------
function openCommandPalette() {
  openModal("cmdModal");
  const inp = document.getElementById("cmdInput");
  inp.value = "";
  inp.focus();
  handleCmdInput("");
}

function handleCmdInput(val) {
  const q = val.toLowerCase().trim();
  const list = document.getElementById("cmdResults");
  if (!list) return;

  const results = [];

  // Nav actions
  const navItems = [
    { title: "Dashboard Overview", type: "Navigation", action: () => navigate("dashboard") },
    { title: "Full Curriculum (36 Modules)", type: "Navigation", action: () => navigate("curriculum") },
    { title: "Practical Lab Tracker", type: "Navigation", action: () => navigate("labs") },
    { title: "Course Library", type: "Navigation", action: () => navigate("courses") },
    { title: "Daily Study Planner", type: "Navigation", action: () => navigate("planner") },
    { title: "Research Notebook", type: "Navigation", action: () => navigate("notebook") },
    { title: "Tools Directory", type: "Navigation", action: () => navigate("tools") },
    { title: "Skills Matrix", type: "Navigation", action: () => navigate("skills") },
    { title: "Certification Roadmap", type: "Navigation", action: () => navigate("certs") }
  ];

  navItems.forEach(n => {
    if (!q || n.title.toLowerCase().includes(q)) results.push(n);
  });

  // Modules
  DATA.phases.forEach((p, pi) => {
    p.modules.forEach((m, mi) => {
      if (!q || m.title.toLowerCase().includes(q) || ("mod-" + m.num).includes(q)) {
        results.push({
          title: "MOD-" + m.num + ": " + m.title,
          type: "Module",
          action: () => openModuleDetail(pi, mi)
        });
      }
    });
  });

  // Tools
  DATA.tools.forEach(t => {
    if (q && (t.name.toLowerCase().includes(q) || t.purpose.toLowerCase().includes(q))) {
      results.push({
        title: t.name + " (" + t.category + ")",
        type: "Tool",
        action: () => { navigate("tools"); }
      });
    }
  });

  list.innerHTML = results.slice(0, 10).map((r, i) => \`
    <div class="cmd-item" onclick="executeCmdItem(\${i})">
      <span class="cmd-item-type">\${r.type}</span>
      <span style="flex: 1;">\${escapeHtml(r.title)}</span>
    </div>
  \`).join("");

  window._currentCmdResults = results;
}

function executeCmdItem(idx) {
  if (window._currentCmdResults && window._currentCmdResults[idx]) {
    closeModal("cmdModal");
    window._currentCmdResults[idx].action();
  }
}

// Keyboard shortcuts
document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    openCommandPalette();
  }
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-backdrop.open").forEach(m => m.classList.remove("open"));
  }
});

// Modal helpers
function openModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add("open");
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove("open");
}

// Backup & Restore
function exportDataBackup() {
  const dataStr = JSON.stringify(appState, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "apt-redteam-progress-backup-" + new Date().toISOString().split("T")[0] + ".json";
  a.click();
  URL.revokeObjectURL(a.href);
  showToast("Backup exported successfully.");
}

function triggerImport() {
  document.getElementById("importFileInput").click();
}

async function handleFileImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    if (!data.tasks && !data.courses) {
      throw new Error("Invalid backup structure");
    }
    appState = Object.assign({}, appState, data);
    saveState();
    navigate(currentView);
    showToast("Progress backup restored successfully!");
  } catch (err) {
    alert("Error importing backup: invalid JSON format.");
  }
  e.target.value = "";
}

// Utility Helpers
function escapeHtml(str) {
  if (!str) return "";
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function escapeJs(str) {
  if (!str) return "";
  return String(str).replace(/'/g, "\\\\'");
}
function copyToClipboard(txt) {
  navigator.clipboard.writeText(txt).then(() => {
    showToast("Command copied to clipboard!");
  }).catch(() => {
    showToast("Failed to copy", "error");
  });
}

// Initialize on Load
window.addEventListener("DOMContentLoaded", () => {
  initStorage();
  navigate("dashboard");
  updateTimerDisplay();
});
</script>
</body>
</html>
`;

fs.writeFileSync('apt_red_team_learning_command_center.html', htmlContent);
console.log('Successfully written apt_red_team_learning_command_center.html! Size: ' + htmlContent.length + ' bytes');
