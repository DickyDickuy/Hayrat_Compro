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
    title: 'Program Distribusi Makanan Tahunan',
    slug: 'program-distribusi-makanan-tahunan',
    excerpt: 'Hayrat Foundation sukses mendistribusikan paket makanan kepada lebih dari 500 keluarga yang membutuhkan di Jawa Barat, membawa senyum dan keringan bagi masyarakat.',
    content: `<h2>Program Distribusi Makanan Tahunan</h2>
    
<p>Hayrat Foundation dengan penuh syukur telah berhasil mendistribusikan paket makanan kepada lebih dari 500 keluarga yang membutuhkan di wilayah Jawa Barat. Program ini merupakan bagian dari komitmen kami untuk membantu meringankan beban ekonomi masyarakat kurang mampu.</p>

<h3>Detail Program</h3>
<p>Setiap paket makanan berisi beras 10kg, minyak goreng, gula, tepung, dan berbagai kebutuhan pokok lainnya yang telah kami siapkan dengan cermat. Tim relawan kami bekerja keras untuk memastikan distribusi berjalan lancar dan tepat sasaran.</p>

<h3>Dampak Positif</h3>
<p>Antusiasme dan senyum bahagia dari para penerima manfaat menjadi motivasi besar bagi kami untuk terus melanjutkan program-program kemanusiaan. Kami berterima kasih kepada seluruh donatur dan relawan yang telah berkontribusi dalam program ini.</p>

<p>Program distribusi makanan ini akan terus kami laksanakan secara rutin untuk menjangkau lebih banyak keluarga yang membutuhkan bantuan.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
    author: 'Tim Kemanusiaan Hayrat',
    category: 'Bantuan Kemanusiaan',
    tags: ['bantuan', 'makanan', 'kemanusiaan', 'sosial'],
    published: true,
    createdAt: new Date('2026-01-25'),
  },
  {
    title: 'Seminar Pendidikan Internasional',
    slug: 'seminar-pendidikan-internasional',
    excerpt: 'Kami menyelenggarakan seminar transformatif yang berfokus pada metode pendidikan Islam modern, dihadiri oleh pendidik dan siswa dari berbagai institusi.',
    content: `<h2>Seminar Pendidikan Internasional</h2>

<p>Hayrat Indonesia dengan bangga menyelenggarakan Seminar Pendidikan Internasional yang membahas metode pendidikan Islam modern dan kontemporer. Acara ini dihadiri oleh lebih dari 200 pendidik, akademisi, dan mahasiswa dari berbagai institusi pendidikan di Indonesia.</p>

<h3>Tema dan Pembahasan</h3>
<p>Seminar ini mengangkat tema "Transformasi Pendidikan Islam di Era Digital" dengan fokus pada integrasi teknologi dalam pembelajaran, pengembangan kurikulum yang relevan, dan pembentukan karakter Islami di era modern.</p>

<h3>Narasumber Expert</h3>
<p>Seminar menghadirkan narasumber berkompeten dari dalam dan luar negeri yang berbagi pengalaman dan best practices dalam pengelolaan pendidikan Islam. Diskusi interaktif memberikan banyak insight berharga bagi para peserta.</p>

<h3>Komitmen Berkelanjutan</h3>
<p>Kami berkomitmen untuk terus mendukung pengembangan pendidikan Islam yang berkualitas melalui berbagai program dan kegiatan edukatif seperti ini.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
    author: 'Dept Pendidikan',
    category: 'Pendidikan',
    tags: ['pendidikan', 'seminar', 'islam', 'modern'],
    published: true,
    createdAt: new Date('2026-01-18'),
  },
  {
    title: 'Kesuksesan Pameran Kesehatan Masyarakat',
    slug: 'kesuksesan-pameran-kesehatan-masyarakat',
    excerpt: 'Kegiatan pemeriksaan kesehatan kami memberikan konsultasi medis gratis dan pemeriksaan dasar kepada ratusan warga setempat.',
    content: `<h2>Kesuksesan Pameran Kesehatan Masyarakat</h2>

<p>Program pemeriksaan kesehatan gratis yang diselenggarakan oleh Hayrat Indonesia mendapat sambutan luar biasa dari masyarakat. Lebih dari 300 warga telah mendapatkan layanan kesehatan gratis dalam program ini.</p>

<h3>Layanan Kesehatan</h3>
<p>Tim medis profesional kami memberikan berbagai layanan termasuk pemeriksaan kesehatan umum, cek tekanan darah, gula darah, kolesterol, dan konsultasi kesehatan gratis. Setiap peserta juga mendapatkan vitamin dan obat-obatan sesuai kebutuhan.</p>

<h3>Edukasi Kesehatan</h3>
<p>Selain pemeriksaan, kami juga memberikan edukasi tentang pola hidup sehat, pentingnya olahraga teratur, dan pola makan bergizi seimbang. Materi edukasi dikemas dengan menarik dan mudah dipahami.</p>

<h3>Program Berkelanjutan</h3>
<p>Kegiatan kesehatan seperti ini akan terus kami laksanakan secara berkala di berbagai wilayah untuk memastikan akses kesehatan yang lebih baik bagi masyarakat yang membutuhkan.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    author: 'Tim Medis',
    category: 'Kesehatan',
    tags: ['kesehatan', 'medis', 'gratis', 'masyarakat'],
    published: true,
    createdAt: new Date('2026-01-10'),
  },
  // Additional articles for variety
  {
    title: 'Program Beasiswa Pendidikan 2026',
    slug: 'program-beasiswa-pendidikan-2026',
    excerpt: 'Hayrat Indonesia membuka program beasiswa pendidikan untuk 100 anak kurang mampu di seluruh Indonesia.',
    content: `<h2>Program Beasiswa Pendidikan 2026</h2>
    
<p>Hayrat Indonesia dengan bangga mengumumkan program beasiswa pendidikan untuk tahun 2026. Program ini bertujuan untuk membantu 100 anak kurang mampu di seluruh Indonesia untuk mendapatkan pendidikan yang layak.</p>

<p>Program beasiswa ini mencakup biaya pendidikan penuh, buku, seragam, dan biaya operasional lainnya. Kami berkomitmen untuk memastikan bahwa tidak ada anak yang kehilangan kesempatan pendidikan karena keterbatasan ekonomi.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
    author: 'Hayrat Indonesia',
    category: 'Program',
    tags: ['pendidikan', 'beasiswa', 'anak'],
    published: true,
    createdAt: new Date('2026-01-05'),
  },
  {
    title: 'Pelatihan Kewirausahaan untuk UMKM',
    slug: 'pelatihan-kewirausahaan-umkm',
    excerpt: 'Hayrat Indonesia menyelenggarakan pelatihan kewirausahaan dan pemberian modal usaha untuk pelaku UMKM.',
    content: `<h2>Pemberdayaan Ekonomi Masyarakat</h2>
    
<p>Program pemberdayaan ekonomi Hayrat Indonesia fokus pada pelatihan kewirausahaan dan bantuan modal usaha untuk pelaku UMKM. Kami percaya bahwa pemberdayaan ekonomi adalah kunci untuk meningkatkan kesejahteraan masyarakat.</p>

<p>Pelatihan mencakup manajemen usaha, pemasaran digital, dan pengelolaan keuangan. Peserta yang lulus pelatihan akan mendapatkan bantuan modal usaha untuk mengembangkan bisnis mereka.</p>`,
    coverImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
    author: 'Hayrat Indonesia',
    category: 'Program',
    tags: ['umkm', 'ekonomi', 'pelatihan'],
    published: true,
    createdAt: new Date('2025-12-28'),
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
