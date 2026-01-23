const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER || 'cyberwolfarmy121@gmail.com',
        pass: process.env.GMAIL_PASS || 'your_app_password_here'
    }
});

// Test email connection
transporter.verify((error, success) => {
    if (error) {
        console.log('Email Service Error:', error);
    } else {
        console.log('Email Service Ready:', success);
    }
});

// API Endpoint: Send OTP for Account Verification
app.post('/api/send-otp', async (req, res) => {
    try {
        const { email, name, otp } = req.body;

        const otpEmailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px; border-radius: 10px;">
                <div style="background: white; padding: 30px; border-radius: 8px;">
                    <h2 style="color: #00bcd4; text-align: center;">✉️ Verify Your Email</h2>
                    
                    <p>Hi ${name},</p>
                    <p>Welcome to CYBER TECH! To complete your account registration, please verify your email address using the OTP below:</p>
                    
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 8px; margin: 30px 0; text-align: center;">
                        <p style="margin: 0; color: #999; font-size: 14px;">Your Verification Code:</p>
                        <h1 style="margin: 10px 0 0 0; color: white; font-size: 48px; letter-spacing: 5px; font-weight: bold;">${otp}</h1>
                    </div>

                    <div style="background: #fff3e0; padding: 15px; border-left: 4px solid #ff9800; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 0; color: #ff6f00;"><strong>⏱️ This code expires in 10 minutes</strong></p>
                    </div>

                    <div style="background: #f0f7ff; padding: 15px; border-left: 4px solid #2196F3; border-radius: 5px; margin: 20px 0;">
                        <p style="margin: 0; color: #1565c0;"><strong>🔒 Security Tip:</strong> Never share this code with anyone. CYBER TECH staff will never ask for your OTP.</p>
                    </div>

                    <p>If you didn't request this verification code, please ignore this email or contact our support team.</p>

                    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                    
                    <p style="color: #666; font-size: 12px;">Questions? Contact us at cyberwolfarmy121@gmail.com</p>
                    <p style="text-align: center; color: #999; font-size: 12px;">© 2026 CYBER TECH. All rights reserved.</p>
                </div>
            </div>
        `;

        const mailOptions = {
            from: 'CYBER TECH <cyberwolfarmy121@gmail.com>',
            to: email,
            subject: `Verify Your Email - ${otp} | CYBER TECH`,
            html: otpEmailHtml
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'OTP sent successfully' });

    } catch (error) {
        console.error('Error sending OTP email:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// API Endpoint: Send Order Confirmation to Customer
app.post('/api/send-order-email', async (req, res) => {
    try {
        const { order, customerEmail, customerName } = req.body;

        const itemsList = order.items
            .map(item => `<li>${item.name} × ${item.quantity} - ₹${(item.price * item.quantity).toLocaleString('en-IN')}</li>`)
            .join('');

        const customerEmailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px; border-radius: 10px;">
                <div style="background: white; padding: 30px; border-radius: 8px;">
                    <h2 style="color: #00bcd4; text-align: center;">🎉 Order Confirmation</h2>
                    
                    <p>Hi ${customerName},</p>
                    <p>Thank you for your order! Your order has been confirmed and is being processed.</p>
                    
                    <div style="background: #f9f9f9; padding: 15px; border-left: 4px solid #00bcd4; margin: 20px 0;">
                        <p><strong>Order ID:</strong> ${order.id}</p>
                        <p><strong>Order Date:</strong> ${order.date}</p>
                        <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
                    </div>

                    <h3 style="color: #333;">Order Items:</h3>
                    <ul style="background: #f9f9f9; padding: 15px; border-radius: 5px; line-height: 1.8;">
                        ${itemsList}
                    </ul>

                    <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: right;">
                        <h3 style="margin: 0; color: #00bcd4;">Total: ₹${order.total.toLocaleString('en-IN')}</h3>
                    </div>

                    <div style="margin: 30px 0; padding: 20px; background: #fff3e0; border-left: 4px solid #ff9800; border-radius: 5px;">
                        <h4 style="margin-top: 0; color: #ff9800;">📦 What's Next?</h4>
                        <p>Your order will be shipped within 2-3 business days. You'll receive a tracking number via email once it ships.</p>
                    </div>

                    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                    
                    <p style="color: #666; font-size: 12px;">If you have any questions, please contact us at cyberwolfarmy121@gmail.com</p>
                    <p style="text-align: center; color: #999; font-size: 12px;">© 2026 CYBER TECH. All rights reserved.</p>
                </div>
            </div>
        `;

        const mailOptions = {
            from: 'CYBER TECH <cyberwolfarmy121@gmail.com>',
            to: customerEmail,
            subject: `Order Confirmation - ${order.id} | CYBER TECH`,
            html: customerEmailHtml
        };

        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Order confirmation sent to customer' });

    } catch (error) {
        console.error('Error sending customer email:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// API Endpoint: Send Order Notification to Admin
app.post('/api/send-admin-notification', async (req, res) => {
    try {
        const { order } = req.body;

        const itemsList = order.items
            .map(item => `<li>${item.name} × ${item.quantity} - ₹${(item.price * item.quantity).toLocaleString('en-IN')}</li>`)
            .join('');

        const adminEmailHtml = `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px; border-radius: 10px;">
                <div style="background: white; padding: 30px; border-radius: 8px;">
                    <h2 style="color: #00bcd4; text-align: center;">📦 New Order Received</h2>
                    
                    <div style="background: #f0f7ff; padding: 15px; border-left: 4px solid #2196F3; margin: 20px 0;">
                        <p><strong>Order ID:</strong> ${order.id}</p>
                        <p><strong>Customer Name:</strong> ${order.customerName}</p>
                        <p><strong>Customer Email:</strong> ${order.customerEmail}</p>
                        <p><strong>Order Date:</strong> ${order.date}</p>
                        <p><strong>Payment Method:</strong> ${order.paymentMethod}</p>
                        <p><strong>Status:</strong> ${order.status}</p>
                    </div>

                    <h3 style="color: #333;">Order Items:</h3>
                    <ul style="background: #f9f9f9; padding: 15px; border-radius: 5px; line-height: 1.8;">
                        ${itemsList}
                    </ul>

                    <div style="background: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: right;">
                        <h3 style="margin: 0; color: #00bcd4;">Total: ₹${order.total.toLocaleString('en-IN')}</h3>
                    </div>

                    <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
                    <p style="text-align: center; color: #666; font-size: 12px;">This is an automated notification from CYBER TECH Order Management System</p>
                </div>
            </div>
        `;

        const adminMailOptions = {
            from: 'CYBER TECH <cyberwolfarmy121@gmail.com>',
            to: 'cyberwolfarmy121@gmail.com',
            subject: `New Order: ${order.id} | CYBER TECH Admin`,
            html: adminEmailHtml
        };

        await transporter.sendMail(adminMailOptions);
        res.json({ success: true, message: 'Admin notification sent' });

    } catch (error) {
        console.error('Error sending admin email:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// API Endpoint: Send Combined Email (Customer + Admin)
app.post('/api/send-order-emails', async (req, res) => {
    try {
        const { order } = req.body;

        // Send to customer
        await fetch(`http://localhost:3000/api/send-order-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                order,
                customerEmail: order.customerEmail,
                customerName: order.customerName
            })
        });

        // Send to admin
        await fetch(`http://localhost:3000/api/send-admin-notification`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ order })
        });

        res.json({ success: true, message: 'All emails sent successfully' });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: error.message });
    }
});

// Health Check
app.get('/api/health', (req, res) => {
    res.json({ status: 'Email Service Running', timestamp: new Date() });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✉️  Email Service running on port ${PORT}`);
    console.log(`📧 Configured email: cyberwolfarmy121@gmail.com`);
});
