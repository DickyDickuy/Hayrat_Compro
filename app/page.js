import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { FaHeart, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaMicrophone, FaBookOpen, FaVideo } from 'react-icons/fa';

async function getLatestArticles() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/api/articles?limit=3&published=true`, {
      cache: 'no-store',
    });
    
    if (!res.ok) return { articles: [] };
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    return { articles: [] };
  }
}

export default async function HomePage() {
  const { articles } = await getLatestArticles();

  const impactStats = [
    { icon: FaUsers, value: '10,000+', label: 'Penerima Manfaat' },
    { icon: FaGraduationCap, value: '50+', label: 'Program Pendidikan' },
    { icon: FaHandHoldingHeart, value: '100+', label: 'Mitra Organisasi' },
    { icon: FaHeart, value: 'Rp 5M+', label: 'Dana Tersalurkan' },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen grid md:grid-cols-2">
        {/* Left side - Image */}
        <div className="relative h-full min-h-[400px] md:min-h-screen">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right side - Content */}
        <div className="bg-gradient-to-br from-primary-800 to-primary-900 flex items-center px-8 lg:px-16 py-16">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Dakwah & Kemanusiaan<br />
              <span className="text-gold-400">Rahmatan Lil 'Alamin</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
              Bersama menyebarkan nilai-nilai Islam dan membangun masa depan yang lebih baik melalui program-program dakwah dan kemanusiaan yang berkelanjutan.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/dukung-kami" className="btn-gold inline-flex items-center justify-center space-x-2">
                <FaHeart />
                <span>Dukung Kami</span>
              </Link>
              <Link href="/tentang" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-4 shadow-lg">
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gray-50">\n        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Large card - Pendidikan */}
            <Link href="/program" className="relative h-96 md:row-span-2 rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800"
                alt="Pendidikan"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-serif font-bold mb-3 text-gold-400">PENDIDIKAN</h3>
                <p className="text-gray-200 mb-4 leading-relaxed">Hayrat Indonesia berkomitmen untuk menyediakan untuk menyebarkan Islam rahmatan lil 'alamin melalui pendidikan dan pemberdayaan...</p>
                <div className="flex items-center space-x-2 text-gold-400">
                  <span className="text-sm font-semibold">→</span>
                </div>
              </div>
            </Link>

            {/* Small card - Kesehatan */}
            <Link href="/program" className="relative h-48 md:h-auto rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
                alt="Kesehatan"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-gold-400">KESEHATAN</h3>
                <p className="text-sm text-gray-200 mb-3 leading-relaxed">Hayrat Indonesia berkomitmen untuk menyediakan pemahaman menyebar sokolion bersama disital dan kesehatan.</p>
                <div className="flex items-center space-x-2 text-gold-400">
                  <span className="text-sm font-semibold">→</span>
                </div>
              </div>
            </Link>

            {/* Small card - Pemberdayaan Ekonomi */}
            <Link href="/program" className="relative h-48 md:h-auto rounded-2xl overflow-hidden group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600"
                alt="Pemberdayaan Ekonomi"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2 text-gold-400">PEMBERDAYAAN EKONOMI</h3>
                <p className="text-sm text-gray-200 mb-3 leading-relaxed">Pemberdayaan ekonomi proyek, peninbutan untuk bermelnenan sepempe sken membudayaan ekonomi.</p>
                <div className="flex items-center space-x-2 text-gold-400">
                  <span className="text-sm font-semibold">→</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Articles Section */}
      {articles.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-secondary mb-4">
                Artikel <span className="text-gradient">Terbaru</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Berita dan informasi terkini tentang kegiatan kami
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/artikel" className="btn-primary inline-block">
                Lihat Semua Artikel
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Fokus Dakwah Section */}
      <section className="section-padding bg-gradient-to-br from-primary-800 to-primary-900 text-white relative overflow-hidden">
        {/* Decorative Arabic calligraphy background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] opacity-10">
          <Image
            src="/images/Caligraphy.png"
            alt="Islamic Calligraphy"
            fill
            className="object-contain object-right"
          />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gold-400">
              Fokus Dakwah
            </h2>
            <p className="text-xl max-w-3xl mx-auto text-gray-200 leading-relaxed">
              Hayrat Indonesia berkomitmen untuk menyebarkan pemahaman Islam yang Rahmatan Lil 'Alamin melalui berbagai inisiatif dakwah digital dan offline yang inkusif dan mencerdaskan.
            </p>
          </div>

          {/* Three Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaMicrophone className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ceramah & Kajian Online</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaBookOpen className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Penyebaran Al-Qur'an</h3>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <FaVideo className="text-white text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Konten Digital Islami</h3>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-center">Daftar Newsletter Kami untuk Kabar Terbaru!</h3>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email email address"
                  className="flex-1 px-6 py-3 rounded-full bg-white text-gray-900 focus:ring-2 focus:ring-gold-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary-700 hover:bg-primary-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
                >
                  Daftar
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
