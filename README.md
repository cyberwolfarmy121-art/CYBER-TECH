# 🚀 CYBER TECH - E-Commerce Store

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-4.18+-blue)](https://expressjs.com/)
[![Gmail SMTP](https://img.shields.io/badge/Email-Gmail%20SMTP-red)](https://mail.google.com/)

A fully functional e-commerce platform with shopping cart, multiple payment options, order management, admin panel, and real email notifications via Gmail SMTP.

## ✨ Features

### 🛍️ Customer Features
- ✅ User registration and login with persistent sessions
- ✅ Browse and search products with emoji thumbnails
- ✅ Shopping cart with add/remove/quantity management
- ✅ Multi-step checkout process
- ✅ 4 payment options (Google Pay, COD, Razorpay, Wallet)
- ✅ Order confirmation and professional receipt
- ✅ Order history tracking
- ✅ Email receipt confirmation
- ✅ Continue shopping functionality
- ✅ Fully responsive mobile design

### 👨‍💼 Admin Features
- ✅ Admin login (Email: 1122, Password: 1122)
- ✅ Dashboard with order statistics
- ✅ Recent orders display with details
- ✅ Total revenue tracking and items sold count
- ✅ Product inventory management
- ✅ Add new products with prices
- ✅ Edit product details
- ✅ Delete products
- ✅ Mobile responsive admin panel
- ✅ Real-time notifications on orders

### 📧 Email System
- ✅ Real Gmail SMTP integration
- ✅ Customer order confirmation emails
- ✅ Admin order notification emails
- ✅ Professional HTML email templates
- ✅ Order details in emails
- ✅ Fast delivery (<5 seconds)

### 🔔 Notifications
- ✅ Browser notifications for new orders
- ✅ Visual popup alerts with animations
- ✅ Admin dashboard updates
- ✅ Email notifications

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Responsive design with 5 media query breakpoints
- **JavaScript (ES6+)** - Dynamic interactions
- **Fetch API** - Async HTTP requests
- **Local Storage** - Client-side data persistence

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **Nodemailer** - Email sending service
- **CORS** - Cross-origin request handling
- **dotenv** - Environment variable management

### Services
- **Gmail SMTP** - Real email delivery
- **Local Storage** - Data persistence
- **Mock Payments** - Payment simulation

## 📁 Project Structure

```
cyber-tech-ecommerce/
├── cybertech.html              # Main website (1700+ lines)
├── server.js                   # Email backend service
├── package.json                # Node.js dependencies
├── .env.example                # Environment template
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
│
├── DOCUMENTATION/              # Complete guides
│   ├── START_HERE.md
│   ├── QUICK_START_EMAIL.md
│   ├── EMAIL_SETUP.md
│   ├── ADMIN_FEATURES.md
│   └── (15+ more documentation files)
│
└── SCRIPTS/                    # Helper scripts
    ├── SETUP.bat               # Windows setup
    └── START_EMAIL_SERVER.bat  # Quick launcher
```

## 🚀 Quick Start (5 Minutes)

### Prerequisites
- Node.js v14+ ([download](https://nodejs.org/))
- npm or yarn
- Gmail account with 2FA enabled

### Step 1: Clone Repository
```bash
git clone https://github.com/cyberwolfarmy121-art/cyber-tech.git
cd cyber-tech
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Gmail
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-factor authentication
3. Generate app password (Mail, Windows)
4. Create `.env` file:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-16-char-app-password
PORT=3000
```

### Step 4: Start Email Service
```bash
npm start
```

Expected output:
```
✉️  Email Service running on port 3000
📧 Configured email: your-email@gmail.com
```

### Step 5: Open Website
- Open `cybertech.html` in browser
- Or use VS Code Live Server extension

## 📱 Mobile Responsive

Optimized for all devices:
- ✅ Desktop (1200px+)
- ✅ Tablet (768-1200px)
- ✅ Mobile (480-768px)
- ✅ Small Mobile (360-480px)
- ✅ Very Small Phones (<360px)

Test with: `F12 → Toggle Device Toolbar`

## 🎯 Usage Guide

### Create Account
1. Click "Login" button
2. Fill registration form
3. Click "Create Account"
4. Account saved to localStorage

### Shop
1. Browse products
2. Click "Add to Cart"
3. Update quantities
4. View cart summary

### Checkout
1. Click "Proceed to Checkout"
2. Select payment method
3. Enter payment details
4. Confirm order

### Receive Receipt
1. See professional receipt page
2. Get email confirmation
3. View in order history

### Admin Access
1. Login with: **1122** / **1122**
2. View order statistics
3. Manage products
4. Receive order notifications

## 📧 Email Configuration

### Setup Gmail SMTP

**Step 1: Enable 2FA**
- Go to [Google Account](https://myaccount.google.com/security)
- Select "2-Step Verification"

**Step 2: Generate App Password**
- Account → Security → App passwords
- Select "Mail" and "Windows Computer"
- Copy 16-character password

**Step 3: Update .env**
```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=xxxx-xxxx-xxxx-xxxx
PORT=3000
```

**Step 4: Test**
```bash
npm start
# Place an order and check email
```

## 📊 API Endpoints

### Email Service (Port 3000)

**Send Order Confirmation**
```http
POST /api/send-order-email
Content-Type: application/json

{
  "order": { ... },
  "customerEmail": "user@email.com",
  "customerName": "John Doe"
}
```

**Send Admin Notification**
```http
POST /api/send-admin-notification
{ "order": { ... } }
```

**Health Check**
```http
GET /api/health
```

## 🔐 Security

### Current Implementation
- ✅ Environment variables for secrets
- ✅ CORS enabled
- ✅ Password confirmation
- ✅ Email validation
- ✅ Session persistence

### Production Recommendations
- 🔄 Use database (MongoDB/PostgreSQL)
- 🔄 Password hashing (bcrypt)
- 🔄 JWT authentication
- 🔄 HTTPS/SSL
- 🔄 Rate limiting
- 🔄 CSRF protection
- 🔄 Input validation

## 🧪 Testing

### Test Scenarios
1. **Registration** - Create account, verify localStorage
2. **Shopping** - Add items, update cart, verify totals
3. **Checkout** - Select payment, confirm order
4. **Email** - Place order, check inbox (5s)
5. **Admin** - Login 1122/1122, manage products

## 📈 Performance

- Load Time: < 2 seconds
- Email Delivery: 2-5 seconds
- Cart Operations: Instant
- Mobile Performance: Optimized

## 🐛 Troubleshooting

**Email not sending?**
```bash
npm start  # Verify server running
# Check .env credentials
# Enable 2FA on Gmail
# Regenerate app password
```

**Login issues?**
```bash
# Press F12 → Application → Clear Storage
# Verify email format
# Check password (case-sensitive)
```

**Mobile layout broken?**
```bash
# Clear browser cache
# Check viewport meta tag
# Test different browsers
```

## 📚 Documentation

See [DOCUMENTATION](./DOCUMENTATION/) folder:
- Complete setup guides
- Email configuration steps
- Admin features documentation
- Responsive design details
- Visual implementation guide

### **Login**
1. Enter your registered email and password
2. Click "Login"
3. Welcome message displays with your name

### **Shopping**
1. Browse products in the "Shop" tab
2. Click "Add to Cart" on desired products
3. Cart badge updates with item count

### **Checkout**
1. Go to "Shopping Cart" tab
2. Review items and total price
3. Click "Order Now" to proceed to payment

### **Payment**
1. Select payment method:
   - Google Pay
   - Cash on Delivery
   - Razorpay
   - Account Wallet
2. Click "Proceed to Payment"

### **Order Confirmation**
1. Review order details on confirmation page
2. Click "Confirm & Place Order"
3. Order is created and emails are sent
4. Redirects to "My Orders" tab

### **View Orders**
1. Go to "My Orders" tab
2. See all previous orders with details
3. Download receipt (mock function)

## 📧 Email Features

### **Customer Email Includes:**
- ✅ Order ID and date
- ✅ Customer name
- ✅ All ordered items with quantities and prices
- ✅ Total amount
- ✅ Payment method used
- ✅ Professional HTML template

### **Admin Email Includes:**
- ✅ New order notification
- ✅ Customer details (name, email)
- ✅ Complete order information
- ✅ Item list with prices
- ✅ Payment method confirmation

### **Email Sent To:**
- **Customer:** cyberwolfarmy121@gmail.com (change in registration email)
- **Admin:** cyberwolfarmy121@gmail.com

## 🔐 Security Notes

- Passwords stored in localStorage (demo only - use proper hashing in production)
- Email credentials stored in `.env` file
- Never commit `.env` to GitHub
- Use app-specific passwords, not main account password

## 💳 Payment Methods

All payment methods are simulated. In production, integrate:
- Google Pay API
- Razorpay Payment Gateway
- Stripe (alternative)

## 🐛 Troubleshooting

### **Emails not sending?**
- Check Gmail app password is correct in `.env`
- Verify Gmail 2FA is enabled
- Check spam folder
- Ensure port 3000 is not in use

### **CORS errors?**
- Ensure server is running on port 3000
- Check localhost access in browser

### **Login not working?**
- Clear browser localStorage: Press F12 → Application → Clear All
- Reload page and try again

## 📱 Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Edge
- ✅ Safari
- ✅ Mobile browsers

## 🎯 Sample Test Data

**Test Account:**
- Email: test@example.com
- Password: 123456

**Test Products:**
1. Gaming Laptop - ₹99,999
2. Wireless Headphones - ₹5,999
3. Smart Watch - ₹15,999
4. USB-C Cable - ₹499
5. Mechanical Keyboard - ₹7,999
6. Gaming Mouse - ₹3,999
7. Monitor 4K - ₹34,999
8. Phone Stand - ₹799

## 🚀 Future Enhancements

- [ ] Database integration (MongoDB/MySQL)
- [ ] Real payment gateway integration
- [ ] User dashboard with analytics
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced search and filters
- [ ] Inventory management
- [ ] Email templates customization

## 📄 License

MIT License - Free to use and modify

## 📞 Support

For issues or questions:
- Email: cyberwolfarmy121@gmail.com
- Check the code comments for more details

---

**Version:** 1.0.0  
**Last Updated:** January 2026  
**Created by:** CYBER TECH Team
