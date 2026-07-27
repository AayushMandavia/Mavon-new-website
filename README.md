# Mavon Website 2.0

A premium, modern web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, featuring dynamic micro-animations, glassmorphism aesthetics, and responsive design.

## 📸 Hero Section Preview

### Desktop View
![Mavon Hero Section - Desktop](./screenshots/hero-section.png)

### Mobile View
![Mavon Hero Section - Mobile](./screenshots/hero-section-mobile.png)

## ✨ Features

- **Modern & Dynamic UI**: Smooth animations using Framer Motion and custom CSS micro-interactions.
- **Premium Hero Section**: High-impact typography with looping background animations and clean edge gradients.
- **Responsive Layouts**: Fully optimized for mobile, tablet, and desktop viewing experiences.
- **Fast Performance**: Built on top of Vite and TypeScript with strict type checking and linting.

## 🖥️ Running Servers & Getting Started

We provide multiple server commands for local development, mobile testing, and production previews. For full server documentation, see our dedicated **[Server & Local Environment Guide (SERVER_GUIDE.md)](./SERVER_GUIDE.md)**.

### Quick Server Command Table

| Command | Server Type | Default URL | Description |
| :--- | :--- | :--- | :--- |
| `npm run dev` | Development Server (HMR) | `http://localhost:5173` | Hot-reloading development server |
| `npm run dev -- --host` | Network Dev Server | `http://<your-ip>:5173` | Test on mobile devices on the same Wi-Fi |
| `npm run build` | Production Builder | `dist/` | Compiles production-optimized bundle |
| `npm run preview` | Production Preview Server | `http://localhost:4173` | Locally test the compiled production build |

### Quickstart Example

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.


