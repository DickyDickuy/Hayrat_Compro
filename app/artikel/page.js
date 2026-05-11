import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';

function getApiBaseUrl() {
  if (process.env.NEXT_PUBLIC_API_URL) {
    return process.env.NEXT_PUBLIC_API_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return 'http://localhost:3000';
}

async function getArticles(searchParams) {
  try {
    const page = searchParams.page || '1';
    const category = searchParams.category || '';

    const queryParams = new URLSearchParams({
      page,
      limit: '9',
      published: 'true',
      ...(category && { category }),
    });

    const res = await fetch(
      `${getApiBaseUrl()}/api/articles?${queryParams}`,
      { cache: 'no-store' }
    );

    if (!res.ok) return { articles: [], pagination: {} };
    return await res.json();
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { articles: [], pagination: {} };
  }
}

export default async function ArtikelPage({ searchParams }) {
  const { articles, pagination } = await getArticles(searchParams);
  const categories = ['Semua', 'Berita', 'Program', 'Kegiatan', 'Opini'];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary-900 border-b-4 border-gold-500 relative">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Artikel & <span className="text-gold-500">Berita</span>
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Informasi terbaru, opini, dan laporan mendalam tentang kegiatan kemanusiaan dan dakwah Hayrat Indonesia.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <a
                key={category}
                href={`/artikel${category !== 'Semua' ? `?category=${category}` : ''}`}
                className={`px-6 py-2.5 font-bold uppercase tracking-wide text-xs transition-colors border ${
                  (category === 'Semua' && !searchParams.category) ||
                  searchParams.category === category
                    ? 'bg-primary-900 border-primary-900 text-white'
                    : 'bg-white border-gray-300 text-gray-600 hover:border-primary-900 hover:text-primary-900'
                }`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          {articles.length > 0 ? (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article._id} article={article} />
                ))}
              </div>

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="flex justify-center gap-2 mt-16 border-t border-gray-200 pt-8">
                  {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
                    <a
                      key={page}
                      href={`/artikel?page=${page}${searchParams.category ? `&category=${searchParams.category}` : ''}`}
                      className={`w-12 h-12 flex items-center justify-center font-bold transition-colors border ${
                        page === pagination.page
                          ? 'bg-primary-900 border-primary-900 text-white'
                          : 'bg-white border-gray-300 text-gray-600 hover:border-primary-900 hover:text-primary-900'
                      }`}
                    >
                      {page}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-white border border-gray-200">
              <p className="text-xl text-gray-500 font-serif">Belum ada artikel tersedia dalam kategori ini.</p>
              <div className="w-16 h-1 bg-gold-500 mx-auto mt-6"></div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
