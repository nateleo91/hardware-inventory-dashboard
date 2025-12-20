# Hardware Inventory Dashboard 🖥️

A professional IT asset management tool built to solve manual tracking inefficiencies for 150+ multi-site workstations. 

## 🎯 The Problem & Solution
Managing a high volume of workstations manually is prone to human error and missed deadlines. This dashboard provides a centralized interface to monitor hardware health, track warranties, and manage asset lifecycles proactively.

## 🛠️ Tech Stack
- **Frontend:** React (Vite), Tailwind CSS
- **Backend:** Node.js, Express
- **State Management:** React Context API / Hooks
- **Documentation:** Markdown

## ✨ Key Features
- **Warranty Monitor:** Visual alerts for hardware nearing end-of-life.
- **Hardware Health API:** A mock backend that simulates live health status updates.
- **Multi-site Organization:** Designed for distributed environments with 150+ nodes.

  ## 📊 Project Metrics
- **Assets Managed:** 150+
- **Health Indicators:** 3 Levels (Healthy, Warning, Critical)
- **API Response Time:** < 50ms (Mocked)

## 🚀 Installation & Setup
1. **Clone the repository:**
   `git clone github.com`
2. **Setup Server:**
   `cd server && npm install`
3. **Setup Client:**
   `cd client && npm install`

   ## 📈 Current Progress
- [x] **Scalable Backend:** Node.js server dynamically generates 150+ mock assets.
- [x] **Modern UI:** Implemented Tailwind CSS v4 for a responsive, enterprise-grade dashboard.
- [x] **Live Data Fetching:** Frontend successfully consumes REST API endpoints with status-based filtering.

## 📊 Roadmap
- [ ] Implement JWT Authentication
- [ ] Hardware health history charts
- [ ] Exportable CSV/PDF inventory reports
