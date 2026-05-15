# ⚡ Quick Reference Card

## 🚀 30-Second Setup

```bash
cd krunal-21-portfolio
npm install
npm run dev
# Open http://localhost:5173
```

## 📝 What to Edit

### File: `src/App.jsx`

Find these sections and update with YOUR info:

```javascript
// 1. Home Component - Update hero text
<h1 className="...">
  Hi, I'm <span className="gradient-text">YOUR NAME</span>
</h1>

// 2. About Component - Update bio
<p className="text-lg leading-relaxed">
  YOUR PROFESSIONAL BIO HERE
</p>

// 3. Experience - Update work history
{
  title: 'Your Job Title',
  company: 'Your Company',
  period: '2023 - Present',
  description: 'What you did...'
}

// 4. Skills - Update your skills
{
  category: 'Frontend',
  skills: ['Your', 'Skills', 'Here']
}

// 5. Projects - Add your projects
{
  title: 'Your Project',
  description: 'What it does...',
  tech: ['Tech', 'Stack']
}

// 6. Blogs - Add blog posts
{
  title: 'Blog Title',
  date: 'Date',
  category: 'Category',
  excerpt: 'Post excerpt...'
}

// 7. Contact - Update contact info
<p className="text-slate-600">Email: your.email@example.com</p>
```

## 🎨 Color Customization

### File: `tailwind.config.js`

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // ← Change this color
    600: '#0284c7',
    700: '#0369a1',
  }
}
```

### Popular Colors to Try:
- Purple: `#a855f7`
- Emerald: `#10b981`
- Rose: `#f43f5e`
- Indigo: `#6366f1`

## 📋 Essential Commands

```bash
npm run dev          Start dev server
npm run build        Build for production
npm run preview      Preview build locally
npm run lint         Check code quality

# Troubleshooting
npm cache clean --force    Clear cache
npm install --legacy-peer-deps   Fix install issues
```

## 📂 Important Files

```
src/
  App.jsx          ← EDIT THIS (all content)
  index.css        ← Custom styles
  main.jsx         ← Don't modify

tailwind.config.js   ← Colors & theme
package.json         ← Dependencies
index.html           ← Page title & meta
```

## 🎯 Section Quick Links

In `src/App.jsx`, find these functions to customize:

1. **Home** - `const Home = ({ setActiveSection }) => {`
2. **About** - `const About = () => {`
3. **Experience** - `const Experience = () => {`
4. **Skills** - `const Skills = () => {`
5. **Projects** - `const Projects = () => {`
6. **Blogs** - `const Blogs = () => {`
7. **Contact** - `const Contact = () => {`

## 🔗 External Links

Add your social/resume links:

```jsx
{name: 'GitHub', icon: '🐙', url: 'https://github.com/yourname'}
{name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourname'}
{name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourname'}

// Resume download
<a href="/your-resume.pdf" download>Download Resume</a>
```

## 🎨 Tailwind Classes Cheat Sheet

### Text
```
text-sm, text-base, text-lg, text-xl, text-2xl
text-slate-600, text-sky-500, text-white
font-bold, font-semibold, font-normal
```

### Background
```
bg-white, bg-slate-50, bg-sky-500
bg-gradient-to-br from-sky-50 to-blue-50
```

### Sizing
```
w-full, w-1/2, w-64
h-screen, h-64, h-32
px-4, py-6 (padding)
```

### Layout
```
flex, grid, gap-4
grid-cols-1, grid-cols-2, grid-cols-3
md:grid-cols-2, lg:grid-cols-3 (responsive)
```

### Effects
```
shadow-md, shadow-lg
rounded-lg, rounded-full
opacity-50, opacity-100
```

### States
```
hover:bg-sky-600
hover:shadow-lg
focus:outline-none
disabled:opacity-50
```

## 📱 Responsive Breakpoints

```
sm: 640px    (tablets)
md: 768px    (tablets+)
lg: 1024px   (desktops)
xl: 1280px   (large)

Usage:
<div className="text-sm md:text-lg lg:text-2xl">
  {/* Responsive text size */}
</div>
```

## 🎭 Animation Classes

```
fade-in        Fade in effect
slide-up       Slide up animation
float          Floating animation
transition-smooth  Smooth transitions (300ms)
```

Add to elements:
```jsx
<div className="fade-in">Content</div>
<div className="slide-up">Content</div>
<div className="float">Content</div>
```

## 🌐 Deployment URLs

### Vercel
1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import repo → Deploy

### Netlify
1. Push code to GitHub
2. Go to [netlify.com/drop](https://netlify.com/drop)
3. Drag `dist/` folder

### GitHub Pages
```bash
npm run build
# Upload dist/ folder to gh-pages branch
```

## ✅ Pre-Deployment Checklist

- [ ] Updated name & tagline
- [ ] Changed primary color
- [ ] Added your about text
- [ ] Added work experience
- [ ] Listed your skills
- [ ] Added your projects
- [ ] Added blog posts
- [ ] Updated contact email
- [ ] Added social links
- [ ] Set resume download link
- [ ] Tested on mobile
- [ ] Ran `npm run build` (no errors)
- [ ] Set custom domain (optional)

## 🐛 Quick Fixes

### Tailwind classes not working?
```bash
npm run dev   # Restart dev server
# Clear browser cache (Ctrl+Shift+Delete)
```

### Port already in use?
```bash
npm run dev -- --port 3000
```

### Build fails?
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 📚 Documentation

- [React Docs](https://react.dev)
- [Tailwind Docs](https://tailwindcss.com)
- [Vite Docs](https://vite.dev)

## 💡 Pro Tips

1. **Keep it simple** - Don't over-complicate content
2. **Use emojis** - Adds visual interest
3. **Real projects** - Link to actual GitHub repos
4. **High quality** - Optimize images before uploading
5. **Test mobile** - Check on real phones
6. **Update often** - Keep portfolio current
7. **Get feedback** - Show friends/mentors
8. **Add analytics** - Track visitors (optional)

## 🎊 You're Ready!

```
✅ Project created
✅ All files configured
✅ Documentation complete
✅ Ready to customize

→ Next: Edit src/App.jsx with your info
→ Then: npm run dev to see changes
→ Finally: npm run build & deploy!
```

---

**Need Help?**
1. Check `TROUBLESHOOTING.md` for solutions
2. Read `CUSTOMIZATION.md` for detailed guides
3. Review `FEATURE_SHOWCASE.md` for design details
4. See `COMPLETE_GUIDE.md` for comprehensive info

**You've got this! 🚀**
