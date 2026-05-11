'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

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

  const resolveImage = (src) => {
    if (!src) return '/images/default-article.jpg';

    const allowedHosts = new Set([
      'localhost',
      'images.unsplash.com',
    ]);
    const allowedSuffixes = ['.vercel-storage.com'];

    try {
      const url = new URL(src);
      const isAllowed =
        (url.protocol === 'http:' || url.protocol === 'https:') &&
        (allowedHosts.has(url.hostname) ||
          allowedSuffixes.some((suffix) => url.hostname.endsWith(suffix)));

      if (isAllowed) return src;
      return '/images/default-article.jpg';
    } catch {
      return '/images/default-article.jpg';
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Link href={`/artikel/${slug}`} className="block h-full">
      <article className="group cursor-pointer flex flex-col bg-white border border-gray-200 hover:border-primary-900 transition-all duration-300 h-full relative">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

        {/* Image Area */}
        <div className="relative aspect-[4/3] overflow-hidden bg-primary-900">
          <Image
            src={resolveImage(coverImage)}
            alt={title}
            fill
            className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
          />
          
          {/* Flush Category Badge - Corporate Style */}
          <div className="absolute top-0 left-0 bg-primary-900 text-white px-4 py-2">
            <span className="text-xs font-bold uppercase tracking-widest">
              {category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 flex-1 flex flex-col justify-between bg-white group-hover:bg-gray-50 transition-colors duration-300">
          <div>
            <div className="flex items-center space-x-2 text-gold-500 font-bold uppercase tracking-widest text-xs mb-4">
              <span>{formatDate(createdAt)}</span>
              <span className="text-gray-300">•</span>
              <span className="text-gray-500">{author}</span>
            </div>
            
            <h3 className="text-xl font-serif font-bold text-primary-900 mb-4 group-hover:text-gold-500 transition-colors leading-snug">
              {title}
            </h3>
            
            {excerpt && (
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {excerpt}
              </p>
            )}
          </div>

          <div className="mt-auto flex items-center text-primary-900 font-bold uppercase tracking-wider text-xs group-hover:text-gold-500 transition-colors pt-4 border-t border-gray-100">
            <span className="mr-2">Baca Selengkapnya</span>
            <FaArrowRight className="transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </article>
    </Link>
  );
}
