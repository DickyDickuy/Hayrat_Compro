import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters'],
  },
  slug: {
    type: String,
    required: [true, 'Please provide a slug'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  excerpt: {
    type: String,
    maxlength: [300, 'Excerpt cannot be more than 300 characters'],
  },
  coverImage: {
    type: String,
    default: '/images/default-article.jpg',
  },
  author: {
    type: String,
    required: [true, 'Please provide an author name'],
    default: 'Hayrat Indonesia',
  },
  category: {
    type: String,
    enum: ['Berita', 'Program', 'Kegiatan', 'Opini', 'Bantuan Kemanusiaan', 'Pendidikan', 'Kesehatan'],
    default: 'Berita',
  },
  tags: [{
    type: String,
    trim: true,
  }],
  published: {
    type: Boolean,
    default: true,
    index: true, // Index for filtering published articles
  },
  views: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true, // Index for sorting by date
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Indexes for better query performance
ArticleSchema.index({ slug: 1 }); // Already unique, but explicit index
ArticleSchema.index({ category: 1, published: 1, createdAt: -1 }); // Compound index for filtering
ArticleSchema.index({ published: 1, createdAt: -1 }); // Index for latest published articles
ArticleSchema.index({ title: 'text', excerpt: 'text', content: 'text' }); // Text search index

// Update the updatedAt field on save
ArticleSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);
