import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaGraduationCap, FaHeartbeat, FaBriefcase, FaHandHoldingHeart, FaMosque } from 'react-icons/fa';

export default function ProgramPage() {
  const programs = [
    {
      icon: FaMosque,
      title: 'Dakwah Islam',
      description: 'Program dakwah dan pendidikan Islam untuk menyebarkan nilai-nilai Islam rahmatan lil \'alamin',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800',
      features: [
        'Kajian rutin dan pengajian',
        'Pelatihan da\'i dan ustadz',
        'Distribusi Al-Qur\'an dan buku Islam',
        'Program tahfidz dan diniyah',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaGraduationCap,
      title: 'Pendidikan',
      description: 'Program beasiswa dan bantuan pendidikan untuk anak-anak kurang mampu di seluruh Indonesia',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      features: [
        'Beasiswa pendidikan penuh',
        'Bantuan buku dan alat tulis',
        'Program bimbingan belajar',
        'Fasilitas perpustakaan',
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: FaHeartbeat,
      title: 'Kesehatan',
      description: 'Layanan kesehatan gratis dan bantuan medis untuk masyarakat yang membutuhkan',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      features: [
        'Klinik kesehatan gratis',
        'Bantuan obat-obatan',
        'Program sunatan massal',
        'Pemeriksaan kesehatan berkala',
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaBriefcase,
      title: 'Pemberdayaan Ekonomi',
      description: 'Pelatihan keterampilan dan bantuan modal usaha untuk UMKM dan masyarakat',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      features: [
        'Pelatihan kewirausahaan',
        'Bantuan modal usaha',
        'Pendampingan bisnis',
        'Workshop dan seminar',
      ],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Bantuan Bencana',
      description: 'Respon cepat dan bantuan darurat untuk korban bencana alam dan kemanusiaan',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800',
      features: [
        'Tim tanggap darurat',
        'Bantuan makanan dan air',
        'Tenda dan tempat tinggal darurat',
        'Layanan medis darurat',
      ],
      color: 'from-red-500 to-red-600',
    },
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="heading-primary mb-4">
            Program <span className="text-gold-500">Kami</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Berbagai program yang dirancang untuk memberikan dampak positif 
            bagi masyarakat yang membutuhkan
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-white border-t-4 border-gold-300">
        <div className="container-custom">
          <div className="space-y-24">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-96 rounded-2xl overflow-hidden ${!isEven ? 'md:col-start-2' : ''}`}>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={!isEven ? 'md:col-start-1 md:row-start-1' : ''}>
                    <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-full flex items-center justify-center mb-6`}>
                      <Icon className="text-white text-2xl" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                      {program.title}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {program.description}
                    </p>
                    
                    <div className="space-y-3 mb-8">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-gold-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="/kontak"
                      className="inline-block bg-gradient-to-r from-primary-700 to-primary-800 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Dukung Program Ini
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Bergabunglah Dalam Dakwah
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-200">
            Kontribusi Anda sangat berarti untuk mewujudkan program-program ini
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/dukung-kami" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
              Dukung Kami
            </a>
            <a href="/kontak" className="btn-secondary bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white/30">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
