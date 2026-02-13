import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaCalendar, FaUser, FaTag, FaEye } from 'react-icons/fa';

async function getArticle(slug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/articles/${slug}`,
      { cache: 'no-store' }
    );
    
    if (!res.ok) return null;
    const data = await res.json();
    return data.article;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export default async function ArticleDetailPage({ params }) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <>
      <Navbar />
      
      {/* Article Header */}
      <article className="pt-32 pb-16">
        <div className="container-custom max-w-4xl">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-gold-600">Home</Link>
            <span>/</span>
            <Link href="/artikel" className="hover:text-gold-600">Artikel</Link>
            <span>/</span>
            <span className="text-gray-900">{article.title}</span>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white text-sm font-semibold px-4 py-1 rounded-full shadow-lg">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {article.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b">
            <div className="flex items-center space-x-2">
              <FaUser className="text-gold-500" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaCalendar className="text-gold-500" />
              <span>{formatDate(article.createdAt)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEye className="text-gold-500" />
              <span>{article.views} views</span>
            </div>
          </div>

          {/* Cover Image */}
          {article.coverImage && (
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* Content */}
          <div 
            className="article-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mt-8 pt-8 border-t">
              <FaTag className="text-gold-500" />
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gold-50 text-gold-700 border border-gold-200 px-3 py-1 rounded-full text-sm hover:bg-gold-100 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-gray-600 mb-4">Bagikan artikel ini:</p>
            <div className="flex justify-center gap-4">
              {/* Add social share buttons here */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Facebook
              </button>
              <button className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition">
                Twitter
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
