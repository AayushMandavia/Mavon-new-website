# 🖥️ Mavon Website 2.0 — Server & Local Environment Guide

This guide covers all commands and configurations required to run, preview, and test **Mavon Website 2.0** servers locally and across your local network.

---

## 📋 Prerequisites

Ensure you have the following installed on your system:
- **Node.js**: `v18.x` or higher (recommended: `v20+`)
- **npm**: `v9.x` or higher (comes with Node.js)

---

## 🚀 Server Commands Quick Reference

| Command | Server Type | Default URL | Purpose |
| :--- | :--- | :--- | :--- |
| `npm run dev` | Development Server (Vite + HMR) | `http://localhost:5173` | Hot-reloading server for active development |
| `npm run dev -- --host` | Network-Exposed Dev Server | `http://<your-ip>:5173` | Test on mobile phones/tablets on the same Wi-Fi |
| `npm run build` | Production Builder | `dist/` folder | Builds production-optimized HTML, JS, and CSS |
| `npm run preview` | Production Preview Server | `http://localhost:4173` | Locally test the compiled production build |
| `npm run lint` | Linter Server / Check | N/A | Fast linting check using Oxlint |

---

## 🛠️ Detailed Server Usage

### 1. Development Server (Hot Module Replacement)

To run the development server with instant updates as you edit React components and CSS:

```bash
npm run dev
```

- **Default Port**: `5173`
- **URL**: [http://localhost:5173](http://localhost:5173)
- **Custom Port**: To start on a different port (e.g., `3000`):
  ```bash
  npm run dev -- --port 3000
  ```

### 2. Network-Exposed Dev Server (Mobile & Device Testing)

If you want to view the application on an iPhone, iPad, or Android device connected to the same Wi-Fi network:

```bash
npm run dev -- --host
```

Vite will print a `Network:` URL in the terminal (e.g., `http://192.168.1.50:5173`). Open that URL on your mobile browser.

---

### 3. Production Build & Preview Server

Always test the production build locally before deploying to production or staging servers.

#### Step A: Compile the Production Bundle
```bash
npm run build
```
This runs TypeScript type checking (`tsc -b`) and Vite production bundling. Output is saved to the `dist/` directory.

#### Step B: Start the Production Preview Server
```bash
npm run preview
```
- **Default Port**: `4173`
- **URL**: [http://localhost:4173](http://localhost:4173)
- **Custom Port**:
  ```bash
  npm run preview -- --port 8080
  ```

---

## 🔧 Troubleshooting Server Issues

### Port Already in Use (`EADDRINUSE`)
If port `5173` or `4173` is busy, Vite will automatically try the next available port (`5174`, `4174`, etc.). You can also specify a port explicitly:
```bash
npm run dev -- --port 8000
```

### Clearing Vite Cache
If you encounter caching or dependency resolving errors:
```bash
npx vite --force
```
or delete the `node_modules/.vite` folder and restart the server.
