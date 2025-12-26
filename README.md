# 🖥️ Hardware Inventory Dashboard

A technical asset management tool built to solve manual tracking inefficiencies for 150+ multi-site workstations. This project focuses on scalable state management and real-time health telemetry simulation.

## 🏗️ Architecture & Logic
- **State Management:** Uses React Context API to handle global workstation statuses across distributed sites.
- **Data Triage Engine:** Logic-based filtering that categorizes assets into Healthy, Warning, or Critical states.
- **Telemetry Simulation:** A Node.js backend that dynamically generates 150+ mock hardware nodes for performance testing.

## 🛠️ Tech Stack
- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS v4
- **Backend:** Node.js, Express
- **API:** RESTful endpoints

## ✨ Key Technical Features
- **Warranty Monitor:** Logic-driven date parsing to identify hardware nearing End-of-Life (EOL).
- **Health API:** Mock backend providing sub-50ms response times for a smooth UI experience.
- **Responsive Grid:** Designed for IT command centers and mobile field technician tablets.

## 🚀 Installation & Setup
1. **Clone the repository:**
   `git clone github.com`

2. **Setup Server:**
   - `cd server`
   - `npm install`
   - `npm start`

3. **Setup Client:**
   - `cd client`
   - `npm install`
   - `npm run dev`

## 📊 Project Roadmap
- [x] Scalable Node.js Backend with 150+ mock assets.
- [x] Responsive Dashboard UI with Tailwind CSS v4.
- [ ] JWT User Authentication for IT Admins.
- [ ] Historical Health Charts using Recharts.
- [ ] Exportable CSV/PDF inventory reports.

---
**License:** [MIT](opensource.org)
