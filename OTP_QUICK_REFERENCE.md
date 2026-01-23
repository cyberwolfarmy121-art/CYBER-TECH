# Quick Reference - OTP Registration

## User Registration with OTP - Quick Start

### What's New? 🆕
When creating an account, users now verify their email using a one-time password (OTP).

### Registration Steps:

1. **Click "Create Account"**
2. **Enter your details:**
   - Full Name
   - Email Address
   - Password (min 6 characters)
   - Confirm Password
3. **Click "Send OTP to Email"**
4. **Check your email** for the 6-digit OTP code
5. **Enter the OTP** in the verification form
6. **Click "Verify OTP"**
7. **✓ Done!** Your account is created

---

## Backend API Endpoint

### Send OTP Email

**Endpoint:**
```
POST http://localhost:3000/api/send-otp
```

**Request:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "otp": "123456"
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "OTP sent successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Error details here"
}
```

---

## OTP Format & Validation

| Property | Value |
|----------|-------|
| Length | 6 digits |
| Format | Numeric only |
| Valid Characters | 0-9 |
| Example | 123456 |
| Expiration | 10 minutes |
| Resendable | Yes |

---

## Code Changes at a Glance

### cybertech.html
```javascript
// New Variables
let pendingRegistration = {};
let generatedOtp = '';

// New Functions
function sendOtpForRegistration() { }    // Send OTP
function sendOtpEmail(email, name, otp) { } // Call API
function verifyOtp() { }                 // Verify code
function resendOtp() { }                 // Resend OTP
```

### server.js
```javascript
// New Endpoint
app.post('/api/send-otp', async (req, res) => {
    // Generate and send OTP email
});
```

---

## Testing OTP

### Test 1: Valid OTP
```
1. Fill registration form
2. Send OTP → Email received ✓
3. Copy OTP from email
4. Enter OTP → Account created ✓
5. Login with new account ✓
```

### Test 2: Invalid OTP
```
1. Send OTP → Email received ✓
2. Enter wrong OTP
3. Get error: "Invalid OTP"
4. Try with correct OTP → Success ✓
```

### Test 3: Resend OTP
```
1. Send OTP (but don't verify)
2. Click "Resend OTP"
3. New email sent with new OTP
4. Use new OTP to verify → Success ✓
```

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| OTP not received | Click "Resend OTP" or check spam folder |
| "Invalid OTP" error | Ensure you entered the correct 6 digits |
| "Email already registered" | Use a different email address |
| Backend connection error | Ensure `npm start` is running |
| Email service not working | Check `.env` has correct Gmail credentials |

---

## File Structure

```
e:\New folder\
├── cybertech.html          ✏️ Updated (OTP flow added)
├── server.js               ✏️ Updated (OTP endpoint added)
├── OTP_REGISTRATION.md     🆕 New (Detailed guide)
├── OTP_FEATURE_SUMMARY.md  🆕 New (This file)
├── package.json            (Dependencies)
├── .env                    (Gmail config)
└── ... (other files)
```

---

## Key Features

✅ 6-digit random OTP  
✅ Email verification  
✅ Resend option  
✅ Error handling  
✅ Professional email design  
✅ 10-minute expiration  
✅ Security warnings in email  

---

## Run the System

```bash
# Install dependencies (one time)
npm install

# Start the server
npm start

# Output should show:
# ✉️ Email Service running on port 3000
# 📧 Configured email: cyberwolfarmy121@gmail.com
```

---

## Email Template Preview

```
═══════════════════════════════════════
  ✉️ VERIFY YOUR EMAIL - CYBER TECH
═══════════════════════════════════════

Hi John,

Welcome to CYBER TECH! To complete your 
account registration, verify your email:

╔═══════════════════╗
║  OTP: 123456      ║
╚═══════════════════╝

⏱️ Expires in: 10 minutes
🔒 Never share this code
📧 Reply to: cyberwolfarmy121@gmail.com

© 2026 CYBER TECH
═══════════════════════════════════════
```

---

## Security Details

- OTP is 6-digit random number
- Generated fresh for each registration
- Stored temporarily in memory only
- Destroyed after verification
- Email proves ownership
- Password stored in localStorage (dev only)

**Future:** Implement server-side OTP storage with database TTL

---

## Update Summary

| Component | Before | After |
|-----------|--------|-------|
| Register Button | Direct account creation | Sends OTP |
| Forms | 1 form | 2 forms |
| Email Sent | No | Yes (OTP email) |
| Verification | None | 6-digit OTP required |
| User Steps | 1 click | 3 clicks + email check |
| Security | Low | Higher (email verified) |

---

**Status:** ✅ Ready to Use  
**Last Updated:** January 23, 2026  
**Version:** 1.0.0

**Next:** Run `npm start` and test registration!
