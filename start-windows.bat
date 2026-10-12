@echo off
setlocal
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js is not installed. Install Node.js 20 or later first.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing project dependencies...
  call npm install
  if errorlevel 1 (
    echo Installation failed. Check your internet connection.
    pause
    exit /b 1
  )
)
echo Starting HAMADA ZH website...
call npm run dev
pause
