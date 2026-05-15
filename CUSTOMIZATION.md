# Portfolio Customization Examples

This file contains examples of how to customize different sections of your portfolio.

## 🎯 Home Section

Replace the hero section with your own:

```jsx
const Home = ({ setActiveSection }) => (
  <section className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 flex items-center pt-20">
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="slide-up space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
          <p className="text-xl text-slate-600">
            Your professional tagline here
          </p>
          {/* ... rest of component */}
        </div>
      </div>
    </div>
  </section>
);
```

## 👤 About Section

Update your bio:

```jsx
<p className="text-lg leading-relaxed">
  I'm a full-stack developer with X years of experience...
</p>

<div className="space-y-3 mt-6">
  <div className="flex items-center gap-3">
    <span className="text-2xl">🎓</span>
    <span>Your Education Here</span>
  </div>
  {/* ... more interests */}
</div>
```

## 💼 Experience Section

Add your work experience:

```jsx
{
  title: 'Your Job Title',
  company: 'Your Company',
  period: '2023 - Present',
  description: 'What you did and achieved...'
}
```

## 🎯 Skills Section

Update your skills:

```jsx
{
  category: 'Frontend',
  skills: ['React', 'JavaScript', 'Tailwind CSS', 'Next.js']
}
```

## 🚀 Projects Section

Add your portfolio projects:

```jsx
{
  title: 'Project Name',
  description: 'What the project does...',
  tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
}
```

Change the emoji icon:
```jsx
<span className="text-white text-4xl">💻</span>  // Change to your emoji
```

## 📝 Blogs Section

Add your blog posts:

```jsx
{
  title: 'Article Title',
  date: 'Mar 15, 2024',
  category: 'React',
  excerpt: 'Brief description of your article...'
}
```

## 📧 Contact Section

Update your contact information:

```jsx
<p className="text-slate-600">Email: your.email@example.com</p>
<p className="text-slate-600">Phone: +1-XXX-XXX-XXXX</p>
<p className="text-slate-600">Location: Your City</p>
```

Add social media links:

```jsx
{name: 'GitHub', icon: '🐙', url: 'https://github.com/yourname'}
{name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/yourname'}
{name: 'Twitter', icon: '🐦', url: 'https://twitter.com/yourname'}
```

## 🎨 Changing Colors

### Primary Color Theme

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#YOUR_COLOR',  // Main color
    600: '#DARKER_SHADE',
    700: '#EVEN_DARKER',
    900: '#DARKEST_SHADE',
  }
}
```

Common color options:
- **Sky Blue**: `#0ea5e9`
- **Purple**: `#a855f7`
- **Emerald**: `#10b981`
- **Rose**: `#f43f5e`
- **Indigo**: `#6366f1`

### Gradient Background

Change the hero gradient:

```jsx
<section className="min-h-screen bg-gradient-to-br from-YOUR_COLOR-50 via-white to-YOUR_COLOR-50">
```

## 📱 Responsive Design

All components are mobile-responsive using Tailwind's responsive classes:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Single column on mobile, 2 on tablet, 3 on desktop */}
</div>

<h1 className="text-3xl md:text-5xl lg:text-6xl">
  {/* Responsive font sizes */}
</h1>

<div className="hidden md:flex">
  {/* Hidden on mobile, visible on tablet+ */}
</div>
```

## ✨ Adding Animations

Custom animations already available:

```jsx
className="fade-in"      // Fade in
className="slide-up"     // Slide up from bottom
className="float"        // Floating effect
```

Add your own animations in `src/index.css`:

```css
@keyframes customAnimation {
  from {
    /* starting state */
  }
  to {
    /* ending state */
  }
}

.custom-class {
  animation: customAnimation 0.8s ease-out;
}
```

## 🔗 Adding External Links

```jsx
<a 
  href="https://your-link.com" 
  target="_blank"
  rel="noopener noreferrer"
  className="text-sky-600 hover:text-sky-700"
>
  Link Text
</a>
```

## 📥 Download Resume

Add a download button:

```jsx
<a
  href="/your-resume.pdf"
  download
  className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
>
  Download Resume
</a>
```

## 🎪 Form Submission

To handle form submissions:

```jsx
const handleSubmit = (e) => {
  e.preventDefault();
  // Send email using EmailJS, Formspree, or similar service
  // Example: fetch('/api/contact', { method: 'POST', body: formData })
};

<form onSubmit={handleSubmit}>
  {/* form fields */}
</form>
```

Popular form services:
- [Formspree](https://formspree.io)
- [EmailJS](https://www.emailjs.com)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Basin](https://usebasin.com)

## 🌐 Deployment Checklist

Before deploying:

- [ ] Update all personal information
- [ ] Add your real projects
- [ ] Update work experience
- [ ] Add actual blog posts
- [ ] Set correct social media links
- [ ] Update contact email
- [ ] Add/update resume PDF
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Test contact form
- [ ] Optimize images
- [ ] Set meta description
- [ ] Run `npm run build`

## 📚 Component Reference

### Navigation Buttons

```jsx
<button className="px-4 py-2 rounded-lg transition-smooth hover:bg-slate-100">
  Click Me
</button>
```

### Card Component

```jsx
<div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-smooth">
  Content here
</div>
```

### Badge/Tag

```jsx
<span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-semibold">
  Tag
</span>
```

### Progress Bar

```jsx
<div className="w-full bg-slate-200 rounded-full h-2">
  <div className="bg-sky-500 h-2 rounded-full" style={{ width: '85%' }}></div>
</div>
```

---

**Need help? Check the React and Tailwind documentation, or inspect the App.jsx component!**
