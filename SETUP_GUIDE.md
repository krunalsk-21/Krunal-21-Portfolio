# Portfolio Website - Setup Guide

## Quick Setup

Run these commands in order in your project directory:

### 1. Install Tailwind CSS and dependencies
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install framer-motion react-icons react-scroll aos react-hook-form
```

### 2. The following files have been created:
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `src/index.css` - Global styles with Tailwind directives
- `src/components/` - Reusable components
- `src/pages/` - Page sections
- `src/data/` - Mock data
- `src/App.jsx` - Main app component
- `index.html` - Updated HTML

### 3. Start development server
```bash
npm run dev
```

### 4. Build for production
```bash
npm run build
```

## Project Structure
```
src/
├── components/        # Reusable UI components
├── pages/             # Section components
├── data/              # Mock data for portfolio
├── App.jsx            # Main app
├── index.css          # Global styles
└── main.jsx           # Entry point
```

## Features Included
✓ Modern professional design
✓ Smooth animations & transitions
✓ Interactive hover effects
✓ Parallax scrolling
✓ Fully responsive design
✓ Dark/Light theme ready
✓ Form validation
✓ Scroll animations

## Customization
1. Update `src/data/` files with your actual content
2. Modify colors in `tailwind.config.js`
3. Update resume link in Contact section
4. Add your actual projects and blogs
5. Customize color scheme as needed

## Browser Compatibility
Works on all modern browsers (Chrome, Firefox, Safari, Edge)
