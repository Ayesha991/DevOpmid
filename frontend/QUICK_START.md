# ⚡ Quick Start Reference

Copy & paste these commands to get started immediately.

---

## 🚀 First Time Setup (5 minutes)

```bash
# 1. Navigate to project
cd "Password Manager"

# 2. Install backend
cd backend && npm install && cd ..

# 3. Install frontend
npm install

# 4. Ensure MongoDB is running (check in another terminal/process manager)
# Windows: MongoDB Service should be running
# macOS: brew services start mongodb-community
# Linux: sudo systemctl start mongod

# 5. You're ready! See "Running" section below
```

---

## 🎯 Running the Application

### Quick Setup (Recommended)

**Terminal 1:**
```bash
cd backend && npm run dev
```

**Terminal 2 (new terminal window):**
```bash
npm run dev
```

### Then Open Browser
```
http://localhost:5173
```

---

## 📡 Test API Directly

```bash
# See all passwords
curl http://localhost:3000/api/passwords

# Check if server is running
curl http://localhost:3000/api/health

# Create a password
curl -X POST http://localhost:3000/api/passwords \
  -H "Content-Type: application/json" \
  -d '{
    "site": "https://github.com",
    "username": "user@example.com",
    "password": "password123",
    "id": "uuid-1234"
  }'
```

---

## 🔧 Common Commands

### Backend Commands
```bash
cd backend

npm run dev     # Development (auto-reload)
npm start       # Production
npm list        # Check dependencies
```

### Frontend Commands
```bash
npm run dev     # Development server
npm run build   # Build for production
npm run lint    # Check code quality
npm run preview # Preview production build
```

---

## 🐛 If Something Goes Wrong

### MongoDB not running?

**Windows:**
```bash
# Check Services app or run MongoDB manually
"C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe"
```

**macOS:**
```bash
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongod
```

### Port 3000 already in use?

```bash
# macOS/Linux - find process
lsof -i :3000

# Windows - find process
netstat -ano | findstr :3000

# Kill the process (get PID from above)
kill -9 <PID>  # macOS/Linux
taskkill /PID <PID> /F  # Windows
```

### Clear everything and restart?

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

---

## 📚 Documentation Quick Links

| File | Purpose |
|------|---------|
| `README.md` | Main documentation |
| `SETUP_GUIDE.md` | Detailed setup instructions |
| `CHANGES_SUMMARY.md` | What was changed |
| `API_REFERENCE.md` | API endpoints |
| `backend/README.md` | Backend docs |
| `frontend.md` | Frontend docs |

---

## 🔗 Important URLs

| URL | Purpose |
|-----|---------|
| http://localhost:5173 | **Frontend (UI)** |
| http://localhost:3000/api | Backend API root |
| http://localhost:3000/api/passwords | Passwords endpoint |
| http://localhost:3000/api/health | Server health |

---

## 📊 File Structure You Need to Know

```
Password Manager/
├── backend/                  ← Start here: npm run dev
│   ├── server.js            ← Main file
│   ├── .env                 ← Configuration
│   └── config/, models/, controllers/, routes/, middleware/
│
└── src/                      ← Frontend code
    └── components/Manager.jsx  ← Main component
```

---

## ✅ Checklist Before Running

- [ ] Node.js installed? `node --version`
- [ ] MongoDB running? Service/process should be active
- [ ] In project directory? `cd "Password Manager"`
- [ ] Dependencies installed? `npm install` (both places)
- [ ] .env file exists? Check `backend/.env`
- [ ] No processes on ports 3000 & 5173? Check `lsof` or `netstat`

---

## 🎯 First Test

1. Start backend: `cd backend && npm run dev`
2. Start frontend: `npm run dev`
3. Go to http://localhost:5173
4. Add a password:
   - Site: `https://example.com`
   - Username: `test@example.com`
   - Password: `test123`
   - Click Save
5. You should see it in the table!

---

## 💾 Data is Persistent

- Passwords are saved in MongoDB
- They persist when you restart
- Check in MongoDB Compass if needed

---

## 🚀 Ready to Deploy?

```bash
# Build frontend for production
npm run build

# Backend is ready (just set NODE_ENV=production)
```

Then deploy `dist/` folder to Vercel/Netlify and backend to Heroku/Railway/AWS.

---

## 📞 Need Help?

1. Check terminal logs for errors
2. Check browser console (F12)
3. Read error message carefully
4. See `SETUP_GUIDE.md` Troubleshooting section
5. Verify MongoDB is running

---

## 🎓 Learning Order

1. Get it running (this file)
2. Understand structure (`CHANGES_SUMMARY.md`)
3. Learn setup details (`SETUP_GUIDE.md`)
4. Explore API (`API_REFERENCE.md`)
5. Read full docs (`README.md`)

---

**You've got this! Start with the commands above. 🚀**
