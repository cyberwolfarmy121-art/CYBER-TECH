@echo off
REM CYBER TECH E-Commerce - Quick Start Script
REM This script starts the email server

echo.
echo ========================================
echo   CYBER TECH - Email Server Starter
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo.
)

REM Check if .env exists
if not exist ".env" (
    echo.
    echo WARNING: .env file not found!
    echo Please create .env file with Gmail credentials:
    echo.
    echo GMAIL_USER=cyberwolfarmy121@gmail.com
    echo GMAIL_PASS=your_16_character_app_password
    echo PORT=3000
    echo.
    echo Get app password from: https://myaccount.google.com/apppasswords
    echo.
    pause
)

echo.
echo Starting CYBER TECH Email Server...
echo.
echo ========================================
echo Server will run on: http://localhost:3000
echo Keep this window open while using the website
echo ========================================
echo.

REM Start the server
npm start

pause
