# Troubleshooting Guide

## Common Issues and Solutions

### ❌ "npm install failed"

**Problem**: Dependencies won't install

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete lock file and reinstall
rm package-lock.json
npm install

# Use npm instead of yarn
npm install --legacy-peer-deps
```

### ❌ "Tailwind styles not showing"

**Problem**: Tailwind CSS classes aren't working

**Solutions**:
1. Make sure `index.css` is imported in `main.jsx`:
```jsx
import './index.css'
```

2. Check that classes are spelled correctly (no typos)

3. Restart the dev server:
```bash
npm run dev
```

4. Clear browser cache (Ctrl+Shift+Delete)

### ❌ Port 5173 already in use

**Problem**: `npm run dev` says port is in use

**Solutions**:
```bash
# Use a different port
npm run dev -- --port 3000

# Or kill the process using the port
# On Windows:
netstat -ano | findstr :5173

# Then kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

### ❌ Build errors

**Problem**: `npm run build` fails with errors

**Solutions**:
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Clear cache and rebuild
npm cache clean --force
npm run build
```

### ❌ Hot reload not working

**Problem**: Changes aren't reflected automatically

**Solutions**:
1. Make sure dev server is running: `npm run dev`
2. Check that files are being saved
3. Clear browser cache
4. Restart the dev server

### ❌ TypeErrors in console

**Problem**: JavaScript errors appearing

**Check**:
- Are all prop names spelled correctly?
- Did you close all parentheses and braces?
- Are all imports at the top of the file?
- Did you export the component at the end?

### ❌ Images not displaying

**Problem**: Images in `/public` folder aren't showing

**Solution**:
Use correct path in `<img>` tag:
```jsx
<img src="/image-name.jpg" alt="description" />
```

Not:
```jsx
<img src="./public/image-name.jpg" alt="description" />
```

### ❌ Responsive design issues

**Problem**: Site doesn't look good on mobile

**Solutions**:
1. Check Tailwind breakpoints are correct:
```jsx
<div className="block md:hidden">
  Mobile version
</div>
<div className="hidden md:block">
  Desktop version
</div>
```

2. Test with browser DevTools (F12) responsive design mode

3. Check viewport meta tag in `index.html`:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

### ❌ Component not showing

**Problem**: A component doesn't appear on page

**Check**:
1. Is the component imported correctly?
```jsx
import { MyComponent } from './path/to/component'
```

2. Is it rendered in JSX?
```jsx
<MyComponent />
```

3. Does it have display issues (hidden, opacity: 0)?

### ❌ Form not submitting

**Problem**: Contact form doesn't work

**Solutions**:
1. Install a form service (Formspree, EmailJS, etc.)
2. Get API key from service
3. Update form with service integration
4. Test in browser console for errors

### ❌ Deployment fails

**Problem**: Vercel/Netlify deployment errors

**Solutions**:
1. Make sure `npm run build` works locally
2. Check that all environment variables are set
3. Verify Node version compatibility:
```bash
node --version  # Should be v16+
```

4. Check for large assets
5. Clear cache and rebuild

### ❌ Slow performance

**Problem**: Website loads slowly

**Solutions**:
1. Optimize images (compress, use correct format)
2. Check browser DevTools Performance tab
3. Reduce unused CSS in Tailwind config
4. Enable gzip compression on server
5. Use CDN for assets

### ❌ Git commit issues

**Problem**: Can't push to GitHub

**Solutions**:
```bash
# Check git status
git status

# Add all changes
git add .

# Commit with message
git commit -m "Your message"

# Push to repository
git push origin main
```

## Performance Tips

1. **Compress Images**
   - Use tools like TinyPNG or ImageOptim
   - Use modern formats (WebP)

2. **Code Splitting**
   - React automatically code-splits with dynamic imports
   ```jsx
   const Component = React.lazy(() => import('./Component'));
   ```

3. **Minification**
   - Vite automatically minifies on build

4. **Tree Shaking**
   - Import only what you need
   - ✅ `import { Component } from 'package'`
   - ❌ `import * as lib from 'package'`

## Debugging Tips

### Enable Debug Mode

```jsx
// Add console logs
console.log('Debug info:', variable);

// Check component render
console.log('Component rendered');
```

### Use Browser DevTools

- **Elements**: Check HTML structure
- **Console**: See JavaScript errors
- **Network**: Check API calls
- **Performance**: Check loading time

### Check Network Tab

```jsx
// Make sure API calls are working
fetch('/api/endpoint')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

## Common Mistakes

❌ **Forgetting to import CSS**
```jsx
// Wrong - CSS won't apply
function Component() { }

// Right - CSS imported
import './styles.css'
function Component() { }
```

❌ **Using `var` instead of `const/let`**
```jsx
// Avoid
var name = 'John';

// Better
const name = 'John';
```

❌ **Not using keys in lists**
```jsx
// Wrong
{items.map(item => <div>{item}</div>)}

// Right
{items.map(item => <div key={item.id}>{item}</div>)}
```

❌ **Mutating state directly**
```jsx
// Wrong
state.name = 'New Name';

// Right
setState({ ...state, name: 'New Name' });
```

## Getting Help

1. **Check Documentation**
   - [React Docs](https://react.dev)
   - [Tailwind CSS](https://tailwindcss.com/docs)
   - [Vite Guide](https://vite.dev/guide/)

2. **Search Online**
   - Stack Overflow
   - GitHub Issues
   - Dev.to
   - Medium articles

3. **Community Help**
   - React Discord
   - Tailwind Discord
   - GitHub Discussions
   - Twitter #100DaysOfCode

## Browser Compatibility

Tested on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Metrics

Target metrics:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **Time to Interactive**: < 3.5s

## Quick Reference

```bash
# Development
npm run dev              # Start dev server
npm run dev -- --port 3000  # Use different port

# Building
npm run build            # Build for production
npm run preview          # Preview build locally

# Maintenance
npm update              # Update dependencies
npm audit               # Check security
npm ci                  # Clean install (for CI/CD)

# Code Quality
npm run lint            # Run linter
npm run lint -- --fix   # Auto-fix issues
```

---

**Still stuck? Check the code comments or create an issue on GitHub!** 🚀
