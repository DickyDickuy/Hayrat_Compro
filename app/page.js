import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArticleCard from '@/components/ArticleCard';
import { FaHeart, FaHandHoldingHeart, FaUsers, FaGraduationCap } from 'react-icons/fa';

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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pattern-overlay">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=1920"
            alt="Hero Background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white pt-20">
          <h1 className="heading-primary text-white mb-6 animate-fade-in">
            Dakwah & Kemanusiaan <br />
            <span className="text-gold-400">Rahmatan Lil 'Alamin</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            Bersama menyebarkan nilai-nilai Islam dan membangun masa depan yang lebih baik 
            melalui program-program dakwah dan kemanusiaan yang berkelanjutan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/dukung-kami" className="btn-primary inline-flex items-center justify-center space-x-2">
              <FaHeart />
              <span>Dukung Kami</span>
            </Link>
            <Link href="/tentang" className="btn-secondary bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30 inline-flex items-center justify-center">
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white rounded-full"></div>
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
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-700 to-primary-900 rounded-full mb-4">
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

      {/* About Preview Section */}
      <section className="section-padding bg-gray-50 pattern-overlay">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800"
                alt="About Hayrat"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="heading-secondary mb-6">
                Tentang <span className="text-gradient">Hayrat Indonesia</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Hayrat Indonesia adalah yayasan dakwah dan kemanusiaan yang berkomitmen untuk 
                menyebarkan Islam rahmatan lil 'alamin. Dengan berbagai program di bidang dakwah, 
                pendidikan Islam, kesehatan, dan pemberdayaan ekonomi umat, kami berupaya 
                menciptakan dampak positif yang berkelanjutan.
              </p>
              <Link href="/tentang" className="btn-primary inline-block">
                Selengkapnya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">
              Program <span className="text-gradient">Kami</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Berbagai program yang kami jalankan untuk memberikan manfaat kepada masyarakat
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Pendidikan',
                description: 'Beasiswa dan bantuan pendidikan untuk anak-anak kurang mampu',
                image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600',
              },
              {
                title: 'Kesehatan',
                description: 'Program kesehatan dan bantuan medis untuk masyarakat',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600',
              },
              {
                title: 'Pemberdayaan Ekonomi',
                description: 'Pelatihan dan bantuan modal usaha untuk UMKM',
                image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600',
              },
            ].map((program, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-serif font-bold mb-2 group-hover:text-primary-700 transition-colors">
                  {program.title}
                </h3>
                <p className="text-gray-600">{program.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/program" className="btn-primary inline-block">
              Lihat Semua Program
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

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Mari Berdakwah dan Berbagi Bersama
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Kontribusi Anda sangat berarti untuk mewujudkan program-program dakwah dan kemanusiaan kami
          </p>
          <Link href="/dukung-kami" className="btn-primary bg-white text-primary-900 hover:bg-gray-100 inline-flex items-center space-x-2">
            <FaHeart />
            <span>Dukung Kami</span>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
