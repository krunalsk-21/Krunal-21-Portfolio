# 🚀 Krunal Portfolio Website - Complete Guide

## ✨ Overview

A modern, professional portfolio website built with **Vite + React + Tailwind CSS**. Features smooth animations, interactive elements, parallax scrolling, and fully responsive design.

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🔧 Installation & Setup

### Step 1: Install Dependencies

```bash
cd krunal-21-portfolio
npm install
```

This will install:
- React 19
- Tailwind CSS 3
- PostCSS & Autoprefixer
- Vite development server

### Step 2: Start Development Server

```bash
npm run dev
```

The site will open at `http://localhost:5173`

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

## 📂 Project Structure

```
krunal-21-portfolio/
├── src/
│   ├── App.jsx              # Main app component with all sections
│   ├── main.jsx             # React entry point
│   ├── index.css            # Tailwind + custom styles
│   └── assets/              # Images and static assets
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies
└── SETUP_GUIDE.md           # This file
```

## 🎨 Features

✅ **Professional Design**
- Clean, modern interface with corporate aesthetic
- Gradient backgrounds and smooth transitions
- Professional color scheme (Sky Blue primary)

✅ **Interactive Elements**
- Smooth hover effects on all buttons and cards
- Floating animations
- Fade-in and slide-up animations on scroll

✅ **Fully Responsive**
- Mobile-first design approach
- Works perfectly on all devices
- Mobile navigation menu with hamburger icon

✅ **Multiple Sections**
1. **Home** - Engaging hero section with CTA buttons
2. **About** - Personal introduction with interests
3. **Experience** - Timeline-based work experience
4. **Skills** - Skill categories with progress bars
5. **Projects** - Portfolio showcase with tech stacks
6. **Blogs** - Latest blog posts
7. **Contact** - Contact form and social links

✅ **Performance**
- Optimized with Vite for fast builds
- Minimal bundle size
- Fast development hot reload

## 🎯 Customization

### Update Your Information

Edit `src/App.jsx` and replace:
- Your name in the Header component
- About section content
- Experience entries
- Skills and proficiency levels
- Projects showcase
- Blog posts
- Contact information

### Change Colors

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#YourColor',  // Change primary color
      }
    }
  }
}
```

### Add Social Links

Update the social media links in the Contact section:

```jsx
{name: 'GitHub', icon: '🐙', url: 'your-github-url'}
```

### Add Blog Posts & Projects

Simply update the arrays in the respective sections with your actual content.

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`

### Deploy to GitHub Pages

```bash
npm run build
# Then upload dist/ folder to your gh-pages branch
```

## 📦 What's Included

### Technologies
- **React 19** - UI library
- **Vite 8** - Lightning-fast build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing

### Features
- Custom animations and transitions
- Glass morphism effects
- Gradient backgrounds
- Responsive navigation
- Form inputs
- Progress bars
- Project cards
- Blog listings

## 🎓 Learning Resources

- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vite.dev)

## 🐛 Troubleshooting

### Tailwind styles not showing?
- Make sure you ran `npm install`
- Restart the dev server: `npm run dev`
- Check that `index.css` is imported in `main.jsx`

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📝 License

This portfolio template is free to use and customize for your own projects.

## 🎉 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Customize content in `src/App.jsx`
4. ✅ Update colors and styling as needed
5. ✅ Deploy to your hosting platform
6. ✅ Share your amazing portfolio!

---

**Happy coding! 🚀**

Need help? Check the Tailwind CSS and React documentation, or inspect the code in `src/App.jsx` for examples.
