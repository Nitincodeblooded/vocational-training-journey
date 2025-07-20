# 🧠 Day 12 – Shallow vs Deep Copy in JavaScript

Day 12 focused on the difference between **primitive and reference types**, and how to create **true deep copies** of objects to avoid bugs and data mutations in JavaScript.

---

## 📚 Topics Covered

- Difference between primitive and reference types
- What is a shallow copy vs a deep copy
- Using `Object.assign()`, spread `...`, and `structuredClone()`

---

## 🛠️ Project – Deep Copy Visualizer 🔍

This project compares:
- The original object
- A shallow copy using spread
- A deep copy using `structuredClone()`

### 🔗 Project Files:
- [HTML](./deep-copy-checker/code/index.html)
- [CSS](./deep-copy-checker/code/styles.css)
- [JavaScript](https://1425.onecompiler.app/)

### 🌐 Live Demo:
_(Add your deployed link here)_

---

## 💡 Reflection

This topic revealed how **unintentional object mutation** can break your app. I now understand how to safeguard my data by cloning objects deeply when needed.
