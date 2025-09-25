# Technical Documentation

# Technical Documentation - Portfolio Website

## Project Architecture

### Overview
This portfolio website is built as a single-page application (SPA) using vanilla HTML, CSS, and JavaScript. The architecture follows modern web development principles with semantic markup, responsive design, and progressive enhancement.

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Inter)
- **Version Control**: Git
- **Deployment**: Static hosting compatible

## File Structure

```
assignment-1/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styling and responsive design
├── js/
│   └── script.js           # Interactive functionality
├── assets/
│   └── images/             # Image assets (placeholder for future use)
├── docs/
│   ├── ai-usage-report.md  # AI tool usage documentation
│   └── technical-documentation.md  # Current file
├── README.md               # Project overview and setup
└── .gitignore             # Files for git to ignore when pushing to remote repo
```

## HTML Structure

### Semantic Markup
The HTML follows semantic best practices:

```html
<nav>       <!-- Navigation bar -->
<section>   <!-- Main content sections -->
<article>   <!-- Project cards -->
<form>      <!-- Contact form -->
<footer>    <!-- Site footer -->
```

### Accessibility Features
- **ARIA Labels**: Interactive elements have descriptive labels
- **Semantic Elements**: Proper HTML5 semantic structure
- **Keyboard Navigation**: All interactive elements are keyboard accessible
- **Alt Text**: Descriptive text for images (when added)

### Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Almaan Khan - Computer Science Student</title>
```

## CSS Architecture

### Methodology
The CSS follows a component-based approach with:
- **Reset Styles**: Normalize browser defaults
- **Base Styles**: Typography and global rules
- **Component Styles**: Specific component styling
- **Responsive Styles**: Media queries for different screen sizes

### Layout Systems

#### CSS Grid
Used for main layout structures:
```css
.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
}
```

#### Flexbox
Used for navigation and smaller components:
```css
.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### Responsive Design

#### Breakpoints
- **Desktop**: 1200px+ (default)
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 320px - 479px

#### Media Query Strategy
Mobile-first approach with progressive enhancement:
```css
/* Mobile first (default) */
.element { /* mobile styles */ }

/* Tablet */
@media (max-width: 768px) { /* tablet styles */ }

/* Mobile */
@media (max-width: 480px) { /* mobile styles */ }
```

### Color Scheme

#### Light Theme
- **Primary**: #2563eb (Blue)
- **Background**: #ffffff (White)
- **Text**: #333333 (Dark Gray)
- **Secondary**: #64748b (Gray)

#### Dark Theme
- **Primary**: #3b82f6 (Light Blue)
- **Background**: #1e293b (Dark Blue)
- **Text**: #e2e8f0 (Light Gray)
- **Secondary**: #cbd5e1 (Light Gray)

### Animations
- **Transitions**: 0.3s ease for hover effects
- **Fade-in**: Scroll-triggered animations using Intersection Observer
- **Theme Toggle**: Smooth color transitions

## JavaScript Functionality

### Modern JS Features Used
- **Arrow Functions**: `() => {}`
- **Template Literals**: `${variable}`
- **Destructuring**: `const { property } = object`
- **Const/Let**: Block-scoped variables
- **DOM Methods**: Modern element selection and manipulation

### Core Functions

#### Theme Toggle
```javascript
function toggleTheme() {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', getCurrentTheme());
    updateThemeIcon();
}
```

#### Smooth Scrolling
```javascript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});
```

#### Form Validation
```javascript
function validateForm(formData) {
    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!name || !email || !message) return false;
    if (!emailRegex.test(email)) return false;
    
    return true;
}
```

### Event Handling
- **DOMContentLoaded**: Ensures DOM is ready before script execution
- **Click Events**: Navigation, theme toggle, form submission
- **Scroll Events**: Navbar styling changes
- **Form Events**: Validation and submission handling

### Local Storage
- **Theme Preference**: Persists user's theme choice
- **Fallback**: Graceful degradation if localStorage is not available

## Future Enhancements

### Planned Features
1. **Backend Integration**: Contact form processing
2. **SEO Optimization**: Meta tags and structured data

---

*This documentation provides comprehensive technical details for developing and maintaining the portfolio website.*