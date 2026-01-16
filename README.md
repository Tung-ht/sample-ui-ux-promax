# EZpage - Professional Web Development Company Website

A modern, responsive, and bilingual (Vietnamese/English) website for EZpage, a professional web development company.

## 🌟 Features

### Core Features
- **Fixed Navigation Bar** - Sticky header with smooth scrolling to sections (Services, Pricing, Contact)
- **Hero Section** - Eye-catching hero with gradient text, floating cards animation, and call-to-action buttons
- **Services Section** - 6 service cards showcasing web design, development, mobile responsive, e-commerce, SEO, and support services
- **Portfolio Section** - Showcase of 6 demo projects with iframe previews:
  - SaaS Analytics Dashboard
  - Educational Platform
  - Pet Grooming Service
  - AI Chatbot Platform
  - Luxury E-Commerce
  - Fintech & Crypto Trading
- **Pricing Section** - 3 pricing tiers (Starter, Professional, Enterprise) with feature comparison
- **Testimonials Section** - Client feedback with 5-star ratings
- **Contact Form** - Interactive quote request form with validation
- **Footer** - Quick links, services list, newsletter signup, and social media links

### Design Features
- **Modern Dark Theme** - Professional dark color scheme with gradient accents
- **Mobile-First Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Eye-Catching Colors** - Purple (#6366f1) and pink (#ec4899) gradient accents
- **Modern Typography** - Inter and Poppins fonts with Vietnamese support
- **Smooth Animations** - Floating cards, fade-in effects, hover transitions
- **Icons & Illustrations** - Font Awesome icons throughout the design

### Technical Features
- **Bilingual Support** - Seamless language switching between Vietnamese and English
- **Form Validation** - Client-side validation for contact form
- **Smooth Scrolling** - Anchor links with smooth scroll behavior
- **Performance Optimized** - Lazy loading for iframes, efficient CSS, minimal JavaScript
- **SEO Ready** - Semantic HTML, proper meta tags, accessible markup
- **Cross-browser Compatible** - Works on all modern browsers

## 📁 Project Structure

```
sample-ui-ux-promax/
├── index.html          # Main HTML structure
├── styles.css          # All styles (mobile-first, responsive)
├── script.js           # JavaScript functionality (language switch, form validation)
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended for testing)

### Installation & Running

1. **Clone or download this repository**

2. **Option 1: Open directly in browser**
   ```bash
   # Simply open index.html in your browser
   # Double-click index.html file
   ```

3. **Option 2: Run with Python HTTP server (recommended)**
   ```bash
   # Navigate to project directory
   cd sample-ui-ux-promax
   
   # Start server (Python 3)
   python -m http.server 8000
   
   # Open in browser
   # Navigate to http://localhost:8000
   ```

4. **Option 3: Run with Node.js HTTP server**
   ```bash
   # Install http-server globally (first time only)
   npm install -g http-server
   
   # Navigate to project directory and run
   cd sample-ui-ux-promax
   http-server -p 8000
   
   # Open in browser
   # Navigate to http://localhost:8000
   ```

## 🎨 Design Patterns & Best Practices

### CSS Architecture
- **CSS Variables** - Centralized color scheme, spacing, and sizing
- **Mobile-First Approach** - Base styles for mobile, progressive enhancement for larger screens
- **BEM-like Naming** - Clear, descriptive class names
- **Flexbox & Grid** - Modern layout techniques for responsive design
- **Smooth Transitions** - CSS transitions for better UX

### JavaScript Patterns
- **Module Pattern** - Organized code with clear separation of concerns
- **Event Delegation** - Efficient event handling
- **Progressive Enhancement** - Core functionality works without JavaScript
- **Intersection Observer** - Performance-optimized scroll animations
- **Form Validation** - Client-side validation with user-friendly messages

### Responsive Design
- **Breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Flexible Grids** - Auto-fit and auto-fill grid layouts
- **Fluid Typography** - clamp() function for responsive text sizing
- **Mobile Menu** - Hamburger menu with smooth slide-in animation

### Accessibility
- **Semantic HTML** - Proper use of HTML5 semantic elements
- **ARIA Labels** - Descriptive labels for screen readers
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Visible focus states and proper tab order
- **Color Contrast** - WCAG AA compliant color contrast ratios

## 🌐 Language Support

The website supports two languages:
- **Vietnamese (VI)** - Default language
- **English (EN)** - Switch via language toggle button in navigation

Language switching is instant and affects all text content including:
- Navigation menu
- Hero section
- Service descriptions
- Portfolio items
- Pricing cards
- Testimonials
- Contact form
- Footer content

## 📝 Form Features

The contact form includes:
- **Name field** - Required text input
- **Email field** - Required with email validation
- **Website Type dropdown** - 6 options:
  - Corporate Website
  - E-Commerce Store
  - Portfolio/Personal
  - Blog/News
  - Landing Page
  - Custom Solution
- **Project Details** - Required textarea for detailed requirements
- **Form Validation** - Real-time validation with error messages
- **Success Message** - Confirmation after successful submission
- **Loading State** - Visual feedback during submission

## 🎯 Target Sections

### Navigation Links
- `#home` - Hero section
- `#services` - Services showcase
- `#portfolio` - Project portfolio
- `#pricing` - Pricing plans
- `#contact` - Contact form

## 🔧 Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    --accent-color: #f59e0b;
    /* ... more colors */
}
```

### Content
- Edit text in `index.html` (update both `data-en` and `data-vi` attributes)
- Update portfolio links in iframe `src` attributes
- Modify pricing tiers and features

### Translations
Add or modify translations in `script.js`:
```javascript
const translations = {
    en: {
        'Vietnamese Text': 'English Text',
        // ... more translations
    }
};
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox, grid, animations
- **Vanilla JavaScript** - No frameworks, pure JS for optimal performance
- **Font Awesome 6.4.0** - Icon library
- **Google Fonts** - Inter & Poppins fonts

## 🎉 Key Highlights

1. ✅ **Modern & Professional Design** - Dark theme with vibrant gradients
2. ✅ **Fully Responsive** - Perfect on all devices
3. ✅ **Bilingual** - Vietnamese & English support
4. ✅ **Interactive Portfolio** - Live demo previews with iframes
5. ✅ **Form Validation** - User-friendly contact form
6. ✅ **Smooth Animations** - Floating cards, fade-in effects
7. ✅ **SEO Optimized** - Semantic HTML and meta tags
8. ✅ **Fast Performance** - Optimized assets and lazy loading
9. ✅ **Accessible** - WCAG compliant
10. ✅ **Easy to Customize** - Well-organized, commented code

## 📞 Demo Links

The portfolio section showcases these demo projects:
1. https://ui-ux-pro-max-skill.nextlevelbuilder.io/demo/saas-analytics-dashboard
2. https://ui-ux-pro-max-skill.nextlevelbuilder.io/demo/educational-platform
3. https://ui-ux-pro-max-skill.nextlevelbuilder.io/demo/pet-grooming
4. https://ui-ux-pro-max-skill.nextlevelbuilder.io/demo/ai-chatbot-platform
5. https://ui-ux-pro-max-skill.nextlevelbuilder.io/demo/luxury-ecommerce
6. https://ui-ux-pro-max-skill.nextlevelbuilder.io/demo/fintech-crypto

## 👨‍💻 Development Notes

- No build process required - pure HTML, CSS, and JavaScript
- No dependencies or node_modules
- Can be deployed to any static hosting service
- Works offline after initial load

## 📄 License

This project is developed for EZpage web development company.

---

**Developed with ❤️ for EZpage**
