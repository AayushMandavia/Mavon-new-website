# Mavon 🚀

Welcome to the official repository for *Mavon Online*. This is a high-performance, visually stunning, dark-themed website  custom-tailored for 3D designers, motion artists, and creators.

Built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, the design is optimized to provide an immersive, buttery-smooth storytelling experience for visitors.

---

## ✨ Features & Cool Animations

### 🌌 1. Magnet Hero Portrait & Navbar
- **Interactive Mouse Tracking**: A custom magnet effect wraps the main portrait, following the user's cursor dynamically with smooth ease-out and ease-in-out transitions.
- **Micro-Animations**: Key layout elements (Navbar links, Hero text, and CTA buttons) use custom entry animations with fine-tuned delays.

### 📼 2. Infinite Loop Scroll Marquee
- **Passive Scroll-Driven Motion**: Multi-row horizontal marquee populated with premium 3D motion graphic loops.
- **Dual-Direction Translation**: Scrolling down translates the top row rightwards and the bottom row leftwards at a multiplier speed of `0.3`, producing a dynamic parallax speed effect.

### 🎭 3. Character-by-Character Scroll Reveal
- **Opacity Fade-in**: The "About Me" paragraph reveals text character-by-character as you scroll.
- **Scroll Tracking**: Driven by viewport scroll hooks, opacity goes from `0.2` to `1.0` dynamically as the content moves into focus.

### 🛠️ 4. Premium Services Showcase
- **Glassmorphism Borders**: Minimalist vertical service layout with transparent borders and clean grid typography.
- **Staggered Entrance**: Service items fade in sequentially with clean time offsets.

### 🗂️ 5. Sticky Stack Card Parallax (3D Stacking)
- **Overlap & Stacking**: Three premium project cards stack directly on top of each other as you scroll down.
- **Viewport Height Constraint**: Auto-adapts card layouts and scales (`max-h-[calc(100vh-180px)]`) to fit beautifully on any screen height (e.g., short viewports like `596px`) without cutting cards in half.
- **Parallax Scaling**: Cards scale down slightly as they get layered underneath new cards, keeping the visual hierarchy pristine.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🖥️ Getting Started & Local Development

### 1. Installation
Clone the repository and install the dependencies:
```bash
npm install
```

### 2. Run the Development Server
Start Vite with hot module replacement (HMR):
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
Compile and build the application for deployment:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## 📂 Project Structure

```
├── src/
│   ├── components/       # Reusable components (Magnet, FadeIn, AnimatedText, Buttons)
│   ├── sections/         # Landing page sections (Hero, Marquee, About, Services, Projects, Contact)
│   ├── assets/           # Local styling and image assets
│   ├── App.tsx           # Application layout assembler
│   └── main.tsx          # Application entry point
```

---
