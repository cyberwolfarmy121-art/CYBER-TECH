# 📧 Email Configuration Guide

## Setting Up Email Functionality

The CYBER TECH e-commerce website now sends **real emails** to both customers and admins when orders are placed.

### ✅ Requirements

1. **Node.js** - Already installed
2. **Gmail Account** - cyberwolfarmy121@gmail.com (or your own)
3. **Gmail App Password** - For secure email sending

---

## 🔧 Step-by-Step Setup

### **Step 1: Enable 2-Factor Authentication on Gmail**

1. Go to [Google Account Settings](https://myaccount.google.com)
2. Click **Security** (left sidebar)
3. Enable **2-Step Verification** if not already enabled
4. Verify with your phone

### **Step 2: Generate App Password**

1. In Google Account Settings, go to **Security**
2. Scroll down to **App passwords** (only appears if 2FA is enabled)
3. Select:
   - App: **Mail**
   - Device: **Windows Computer** (or your device)
4. Click **Generate**
5. Copy the **16-character password** shown
6. Click **Done**

### **Step 3: Update .env File**

Edit the `.env` file in `e:\New folder\`:

```env
GMAIL_USER=cyberwolfarmy121@gmail.com
GMAIL_PASS=xxxx xxxx xxxx xxxx
PORT=3000
NODE_ENV=development
```

Replace `xxxx xxxx xxxx xxxx` with your 16-character app password (without spaces if easier).

### **Step 4: Install Dependencies**

```powershell
cd "e:\New folder"
npm install
```

### **Step 5: Start the Email Server**

```powershell
npm start
```

Expected output:
```
✉️  Email Service running on port 3000
📧 Configured email: cyberwolfarmy121@gmail.com
Email Service Ready: true
```

---

## 📨 How Email Works

### **When Customer Places Order:**

1. **Customer Email** is sent with:
   - ✅ Order confirmation
   - ✅ Order ID and date
   - ✅ Complete item list with quantities
   - ✅ Total amount
   - ✅ Payment method
   - ✅ Shipping information
   - ✅ Professional HTML template

2. **Admin Email** is sent to `cyberwolfarmy121@gmail.com` with:
   - ✅ New order notification
   - ✅ Customer details (name, email)
   - ✅ Full order information
   - ✅ Items and prices
   - ✅ Payment method

### **Email Sending Flow:**

```
Customer Places Order
        ↓
Server Receives Order Data
        ↓
Email 1: Send to Customer
Email 2: Send to Admin
        ↓
Both Emails Sent Successfully
        ↓
Success Page Shows "Continue Shopping"
```

---

## 🧪 Testing Email Functionality

### **Method 1: Test Through Website**

1. Start the server: `npm start`
2. Open `cybertech.html` in browser
3. Create customer account
4. Add items to cart
5. Complete checkout
6. Check inbox for confirmation email

### **Method 2: Test API Directly**

Using PowerShell or Postman:

```powershell
$body = @{
    order = @{
        id = "#123456"
        date = "23/01/2026"
        total = 10000
        items = @(@{ name = "Laptop"; price = 99999; quantity = 1 })
        paymentMethod = "gpay"
        customerName = "John Doe"
        customerEmail = "john@example.com"
    }
    customerEmail = "john@example.com"
    customerName = "John Doe"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/send-order-email" -Method POST -Body $body -ContentType "application/json"
```

---

## 🐛 Troubleshooting

### **"Email Service Error" on startup**

**Problem:** Gmail credentials are incorrect

**Solution:**
- Double-check app password (16 characters with spaces)
- Ensure 2FA is enabled on Gmail
- Regenerate app password and update .env

### **Emails not being sent to customer**

**Problem:** Server not running or wrong email address

**Solution:**
- Verify `npm start` is running
- Check browser console (F12) for errors
- Ensure customer email is valid and registered
- Check spam/trash folders

### **"Connection refused" error**

**Problem:** Backend server not running

**Solution:**
- Open new terminal in `e:\New folder`
- Run `npm start`
- Wait for "Email Service Ready" message
- Keep server running while using website

### **Gmail rejecting emails**

**Problem:** Using main password instead of app password

**Solution:**
- Use ONLY app password in .env (not your main Gmail password)
- App password is 16 characters with spaces
- Verify in Gmail settings under "App passwords"

---

## 📋 .env File Reference

| Variable | Value | Description |
|----------|-------|-------------|
| `GMAIL_USER` | cyberwolfarmy121@gmail.com | Gmail account sending emails |
| `GMAIL_PASS` | xxxx xxxx xxxx xxxx | 16-character app password |
| `PORT` | 3000 | Server port |
| `NODE_ENV` | development | Environment mode |

---

## 🔐 Security Best Practices

✅ **DO:**
- Store `.env` file locally (never commit to GitHub)
- Use app passwords, not main account password
- Keep server running in secure environment
- Regularly rotate app passwords

❌ **DON'T:**
- Share .env file with anyone
- Use main Gmail password
- Commit .env to version control
- Use in production without HTTPS

---

## 📊 Email Logs

Check console output for:

```
✓ Customer email sent to: customer@example.com
✓ Admin notification sent
```

To verify emails were sent successfully.

---

## 🎯 Complete Workflow

```
1. User creates account & logs in
2. User adds items to cart
3. User checks out → Selects payment method
4. User confirms order
5. Backend sends 2 emails:
   - To customer (order confirmation + receipt)
   - To admin (new order notification)
6. Customer sees success page with "Continue Shopping"
7. Both parties receive emails within seconds
```

---

## 📞 Support

**If emails aren't sending:**

1. Check terminal for error messages
2. Verify .env file has correct credentials
3. Check Gmail spam/trash folder
4. Check browser console (F12) for errors
5. Ensure server is running on port 3000

---

**Version:** 2.1 with Email Integration  
**Last Updated:** January 2026  
**Status:** Production Ready ✅
