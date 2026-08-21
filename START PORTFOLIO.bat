@echo off
title Suman Portfolio - Local Server

cd /d "%~dp0"

echo.
echo ========================================
echo       SUMAN PORTFOLIO
echo ========================================
echo.
echo Starting local website...
echo.

start "" cmd /c "timeout /t 3 /nobreak >nul & start http://localhost:3000"

npm.cmd run dev

pause
