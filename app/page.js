import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroCarousel from '@/components/HeroCarousel';
import ActivityGallery from '@/components/ActivityGallery';
import { FaHeart, FaHandHoldingHeart, FaUsers, FaGraduationCap, FaMicrophone, FaBookOpen, FaVideo, FaCalendarAlt, FaUser } from 'react-icons/fa';

async function getLatestArticles() {
  try {
    // Tentukan URL: Prioritaskan NEXT_PUBLIC_API_URL, lalu VERCEL_URL, lalu fallback ke localhost
    const baseUrl = process.env.NEXT_PUBLIC_API_URL
      ? process.env.NEXT_PUBLIC_API_URL
      : process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : 'http://localhost:3000';

    const res = await fetch(`${baseUrl}/api/articles?limit=3&published=true`, {
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

function resolveImage(src) {
  const fallback = 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800';
  if (!src) return fallback;

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
    return fallback;
  } catch {
    return fallback;
  }
}

export default async function HomePage() {
  const { articles } = await getLatestArticles();

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
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
              Dampak Kami
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Kontribusi nyata Hayrat Indonesia dalam dakwah, pendidikan, dan kemanusiaan.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white border border-gray-100 rounded-lg p-8 text-center hover:shadow-md transition-all duration-300 relative overflow-hidden">
                  {/* Gold top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500"></div>

                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-800 rounded-full mb-5">
                    <Icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-primary-700 font-semibold mb-3">{stat.label}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mitra Kami Section */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary-800">
              Mitra Kami di Indonesia
            </h2>
          </div>

          <div className="relative w-full max-w-5xl mx-auto mt-8 opacity-90 hover:opacity-100 transition-opacity duration-500">
            <Image
              src="/images/mitra kami di indonesia.png"
              alt="Mitra Kami di Indonesia"
              width={1200}
              height={800}
              className="object-contain w-full h-auto"
            />
          </div>

        </div>
      </section>

      {/* Activity Gallery Section */}
      <ActivityGallery />

      {/* Latest News Section */}
      {articles.length > 0 && (
        <section className="section-padding bg-cream-50">
          <div className="container-custom">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-4">
                Berita Terbaru
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Tetap terupdate dengan kegiatan, acara, dan dampak terbaru kami.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {articles.map((article) => (
                <div key={article._id} className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={resolveImage(article.coverImage)}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-primary-700 text-white px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wide">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1.5">
                        <FaCalendarAlt className="text-gold-600 text-xs" />
                        <span>{new Date(article.createdAt).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <FaUser className="text-gold-600 text-xs" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-primary-800 mb-3 group-hover:text-gold-600 transition-colors duration-300 leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <Link
                      href={`/artikel/${article.slug}`}
                      className="inline-flex items-center text-primary-700 font-semibold text-sm hover:text-gold-600 transition-colors duration-300"
                    >
                      Baca Selengkapnya
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-14">
              <Link href="/artikel" className="inline-flex items-center space-x-2 bg-white text-primary-700 border-2 border-primary-700 hover:bg-primary-700 hover:text-white px-8 py-3 rounded-md font-semibold transition-all duration-300">
                <span>Lihat Semua Berita</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Fokus Dakwah Section */}
      <section className="section-padding bg-primary-800 text-white relative overflow-hidden">
        {/* Decorative Arabic calligraphy background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] opacity-[0.06]">
          <Image
            src="/images/Caligraphy.png"
            alt="Islamic Calligraphy"
            fill
            className="object-contain object-right"
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Fokus Dakwah
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Hayrat Indonesia berkomitmen untuk menyebarkan pemahaman Islam yang HAYRAT YARDIM melalui berbagai inisiatif dakwah digital dan offline yang inkusif dan mencerdaskan.
            </p>
          </div>

          {/* Three Features */}
          <div className="grid md:grid-cols-3 gap-10 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaMicrophone className="text-gold-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Ceramah & Kajian Online</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Menyediakan akses ilmu melalui ceramah dan kajian Islam secara daring.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaBookOpen className="text-gold-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Penyebaran Al-Qur&apos;an</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Mencetak dan mendistribusikan Al-Qur&apos;an ke berbagai wilayah.</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 border-2 border-gold-500 rounded-full flex items-center justify-center mx-auto mb-5">
                <FaVideo className="text-gold-400 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Konten Digital Islami</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Menghadirkan konten digital berkualitas untuk dakwah di era modern.</p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-primary-700/50 border border-primary-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-2 text-center">Daftar Newsletter</h3>
              <p className="text-gray-400 text-sm text-center mb-6">Dapatkan kabar terbaru langsung di inbox Anda.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Alamat email Anda"
                  className="flex-1 px-5 py-3 rounded-md bg-white text-gray-900 focus:ring-2 focus:ring-gold-400 focus:outline-none text-sm"
                />
                <button
                  type="submit"
                  className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 rounded-md font-semibold transition-all duration-300"
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
