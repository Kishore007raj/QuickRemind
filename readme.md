# **QuickRemind – Your ultimate Auto-Reminder Generator**  
🚀 **Never Forget Important Tasks Again – Automatically Create Reminders from Conversations made by you using our project in your local system!**  

![QuickRemind Banner](quickremind.png)

---

## **📌 About QuickRemind**  
QuickRemind is a **Manual-powered, privacy-first reminder tool** that **automatically detects tasks and deadlines** hidden in your chats, emails, or notes and sets reminders for you—with the help of any manual input given by the user by in his local system,ensuring data privacy for themself

✅ **Manual-Powered Text Recognition** – Detects dates, times, and events from conversations exported by the user himself by using our project.
✅ **Auto Reminder Creation** – Instantly creates notifications with snooze/reschedule options.  
✅ **Privacy-First** – Works **offline** with local AI models, no cloud storage needed.  
✅ **Multi-Platform Support** – Supports **WhatsApp, Telegram, Emails, Notes, and SMS**.
✅ **Customizable Alerts** – Notifications via mobile, email, or a simple dashboard.  

---

## **🛠 Tech Stack**  

### **Backend**
- 🔹 **FastAPI / Flask** – API for task extraction and processing. 
- 🔹 **NLP Model (Phi-2 / TinyLlama)** – Extracts tasks and deadlines from text.  
- 🔹 **Supabase** – Scalable database for storing extracted tasks.  

### **Frontend**  
- 🎨 **React** – Simple and intuitive UI.  
- 💻 **Drag-and-Drop ZIP Upload** – Easy data extraction from exported files.
- 🛠 **Node.js / Express.js** – Backend integration for real-time updates.

### **Integrations (Future Roadmap)** 
-🔗 **GoogleAuth** – Secure login & data source configuration.
-📅 **AI-Based Auto-Scheduling** – Smart task prioritization & scheduling.
-🗣 **Voice Command Support** – Hands-free task management.

---

## **🚀 How It Works**  

### **1️⃣ Import Data from Multiple Sources**

-Drag & drop ZIP files (WhatsApp, Gmail, Notes, etc.).
-Connect your Google Account for real-time task extraction.
-Works offline, ensuring 100% privacy. 

### **2️⃣ Extract Key Information using NLP**  
- NLP extracts **tasks, reminders, and deadlines** from conversations given in the exported files 
- Example:  
  - **Input:** `"Doctor appointment at 4 PM on Friday."`  
  - **Output:** 📅 **Reminder Created:** `"Doctor Appointment – Friday, 4 PM."`  

### **3️⃣ Structured Data Storage**  
- Extracted tasks are stored in **Supabase** for retrieval
- JSON & CSV formats are generated for easy exports.

### **4️⃣ User Interaction**  
- Simple UI allows users to **view, edit, snooze, or delete reminders**.  
- Optional **speech-to-text feature** for quick reminders in upcoming days😁.

---

## **📦 Installation**  

### **🔹 Clone the Repository**  
```sh
git clone https://github.com/yourusername/QuickRemind.git
cd QuickRemind
```

### **🔹 Backend Setup**  
```sh
cd backend
pip install -r requirements.txt
python task.py
```

### **🔹 Frontend Setup**  
```sh
cd frontend
npm install
npm run dev
```

---

## **🎯 Who Can Use This?**  
📱 **Busy Professionals** – Never miss important tasks from messages again.  
🎓 **Students** – Auto-detect assignments & deadlines from class discussions.  
👴 **Elderly Users** – Simple, intuitive reminder system for daily tasks.  
📩 **Everyone** – If you forget tasks, this is for you!  

---

## **💰 Monetization & Future Roadmap**  
✅ **Open-Source Core** – Free for all users.  

---

## **🔮 Roadmap & Features**  
✅ **MVP (2 Weeks):** Core reminder extraction (NLP + FastAPI).  
✅ **Phase 2:** WhatsApp & email integration.  
✅ **Phase 3:** AI-powered smart scheduling.  

🚀 **Contributions Welcome!**  

---

## **🤝 Contributing**  
Want to contribute? **Fork the repo, add your features, and submit a PR!**  

📖 **Check the [CONTRIBUTING.md](CONTRIBUTING.md) guide for more details.**  

---

## **📜 License**  
🔓 MIT License

Copyright (c) 2025 QuickRemind

---

## **📧 Contact & Support**  
💡 Found a bug or have a feature request? **Open an issue** in the repository!  

🔗 **GitHub:** [github.com/yourusername/QuickRemind](https://github.com/Kishore007raj/QuickRemind)  

🚀 **Star the repo if you love the project!** ⭐
