# 🎨 Frontend - Password Manager UI

Beautiful, responsive React frontend for the Password Manager application.

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Manager.jsx      # Main password management component
│   ├── Navbar.jsx       # Top navigation bar
│   └── Footer.jsx       # Footer component
├── assets/              # Lottie animation JSON files
│   ├── copy.json
│   ├── delete.json
│   └── edit.json
├── App.jsx             # Main React component
├── main.jsx            # React entry point
├── input.css           # Tailwind CSS input
└── output.css          # Compiled Tailwind CSS
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Application will be available at `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
npm run preview
```

## 🎯 Features

### Manager Component
- ✅ Add new passwords
- ✅ Edit existing passwords
- ✅ Delete passwords with confirmation
- ✅ Copy password to clipboard
- ✅ Show/hide password toggle
- ✅ Real-time validation
- ✅ Error handling with toast notifications
- ✅ Loading states

### UI Components
- **Navbar** - Branding and navigation
- **Manager** - Password CRUD operations
- **Footer** - Additional information

## 🔄 API Integration

### API Base URL
```javascript
const API_BASE_URL = 'http://localhost:3000/api'
```

### API Calls

**Fetch all passwords:**
```javascript
GET /passwords
```

**Create password:**
```javascript
POST /passwords
{
  site: "https://example.com",
  username: "user@example.com",
  password: "securepassword",
  id: "uuid"
}
```

**Update password:**
```javascript
PUT /passwords/:id
{
  site, username, password, id
}
```

**Delete password:**
```javascript
DELETE /passwords/:id
```

## 🎨 Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Responsive Design** - Mobile-first approach
- **Custom Colors** - Green color scheme (`text-green-500`, `bg-green-500`)
- **Animations** - Lottie animations for UI interactions

## 🔧 Configuration

### Update API Base URL
Edit `Manager.jsx`:
```javascript
const API_BASE_URL = 'http://your-backend-url/api'
```

### Customize Colors
Modify class names in components:
```jsx
<span className='text-green-500'>Text</span>
<button className='bg-green-500'>Button</button>
```

## 📝 Component Props & State

### Manager.jsx State
```javascript
const [form, setForm] = useState({
  site: "",
  username: "",
  password: "",
  id: null
})
const [passwordsArray, setPasswordArray] = useState([])
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)
```

## 🎯 User Flow

1. **Load** - Fetch all saved passwords on mount
2. **Add** - Enter site, username, password and click Save
3. **Edit** - Click edit icon, modify fields, save to update
4. **Delete** - Click delete icon, confirm deletion
5. **Copy** - Click copy icon to copy password to clipboard

## 🛠️ Dependencies

- **react** - UI framework
- **react-dom** - DOM rendering
- **vite** - Build tool
- **tailwindcss** - Styling
- **lottie-react** - Animations
- **react-toastify** - Notifications
- **uuid** - Generate unique IDs

## 📱 Responsive Breakpoints

```javascript
md: 768px  // Tablet and above
```

### Responsive Classes
- `md:px-0` - Padding on medium screens
- `md:container` - Container on medium screens
- `md:flex-row` - Row layout on medium screens
- `md:w-50` - Width on medium screens

## 🔐 Input Validation

### Client-Side
- Check required fields before submit
- Show error toast notifications
- Display loading states

### Server-Side
- Validate all required fields
- Check UUID format
- Sanitize inputs

## ⚠️ Error Handling

### Toast Notifications
```javascript
toast.error('Failed to load passwords', { 
  position: "top-right" 
})

toast.success('Password saved successfully!', { 
  position: "top-right" 
})
```

### Error Display
```jsx
{error && (
  <div className='bg-red-100 border border-red-400 ...'>
    Error: {error}
  </div>
)}
```

## 🎬 Animations

### Lottie Animations
- **Edit** - edit.json
- **Delete** - delete.json
- **Copy** - copy.json

### Animation Components
```jsx
<EditAnimation onClick={() => editPassword(item.id)} />
<DeleteAnimation onClick={() => deletePassword(item.id)} />
<CopyAnimation onClick={() => copyText(item.password)} />
```

## 🧪 Debugging

### Browser Console
Check for API errors:
```javascript
console.error('Error: ', err)
```

### Network Tab
Monitor API requests and responses

### React DevTools
- Check component state
- Track updates

## 🚀 Deployment

### Build
```bash
npm run build
```

### Deploy Static Files
Upload contents of `dist/` folder to:
- **Vercel**
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

### Environment Setup
Update `API_BASE_URL` to production backend URL

## 🔗 Environment Variables

Create `.env` file:
```env
VITE_API_BASE_URL=http://localhost:3000/api
```

Access in component:
```javascript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL
```

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Lottie Documentation](https://lottiefiles.com)

## 📞 Troubleshooting

### API Connection Error
- Check backend is running on `http://localhost:3000`
- Verify `API_BASE_URL` in Manager.jsx

### CORS Error
- Check backend `.env` has correct `FRONTEND_URL`

### Styles Not Loading
```bash
npm run build:css
```

---

Built with ❤️ for a better password management experience
