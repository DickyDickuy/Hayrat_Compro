import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';

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
      `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/articles?${queryParams}`,
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-4">
            Artikel & <span className="text-gold-500">Berita</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Informasi terbaru tentang kegiatan dan program Hayrat Indonesia
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <a
                key={category}
                href={`/artikel${category !== 'Semua' ? `?category=${category}` : ''}`}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  (category === 'Semua' && !searchParams.category) ||
                  searchParams.category === category
                    ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gold-50 hover:text-gold-700'
                }`}
              >
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-gray-50 border-t-4 border-gold-300">
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
                <div className="flex justify-center gap-2 mt-12">
                  {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) => (
                    <a
                      key={page}
                      href={`/artikel?page=${page}${searchParams.category ? `&category=${searchParams.category}` : ''}`}
                      className={`px-4 py-2 rounded-lg font-medium transition-all ${
                        page === pagination.page
                          ? 'bg-primary-700 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">Belum ada artikel tersedia.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
