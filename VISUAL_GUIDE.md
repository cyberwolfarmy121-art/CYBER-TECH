# 📧 Email System - Visual Guide

## System Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    CYBER TECH E-Commerce                        │
└─────────────────────────────────────────────────────────────────┘

CLIENT SIDE (Browser)                SERVER SIDE (Node.js)
┌──────────────────────┐             ┌──────────────────────┐
│  cybertech.html      │             │   server.js          │
│                      │             │                      │
│ 1. Customer clicks   │             │ 1. Receives order    │
│    "Place Order"     │             │    data via API      │
│                      │             │                      │
│ 2. Calls:           │──────────→  │ 2. Validates order   │
│    sendOrderEmail()  │  POST /api/ │                      │
│                      │ send-order  │ 3. Connects to Gmail │
│                      │   -email    │    SMTP Server       │
│ 3. Shows success    │             │                      │
│    page             │             │ 4. Sends 2 emails:   │
│                      │             │    • To Customer     │
│                      │             │    • To Admin        │
└──────────────────────┘             │                      │
                                     │ 5. Returns success   │
                                     │    status            │
                                     └──────────────────────┘
                                              ↓
                                     ┌──────────────────────┐
                                     │   Gmail SMTP Server  │
                                     │                      │
                                     │ Authenticates with   │
                                     │ app password          │
                                     │                      │
                                     │ Sends emails via     │
                                     │ Gmail servers        │
                                     └──────────────────────┘
                                              ↓
                        ┌─────────────────────┴─────────────────────┐
                        ↓                                           ↓
                ┌──────────────────┐                      ┌──────────────────┐
                │ Customer's Email │                      │ Admin's Email    │
                │                  │                      │                  │
                │ john@example.com │                      │ cyberwolfarmy... │
                │                  │                      │                  │
                │ ✅ Order Conf.   │                      │ 📦 New Order     │
                │ ✅ Receipt       │                      │ ✅ Notification  │
                │ ✅ Items List    │                      │ ✅ Customer Info │
                │ ✅ Total & Date  │                      │ ✅ All Details   │
                │ ✅ Shipping Info │                      │                  │
                └──────────────────┘                      └──────────────────┘
```

---

## Email Sending Workflow

```
START: Customer Orders
   │
   ├─ User fills cart
   ├─ Selects payment method
   ├─ Reviews order
   └─ Clicks "Confirm & Place Order"
      │
      ↓
   Order Saved to LocalStorage
   Order Data Compiled
      │
      ├─ Order ID: #567890
      ├─ Items: 5 products
      ├─ Total: ₹137,996
      ├─ Payment: Google Pay
      └─ Customer: john@example.com
      │
      ↓
   Frontend Calls Backend API
   POST http://localhost:3000/api/send-order-email
   {
       order: {...},
       customerEmail: "john@example.com",
       customerName: "John Doe"
   }
      │
      ↓
   Backend Receives Request
   ├─ Validates data
   ├─ Creates HTML email template
   └─ Connects to Gmail SMTP
      │
      ├─→ EMAIL 1: Customer Confirmation
      │   From: cyberwolfarmy121@gmail.com
      │   To: john@example.com
      │   Status: ✅ SENT
      │
      └─→ EMAIL 2: Admin Notification
          From: cyberwolfarmy121@gmail.com
          To: cyberwolfarmy121@gmail.com
          Status: ✅ SENT
      │
      ↓
   Frontend Shows Success Page
   ├─ Order confirmation details
   ├─ "Email sent" message
   └─ "Continue Shopping" button
      │
      ↓
   END: Emails Delivered ✅
```

---

## Email Template Structure

```
┌─────────────────────────────────────────────────────────────┐
│                    CUSTOMER EMAIL                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  From:    cyberwolfarmy121@gmail.com                       │
│  To:      john@example.com                                 │
│  Subject: Order Confirmation - #567890 | CYBER TECH        │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌────────────────────────────────────────────────────┐   │
│  │ 🎉 Order Confirmation                              │   │
│  ├────────────────────────────────────────────────────┤   │
│  │                                                    │   │
│  │ Hi John Doe,                                       │   │
│  │                                                    │   │
│  │ Thank you for your order! Your order has been      │   │
│  │ confirmed and is being processed.                  │   │
│  │                                                    │   │
│  ├────────────────────────────────────────────────────┤   │
│  │ Order Details:                                     │   │
│  │ • Order ID: #567890                                │   │
│  │ • Date: 23/01/2026                                 │   │
│  │ • Payment: Google Pay                              │   │
│  ├────────────────────────────────────────────────────┤   │
│  │ Order Items:                                       │   │
│  │ ✓ Gaming Laptop × 1           ₹99,999              │   │
│  │ ✓ Wireless Headphones × 1      ₹5,999              │   │
│  │ ✓ Smart Watch × 2              ₹31,998             │   │
│  │ ✓ USB-C Cable × 3              ₹1,497              │   │
│  │                                                    │   │
│  │ Total: ₹137,996                                    │   │
│  ├────────────────────────────────────────────────────┤   │
│  │ 📦 What's Next?                                    │   │
│  │ Your order will ship within 2-3 business days.     │   │
│  │ Tracking number coming soon!                       │   │
│  │                                                    │   │
│  │ Questions? Contact: cyberwolfarmy121@gmail.com     │   │
│  │ © 2026 CYBER TECH. All rights reserved.           │   │
│  └────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Installation Flow Chart

```
START: Want to Enable Email?
   │
   ├─ YES ─→ Continue
   └─ NO  ─→ Website works without emails
   │
   ↓
Have Gmail Account?
   │
   ├─ NO ─→ Create at https://www.gmail.com
   └─ YES ─→ Continue
   │
   ↓
Enable 2-Factor Authentication
   URL: https://myaccount.google.com/security
   │
   ↓
Generate App Password
   Settings → Security → App passwords
   Select: Mail & Windows Computer
   Copy: 16-character password
   │
   ↓
Update .env File
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASS=xxxx xxxx xxxx xxxx
   PORT=3000
   │
   ↓
Install Dependencies
   Command: npm install
   │
   ↓
Start Server
   Command: npm start
   Check: "Email Service Ready: true"
   │
   ↓
Test: Place Order
   ├─ Customer gets email ✅
   ├─ Admin gets email ✅
   └─ Both within 5 seconds
   │
   ↓
SUCCESS: Email System Active! 🎉
```

---

## File Structure

```
e:\New folder\
├── 📄 cybertech.html                (Main website)
│   └── Calls: sendOrderEmail()
│       └── Sends: POST /api/send-order-email
│
├── 🖥️ server.js                     (Email server)
│   ├── /api/send-order-email        (Customer email)
│   ├── /api/send-admin-notification (Admin email)
│   └── /api/health                  (Status check)
│
├── ⚙️ package.json                  (Dependencies)
│   ├── express
│   ├── nodemailer
│   ├── cors
│   └── body-parser
│
├── 🔐 .env                          (Credentials)
│   ├── GMAIL_USER
│   ├── GMAIL_PASS
│   └── PORT
│
├── 📖 EMAIL_SETUP.md                (Setup guide)
├── 📖 EMAIL_INTEGRATION.md          (Integration details)
├── 📖 SETUP_CHECKLIST.md            (Testing checklist)
└── 🚀 START_EMAIL_SERVER.bat        (Quick start)
```

---

## API Endpoints

```
┌─────────────────────────────────────────────────────────────┐
│           CYBER TECH EMAIL APIS                              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 1️⃣  Send Customer Email                                    │
│    POST /api/send-order-email                              │
│    Body: {                                                  │
│        order: {...},                                        │
│        customerEmail: "john@example.com",                  │
│        customerName: "John Doe"                            │
│    }                                                        │
│    Response: {success: true}                               │
│    Email Sent To: john@example.com                         │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 2️⃣  Send Admin Notification                                │
│    POST /api/send-admin-notification                       │
│    Body: {                                                  │
│        order: {...}                                         │
│    }                                                        │
│    Response: {success: true}                               │
│    Email Sent To: cyberwolfarmy121@gmail.com               │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ 3️⃣  Health Check                                           │
│    GET /api/health                                          │
│    Response: {                                              │
│        status: "Email Service Running",                    │
│        timestamp: "2026-01-23..."                          │
│    }                                                        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Request/Response Flow

```
CUSTOMER PLACES ORDER
        ↓
    ┌───────────────────┐
    │ Browser Console   │
    └───────────────────┘
        │
        └─→ POST to http://localhost:3000/api/send-order-email
             │
             └─→ ┌─────────────────────────────┐
                 │ Server Receives Request     │
                 │ • Validates order data      │
                 │ • Creates email template    │
                 │ • Connects to Gmail SMTP    │
                 │ • Authenticates             │
                 │ • Sends email               │
                 └─────────────────────────────┘
                         │
                         └─→ Response: {success: true}
                                │
                                └─→ Browser Shows "✓ Email Sent"
```

---

## Email Status Timeline

```
User Action              Server Action           Email Status
───────────────────      ──────────────────      ────────────────
13:00:00 Place Order     13:00:01 Receive        13:00:01 Creating
                         13:00:02 Validate       13:00:02 Connecting
                         13:00:03 Compile        13:00:03 Sending
                         13:00:04 Send Email 1   13:00:04 To: Customer
                         13:00:04 Send Email 2   13:00:04 To: Admin
                         13:00:05 Return OK      13:00:05 Delivered ✅
13:00:05 Success Page    
13:00:10 Check Email     ✅ Received ✅         ✅ In Inbox
```

---

## Troubleshooting Tree

```
Email Not Received?
    │
    ├─ Check Spam Folder?
    │   ├─ YES → Mark as "Not Spam" → Works!
    │   └─ NO → Continue
    │
    ├─ Wrong Email Address?
    │   ├─ YES → Re-register with correct email
    │   └─ NO → Continue
    │
    ├─ Server Running?
    │   ├─ NO → Run: npm start
    │   └─ YES → Continue
    │
    ├─ .env File Correct?
    │   ├─ NO → Update Gmail credentials
    │   └─ YES → Continue
    │
    ├─ Check Browser Console (F12)
    │   ├─ Errors? → Fix and retry
    │   └─ No Errors? → Check Server Terminal
    │
    └─ Still Not Working?
        → Check EMAIL_SETUP.md for detailed guide
```

---

**Version:** 1.0 - Visual Guide  
**Created:** January 2026  
**Purpose:** Visual understanding of email system
