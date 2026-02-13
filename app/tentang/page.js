import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaEye, FaBullseye, FaHistory } from 'react-icons/fa';

export default function TentangPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-4">
            Tentang <span className="text-gold-500">Hayrat Indonesia</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Yayasan dakwah dan kemanusiaan yang berkomitmen untuk menyebarkan nilai-nilai Islam 
            dan membantu mereka yang membutuhkan
          </p>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="card border-2 border-gold-200 hover:border-gold-400 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-700 to-primary-900 rounded-full flex items-center justify-center mb-6">
                <FaEye className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Visi Kami
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Menjadi yayasan dakwah dan kemanusiaan terdepan di Indonesia yang menyebarkan 
                nilai-nilai Islam rahmatan lil 'alamin dan memberikan dampak positif berkelanjutan 
                bagi masyarakat melalui program-program yang inovatif dan terukur.
              </p>
            </div>

            {/* Mission */}
            <div className="card border-2 border-gold-200 hover:border-gold-400 transition-colors">
              <div className="w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mb-6">
                <FaBullseye className="text-white text-2xl" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                Misi Kami
              </h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 text-xl">•</span>
                  <span>Menyebarkan dakwah Islam yang rahmatan lil 'alamin</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 text-xl">•</span>
                  <span>Menyediakan akses pendidikan Islam dan umum berkualitas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 text-xl">•</span>
                  <span>Memberikan bantuan kesehatan dan kemanusiaan kepada masyarakat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2 text-xl">•</span>
                  <span>Memberdayakan ekonomi umat melalui pelatihan dan pendampingan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-gray-50 pattern-overlay border-t-4 border-gold-400">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-primary-700 to-primary-900 rounded-full flex items-center justify-center mb-6">
                <FaHistory className="text-white text-2xl" />
              </div>
              <h2 className="heading-secondary mb-6">
                Sejarah <span className="text-gold-500">Hayrat Indonesia</span>
              </h2>
              <div className="space-y-4 text-gray-700">
                <p className="leading-relaxed">
                  Hayrat Indonesia didirikan pada tahun 2015 dengan semangat untuk 
                  menyebarkan dakwah Islam dan berbagi kebaikan kepada sesama. Berawal dari 
                  sekelompok da'i dan relawan yang peduli terhadap kondisi umat, kami berkembang 
                  menjadi organisasi dakwah dan kemanusiaan yang dipercaya.
                </p>
                <p className="leading-relaxed">
                  Selama perjalanan kami, Hayrat Indonesia telah membantu lebih dari 
                  10,000 penerima manfaat melalui berbagai program di bidang dakwah, pendidikan Islam, 
                  kesehatan, dan pemberdayaan ekonomi umat. Kami bangga menjadi bagian dari 
                  penyebaran nilai-nilai Islam yang rahmatan lil 'alamin.
                </p>
                <p className="leading-relaxed">
                  Dengan dukungan dari para mitra, relawan, dan simpatisan yang luar biasa, 
                  kami terus berkomitmen untuk memperluas jangkauan dakwah dan meningkatkan 
                  kualitas layanan kepada umat yang membutuhkan.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800"
                alt="History"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white border-t-4 border-gold-300">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-secondary mb-4">
              Nilai-Nilai <span className="text-gold-500">Kami</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Prinsip yang menjadi fondasi dalam setiap program dan kegiatan kami
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Amanah', description: 'Menjaga kepercayaan dengan penuh tanggung jawab' },
              { title: 'Ikhlas', description: 'Beramal dengan tulus karena Allah SWT' },
              { title: 'Profesional', description: 'Bekerja dengan standar terbaik' },
              { title: 'Istiqomah', description: 'Konsisten dalam kebaikan' },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <span className="text-3xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
