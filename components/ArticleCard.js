'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ArticleCard({ article }) {
  const {
    title,
    slug,
    excerpt,
    coverImage,
    author,
    category,
    createdAt,
  } = article;

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/artikel/${slug}`}>
      <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-gold-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-200">
          <Image
            src={coverImage || '/images/default-article.jpg'}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Excerpt */}
          {excerpt && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="font-medium">{author}</span>
            <span>{formatDate(createdAt)}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
