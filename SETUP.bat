@echo off
echo ========================================
echo CYBER TECH E-Commerce Setup
echo ========================================
echo.
echo Checking Node.js installation...
node --version
echo.
echo Installing dependencies...
call npm install
echo.
echo ========================================
echo Setup Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. Open .env file and add your Gmail app password
echo 2. Run: npm start
echo 3. Open cybertech.html in your browser
echo.
echo For more info, read README.md
echo.
pause
