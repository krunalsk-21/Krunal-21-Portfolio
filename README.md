# Krunal's Modern Portfolio Website

A stunning, fully-featured portfolio website built with **React 19**, **Vite**, and **Tailwind CSS**. Perfect for showcasing your skills, projects, and professional journey.

## ✨ Features

- 🎨 **Modern Professional Design** - Clean, contemporary interface with corporate aesthetic
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ⚡ **Lightning Fast** - Built with Vite for instant hot reload and optimized builds
- 🎭 **Smooth Animations** - Fade-in, slide-up, parallax scrolling effects
- 🎯 **Interactive Elements** - Hover effects, floating animations, smooth transitions
- 📊 **Multiple Sections** - Home, About, Experience, Skills, Projects, Blogs, Contact
- 🌐 **SEO Ready** - Meta tags and semantic HTML
- 🎪 **Zero Configuration** - Just install and start customizing

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd krunal-21-portfolio
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### 3. Customize
Edit `src/App.jsx` with your own:
- Name and title
- About section
- Experience timeline
- Skills and proficiency levels
- Projects showcase
- Blog posts
- Contact information

### 4. Build & Deploy
```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

## 📂 Project Structure

```
src/
├── App.jsx          # Main component with all sections
├── index.css        # Tailwind + custom styles
├── main.jsx         # React entry point
└── assets/          # Images and static files

tailwind.config.js   # Tailwind CSS customization
postcss.config.js    # PostCSS configuration
vite.config.js       # Vite configuration
```

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#your-color',  // Primary color
    600: '#darker-shade'
  }
}
```

### Update Navigation
Modify the `navItems` array in the Header component.

### Add Your Projects
Update the projects array with your portfolio items, tech stack, and descriptions.

### Update Social Links
Change social media URLs in the Contact section.

## 📦 Built With

- **React 19** - UI framework
- **Vite 8** - Build tool
- **Tailwind CSS 3** - Styling
- **JavaScript ES6+** - Modern JavaScript

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository → Deploy

### Netlify
1. Push to GitHub
2. Visit [netlify.com](https://netlify.com)
3. New site from Git → Deploy

### GitHub Pages
1. Build: `npm run build`
2. Upload `dist/` to gh-pages branch

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🎓 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vite.dev)

## 📄 License

Free to use for personal and commercial projects.

## 🎉 What's Included

✅ Professional hero section  
✅ Animated about section  
✅ Experience timeline  
✅ Skills showcase with progress bars  
✅ Featured projects section  
✅ Blog posts listing  
✅ Contact form  
✅ Social media links  
✅ Responsive navigation  
✅ Custom animations  
✅ Mobile menu  
✅ Footer with links  

---

**Ready to show the world your amazing work? Start customizing now!** 🚀
