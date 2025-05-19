# Sekolah Kita

A bilingual educational website built with **Node.js**, **Express**, and **MongoDB**, featuring dynamic content in both **Bahasa Melayu (BM)** and **English**. This project supports session-based routing, localized routes, and MongoDB-backed session persistence.

---

## 🚀 Features

- 🌐 Multilingual support (BM and English)
- 🧱 Modular routing for chapters, resources, and action steps
- 🛠️ Built with Express.js, EJS templates, and MongoDB
- 🔐 Session management using `express-session` and `connect-mongo`
- 📝 Content rendering via dynamic views (EJS)
- 📦 Organized structure with separate routes per chapter/language

---

## 📁 Project Structure

```text
.
├── app.js               # Main Express app
├── package.json         # NPM metadata and dependencies
├── bin/
│   └── www              # Entry point to start the server
├── routes/              # Route handlers (BM and EN versions)
├── views/               # EJS templates
├── public/              # Static assets (CSS, images, etc.)
