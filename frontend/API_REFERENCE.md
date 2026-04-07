# Password Manager - API Reference

Quick reference for all API endpoints and usage.

---

## 🔗 API Base URL

```
http://localhost:3000/api/passwords
```

---

## 📊 Response Format

All responses follow this structure:

### Success Response
```json
{
  "success": true,
  "message": "Operation description",
  "data": { /* operation result */ },
  "count": 5
}
```

### Error Response
```json
{
  "success": false,
  "status": 400,
  "message": "Error description"
}
```

### Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `404` - Not Found
- `500` - Server Error

---

## 📋 Endpoints

### 1. Get All Passwords

**Request:**
```http
GET /api/passwords
```

**Example:**
```bash
curl http://localhost:3000/api/passwords
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "site": "https://github.com",
      "username": "john@example.com",
      "password": "mypassword123",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ],
  "count": 1
}
```

---

### 2. Get Single Password

**Request:**
```http
GET /api/passwords/:id
```

**Parameters:**
- `:id` (string) - Password ID (UUID)

**Example:**
```bash
curl http://localhost:3000/api/passwords/550e8400-e29b-41d4-a716-446655440000
```

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "site": "https://github.com",
    "username": "john@example.com",
    "password": "mypassword123",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

**Error Response (Not Found):**
```json
{
  "success": false,
  "status": 404,
  "message": "Password not found"
}
```

---

### 3. Create Password

**Request:**
```http
POST /api/passwords
Content-Type: application/json

{
  "site": "https://example.com",
  "username": "user@example.com",
  "password": "secure_password",
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Parameters:**
- `site` (string, required) - Website URL
- `username` (string, required) - Username or email
- `password` (string, required) - Password
- `id` (string, required) - Unique UUID

**Example:**
```bash
curl -X POST http://localhost:3000/api/passwords \
  -H "Content-Type: application/json" \
  -d '{
    "site": "https://github.com",
    "username": "john@example.com",
    "password": "mypassword123",
    "id": "550e8400-e29b-41d4-a716-446655440000"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Password saved successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "site": "https://github.com",
    "username": "john@example.com",
    "password": "mypassword123",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

**Error Response (Missing Fields):**
```json
{
  "success": false,
  "status": 400,
  "message": "All fields (site, username, password, id) are required"
}
```

---

### 4. Update Password

**Request:**
```http
PUT /api/passwords/:id
Content-Type: application/json

{
  "site": "https://example.com",
  "username": "newuser@example.com",
  "password": "new_password",
  "id": "550e8400-e29b-41d4-a716-446655440000"
}
```

**Parameters:**
- `:id` (string) - Password ID to update
- `site` (string, optional) - New website URL
- `username` (string, optional) - New username
- `password` (string, optional) - New password
- `id` (string, required) - ID for reference

**Example:**
```bash
curl -X PUT http://localhost:3000/api/passwords/550e8400-e29b-41d4-a716-446655440000 \
  -H "Content-Type: application/json" \
  -d '{
    "site": "https://github.com",
    "username": "newemail@example.com",
    "password": "newpassword456",
    "id": "550e8400-e29b-41d4-a716-446655440000"
  }'
```

**Response:**
```json
{
  "success": true,
  "message": "Password updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439012",
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "site": "https://github.com",
    "username": "newemail@example.com",
    "password": "newpassword456",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:45:00Z"
  }
}
```

---

### 5. Delete Password

**Request:**
```http
DELETE /api/passwords/:id
```

**Parameters:**
- `:id` (string) - Password ID to delete

**Example:**
```bash
curl -X DELETE http://localhost:3000/api/passwords/550e8400-e29b-41d4-a716-446655440000
```

**Response:**
```json
{
  "success": true,
  "message": "Password deleted successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "status": 404,
  "message": "Password entry not found"
}
```

---

### 6. Delete All Passwords

**Request:**
```http
DELETE /api/passwords
```

**Example:**
```bash
curl -X DELETE http://localhost:3000/api/passwords
```

**Response:**
```json
{
  "success": true,
  "message": "All passwords deleted successfully"
}
```

**⚠️ WARNING:** This action cannot be undone!

---

### 7. Health Check

**Request:**
```http
GET /api/health
```

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

---

## 🧪 Testing with Tools

### Using cURL (Command Line)

```bash
# Get all
curl http://localhost:3000/api/passwords

# Create
curl -X POST http://localhost:3000/api/passwords \
  -H "Content-Type: application/json" \
  -d '{"site":"https://example.com","username":"user","password":"pass","id":"uuid"}'

# Update
curl -X PUT http://localhost:3000/api/passwords/uuid \
  -H "Content-Type: application/json" \
  -d '{"site":"https://new.com","username":"newuser","password":"newpass","id":"uuid"}'

# Delete
curl -X DELETE http://localhost:3000/api/passwords/uuid

# Health check
curl http://localhost:3000/api/health
```

### Using Postman/Insomnia

1. Create New Request
2. Set method (GET, POST, PUT, DELETE)
3. Enter URL: `http://localhost:3000/api/passwords`
4. Set Headers: `Content-Type: application/json`
5. Set Body (JSON) for POST/PUT
6. Send Request

### Using JavaScript/Fetch

```javascript
const API_URL = 'http://localhost:3000/api/passwords';

// Get all
fetch(API_URL)
  .then(res => res.json())
  .then(data => console.log(data));

// Create
fetch(API_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    site: 'https://example.com',
    username: 'user@example.com',
    password: 'password123',
    id: '550e8400-e29b-41d4-a716-446655440000'
  })
})
.then(res => res.json())
.then(data => console.log(data));

// Update
fetch(`${API_URL}/uuid`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ ... })
})
.then(res => res.json())
.then(data => console.log(data));

// Delete
fetch(`${API_URL}/uuid`, { method: 'DELETE' })
  .then(res => res.json())
  .then(data => console.log(data));
```

---

## 🔐 Data Requirements

### Field Validation

| Field | Type | Required | Max Length | Notes |
|-------|------|----------|-----------|-------|
| site | string | ✓ | 500 | Website URL |
| username | string | ✓ | 500 | Email or username |
| password | string | ✓ | 1000 | Any characters |
| id | string | ✓ | 36 | UUID format |

### Username/Email Formats

Valid:
- `user@example.com`
- `john.doe@company.co.uk`
- `username123`
- `first.last_name@site.com`

### Website URL Format

Valid:
- `https://github.com`
- `https://example.com/path`
- `https://sub.example.co.uk`
- `http://localhost:3000`

---

## ⚙️ Request Headers

```http
Content-Type: application/json    # Required for POST/PUT
Accept: application/json          # Optional
```

---

## 📈 Database Schema

```javascript
{
  _id: ObjectId,              // MongoDB auto-generated ID
  id: String (unique),        // User-provided UUID
  site: String,               // Website URL
  username: String,           // Username/Email
  password: String,           // Password
  createdAt: Date,            // Creation timestamp
  updatedAt: Date             // Last update timestamp
}
```

---

## 🚨 Common Errors

| Status | Message | Cause | Solution |
|--------|---------|-------|----------|
| 400 | Missing required fields | Incomplete request body | Add all required fields |
| 404 | Password not found | ID doesn't exist | Check ID is correct |
| 500 | Internal server error | Database issue | Restart backend, check MongoDB |
| CORS error | Blocked by CORS policy | Frontend URL mismatch | Update FRONTEND_URL in .env |

---

## 💾 Example Database Entry

```json
{
  "_id": {
    "$oid": "507f1f77bcf86cd799439011"
  },
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "site": "https://github.com",
  "username": "john.doe@example.com",
  "password": "SecureP@ssw0rd123",
  "createdAt": {
    "$date": "2024-01-15T10:30:00.000Z"
  },
  "updatedAt": {
    "$date": "2024-01-15T10:45:30.000Z"
  }
}
```

---

## 🔗 Quick Links

- [Backend README](backend/README.md)
- [Frontend README](frontend.md)
- [Setup Guide](SETUP_GUIDE.md)
- [Main README](README.md)

---

**Happy API Testing! 🚀**
