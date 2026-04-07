# 🔐 Password Manager - Full-Stack Application

A complete, production-ready password manager built with **React**, **Node.js/Express**, and **MongoDB**. 

## ✨ Features

✅ **Secure Password Storage** - Store credentials for multiple websites  
✅ **Full CRUD Operations** - Create, Read, Update, Delete passwords  
✅ **RESTful API** - Well-structured backend with proper error handling  
✅ **Database Integration** - MongoDB for persistent data storage  
✅ **Real-time UI Updates** - Live password management without page reload  
✅ **User-Friendly Interface** - Clean, responsive React frontend  
✅ **Input Validation** - Server-side and client-side validation  
✅ **Error Handling** - Comprehensive error management  

---

## 📋 Project Structure

```
Password Manager/
├── backend/
│   ├── config/
│   │   └── database.js          # MongoDB connection setup
│   ├── controllers/
│   │   └── passwordController.js # Business logic for passwords
│   ├── middleware/
│   │   ├── cors.js              # CORS configuration
│   │   └── errorHandler.js      # Error handling middleware
│   ├── models/
│   │   └── Password.js          # Password model/schema
│   ├── routes/
│   │   └── passwordRoutes.js    # API endpoint routes
│   ├── server.js                # Main server file
├── src/
│   ├── components/
│   │   ├── Manager.jsx          # Main password manager component
│   │   ├── Navbar.jsx           # Navigation bar
│   │   └── Footer.jsx           # Footer component
│   ├── assets/                  # Lottie animations
│   ├── App.jsx                  # Main React component
│   ├── main.jsx                 # React entry point
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18+
- MongoDB (local or MongoDB Atlas)

### Installation

```bash
# Backend setup
cd backend && npm install && npm run dev

# Frontend setup (new terminal)
npm install && npm run dev
```

**Access:** Frontend at http://localhost:5173 | Backend API at http://localhost:3000/api

---

## 🛠️ Technology Stack

**Frontend:** React 19, Vite, Tailwind CSS, Lottie  
**Backend:** Node.js, Express.js, MongoDB  
**Database:** MongoDB with proper schema & indexing

---

## 📡 API Endpoints

```
GET    /api/passwords        # Get all passwords
GET    /api/passwords/:id    # Get single password
POST   /api/passwords        # Create password
PUT    /api/passwords/:id    # Update password
DELETE /api/passwords/:id    # Delete password
DELETE /api/passwords        # Delete all
```

---

## 📚 Full Documentation

- **[Backend README](backend/README.md)** - API details, database schema, setup
- **[Frontend README](frontend.md)** - Components, features, styling

---

## 🚦 Environment Configuration

```env
# backend/.env
MONGODB_URI=mongodb://localhost:27017
DB_NAME=passwordManager
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection failed | Start MongoDB service or use Atlas |
| CORS error | Verify FRONTEND_URL in backend/.env |
| Port 3000 in use | Change PORT in .env or kill process |
| API not responding | Check backend is running on port 3000 |

---

**Happy Password Managing! 🔐**
