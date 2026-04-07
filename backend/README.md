# Backend - Password Manager API

Complete RESTful API backend for the Password Manager application built with **Express.js** and **MongoDB**.

## 🏗️ Project Structure

```
backend/
├── config/
│   └── database.js              # MongoDB connection & initialization
├── controllers/
│   └── passwordController.js    # Route handlers & business logic
├── middleware/
│   ├── cors.js                  # CORS configuration
│   └── errorHandler.js          # Error handling & 404 handlers
├── models/
│   └── Password.js              # Data model with CRUD operations
├── routes/
│   └── passwordRoutes.js        # API route definitions
├── server.js                    # Express app setup & startup
├── .env                         # Environment variables
├── .env.example                 # Example environment file
└── package.json                 # Dependencies
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
# .env file already created with defaults
# Update if using MongoDB Atlas or different port
MONGODB_URI=mongodb://localhost:27017
PORT=3000
```

### 3. Start Server
```bash
# Development (with auto-reload)
npm run dev

# Production
npm start
```

Server will start on `http://localhost:3000`

## 📡 API Endpoints

### Base URL
```
http://localhost:3000/api/passwords
```

### Available Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Fetch all passwords |
| GET | `/:id` | Fetch single password |
| POST | `/` | Create new password |
| PUT | `/:id` | Update password |
| DELETE | `/:id` | Delete password |
| DELETE | `/` | Delete all passwords |

## 📦 Database Model

### Password Schema
```javascript
{
  _id: ObjectId,              // MongoDB ID
  id: String (unique),         // Custom UUID
  site: String,                // Website URL
  username: String,            // Username/Email
  password: String,            // Password
  createdAt: Date,             // Creation timestamp
  updatedAt: Date              // Last update timestamp
}
```

## 🏗️ Architecture

### MVC Pattern
- **Models** (`models/`): Data access layer - `Password.js`
- **Controllers** (`controllers/`): Business logic - `passwordController.js`
- **Routes** (`routes/`): API endpoints - `passwordRoutes.js`

### Middleware Stack
1. Body Parser - Parse JSON requests
2. CORS - Handle cross-origin requests
3. Routes - Process requests
4. Error Handler - Catch and format errors
5. 404 Handler - Handle undefined routes

## 💾 Database Connection

### MongoDB Local
```
mongodb://localhost:27017/passwordManager
```

### MongoDB Atlas
```
mongodb+srv://username:password@cluster.mongodb.net/passwordManager
```

Update `MONGODB_URI` in `.env` with your connection string.

## ⚙️ Environment Variables

```env
# Database
MONGODB_URI=mongodb://localhost:27017
DB_NAME=passwordManager

# Server
PORT=3000
NODE_ENV=development

# CORS
FRONTEND_URL=http://localhost:5173
```

## 🔌 Dependencies

- **express** - Web framework
- **mongodb** - Database driver
- **cors** - Cross-origin middleware
- **body-parser** - Request parsing
- **dotenv** - Environment configuration

## 🛡️ Error Handling

All endpoints return consistent response format:

**Success Response:**
```json
{
  "success": true,
  "message": "Operation successful",
  "data": {}
}
```

**Error Response:**
```json
{
  "success": false,
  "status": 400,
  "message": "Error description"
}
```

## 📝 API Usage Examples

### Create Password
```bash
curl -X POST http://localhost:3000/api/passwords \
  -H "Content-Type: application/json" \
  -d '{
    "site": "https://example.com",
    "username": "user@example.com",
    "password": "securepassword",
    "id": "uuid-string"
  }'
```

### Get All Passwords
```bash
curl http://localhost:3000/api/passwords
```

### Update Password
```bash
curl -X PUT http://localhost:3000/api/passwords/uuid-string \
  -H "Content-Type: application/json" \
  -d '{
    "site": "https://newexample.com",
    "username": "newuser@example.com",
    "password": "newpassword",
    "id": "uuid-string"
  }'
```

### Delete Password
```bash
curl -X DELETE http://localhost:3000/api/passwords/uuid-string
```

## 🧪 Testing

Use tools like **Postman**, **Insomnia**, or **Thunder Client** to test API endpoints.

## 📊 Logs

Server startup logs:
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✓ Password Manager Server Started
✓ Server: http://localhost:3000
✓ API: http://localhost:3000/api
✓ Health Check: http://localhost:3000/api/health
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

## 🔧 Customization

### Adding New Endpoints
1. Create controller method in `controllers/passwordController.js`
2. Add route in `routes/passwordRoutes.js`
3. Update database model if needed in `models/Password.js`

### Changing Database
1. Update `MONGODB_URI` in `.env`
2. Modify connection logic in `config/database.js`

## 🚀 Deployment

### Before Deployment
- Set `NODE_ENV=production`
- Update `MONGODB_URI` to production database
- Update `FRONTEND_URL` to production frontend
- Set secure `PORT`

### Cloud Platforms
- **Heroku**: Deploy with `Procfile`
- **Railway**: Connect GitHub repo
- **Render**: Deploy with service.yaml
- **AWS/GCP/Azure**: Use Container or Node.js runtimes

## 📚 Resources

- [Express.js Documentation](https://expressjs.com)
- [MongoDB Node.js Driver](https://www.mongodb.com/docs/drivers/node/)
- [RESTful API Design](https://restfulapi.net)

---

Built with ❤️ for secure password management
