const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

// MongoDB connection URI
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hayrat_indonesia';

// Article Schema
const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
  },
  coverImage: {
    type: String,
    default: '/images/default-article.jpg',
  },
  author: {
    type: String,
    required: true,
    default: 'Hayrat Indonesia',
  },
  category: {
    type: String,
    enum: ['Berita', 'Program', 'Kegiatan', 'Opini'],
    default: 'Berita',
  },
  tags: [{
    type: String,
    trim: true,
  }],
  published: {
    type: Boolean,
    default: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Article = mongoose.models.Article || mongoose.model('Article', ArticleSchema);

const sampleArticles = [
  {
    title: 'Program Beasiswa Pendidikan 2026',
    slug: 'program-beasiswa-pendidikan-2026',
    excerpt: 'Hayrat Indonesia membuka program beasiswa pendidikan untuk 100 anak kurang mampu di seluruh Indonesia.',
    content: '<h2>Program Beasiswa Pendidikan 2026</h2><p>Hayrat Indonesia dengan bangga mengumumkan program beasiswa pendidikan untuk tahun 2026. Program ini bertujuan untuk membantu 100 anak kurang mampu di seluruh Indonesia untuk mendapatkan pendidikan yang layak.</p><p>Program beasiswa ini mencakup biaya pendidikan penuh, buku, seragam, dan biaya operasional lainnya. Kami berkomitmen untuk memastikan bahwa tidak ada anak yang kehilangan kesempatan pendidikan karena keterbatasan ekonomi.</p>',
    coverImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
    author: 'Hayrat Indonesia',
    category: 'Program',
    tags: ['pendidikan', 'beasiswa', 'anak'],
    published: true,
  },
  {
    title: 'Bantuan Kemanusiaan untuk Korban Bencana',
    slug: 'bantuan-kemanusiaan-korban-bencana',
    excerpt: 'Tim relawan Hayrat Indonesia memberikan bantuan darurat kepada korban bencana alam di berbagai daerah.',
    content: '<h2>Respons Cepat Bantuan Bencana</h2><p>Tim tanggap darurat Hayrat Indonesia telah berada di lokasi bencana untuk memberikan bantuan kepada para korban. Bantuan yang diberikan meliputi makanan siap saji, air bersih, obat-obatan, dan perlengkapan darurat lainnya.</p><p>Kami juga menyediakan tenda darurat dan selimut untuk para pengungsi. Tim medis kami memberikan pelayanan kesehatan gratis di posko-posko pengungsian.</p>',
    coverImage: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800',
    author: 'Tim Relawan',
    category: 'Kegiatan',
    tags: ['bencana', 'bantuan', 'kemanusiaan'],
    published: true,
  },
  {
    title: 'Pelatihan Kewirausahaan untuk UMKM',
    slug: 'pelatihan-kewirausahaan-umkm',
    excerpt: 'Hayrat Indonesia menyelenggarakan pelatihan kewirausahaan dan pemberian modal usaha untuk pelaku UMKM.',
    content: '<h2>Pemberdayaan Ekonomi Masyarakat</h2><p>Program pemberdayaan ekonomi Hayrat Indonesia fokus pada pelatihan kewirausahaan dan bantuan modal usaha untuk pelaku UMKM. Kami percaya bahwa pemberdayaan ekonomi adalah kunci untuk meningkatkan kesejahteraan masyarakat.</p><p>Pelatihan mencakup manajemen usaha, pemasaran digital, dan pengelolaan keuangan. Peserta yang lulus pelatihan akan mendapatkan bantuan modal usaha untuk mengembangkan bisnis mereka.</p>',
    coverImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    author: 'Hayrat Indonesia',
    category: 'Program',
    tags: ['umkm', 'ekonomi', 'pelatihan'],
    published: true,
  },
];

async function seedArticles() {
  try {
    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully!');

    // Clear existing articles (optional)
    // await Article.deleteMany({});
    // console.log('Cleared existing articles');

    // Insert sample articles
    for (const articleData of sampleArticles) {
      const existingArticle = await Article.findOne({ slug: articleData.slug });
      if (existingArticle) {
        console.log(`Article "${articleData.title}" already exists, skipping...`);
        continue;
      }

      await Article.create(articleData);
      console.log(`✅ Created article: ${articleData.title}`);
    }

    console.log('\n✅ Sample articles created successfully!\n');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding articles:', error);
    process.exit(1);
  }
}

seedArticles();
