# ✅ CYBER TECH Email Setup Checklist

## Pre-Flight Checklist

### **Gmail Account Setup**

- [ ] Have Gmail account (cyberwolfarmy121@gmail.com or your own)
- [ ] 2-Factor Authentication is enabled
- [ ] Google App Password generated (16 characters)
- [ ] Note: App password looks like: `xxxx xxxx xxxx xxxx`

### **Local Setup**

- [ ] Node.js installed (check: `node --version`)
- [ ] Project folder: `e:\New folder`
- [ ] All files downloaded/created

### **Configuration**

- [ ] `.env` file exists in `e:\New folder`
- [ ] `.env` has `GMAIL_USER=cyberwolfarmy121@gmail.com`
- [ ] `.env` has `GMAIL_PASS=` with your app password
- [ ] `.env` has `PORT=3000`

---

## Installation Checklist

### **Dependencies**

```powershell
cd "e:\New folder"
npm install
```

- [ ] `npm install` completed without errors
- [ ] `node_modules` folder created
- [ ] `package-lock.json` created

### **Verify Packages**

```powershell
npm list express nodemailer cors body-parser dotenv
```

- [ ] express: ^4.18.2 ✅
- [ ] nodemailer: ^6.9.3 ✅
- [ ] cors: ^2.8.5 ✅
- [ ] body-parser: ^1.20.2 ✅
- [ ] dotenv: ^16.0.3 ✅

---

## Server Startup Checklist

### **Start Server**

```powershell
npm start
```

Expected output:
```
✉️  Email Service running on port 3000
📧 Configured email: cyberwolfarmy121@gmail.com
Email Service Ready: true
```

- [ ] Server starts without errors
- [ ] Shows "Email Service Ready: true"
- [ ] Port 3000 is accessible
- [ ] No error messages in console

### **Verify Server Health**

```powershell
Invoke-WebRequest http://localhost:3000/api/health
```

- [ ] Returns 200 status code
- [ ] Shows server running message

---

## Website Testing Checklist

### **Browser Setup**

- [ ] Open `cybertech.html` in browser
- [ ] Page loads without errors
- [ ] Press F12 to open Developer Tools
- [ ] Go to Console tab

### **Create Test Account**

- [ ] Click "Create one" to register
- [ ] Name: John Doe
- [ ] Email: your-email@gmail.com (use real email!)
- [ ] Password: test123
- [ ] Confirm Password: test123
- [ ] Account created successfully

### **Login Test**

- [ ] Click "Login"
- [ ] Email: your-email@gmail.com
- [ ] Password: test123
- [ ] Login successful, see welcome message

### **Shopping Test**

- [ ] See product grid
- [ ] Add "Gaming Laptop" to cart
- [ ] Add "Wireless Headphones" to cart
- [ ] Cart badge shows "2"
- [ ] Click "🛒 Cart" tab

### **Checkout Test**

- [ ] See cart items and total
- [ ] Click "Order Now"
- [ ] Proceed to Payment page
- [ ] Select payment method (e.g., Google Pay)
- [ ] Click "Proceed to Payment"

### **Confirmation Test**

- [ ] See Confirmation page
- [ ] Review order details
- [ ] Click "Confirm & Place Order"

### **Success Page Test**

- [ ] See success page with ✓
- [ ] Shows Order ID
- [ ] Shows items and total
- [ ] Shows green "Continue Shopping" button

---

## Email Verification Checklist

### **Customer Email**

- [ ] Check inbox for order confirmation
- [ ] Subject: "Order Confirmation - #[OrderID] | CYBER TECH"
- [ ] From: cyberwolfarmy121@gmail.com
- [ ] Contains your name
- [ ] Shows order items
- [ ] Shows total amount
- [ ] Shows payment method

### **Admin Email**

- [ ] Check cyberwolfarmy121@gmail.com inbox
- [ ] Subject: "New Order: #[OrderID] | CYBER TECH Admin"
- [ ] From: cyberwolfarmy121@gmail.com
- [ ] Contains customer name and email
- [ ] Shows all order details
- [ ] Shows total amount

### **Spam Folder Check**

- [ ] Check Spam/Junk folder
- [ ] If emails there, mark as "Not Spam"

---

## Console Verification Checklist

In browser Console (F12 → Console tab):

- [ ] See "✓ Customer email sent to: [email]"
- [ ] See "✓ Admin notification sent"
- [ ] No red error messages
- [ ] No 404 or 500 errors

---

## Admin Panel Testing (Optional)

- [ ] Login with Email: 1122
- [ ] Login with Password: 1122
- [ ] See "👨‍💼 ADMIN" badge
- [ ] See "⚙️ Admin Panel" tab
- [ ] Can add new product
- [ ] Can edit product
- [ ] Can delete product

---

## Troubleshooting Checklist

### **If Server Won't Start**

- [ ] Check Node.js is installed: `node --version`
- [ ] Check npm is installed: `npm --version`
- [ ] Check .env file exists
- [ ] Check Gmail credentials in .env
- [ ] Try: `npm install` again
- [ ] Try: Delete `node_modules` and reinstall

### **If Emails Don't Arrive**

- [ ] Check Gmail spam folder
- [ ] Verify customer email address is correct
- [ ] Check Gmail app password is correct (16 chars)
- [ ] Verify .env file has no typos
- [ ] Check browser Console for errors (F12)
- [ ] Restart server: `npm start`
- [ ] Try with different test email

### **If Page Won't Load**

- [ ] Refresh browser (Ctrl+R)
- [ ] Check no typos in file path
- [ ] Check browser Console for errors (F12)
- [ ] Try different browser
- [ ] Check file exists: `e:\New folder\cybertech.html`

### **If Can't Login**

- [ ] Check email/password spelling
- [ ] For admin: Use exactly "1122" for both fields
- [ ] Clear browser data: Settings → Clear Cache
- [ ] Try Incognito/Private window

---

## Final Verification

### **All Systems Go?**

- [ ] Server running on port 3000
- [ ] Website opens and loads
- [ ] Can create account
- [ ] Can login
- [ ] Can add products to cart
- [ ] Can complete checkout
- [ ] Customer gets email confirmation
- [ ] Admin gets email notification
- [ ] Continue Shopping button works

### **Ready for Production**

- [ ] All tests passed ✅
- [ ] No error messages
- [ ] Emails arrive within 5 seconds
- [ ] Professional email templates display correctly
- [ ] Security settings verified

---

## Daily Checklist

Every time you use the website:

```powershell
# Terminal 1 - Start Email Server
cd "e:\New folder"
npm start

# Wait for "Email Service Ready: true"
# Keep this terminal open
```

```
# Terminal 2 or Browser Window
# Open cybertech.html
# Use website as normal
# Emails will be sent automatically
```

---

## Troubleshooting Quick Links

📧 Email Issues → See `EMAIL_SETUP.md`  
👨‍💼 Admin Features → See `ADMIN_FEATURES.md`  
🛍️ Shopping Issues → See `README.md`  
🐛 Common Errors → See `EMAIL_INTEGRATION.md`  

---

## Support Steps

1. **Check Console** (F12 in browser)
   - Look for error messages
   - Note any red text

2. **Check Server Terminal**
   - Look for error messages
   - Verify port 3000 is correct

3. **Review Documentation**
   - Check relevant `.md` file
   - Look for your specific issue

4. **Verify Configuration**
   - Check .env file
   - Check Gmail app password
   - Verify email address

5. **Restart Services**
   - Stop server (Ctrl+C)
   - Close browser tabs
   - Run `npm start` again
   - Reload website

---

## 📊 Health Check Summary

```
✅ Node.js Installed
✅ npm Packages Installed  
✅ .env Configured
✅ Server Running (port 3000)
✅ Website Loading
✅ Email Service Active
✅ Sending Emails Successfully
✅ Ready for Use!
```

---

**Version:** 1.0 - Email Setup Checklist  
**Created:** January 2026  
**Status:** ✅ Complete
