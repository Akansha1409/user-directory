# 👥 User Directory Application
[![Live Demo](https://img.shields.io/badge/🌐-Live%20Demo-blue?style=for-the-badge&logo=vercel)](https://user-directory1.vercel.app/)
✨ A responsive frontend application built with React and Tailwind CSS.

A clean **User Directory Application** designed to evaluate frontend engineering skills. This application allows users to view, search, and add users using the **JSONPlaceholder API**. It features a modern UI with glassmorphism effects, real-time filtering, and local data persistence.

---

## ✨ Features Implemented
- ⚡ **Fetch Users:** Loads data dynamically from `jsonplaceholder.typicode.com`.
- 🔍 **Search:** Real-time filtering by **Name** or **Email**.
- 📄 **Details View:** Modal popup displaying address and company details without navigating away.
- ➕ **Add User:** Custom form with validation (Email regex, required fields).
- 💾 **Persistence:** Newly added users are saved to `localStorage` to persist across refreshes.
- 🔽 **Sorting:** Toggle between **A-Z** and **Z-A** alphabetical order.
- 📱 **Responsive:** Layout adapts seamlessly to mobile, tablet, and desktop screens.

---

## 📊 Tech Stack

| **Technology** | **Usage** |
|----------------|-----------|
| React (Vite) | Frontend Framework |
| Tailwind CSS | Styling & Responsiveness |
| JavaScript (ES6+) | Application Logic |
| JSONPlaceholder | Mock API Data |
| LocalStorage | Data Persistence |

---

## 🚀 Setup & Run

Follow these steps to get the project running on your local machine.

**1. Clone the repository**
```bash
git clone [https://github.com/YOUR_USERNAME/user-directory.git](https://github.com/YOUR_USERNAME/user-directory.git)
cd user-directory
```
**2. Install dependencies**
```bash
npm install
```
3.Start the development server**
```bash
npm run dev
```
The application will typically start at http://localhost:5173

---

## 📝 Assumptions
- **Frontend-Only:** The "Add User" feature is frontend-only.
- **Persistence:** New users are stored in `localStorage` to persist across refreshes since the API does not actually save them.
- **Styling:** Tailwind CSS was chosen to ensure a clean, maintainable, and responsive layout within the 24-hour time limit.

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── AddUserForm.jsx    # Form component with validation logic
│   ├── UserCard.jsx       # Reusable card component for displaying user info
│   └── UserModal.jsx      # Modal component for viewing full user details
├── App.jsx                # Main controller (State, Search, Sort logic)
├── main.jsx               # Application entry point
└── index.css              # Global styles and Tailwind configuration
```
---

## 🔮 Future Improvements / Scope

- 🚀 **Pagination** – To handle larger datasets efficiently.
- 🌑 **Dark Mode** – Toggle between light and dark themes.
- ✏️ **Edit/Delete User** – Full CRUD capabilities.
- 🧪 **Unit Testing** – Adding Jest/React Testing Library for robustness.

---
