# Hayrat Indonesia - Company Profile Website

A modern, full-stack website for Hayrat Indonesia (Muslim foundation/NGO) built with Next.js 14, MongoDB, and Tailwind CSS. Features include a public-facing website and a complete admin CMS for content management.

## ✨ Features

### 🌐 Public Website
- **Modern Islamic Design**: Clean, minimalist design with Islamic patterns and gold accents
- **Responsive Layout**: Mobile-first design optimized for all devices
- **Dynamic Content**: Articles and programs fetched from MongoDB
- **Activity Gallery**: Showcase foundation programs with image modals
- **SEO Optimized**: Server-side rendering with Next.js App Router

### 🔐 Admin Dashboard (CMS)
- **Secure Authentication**: JWT-based login with rate limiting
- **Article Management**: Create, read, update, and delete articles
- **Rich Text Editor**: ReactQuill for formatted content creation
- **Protected Routes**: Auth-based access control
- **Dashboard Analytics**: View statistics and recent activity

### 🚀 Performance & Security
- **API Rate Limiting**: Prevents abuse with configurable limits
- **Database Indexes**: Optimized queries for fast performance
- **Image Optimization**: Next.js Image component with lazy loading
- **Error Handling**: Comprehensive error management

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend** | Next.js 14, React 18, Tailwind CSS |
| **Backend** | Next.js API Routes, MongoDB, Mongoose |
| **Auth** | JWT, bcryptjs |
| **Editor** | React Quill |
| **Icons** | React Icons |
| **Carousel** | Embla Carousel |

## 📋 Quick Start

### Prerequisites
- Node.js 18 or higher
- MongoDB (local or Atlas)
- npm or yarn package manager

### Installation

1. **Clone & Install**
```bash
git clone <repository-url>
cd Hayrat_Compro
npm install
```

2. **Environment Setup**

Create `.env.local` in the root directory:
```env
# MongoDB Connection (choose one)
MONGODB_URI=mongodb://localhost:27017/hayrat_indonesia
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hayrat_indonesia

# JWT Secret (generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
JWT_SECRET=your-super-secret-jwt-key-32-characters-minimum

# API URL
NEXT_PUBLIC_API_URL=http://localhost:3000
```

3. **Database Setup**
```bash
# Create admin user
node scripts/createAdmin.js

# (Optional) Seed sample articles
node scripts/seedArticles.js
```

4. **Start Development Server**
```bash
npm run dev
```

Visit **http://localhost:3000** to see your website! 🎉

### Default Admin Credentials
- **Email**: `admin@hayrat.id`
- **Password**: `admin123`
- **Admin Panel**: http://localhost:3000/admin/login

⚠️ **Important**: Change these credentials in production!

## 📁 Project Structure

```
hayrat-compro/
├── app/                      # Next.js App Router
│   ├── admin/               # Admin dashboard pages
│   │   ├── artikel/        # Article management
│   │   └── login/          # Admin login
│   ├── api/                # API routes
│   │   ├── articles/       # Article CRUD APIs
│   │   └── auth/           # Authentication APIs
│   ├── artikel/            # Public article pages
│   ├── kontak/             # Contact page
│   ├── program/            # Programs page
│   ├── tentang/            # About page
│   ├── globals.css         # Global styles
│   ├── layout.js           # Root layout
│   └── page.js             # Homepage
├── components/              # React components
│   ├── ActivityGallery.js  # Program showcase
│   ├── AdminSidebar.js     # Admin navigation
│   ├── ArticleCard.js      # Article preview card
│   ├── Footer.js           # Site footer
│   ├── HeroCarousel.js     # Homepage carousel
│   ├── Navbar.js           # Site navigation
│   └── ProtectedRoute.js   # Auth wrapper
├── context/
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
- `JWT_SECRET` - Strong secret key (min 32 chars)
- `NEXT_PUBLIC_API_URL` - Your production domain

### Recommended Platforms
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **Railway**
- **DigitalOcean**

## 🔒 Security Features

### Built-in Protection
- ✅ **API Rate Limiting** on all endpoints
- ✅ **JWT Authentication** with secure token handling
- ✅ **Password Hashing** using bcryptjs
- ✅ **Protected Routes** for admin areas
- ✅ **Input Validation** on API routes
- ✅ **MongoDB Indexes** for query optimization

### Rate Limits
- Articles API: 100 requests/minute
- Login: 5 attempts/15 minutes
- Registration: 3 attempts/hour
- Article Mutations: 10-20 requests/minute

### Production Checklist
1. ⚠️ **Change default admin credentials**
2. ⚠️ **Disable `/api/auth/register`** route in production
3. ✅ Use strong JWT_SECRET (minimum 32 characters)
4. ✅ Enable HTTPS
5. ✅ Configure MongoDB Atlas IP whitelist
6. ✅ Set up proper CORS policies

## 📝 Content Management

### Adding Articles
See [ARTICLE_SEEDING_GUIDE.md](ARTICLE_SEEDING_GUIDE.md) for detailed instructions.

**Quick Steps:**
1. Login at `/admin/login`
2. Go to "Artikel" → "Buat Artikel Baru"
3. Fill in article details
4. Click "Publikasikan Artikel"

### Available Categories
- Bantuan Kemanusiaan, Pendidikan, Kesehatan
- Program, Kegiatan, Berita, Opini

## 🐛 Troubleshooting

**MongoDB Connection Issues**
- Verify MongoDB is running (local) or connection string (Atlas)
- Check `.env.local` has correct MONGODB_URI

**Admin Login Not Working**
- Run `node scripts/createAdmin.js` to create admin
- Clear browser localStorage
- Verify JWT_SECRET is set

**Articles Not Showing**
- Run `node scripts/seedArticles.js` for sample data
- Ensure articles have `published: true`
- Check `/api/articles` returns data

**Rate Limit Reached**
- Wait for reset time (shown in error message)
- Restart dev server to clear in-memory limits

## 📚 Documentation

- **[ARTICLE_SEEDING_GUIDE.md](ARTICLE_SEEDING_GUIDE.md)** - Article management guide
- **[package.json](package.json)** - Dependencies and scripts
- **[tailwind.config.js](tailwind.config.js)** - Styling configuration

## 📄 License

Private - All rights reserved by Hayrat Indonesia

---

**Built with ❤️ using Next.js 14, MongoDB, and Tailwind CSS**
