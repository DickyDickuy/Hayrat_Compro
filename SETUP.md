# SETUP GUIDE - Hayrat Indonesia Website

## Quick Start (5 Minutes)

### Step 1: Install Dependencies
```powershell
npm install
```

### Step 2: Setup MongoDB

**Option A: Local MongoDB**
```powershell
# Make sure MongoDB is running on your system
# Default connection: mongodb://localhost:27017
```

**Option B: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account and cluster
3. Get your connection string
4. Update `.env.local` with your MongoDB Atlas URI

### Step 3: Update Environment Variables

The `.env.local` file is already created. Just update these values:

```env
MONGODB_URI=mongodb://localhost:27017/hayrat_indonesia
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hayrat_indonesia

JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Important:** Generate a strong JWT_SECRET:
```powershell
# You can use this command to generate a random secret:
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 4: Create Admin User

Run the admin creation script:
```powershell
node scripts/createAdmin.js
```

This will create:
- Email: `admin@hayrat.id`
- Password: `admin123`
- Role: `superadmin`

**⚠️ Change this password after first login!**

### Step 5: (Optional) Seed Sample Articles

```powershell
node scripts/seedArticles.js
```

This will add 3 sample articles to your database.

### Step 6: Run Development Server

```powershell
npm run dev
```

Visit: http://localhost:3000

## Testing the Website

### 1. Public Website
- Home: http://localhost:3000
- Articles: http://localhost:3000/artikel
- About: http://localhost:3000/tentang
- Programs: http://localhost:3000/program
- Contact: http://localhost:3000/kontak

### 2. Admin Dashboard
1. Go to: http://localhost:3000/admin/login
2. Login with:
   - Email: `admin@hayrat.id`
   - Password: `admin123`
3. After login, you'll be redirected to the dashboard

### 3. Create Your First Article
1. Login to admin
2. Go to "Artikel" in sidebar
3. Click "Artikel Baru"
4. Fill in the form:
   - Title: Will auto-generate slug
   - Content: Use the rich text editor
   - Category: Choose from dropdown
   - Add cover image URL (or use default)
5. Click "Simpan Artikel"

## Common Issues & Solutions

### Issue 1: MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```

**Solution:**
- Make sure MongoDB is running
- Check your MONGODB_URI in `.env.local`
- Try using MongoDB Atlas instead

### Issue 2: Module Not Found
```
Error: Cannot find module 'mongoose'
```

**Solution:**
```powershell
rm -rf node_modules
rm package-lock.json
npm install
```

### Issue 3: Port Already in Use
```
Error: Port 3000 is already in use
```

**Solution:**
```powershell
# Kill the process using port 3000
npx kill-port 3000
# Or use a different port
PORT=3001 npm run dev
```

### Issue 4: JWT Token Invalid
**Solution:**
- Clear localStorage in browser DevTools
- Or logout and login again
- Check JWT_SECRET is set in `.env.local`

## Project Structure Overview

```
hayrat-compro/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin dashboard pages
│   │   ├── artikel/       # Article management
│   │   └── login/         # Admin login
│   ├── artikel/           # Public article pages
│   ├── api/               # API routes
│   │   ├── articles/      # Article CRUD
│   │   └── auth/          # Authentication
│   ├── globals.css        # Global styles
│   └── page.js            # Homepage
├── components/            # React components
├── context/              # React Context (AuthContext)
├── lib/                  # Utilities (MongoDB connection)
├── models/               # Mongoose models
├── scripts/              # Setup scripts
└── public/               # Static files
```

## Next Steps

1. **Customize Design**
   - Update colors in `tailwind.config.js`
   - Modify components in `components/`
   - Update global styles in `app/globals.css`

2. **Add Your Logo**
   - Place logo in `public/images/`
   - Update Navbar and Footer components

3. **Add Content**
   - Create articles via admin dashboard
   - Update About page content
   - Add program details

4. **Deploy to Production**
   - See README.md for deployment guide
   - Update environment variables
   - Change admin password

## Available Scripts

```powershell
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Create admin user
node scripts/createAdmin.js

# Seed sample articles
node scripts/seedArticles.js
```

## Important URLs

- **Website**: http://localhost:3000
- **Admin Login**: http://localhost:3000/admin/login
- **Admin Dashboard**: http://localhost:3000/admin
- **Articles Management**: http://localhost:3000/admin/artikel
- **API Docs**: See README.md

## Security Checklist

- [ ] Change default admin password
- [ ] Update JWT_SECRET with strong random string
- [ ] Enable HTTPS in production
- [ ] Disable `/api/auth/register` in production
- [ ] Add rate limiting to API routes
- [ ] Configure CORS properly
- [ ] Use environment variables for all secrets

## Need Help?

Check:
1. README.md for detailed documentation
2. Console for error messages
3. MongoDB logs for database issues
4. Browser DevTools Network tab for API issues

---

**Happy Coding! 🚀**
