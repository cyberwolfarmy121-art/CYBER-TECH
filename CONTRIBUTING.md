# Contributing to CYBER TECH

Thank you for your interest in contributing! This document provides guidelines for contributing to the CYBER TECH e-commerce project.

## 🤝 How to Contribute

### Reporting Bugs
1. Check if the bug has already been reported
2. Use a descriptive title
3. Describe the exact steps to reproduce
4. Explain the expected vs actual behavior
5. Include screenshots if applicable
6. Specify your browser/OS/Node version

### Suggesting Enhancements
1. Use a clear, descriptive title
2. Provide detailed description
3. List examples of where enhancement exists elsewhere
4. Explain the benefit to users

### Pull Requests
1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Follow the code style guidelines
4. Commit with clear messages:
   ```bash
   git commit -m "Add feature: description"
   ```
5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a Pull Request with detailed description

## 📋 Pull Request Process

1. **Before submitting:**
   - Ensure code follows style guidelines
   - Test all changes thoroughly
   - Update documentation if needed
   - Add comments for complex logic

2. **PR Description should include:**
   - What changes were made
   - Why the changes were made
   - How to test the changes
   - Related issue numbers
   - Any breaking changes

3. **Code Review:**
   - Respond to feedback promptly
   - Make requested changes
   - Request re-review after updates

## 🎨 Code Style Guidelines

### HTML
- Use semantic HTML5 tags
- Keep indentation at 2 spaces
- Use lowercase for tags and attributes
- Close all tags properly

### CSS
- Use descriptive class names
- Avoid inline styles
- Organize by sections (header, cart, admin, etc.)
- Add comments for media queries
- Follow mobile-first approach

### JavaScript
- Use ES6+ features (const/let, arrow functions)
- Add comments for complex logic
- Use camelCase for variables/functions
- Keep functions focused and modular
- Add error handling

### Naming Conventions
```javascript
// Functions
function registerUser() { }
const sendEmail = () => { }

// Variables
const userEmail = 'user@email.com';
let cartItems = [];

// CSS Classes
.btn-primary { }
.product-card { }

// IDs
#login-modal
#admin-panel
```

## 🔍 Code Review Checklist

- [ ] Code follows style guidelines
- [ ] Comments added for complex logic
- [ ] No unnecessary console.logs
- [ ] Error handling implemented
- [ ] Works on all supported browsers
- [ ] Mobile responsive tested
- [ ] Documentation updated
- [ ] No sensitive data in code

## 📝 Commit Message Guidelines

```
<type>: <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation
- `style`: Formatting
- `refactor`: Code restructuring
- `test`: Testing
- `chore`: Maintenance

### Examples
```
feat: Add product search functionality

docs: Update Gmail setup instructions

fix: Resolve email delivery delay on slow connections

style: Format CSS media queries
```

## 🧪 Testing Checklist

### Frontend Testing
- [ ] Can register new account
- [ ] Can login with credentials
- [ ] Cart operations work (add/remove/update)
- [ ] Checkout process completes
- [ ] All payment options display
- [ ] Email confirmation received
- [ ] Admin features work
- [ ] Mobile responsive on all sizes
- [ ] No console errors

### Backend Testing
- [ ] Email service starts correctly
- [ ] Emails send on order placement
- [ ] Admin emails configured
- [ ] Error handling works
- [ ] Health check endpoint responds

## 📚 Documentation

When contributing, please update:
- README.md if adding features
- Code comments for complex logic
- DOCUMENTATION folder for guides
- CHANGELOG.md for changes

## 🚀 Development Workflow

1. **Setup environment:**
   ```bash
   git clone your-fork
   cd cyber-tech
   npm install
   ```

2. **Create feature branch:**
   ```bash
   git checkout -b feature/feature-name
   ```

3. **Make changes and test:**
   ```bash
   npm start  # Start email service
   # Test in browser
   ```

4. **Commit changes:**
   ```bash
   git add .
   git commit -m "feat: add feature description"
   ```

5. **Push to fork:**
   ```bash
   git push origin feature/feature-name
   ```

6. **Create Pull Request**

## 🐛 Known Issues

Before contributing, check:
- GitHub Issues section
- DOCUMENTATION/KNOWN_ISSUES.md
- Recent PR discussions

## 📦 Tech Stack Requirements

- Node.js v14+
- npm or yarn
- Modern browser (Chrome, Firefox, Safari, Edge)
- Gmail account (for email testing)

## 🔐 Security

When contributing code:
- Never commit `.env` or credentials
- Use environment variables
- Don't log sensitive data
- Validate user inputs
- Escape HTML output

## 📞 Questions?

- Email: cyberwolfarmy121@gmail.com
- Create a GitHub Discussion
- Ask in relevant Issue thread

## 📄 License

By contributing, you agree your code will be licensed under the MIT License.

## 🎯 Development Areas Welcome

- 🔄 Database integration
- 🛡️ Authentication improvements
- 💳 Real payment gateway integration
- 🌍 Internationalization (i18n)
- 🎨 UI/UX enhancements
- 📱 Progressive Web App (PWA)
- 🧪 Unit/Integration tests
- 📊 Analytics integration
- 🚀 Performance optimization
- 📖 Documentation improvements

---

**Thank you for contributing to CYBER TECH!** 🚀

Your contributions help make e-commerce development more accessible.
