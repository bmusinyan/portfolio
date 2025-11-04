@echo off
setlocal
title Portfolio Backend - Setup (local python)

rem --- resolve project directory ---
set "PROJ=%~dp0"
if "%PROJ:~-1%"=="\" set "PROJ=%PROJ:~0,-1%"

set "LPY=%PROJ%\bin\python.exe"
set "VENV=%PROJ%\venv"
set "VPY=%VENV%\Scripts\python.exe"
set "REQ=%PROJ%\requirements.txt"

if not exist "%LPY%" (
    echo [ERROR] Local python not found at "%LPY%"
    exit /b 1
)

echo [1/4] Creating virtual environment (if missing)...
if not exist "%VPY%" "%LPY%" -m venv "%VENV%" || (echo [ERROR] venv create failed & exit /b 1)

echo [2/4] Upgrading pip/setuptools/wheel...
"%VPY%" -m pip install --upgrade pip setuptools wheel || goto :pipfail

echo [3/4] Installing required libraries...
"%VPY%" -m pip install ^
    "django>=4.2,<5.0" ^
    gunicorn ^
    whitenoise ^
    djongo ^
    "pymongo[srv]" ^
    python-dotenv ^
    django-cors-headers || goto :pipfail

echo [4/4] Writing requirements.txt...
"%VPY%" -m pip freeze > "%REQ%"

echo.
echo ✅ Environment ready.
echo Activate with:
echo    %VENV%\Scripts\Activate.ps1
echo.
exit /b 0

:pipfail
echo [ERROR] pip install failed. See messages above.
exit /b 1