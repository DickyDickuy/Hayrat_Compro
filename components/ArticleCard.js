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
      <article className="group cursor-pointer flex flex-col bg-white border border-gray-200 hover:border-gray-300 transition-colors duration-300 h-full relative">

        {/* Image Area */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={resolveImage(coverImage)}
            alt={title}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
          />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-primary-900 px-3 py-1 rounded border border-gray-100 shadow-sm">
            <span className="text-xs font-semibold tracking-wide">
              {category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-white">
          <div>
            <div className="flex items-center space-x-2 text-gray-500 font-medium text-sm mb-3">
              <span>{formatDate(createdAt)}</span>
              <span className="text-gray-300">•</span>
              <span>{author}</span>
            </div>
            
            <h3 className="text-xl font-serif font-bold text-primary-900 mb-3 leading-snug">
              {title}
            </h3>
            
            {excerpt && (
              <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {excerpt}
              </p>
            )}
          </div>

          <div className="mt-auto pt-4 border-t border-gray-100 flex items-center text-primary-800 font-medium text-sm transition-colors group-hover:text-primary-600">
            <span className="mr-2">Baca Selengkapnya</span>
            <FaArrowRight className="text-xs opacity-50" />
          </div>
        </div>
      </article>
    </Link>
  );
}
