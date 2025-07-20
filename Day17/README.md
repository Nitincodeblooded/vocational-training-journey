# 🔐 Day 17 – Optional Chaining & Bitwise Operators in JavaScript

On Day 17 of my Full Stack Web Development training at **BS Digital Technology, Durg**, I explored powerful techniques to safely access nested properties using **optional chaining (`?.`)** and manage user roles using **bitwise operators (`&`, `|`)**.

---

## 📚 Topics Covered

- What does `&` and `|` do in JavaScript (bitwise vs logical operators)
- How to safely access nested object properties using `?.`
- Behavior of `undefined` and `null` with optional chaining
- Bitwise role flags and masking with `&`
- Writing reusable functions that use optional chaining

---

## 🛠️ Project – 👥 User Access Dashboard

A mini dashboard that displays user information and their assigned roles using **bitwise flags** and handles incomplete user data with **optional chaining**.

### 🧩 Features:

- Displays user **name**, **email**, and **age**
- Age is accessed safely using `user.profile?.age`
- Uses bitwise flags to assign roles: Admin, Editor, Viewer
- Gracefully handles missing properties
- Styled role badges and status indicators

### 🧮 Role Mapping (Bit Flags):

| Role   | Bit | Value |
|--------|-----|-------|
| Viewer | 001 | 1     |
| Editor | 010 | 2     |
| Admin  | 100 | 4     |

📂 Files:  
- [`index.html`](./user-access-dashboard/index.html)  
- [`styles.css`](./user-access-dashboard/styles.css)  
- [`script.js`](./user-access-dashboard/script.js)

🌐 **Live Demo**: _([Add your deployment link here](https://1431.onecompiler.app/))_

---

## 💬 Reflection

This project helped me visualize how **bitwise operations** can manage access permissions and how **optional chaining** provides a safe way to work with deeply nested or optional data in real-world apps.

> _“Don’t crash your code on missing values – guard it smartly with optional chaining.”_

