# Hayrat Indonesia - Company Profile Website

A modern, comprehensive Company Profile website for Hayrat Indonesia (Muslim foundation/NGO) built with Next.js, MongoDB, and Tailwind CSS.

## 🚀 Features

### Public Facing
- **Modern UI/UX**: Islamic minimalism design with clean typography and subtle patterns
- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Home Page**: Hero section, impact counters, featured articles, and CTAs
- **About Page**: Vision, Mission, and History
- **Programs Page**: Display foundation programs
- **Articles/Blog**: Grid layout with pagination and category filters
- **Article Detail**: Full article view with social sharing

### Admin Dashboard (CMS)
- **Protected Routes**: JWT-based authentication with React Context API
- **Article Management**: Full CRUD operations for articles
- **Rich Text Editor**: ReactQuill for content creation
- **Dashboard**: Stats overview and quick actions
- **User Management**: Admin authentication system

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT with bcryptjs
- **State Management**: React Context API (AuthContext)
- **Rich Text Editor**: React Quill
- **Icons**: React Icons

## 📋 Prerequisites

- Node.js 18+ 
- MongoDB (local or MongoDB Atlas)
- npm or yarn

## 🔧 Installation

1. **Install Dependencies**
```bash
npm install
```

2. **Environment Variables**

Update `.env.local` with your actual values:
```env
MONGODB_URI=mongodb://localhost:27017/hayrat_indonesia
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hayrat_indonesia

JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NEXT_PUBLIC_API_URL=http://localhost:3000
```

3. **Create First Admin User**

Run this script to create your first admin user:
```bash
node scripts/createAdmin.js
```

Or use the register API endpoint:
```bash
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin",
    "email": "admin@hayrat.id",
    "password": "admin123",
    "role": "superadmin"
  }'
```

4. **Run Development Server**
```bash
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📁 Project Structure

```
hayrat-compro/
├── app/
│   ├── admin/
│   │   ├── artikel/
│   │   │   ├── create/
│   │   │   │   └── page.js
│   │   │   └── page.js
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── layout.js
│   │   └── page.js
│   ├── artikel/
│   │   ├── [slug]/
│   │   │   └── page.js
│   │   └── page.js
│   ├── api/
│   │   ├── articles/
│   │   │   ├── [slug]/
│   │   │   │   └── route.js
│   │   │   └── route.js
│   │   └── auth/
│   │       ├── login/
│   │       │   └── route.js
│   │       ├── register/
│   │       │   └── route.js
│   │       └── verify/
│   │           └── route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── AdminSidebar.js
│   ├── ArticleCard.js
│   ├── Footer.js
│   ├── Navbar.js
│   └── ProtectedRoute.js
├── context/
│   └── AuthContext.js
├── lib/
│   └── mongodb.js
├── models/
│   ├── Admin.js
│   └── Article.js
└── public/
    └── images/
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Red/Maroon (#c92a2a to #3d0b0b)
- **Secondary**: Gold (#eba93c to #44260f)
- **Neutral**: White, Light Gray

### Typography
- **Body**: Inter (sans-serif)
- **Headings**: Lora (serif)

### Components
- Glassmorphism navbar
- Card-based layouts
- Gradient buttons
- Islamic pattern overlays (opacity 5%)

## 🔐 Authentication

The project uses Context API for state management:
- **AuthContext**: Manages admin authentication state
- **useAuth Hook**: Custom hook for accessing auth state
- **ProtectedRoute**: Wrapper component for admin pages

### Login Flow
1. User enters credentials on `/admin/login`
2. Credentials validated via `/api/auth/login`
3. JWT token stored in localStorage
4. User redirected to `/admin` dashboard
5. Token verified on each protected route access

## 📝 API Routes

### Authentication
- `POST /api/auth/register` - Create admin user
- `POST /api/auth/login` - Login admin
- `GET /api/auth/verify` - Verify JWT token

### Articles
- `GET /api/articles` - Get all articles (with pagination)
- `POST /api/articles` - Create new article
- `GET /api/articles/[slug]` - Get single article
- `PUT /api/articles/[slug]` - Update article
- `DELETE /api/articles/[slug]` - Delete article

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Environment Variables for Production
Make sure to update:
- `MONGODB_URI` - Your production MongoDB URI
- `JWT_SECRET` - Strong secret key
- `NEXT_PUBLIC_API_URL` - Your production domain

### Recommended Platforms
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **DigitalOcean**

## 📦 Database Seeds

To populate with sample data, you can create articles via the admin dashboard at `/admin/artikel/create`.

## 🔒 Security Notes

1. **Change JWT_SECRET** in production to a strong random string
2. **Disable** `/api/auth/register` route in production (or add additional security)
3. **Enable HTTPS** in production
4. **Use strong passwords** for admin accounts
5. **Implement rate limiting** on API routes
6. **Add CORS** configuration if needed

## 📄 License

Private - All rights reserved by Hayrat Indonesia

## 👥 Credits

Developed as a company profile website for Hayrat Indonesia foundation.

## 📞 Support

For issues or questions, please contact the development team.
