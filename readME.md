# Modern Art Gallery Website

A fully responsive art gallery website with interactive location mapping. Built with HTML, CSS, and JavaScript to demonstrate clean code architecture and practical implementation skills.

## 🔗 Live Demo

[View Live Site](artgallerywebsite.vercel.app)
## 📋 Overview

A two-page responsive website featuring a modern art gallery homepage and an interactive location page with Leaflet.js map integration.

## ✨ Features

- Fully responsive across mobile (375px), tablet (768px), and desktop (1440px)
- Interactive map with custom marker showing gallery location
- Semantic HTML5 with proper accessibility attributes
- Lazy-loaded images for optimized performance
- Custom CSS split-color typography effect
- Cross-browser compatible (Chrome, Firefox, Edge)

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, Grid)
- JavaScript
- Leaflet.js 1.9.4
- Google Fonts (Big Shoulders Display, Outfit)

## 📁 Project Structure

```
art-gallery-website/
├── index.html
├── contact.html
├── resources/
│   ├── css/
│   │   └── index.css
│   ├── js/
│   │   └── index.js
│   └── images/
│       ├── mobile/
│       ├── tablet/
│       └── desktop/
```

## 🎨 Technical Highlights

### Responsive Design Strategy
Mobile-first CSS with breakpoints at 768px and 1440px. Each breakpoint loads appropriately sized images via CSS background-image for optimal performance.

### Split-Color Typography
Custom CSS effect on desktop hero heading using pseudo-elements:
```css
.half-letter::before {
  content: attr(data-char);
  clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%, 50% 50%);
}
```

### Interactive Mapping
Leaflet.js integration with custom SVG marker icon, centered on Newport, RI (41.4882, -71.3126).

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels on interactive elements
- Keyboard navigation support with focus states
- Descriptive alt text for images
- Lazy-loaded images

## 👤 Author

**Asmaa GAD**  
Frontend Developer

- X: [@Asmaagadel](https://x.com/Asmaagadel)

---


© 2025 Asmaa GAD. Available for educational and portfolio use.
