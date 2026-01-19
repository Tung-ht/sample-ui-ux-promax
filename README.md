# EZpage - Web Development Company Website

![EZpage](https://img.shields.io/badge/EZpage-Web%20Development-0369A1?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📖 Introduction

Landing page website for **EZpage** - A professional web development company. Designed with modern style, mobile-first approach, and multilingual support (Vietnamese/English).

## ✨ Features

### Main Page (`index.html`)
- 🎨 Modern design with glassmorphism navigation
- 📱 Fully responsive across all devices (375px → 1440px)
- 🌐 Bilingual support: Vietnamese & English
- 🖼️ Portfolio showcase with live iframe previews
- 💬 Testimonials/Potential clients section
- 📝 Contact form
- ⚡ Smooth animations with prefers-reduced-motion support

### Additional Pages
- 📜 `privacy-policy.html` - Privacy Policy
- 📋 `terms-of-service.html` - Terms of Service

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Semantic structure |
| Tailwind CSS (CDN) | Styling & responsive design |
| JavaScript (Vanilla) | Interactions & multilingual |
| Lucide Icons | SVG icons |
| Plus Jakarta Sans | Typography (Vietnamese-friendly) |

## 📁 Project Structure

```
sample-ui-ux-promax/
├── index.html              # Homepage
├── privacy-policy.html     # Privacy Policy
├── terms-of-service.html   # Terms of Service
├── README.md               # Documentation (this file)
├── prompt.txt              # Initial requirements
└── design-system/          # Generated design system
    └── ezpage/
        ├── MASTER.md       # Design tokens & guidelines
        └── pages/          # Page-specific overrides
```

## 🚀 How to Run Demo

### Prerequisites
- Python 3.x installed

### Method 1: Using Python HTTP Server (Recommended)

**Windows (PowerShell/CMD):**
```powershell
# Navigate to project directory
cd C:\Users\admin\Desktop\sample-ui-ux-promax

# Run server (Python 3)
python -m http.server 8000
```

**macOS/Linux:**
```bash
# Navigate to project directory
cd ~/Desktop/sample-ui-ux-promax

# Run server (Python 3)
python3 -m http.server 8000
```

**Then open your browser and visit:**
```
http://localhost:8000
```

### Method 2: Using a Different Port

```powershell
# Use port 3000
python -m http.server 3000

# Or port 5500
python -m http.server 5500
```

### Method 3: Open HTML File Directly

You can also open the `index.html` file directly in your browser, however some features (like iframe previews) may not work fully due to CORS policy.

### Method 4: Using VS Code Live Server

If you're using VS Code, install the **Live Server** extension and right-click on `index.html` → "Open with Live Server".

## 🎯 Demo Pages

| Page | URL | Description |
|------|-----|-------------|
| Homepage | `http://localhost:8000/` | Main landing page |
| Privacy Policy | `http://localhost:8000/privacy-policy.html` | Privacy Policy |
| Terms of Service | `http://localhost:8000/terms-of-service.html` | Terms of Service |

## 🎨 Design System

The project uses a design system generated from **UI Pro Max**:

### Color Palette
| Role | Hex | CSS Variable |
|------|-----|--------------|
| Primary | `#0F172A` | `--color-primary` |
| Secondary | `#334155` | `--color-secondary` |
| CTA/Accent | `#0369A1` | `--color-cta` |
| Accent 2 | `#06B6D4` | `--color-accent` |
| Background | `#F8FAFC` | `--color-background` |
| Text | `#020617` | `--color-text` |

### Typography
- **Font Family:** Plus Jakarta Sans
- **Weights:** 300, 400, 500, 600, 700, 800

## 🌐 Language Switching

The website supports 2 languages:
- 🇻🇳 **Vietnamese** (default)
- 🇬🇧 **English**

Click the **VI** or **EN** button on the navigation to switch languages.

## 📱 Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| Mobile | 375px | iPhone SE, small phones |
| Tablet | 768px | iPad, tablets |
| Desktop | 1024px | Laptops |
| Large | 1440px | Desktop monitors |

## 🔗 Portfolio Projects Preview

The website displays 6 sample projects with live previews:

1. **SaaS Analytics Dashboard** - Real-time analytics dashboard
2. **Educational Platform** - Online learning platform
3. **Pet Grooming** - Pet care service
4. **AI Chatbot Platform** - AI chatbot platform
5. **Luxury E-commerce** - Premium online store
6. **Fintech Crypto** - Cryptocurrency trading platform

## ✅ Pre-Deployment Checklist

- [ ] Test all links are working
- [ ] Test responsive on mobile/tablet
- [ ] Check form submission
- [ ] Verify VI/EN language switching
- [ ] Optimize images (if any)
- [ ] Minify CSS/JS (production)

## 📄 License

© 2026 EZpage. All rights reserved.

---

**Developed with ❤️ using UI Pro Max Design System**
