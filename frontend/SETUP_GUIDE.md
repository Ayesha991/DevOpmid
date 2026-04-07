# 🚀 Setup Guide - Password Manager

Complete step-by-step guide to set up and run the Password Manager application.

---

## Prerequisites

Before starting, ensure you have:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Either:
  - Local installation: [Download](https://www.mongodb.com/try/download/community)
  - Cloud (MongoDB Atlas): [Create free account](https://www.mongodb.com/cloud/atlas)
- **A code editor** - VS Code recommended
- **Terminal/Command Prompt**
- **Git** (optional)

### Verify Installation

```bash
# Check Node.js version
node --version
# Should show v18.0.0 or higher

# Check npm version
npm --version
# Should show 9.0.0 or higher
```

---

## Step-by-Step Setup

### 1️⃣ Navigate to Project

```bash
cd "Path/to/Password Manager"
```

### 2️⃣ Setup Backend

#### Install Backend Dependencies

```bash
cd backend
npm install
```

This installs:
- `express` - Web framework
- `mongodb` - Database driver
- `cors` - Cross-origin requests
- `body-parser` - JSON parsing
- `dotenv` - Environment variables

**Expected Output:**
```
added 50+ packages, and audited 60+ packages
```

#### Verify Installation

```bash
npm list
```

Should show all packages installed successfully.

### 3️⃣ Setup Frontend

```bash
cd ..
npm install
```

This installs:
- `react` & `react-dom` - UI library
- `vite` - Build tool
- `tailwindcss` - Styling
- `lottie-react` - Animations
- `react-toastify` - Notifications
- `uuid` - ID generation

### 4️⃣ Configure MongoDB

#### Option A: Local MongoDB

**Windows:**
1. Open [MongoDB installer](https://www.mongodb.com/try/download/community)
2. Download and run installer
3. Follow installation wizard
4. Start MongoDB:
   ```bash
   "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
   ```

**macOS:**
```bash
# Using Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Start MongoDB
brew services start mongodb-community
```

**Linux (Ubuntu):**
```bash
# Install MongoDB
sudo apt-get install -y mongodb

# Start service
sudo systemctl start mongod
```

#### Option B: MongoDB Atlas (Recommended for Production)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account
3. Create new project
4. Create cluster (free tier)
5. Create database user
6. Get connection string
7. Update `backend/.env`:
   ```env
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/passwordManager
   ```

### 5️⃣ Environment Configuration

Verify `backend/.env` exists with correct values:

```env
MONGODB_URI=mongodb://localhost:27017
DB_NAME=passwordManager
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

---

## Running the Application

### Method 1: Using Two Terminals (Recommended)

**Terminal 1 - Start Backend:**
```bash
cd "Password Manager"/backend
npm run dev
```

Expected output:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Password Manager Server Started
✓ Server: http://localhost:3000
✓ API: http://localhost:3000/api
✓ Health Check: http://localhost:3000/api/health
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**Terminal 2 - Start Frontend:**
```bash
cd "Password Manager"
npm run dev
```

Expected output:
```
VITE v7.2.4  ready in 234 ms

➜  Local:   http://localhost:5173/
```

### Method 2: Individual Commands

**Backend only (production):**
```bash
cd backend && npm start
```

**Frontend only (development):**
```bash
npm run dev
```

**Frontend production build:**
```bash
npm run build
npm run preview
```

---

## Accessing the Application

After both services are running:

1. **Frontend (User Interface)**
   - URL: http://localhost:5173
   - Open in browser
   - See password manager interface

2. **Backend API**
   - URL: http://localhost:3000/api
   - Test endpoints with Postman/Insomnia

3. **Health Check**
   - URL: http://localhost:3000/api/health
   - Should return: `{"success": true, "message": "Server is running"}`

---

## Testing the Application

### 1. Add a Password

1. Go to http://localhost:5173
2. Enter:
   - Website: `https://example.com`
   - Username: `user@example.com`
   - Password: `mypassword123`
3. Click "Save"
4. See success notification

### 2. Edit a Password

1. Click edit icon next to saved password
2. Modify fields
3. Click "Update"

### 3. Copy Password

1. Click copy icon next to password
2. See "Copied to Clipboard!" notification

### 4. Delete a Password

1. Click delete icon
2. Confirm deletion
3. Password is removed

### 5. Test API Directly

Using cURL or Postman:

**Get all passwords:**
```bash
curl http://localhost:3000/api/passwords
```

**Create password:**
```bash
curl -X POST http://localhost:3000/api/passwords \
  -H "Content-Type: application/json" \
  -d '{
    "site": "https://example.com",
    "username": "user@example.com",
    "password": "password123",
    "id": "uuid-1234"
  }'
```

---

## Common Issues & Solutions

### ❌ "MongoDB connection failed: connect ECONNREFUSED"

**Cause:** MongoDB not running

**Solution:**
```bash
# macOS
brew services start mongodb-community

# Windows: Run MongoDB installer and start service
# Linux
sudo systemctl start mongod
```

### ❌ "Port 3000 already in use"

**Cause:** Another application using port 3000

**Solution:**
```bash
# Find process using port 3000
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Kill the process (get PID from above)
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows

# Or change port in backend/.env
PORT=3001
```

### ❌ "CORS error" in browser console

**Cause:** Frontend URL mismatch

**Solution:** Check `backend/.env`:
```env
FRONTEND_URL=http://localhost:5173
```

### ❌ "Cannot GET /api/passwords"

**Cause:** Backend not running

**Solution:**
```bash
cd backend
npm run dev
```

### ❌ "Module not found" errors

**Cause:** Dependencies not installed

**Solution:**
```bash
# Backend
cd backend
rm -rf node_modules package-lock.json
npm install

# Frontend
cd ..
rm -rf node_modules package-lock.json
npm install
```

### ❌ Port 5173 already in use

**Cause:** Vite dev server conflict

**Solution:**
```bash
# Kill process on port 5173
lsof -i :5173  # macOS/Linux
netstat -ano | findstr :5173  # Windows

# Vite will auto-try next port if this fails
```

---

## Development Workflow

### Make Frontend Changes

1. Edit files in `src/`
2. Vite hot-reloads automatically
3. Check browser for changes

### Make Backend Changes

1. Edit files in `backend/`
2. Dev mode (`npm run dev`) auto-restarts
3. Test with API client

### Database Changes

1. Update schema in `backend/models/Password.js`
2. Restart backend server
3. MongoDB auto-creates collections

---

## Project File Structure

```
Password Manager/
├── backend/                    # Node.js/Express server
│   ├── config/
│   │   └── database.js         # MongoDB connection
│   ├── controllers/
│   │   └── passwordController.js
│   ├── middleware/
│   │   ├── cors.js
│   │   └── errorHandler.js
│   ├── models/
│   │   └── Password.js
│   ├── routes/
│   │   └── passwordRoutes.js
│   ├── server.js               # Entry point
│   ├── .env                    # Environment config
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
├── src/                        # React application
│   ├── components/
│   │   ├── Manager.jsx         # Main component
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── assets/                 # Animations
│   ├── App.jsx
│   └── main.jsx
│
├── public/                     # Static files
├── package.json                # Frontend dependencies
├── vite.config.js
├── README.md
└── frontend.md
```

---

## Next Steps

### Already Completed ✅
- ✅ Installed all dependencies
- ✅ Configured MongoDB
- ✅ Set up environment variables
- ✅ Started backend & frontend

### What to Do Next
1. Explore the UI at http://localhost:5173
2. Read [Backend README](backend/README.md) for API details
3. Read [Frontend README](frontend.md) for component details
4. Customize colors/styling in components
5. Add features (encryption, authentication, etc.)
6. Deploy to production

---

## Useful Commands

```bash
# Backend
cd backend
npm run dev              # Development with auto-reload
npm start               # Production server
npm test                # Run tests (if configured)

# Frontend
npm run dev             # Development server
npm run build           # Build for production
npm run lint            # Check code quality
npm run preview         # Preview production build

# Database
# MongoDB shell
mongosh
# List databases
show databases
# Switch database
use passwordManager
# View collections
show collections
```

---

## Tools Recommendation

For better development experience:

- **Code Editor:** [VS Code](https://code.visualstudio.com/)
- **API Testing:** [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/)
- **Database GUI:** [MongoDB Compass](https://www.mongodb.com/products/tools/compass)
- **Terminal:** [Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal), [iTerm2](https://iterm2.com/)

---

## Learning Resources

- [React Official Docs](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB University](https://university.mongodb.com/)
- [REST API Best Practices](https://restfulapi.net)
- [Vite Documentation](https://vitejs.dev)

---

## Support

Having issues? Check:
1. Error messages in terminal/console
2. Backend logs
3. Browser console (F12)
4. `.env` file configuration
5. MongoDB connection status

---

**Great! You're all set! Start managing your passwords securely. 🔐**
