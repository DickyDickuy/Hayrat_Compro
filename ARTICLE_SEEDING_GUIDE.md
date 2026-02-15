# 📝 Guide: Managing Articles with MongoDB

## Overview
Your website now **dynamically fetches articles from MongoDB**. This guide will walk you through adding dummy data and managing articles.

---

## 🎯 Complete Workflow

### **Step 1: Ensure MongoDB is Running**

#### Option A: Using MongoDB Atlas (Cloud - Recommended)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign in to your account
3. Your connection string should already be in `.env.local`
4. ✅ No additional setup needed - skip to Step 2

#### Option B: Using Local MongoDB
1. Make sure MongoDB is installed
2. Start MongoDB service:
   ```powershell
   # Start MongoDB service
   net start MongoDB
   
   # Or if using MongoDB Compass, just open the application
   ```
3. Verify it's running at `mongodb://localhost:27017`

---

### **Step 2: Check Your Environment Variables**

Open `.env.local` and verify this line exists:
```env
MONGODB_URI=your_mongodb_connection_string
```

Example for local:
```env
MONGODB_URI=mongodb://localhost:27017/hayrat_indonesia
```

Example for Atlas:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hayrat_indonesia
```

---

### **Step 3: Seed Dummy Articles**

Run the seed script to populate your database with 5 sample articles:

```powershell
# Navigate to your project root
cd c:\DickyBaskara\3. Kerja\Hayrat_Compro

# Run the seed script
node scripts/seedArticles.js
```

**Expected Output:**
```
Connecting to MongoDB...
Connected to MongoDB successfully!
✅ Created article: Program Distribusi Makanan Tahunan
✅ Created article: Seminar Pendidikan Internasional
✅ Created article: Kesuksesan Pameran Kesehatan Masyarakat
✅ Created article: Program Beasiswa Pendidikan 2026
✅ Created article: Pelatihan Kewirausahaan untuk UMKM

✅ Sample articles created successfully!
```

---

### **Step 4: Start Your Development Server**

```powershell
# Start Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and you should see the articles!

---

## 📊 Article Structure in MongoDB

Each article has the following fields:

```javascript
{
  title: "Article Title",                    // Required
  slug: "article-slug",                      // Required, unique URL
  excerpt: "Short description...",           // Short preview text
  content: "<h2>Full content...</h2>",       // Full HTML content
  coverImage: "https://image-url.jpg",       // Featured image URL
  author: "Author Name",                     // Article author
  category: "Bantuan Kemanusiaan",           // Category badge
  tags: ["tag1", "tag2"],                    // Array of tags
  published: true,                           // Visibility status
  createdAt: Date,                           // Auto-generated
  updatedAt: Date,                           // Auto-generated
}
```

### Available Categories:
- `Bantuan Kemanusiaan` (blue badge)
- `Pendidikan` (blue badge)
- `Kesehatan` (blue badge)
- `Program` (green badge)
- `Kegiatan` (purple badge)
- `Berita` (blue badge)
- `Opini` (orange badge)

---

## ➕ Adding New Articles

### Method 1: Using the Admin Dashboard (Recommended)

1. Navigate to: `http://localhost:3000/admin/login`
2. Login with your admin credentials
3. Go to "Artikel" section
4. Click "Buat Artikel Baru"
5. Fill in the form and submit

### Method 2: Directly via MongoDB Compass

1. Open MongoDB Compass
2. Connect to your database
3. Navigate to `hayrat_indonesia` → `articles` collection
4. Click "Add Data" → "Insert Document"
5. Paste your article JSON

### Method 3: Add to Seed Script

1. Open `scripts/seedArticles.js`
2. Add your article to the `sampleArticles` array:

```javascript
const sampleArticles = [
  // ... existing articles
  {
    title: 'Your New Article Title',
    slug: 'your-new-article-slug',
    excerpt: 'Short description of your article...',
    content: `<h2>Main Heading</h2><p>Your content here...</p>`,
    coverImage: 'https://images.unsplash.com/photo-xxxxx?w=800',
    author: 'Author Name',
    category: 'Bantuan Kemanusiaan',
    tags: ['tag1', 'tag2'],
    published: true,
    createdAt: new Date('2026-02-15'),
  },
];
```

3. Run the script again:
```powershell
node scripts/seedArticles.js
```

---

## 🔄 Re-seeding (Clean Start)

If you want to **clear all articles** and start fresh:

1. Open `scripts/seedArticles.js`
2. **Uncomment** these lines (around line 116):
```javascript
// Clear existing articles (optional)
await Article.deleteMany({});
console.log('Cleared existing articles');
```

3. Run the script:
```powershell
node scripts/seedArticles.js
```

⚠️ **Warning:** This will delete ALL articles from your database!

---

## 🖼️ Image Guidelines

### Recommended Image Sources:
1. **Unsplash** (Free): https://unsplash.com
2. **Pexels** (Free): https://pexels.com
3. Upload to `/public/images/` folder

### Image Format:
```javascript
// External URL (Unsplash/Pexels)
coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800'

// Local file (in /public directory)
coverImage: '/images/my-article-image.jpg'
```

### Best Practices:
- Use landscape orientation (16:9 or 4:3)
- Minimum resolution: 800x600px
- Optimize file size (< 500KB)
- Use descriptive alt text

---

## 🐛 Troubleshooting

### Problem: "Error connecting to MongoDB"
**Solution:**
1. Check if MongoDB service is running
2. Verify `.env.local` has correct `MONGODB_URI`
3. Check internet connection (if using Atlas)

### Problem: "Articles not showing on homepage"
**Solution:**
1. Check if articles exist in database
2. Ensure `published: true` on articles
3. Check browser console for errors
4. Refresh the page (Ctrl + R)

### Problem: "Duplicate key error"
**Solution:**
- Each article needs a unique `slug`
- Change the slug or delete existing article with same slug

### Problem: Images not loading
**Solution:**
1. Verify image URL is correct and accessible
2. For external URLs, ensure HTTPS
3. For local images, place in `/public/images/`

---

## 📋 Quick Reference Commands

```powershell
# Seed articles to MongoDB
node scripts/seedArticles.js

# Start development server
npm run dev

# Create admin user (if needed)
node scripts/createAdmin.js

# Check MongoDB connection
mongosh "your_connection_string"
```

---

## 🎨 Customizing Article Display

The homepage shows **3 latest articles**. To change this:

1. Open `app/page.js`
2. Find line with `limit=3`
3. Change to desired number:
```javascript
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/articles?limit=6&published=true`, {
```

---

## 📝 Sample Article Content Template

Use this template when creating new articles:

```javascript
{
  title: 'Your Article Title Here',
  slug: 'your-article-title-here',
  excerpt: 'A compelling 1-2 sentence summary that will appear on card previews.',
  content: `
    <h2>Introduction</h2>
    <p>Opening paragraph introducing the topic...</p>
    
    <h3>Main Point 1</h3>
    <p>Detailed explanation of first main point...</p>
    
    <h3>Main Point 2</h3>
    <p>Detailed explanation of second main point...</p>
    
    <h3>Conclusion</h3>
    <p>Wrap-up and call to action...</p>
  `,
  coverImage: 'https://images.unsplash.com/photo-xxxxx?w=800',
  author: 'Your Name',
  category: 'Bantuan Kemanusiaan', // Choose from available categories
  tags: ['keyword1', 'keyword2', 'keyword3'],
  published: true,
  createdAt: new Date('2026-02-15'),
}
```

---

## ✅ Success Checklist

- [ ] MongoDB is running (Atlas or Local)
- [ ] `.env.local` has correct MONGODB_URI
- [ ] Run `node scripts/seedArticles.js` successfully
- [ ] Run `npm run dev` and server starts
- [ ] Open `http://localhost:3000` and see articles
- [ ] Articles show correct images, titles, and dates
- [ ] Can click articles to read full content

---

## 🚀 Next Steps

1. **Add more articles** using admin dashboard at `/admin/login`
2. **Customize categories** in `models/Article.js`
3. **Add article search** functionality
4. **Implement pagination** on articles page
5. **Add social sharing** buttons

---

## 📞 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Verify all steps were followed correctly
3. Ensure all dependencies are installed (`npm install`)
4. Check that MongoDB connection is stable

Happy content management! 🎉
