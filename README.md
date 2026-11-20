# APT//REDTEAM · Cybersecurity Learning Command Center
> **Advanced Persistent Threat Research to Elite Red Team Engineering**

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Architecture](https://img.shields.io/badge/architecture-Local--First-22c55e.svg)
![Zero Dependencies](https://img.shields.io/badge/dependencies-zero-8b5cf6.svg)
![Platform](https://img.shields.io/badge/platform-Cross--Browser-38bdf8.svg)

**APT//REDTEAM** is a production-grade personal cybersecurity learning operating system that guides a learner from fundamental computer architecture and networking to advanced APT research, malware reverse engineering, digital forensics, enterprise penetration testing, and elite adversary emulation.

---

## ⚡ Features & Capabilities

- **Curriculum Engine (36 Modules across 9 Phases)**:
  - Phase 0: Technical Foundations (Architecture, Networking, Linux, Windows)
  - Phase 1: Programming & Low-Level Engineering (Python, PowerShell/Bash, C/C++/Assembly)
  - Phase 2: APT Research & Cyber Threat Intelligence (MITRE ATT&CK, OSINT, Threat Actors)
  - Phase 3: Initial Access, Identity & Enterprise Compromise (Phishing, Active Directory, Lateral Movement)
  - Phase 4: Malware Analysis & Reverse Engineering (PE Internals, Decompilation, Ghidra, YARA)
  - Phase 5: DFIR, Incident Response & Detection Engineering (Forensics, Volatility, Zeek, Sigma, SIEM)
  - Phase 6: Professional Penetration Testing (PTES, Web Security, API Security, Privilege Escalation)
  - Phase 7: Enterprise Security & Advanced Red Team (ADCS, Cloud Security, Exploit Dev, CALDERA)
  - Phase 8: Expert Specialisations & Original Research (Kernel Rootkits, PQC, CI/CD Security, Leadership)
- **Detailed 20-Point Learning Specs**: Every module includes learning objectives, technical deep-dives, theoretical checklists, hands-on lab steps, CLI command cheat-sheets with single-click copy, and assessment questions.
- **Practical Lab Tracker**: Manage labs from Hack The Box, TryHackMe, PortSwigger, CyberDefenders, Blue Team Labs Online, and custom lab ranges with full CRUD support.
- **Course Library**: Searchable database of 95 curated courses categorized across Hackers-Arise, HTB Academy, TryHackMe, PortSwigger, CyberDefenders, OST2, OffSec, and SANS.
- **Certification Roadmap**: 17 industry certifications (CompTIA Security+/CySA+/PenTest+, BTL1, HTB CPTS/CBBH/CDSA, CRTP, CRTE, OSCP+, OSEP, OSWE, OSED, GCIA, GCFA, GREM, SANS SEC565) with prerequisites, exam formats, estimated preparation hours, status selectors, and direct links.
- **Tools Directory**: 48 core tools across 14 categories with purpose descriptions, supported operating systems, official websites, and documentation links.
- **Research Notebook**: Technical research documentation suite with 7 templates (APT Group Dossier, Malware Technical Analysis, Threat Intelligence Brief, Vulnerability Root Cause Analysis, Red Team Operation Plan, Lab Write-up, and Detection Engineering Spec). Supports markdown editing, search, tagging, and single-click `.md` export.
- **Live Study Timer & Planner**: Live stopwatch (`[00:00:00]`) in the top navigation bar to log verified study sessions directly into an immutable activity audit log.
- **Skills Matrix**: Self-assessment matrix across 23 technical domains with 5 proficiency levels (*Unfamiliar* to *Expert*).
- **Command Palette (`Ctrl+K` / `Cmd+K`)**: Instant search and keyboard navigation across all modules, courses, tools, and application views.
- **Local-First & Zero Dependencies**: Runs entirely in the browser using `localStorage`. No accounts, telemetry, or server dependencies required. Includes full JSON backup and restore with automatic migration.

---

## 🚀 Quick Start

### Option 1: Open Directly in Browser
Double-click `index.html` or `apt_red_team_learning_command_center.html` to run locally without a server.

### Option 2: Run with Local Server (Node.js)
```bash
node server.js
```
Then visit [http://localhost:3000](http://localhost:3000) in your web browser.

---

## 🌐 Deploy to GitHub Pages

1. Push this repository to GitHub:
   ```bash
   git init -b main
   git add .
   git commit -m "Initial commit of APT//REDTEAM learning platform"
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
2. In your GitHub repository:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment** > **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
3. Your platform will be live at `https://<your-username>.github.io/<your-repo-name>/`!

---

## 📄 License
MIT License. Created for educational, defensive, and authorized cybersecurity research.
