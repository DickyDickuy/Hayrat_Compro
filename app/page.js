import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import ActivityGallery from '@/components/ActivityGallery';
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

  // Category badge colors
  const getCategoryColor = (category) => {
    const colors = {
      'Bantuan Kemanusiaan': 'bg-blue-600',
      'Pendidikan': 'bg-blue-600',
      'Kesehatan': 'bg-blue-600',
      'Program': 'bg-green-600',
      'Kegiatan': 'bg-purple-600',
      'Berita': 'bg-blue-600',
      'Opini': 'bg-orange-600',
    };
    return colors[category] || 'bg-blue-600';
  };

  const impactStats = [
    { 
      icon: FaUsers, 
      value: '10,000+', 
      label: 'Penerima Manfaat',
      description: 'Telah membantu ribuan individu dan keluarga melalui berbagai program pemberdayaan dan bantuan.'
    },
    { 
      icon: FaGraduationCap, 
      value: '50+', 
      label: 'Program Pendidikan',
      description: 'Program pendidikan Islam dan umum yang tersebar di berbagai wilayah untuk mencerdaskan umat.'
    },
    { 
      icon: FaHandHoldingHeart, 
      value: '100+', 
      label: 'Mitra Organisasi',
      description: 'Berkolaborasi dengan berbagai organisasi untuk memperluas jangkauan dan dampak positif.'
    },
    { 
      icon: FaHeart, 
      value: 'Rp 5M+', 
      label: 'Dana Tersalurkan',
      description: 'Dana yang telah disalurkan untuk berbagai program dakwah dan kemanusiaan secara transparan.'
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section with Carousel */}
      <HeroCarousel />

      {/* Impact Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="group relative text-center p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:bg-gray-50">
                  {/* Main Stat Content */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                      {stat.value}
                    </h3>
                    <p className="text-gray-600 font-medium">{stat.label}</p>
                  </div>
                  
                  {/* Hidden Description Card - Appears on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto z-20">
                    <div className="bg-white rounded-xl shadow-2xl p-6 border-2 border-gold-400 max-w-xs">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full mb-3">
                        <Icon className="text-white text-xl" />
                      </div>
                      <h4 className="text-xl font-bold text-primary-800 mb-2">{stat.label}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
                      <div className="mt-3 text-2xl font-bold text-gold-600">{stat.value}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activity Gallery Section */}
      <ActivityGallery />

      {/* Latest News Section */}
      {articles.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
                Berita <span className="text-gradient">Terbaru</span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Tetap terupdate dengan kegiatan, acara, dan dampak terbaru kami.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div key={article._id} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={article.coverImage || 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800'}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute top-4 left-4 ${getCategoryColor(article.category)} text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide`}>
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <span>📅</span>
                        <span>{new Date(article.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>👤</span>
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-primary-800 mb-3 group-hover:text-gold-600 transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Link 
                      href={`/artikel/${article.slug}`}
                      className="inline-flex items-center text-primary-700 font-semibold hover:text-gold-600 transition-colors duration-300"
                    >
                      Baca Selengkapnya
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/artikel" className="group inline-flex items-center space-x-2 bg-white hover:bg-gray-50 text-primary-700 border-2 border-primary-700 hover:border-gold-600 hover:text-gold-600 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                <span>Lihat Semua Berita</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
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
              Hayrat Indonesia berkomitmen untuk menyebarkan pemahaman Islam yang HAYRAT YARDIM melalui berbagai inisiatif dakwah digital dan offline yang inkusif dan mencerdaskan.
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
