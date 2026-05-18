import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaBookOpen, FaCheck, FaGraduationCap, FaHandHoldingHeart, FaMosque, FaUserGraduate } from 'react-icons/fa';

export default function ProgramPage() {
  const programs = [
    {
      icon: FaMosque,
      title: 'Ayasofya Dakwah Center (ADC)',
      description: 'Pusat dakwah Islam yang menyelenggarakan kajian, pengajian, dan penyebaran nilai-nilai Islam rahmatan lil ‘alamin. Merupakan program unggulan pertama Hayrat Foundation Indonesia.',
      image: 'https://images.unsplash.com/photo-1609599006353-e629aaabfeae?w=800',
      features: [
        'Pusat dakwah Islam',
        'Penyelenggaraan kajian dan pengajian',
        'Penyebaran nilai-nilai Islam rahmatan lil ‘alamin',
        'Program unggulan pertama Hayrat Foundation',
      ]
    },
    {
      icon: FaGraduationCap,
      title: 'Medrese',
      description: 'Program pendidikan berbasis madrasa yang mencakup pembelajaran bahasa Turki gratis, kajian tafsir Risalah Nur karya Bediuzzaman Said Nursi, dan pengembangan keilmuan Islam.',
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800',
      features: [
        'Pembelajaran bahasa Turki gratis',
        'Kajian tafsir Risalah Nur',
        'Pengembangan keilmuan Islam',
        'Program pendidikan berbasis madrasa',
      ]
    },
    {
      icon: FaBookOpen,
      title: 'Janjiqu (Jago Ngaji Al-Qur’an)',
      description: 'Program bimbingan dari dasar hingga lancar membaca sesuai kaidah tajwid, dilengkapi program Tahsin dan Tahfidz by Plan dengan sistem belajar fleksibel.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      features: [
        'Bimbingan membaca Al-Qur’an dari dasar',
        'Program Tahsin untuk perbaikan bacaan',
        'Tahfidz by Plan yang terstruktur',
        'Kelas fleksibel (Privat Online/Offline & Reguler)',
      ]
    },
    {
      icon: FaUserGraduate,
      title: 'Ayasofya Scholarship Program (ASP)',
      description: 'Program beasiswa pengembangan diri mahasiswa yang berfokus pada pengembangan bakat, pembiasaan bahasa Turki, dan kajian tafsir Risalah Nur.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800',
      features: [
        'Beasiswa pengembangan diri mahasiswa',
        'Pengembangan bakat dan integritas',
        'Pembiasaan berbahasa Turki',
        'Peluang program bahasa di Turki',
      ]
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Ayasofya Center Indonesia (ACI)',
      description: 'Lembaga kemanusiaan resmi di bawah Hayrat Foundation Indonesia yang berfokus pada berbagai proyek sosial dan kemanusiaan untuk masyarakat.',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800',
      features: [
        'Ayasofya Al Quran & Ramadan Project',
        'Ayasofya Qurban & Orphan Project',
        'Ayasofya Health & Disaster Project',
        'Ayasofya Water & Sustainable Project (GEROBAK, JEB)',
      ]
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary-900 relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519818175027-2bc9f750b284?w=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Program <span className="text-gold-500">Kami</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Inisiatif strategis Hayrat Foundation Indonesia di bidang dakwah, pendidikan, dan kemanusiaan untuk memberdayakan umat dan menyebarkan nilai-nilai Islam rahmatan lil ‘alamin.
          </p>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="space-y-0">
            {programs.map((program, index) => {
              const Icon = program.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} bg-white border border-gray-200 mb-12`}>
                  {/* Image */}
                  <div className="w-full md:w-1/2 relative h-80 md:h-auto min-h-[400px]">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-16 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-primary-50 rounded-full flex items-center justify-center mb-6">
                      <Icon className="text-primary-700 text-xl" />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4">
                      {program.title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {program.description}
                    </p>
                    
                    <ul className="space-y-4 mb-10">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-4">
                          <FaCheck className="text-gold-500 text-sm flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <a
                        href="/kontak"
                        className="inline-flex bg-primary-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gold-500 transition-colors duration-300"
                      >
                        Dukung Program Ini
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8 Humanitarian Programs ACI */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
              8 Program Utama Kemanusiaan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Melalui Ayasofya Center Indonesia (ACI), kami menjalankan berbagai program kemanusiaan dengan total lebih dari 45.029 Penerima Manfaat.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { title: 'Ramadan Project', desc: 'Bantuan pangan, iftar, dan fidyah selama bulan suci Ramadan.', pm: 'Penerima Manfaat' },
                { title: 'Orphan Project', desc: 'Pendidikan, pembinaan, dan santunan rutin untuk anak yatim.', pm: 'Penerima Manfaat' },
                { title: 'Qurban Project', desc: 'Distribusi daging qurban ke pelosok Nusantara dan luar negeri.', pm: 'Penerima Manfaat' },
                { title: 'Health Project', desc: 'Layanan kesehatan gratis, operasi katarak, dan bantuan medis.', pm: 'Penerima Manfaat' },
                { title: 'Sustainable Project', desc: 'Program pemberdayaan ekonomi seperti Gerobak dan JEB.', pm: 'Penerima Manfaat' },
                { title: 'Al Quran Project', desc: 'Distribusi Al-Quran dan buku Iqra ke masjid dan pelosok.', pm: 'Penerima Manfaat' },
                { title: 'Water Project', desc: 'Pembangunan sumur air bersih di daerah kekeringan ekstrim.', pm: 'Penerima Manfaat' },
                { title: 'Disaster Project', desc: 'Respons tanggap darurat bencana alam dan pemulihan pasca-bencana.', pm: 'Penerima Manfaat' }
              ].map((prog, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="w-12 text-3xl font-serif font-bold text-gold-500 opacity-50 group-hover:opacity-100 transition-opacity mt-1">
                    0{idx + 1}
                  </div>
                  <div className="flex-1 border-b border-gray-200 pb-6 group-hover:border-gold-500 transition-colors">
                    <h3 className="text-2xl font-serif font-bold text-primary-900 mb-2">{prog.title}</h3>
                    <p className="text-gray-600 mb-4 text-lg leading-relaxed">{prog.desc}</p>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {prog.pm}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
            Bergabunglah Dalam Dakwah
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            Kontribusi Anda sangat berarti untuk mewujudkan dan memperluas program-program kemanusiaan ini.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/dukung-kami" className="bg-gold-500 text-white px-10 py-4 rounded-md font-bold hover:bg-gold-600 transition-colors text-lg">
              Donasi Sekarang
            </a>
            <a href="/kontak" className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-primary-900 transition-colors text-lg">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
