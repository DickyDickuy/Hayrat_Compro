'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaCalendar, FaArrowRight } from 'react-icons/fa';

export default function ActivityGallery() {
  const activities = [
    {
      id: 1,
      title: 'Ayasofya Dakwah Center',
      date: 'February 15, 2026',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
      description: `Pusat yang didedikasikan untuk menyebarkan ilmu dan pertumbuhan spiritual melalui berbagai program pendidikan dan penjangkauan masyarakat.

Ayasofya Dakwah Center menyediakan berbagai program kajian Islam, kelas bahasa Arab, dan studi Al-Quran untuk semua kalangan. Kami berkomitmen untuk menyebarkan pemahaman Islam yang HAYRAT YARDIM.

Dengan fasilitas yang lengkap dan tenaga pengajar yang kompeten, pusat dakwah kami telah melayani ribuan peserta dari berbagai latar belakang. Program kami dirancang untuk membangun karakter dan memperkuat iman.

Bergabunglah dengan kami dalam perjalanan untuk mendalami ilmu agama dan membangun masyarakat yang lebih baik melalui pendidikan Islam yang berkualitas.`,
    },
    {
      id: 2,
      title: 'Asrama Mahasiswa',
      date: 'February 15, 2026',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
      description: `Menyediakan lingkungan tinggal yang aman, mendukung, dan kondusif bagi siswa untuk fokus pada studi dan pengembangan pribadi mereka.

Asrama mahasiswa kami dilengkapi dengan fasilitas modern termasuk ruang belajar, perpustakaan, akses internet, dan area rekreasi. Kami menciptakan lingkungan yang mendukung prestasi akademik dan pertumbuhan spiritual.

Dengan pengawasan yang baik dan program mentoring, mahasiswa dapat mengembangkan potensi mereka secara maksimal. Kami juga mengadakan kegiatan pengembangan karakter dan soft skills.

Asrama kami bukan hanya tempat tinggal, tetapi juga komunitas yang saling mendukung dalam mencapai kesuksesan akademik dan membangun masa depan yang cerah.`,
    },
    {
      id: 3,
      title: 'Ayasofya Center Indonesia',
      date: 'February 15, 2026',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: `Kantor pusat kami untuk bantuan kemanusiaan, mengkoordinasikan upaya bantuan dan proyek kesejahteraan sosial di seluruh negeri.

Ayasofya Center Indonesia berfungsi sebagai hub koordinasi untuk semua program kemanusiaan kami. Dari sini, kami mengelola berbagai inisiatif sosial, pendidikan, dan bantuan kemanusiaan.

Dengan tim profesional yang berdedikasi, kami memastikan setiap program berjalan efektif dan memberikan dampak positif bagi masyarakat. Kami juga menjalin kemitraan dengan berbagai organisasi untuk memperluas jangkauan.

Pusat ini merupakan simbol komitmen kami untuk terus melayani masyarakat dan membangun peradaban yang lebih baik melalui berbagai program kesejahteraan sosial dan pendidikan.`,
    },
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      {/* Main Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6 border-b border-gray-200 pb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-4">
                Kegiatan Kami
              </h2>
              <div className="w-16 h-1 bg-gold-500 mb-4"></div>
              <p className="text-gray-600 max-w-2xl text-lg">Berdedikasi untuk melayani masyarakat melalui pendidikan, dukungan sosial, dan inisiatif kemanusiaan.</p>
            </div>
            <button className="inline-flex items-center space-x-3 bg-white text-primary-900 border-2 border-primary-900 hover:bg-primary-900 hover:text-white px-8 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-300 whitespace-nowrap">
              <span>Pelajari Lebih Lanjut</span>
              <FaArrowRight />
            </button>
          </div>

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <div
                key={activity.id}
                onClick={() => setSelectedItem(activity)}
                className="group cursor-pointer flex flex-col bg-white border border-gray-200 hover:border-gold-500 transition-all duration-300 h-full"
              >
                {/* Image Area */}
                <div className="relative aspect-[4/3] overflow-hidden bg-primary-900">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  
                  {/* Date Badge - Solid Corporate Style */}
                  <div className="absolute top-0 right-0 bg-gold-500 text-white px-4 py-2 flex items-center space-x-2">
                    <FaCalendar className="text-white text-xs" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      {new Date(activity.date).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-900 mb-4 group-hover:text-gold-500 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed mb-6">
                      {activity.description.split('\n')[0]}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center text-primary-900 font-bold uppercase tracking-wider text-xs group-hover:text-gold-500 transition-colors">
                    <span className="mr-2">Selengkapnya</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-900/95 p-4 md:p-10 animate-fadeIn"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedItem(null);
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white hover:text-gold-500 transition-colors z-50 flex items-center space-x-2"
            aria-label="Tutup"
          >
            <span className="font-bold uppercase tracking-widest text-xs hidden md:block">Tutup</span>
            <FaTimes className="text-2xl" />
          </button>

          {/* Modal Container */}
          <div className="relative w-full max-w-6xl max-h-[90vh] bg-white flex flex-col md:flex-row overflow-hidden shadow-2xl animate-scaleIn">
            
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 relative bg-gray-100 min-h-[300px] md:min-h-full">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 border-8 border-white/20 hidden md:block"></div>
            </div>

            {/* Right Side - Content */}
            <div className="w-full md:w-1/2 flex flex-col bg-white h-full max-h-[60vh] md:max-h-[90vh]">
              {/* Header */}
              <div className="p-8 lg:p-12 border-b border-gray-100">
                <div className="flex items-center space-x-2 text-gold-500 font-bold uppercase tracking-widest text-xs mb-4">
                  <FaCalendar />
                  <span>{new Date(selectedItem.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <h3 className="font-serif font-bold text-3xl md:text-4xl text-primary-900 leading-tight">
                  {selectedItem.title}
                </h3>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto p-8 lg:p-12 custom-scrollbar">
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="whitespace-pre-line leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 lg:p-12 border-t border-gray-100 bg-gray-50">
                <button className="w-full bg-primary-900 hover:bg-gold-500 text-white py-4 font-bold uppercase tracking-widest text-sm transition-colors duration-300 flex items-center justify-center space-x-3">
                  <span>Pelajari Lebih Lanjut</span>
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
