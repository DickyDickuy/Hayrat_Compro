'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaSearchPlus, FaCalendar } from 'react-icons/fa';

export default function ActivityGallery() {
  const activities = [
    {
      id: 1,
      title: 'Ayasofya Dakwah Center',
      date: 'February 15, 2026',
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?w=800',
      description: `Pusat yang didedikasikan untuk menyebarkan ilmu dan pertumbuhan spiritual melalui berbagai program pendidikan dan penjangkauan masyarakat.

Ayasofya Dakwah Center menyediakan berbagai program kajian Islam, kelas bahasa Arab, dan studi Al-Quran untuk semua kalangan. Kami berkomitmen untuk menyebarkan pemahaman Islam yang rahmatan lil 'alamin.

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
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 md:mb-10 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-800 mb-2">
                Kegiatan <span className="text-gradient">Kami</span>
              </h2>
              <p className="text-gray-600">Berdedikasi untuk melayani masyarakat melalui pendidikan, dukungan sosial, dan inisiatif kemanusiaan.</p>
            </div>
            <button className="group flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <span>Pelajari Lebih Lanjut</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Grid of Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {activities.map((activity) => (
              <div
                key={activity.id}
                onClick={() => setSelectedItem(activity)}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image */}
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Date Badge - Top Left */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-md z-10 flex items-center space-x-1">
                  <FaCalendar className="text-gold-600 text-xs" />
                  <span className="text-xs font-semibold text-gray-800">
                    {new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>

                {/* Hover Overlay with Call-to-Action */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4">
                  {/* Icon */}
                  <div className="mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shadow-lg">
                      <FaSearchPlus className="text-white text-xl" />
                    </div>
                  </div>
                  
                  {/* Text */}
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <h4 className="text-white font-bold text-sm md:text-base mb-1 line-clamp-2">
                      {activity.title}
                    </h4>
                    <p className="text-gold-400 font-semibold text-xs md:text-sm">
                      Pelajari Lebih Lanjut →
                    </p>
                  </div>
                </div>

                {/* Bottom Gradient (always visible for title) */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-xs font-medium line-clamp-1">
                    {activity.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram-Style Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
          onClick={(e) => {
            // Close modal when clicking backdrop
            if (e.target === e.currentTarget) setSelectedItem(null);
          }}
        >
          {/* Close Button - Top Right */}
          <button
            onClick={() => setSelectedItem(null)}
            className="fixed top-4 right-4 md:top-6 md:right-6 text-white hover:text-gold-400 transition-all duration-300 z-50 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm"
            aria-label="Close modal"
          >
            <FaTimes className="text-2xl" />
          </button>

          {/* Modal Container */}
          <div className="relative max-w-6xl w-full h-[85vh] bg-white rounded-xl overflow-hidden shadow-2xl flex animate-scaleIn">
            {/* Left Side - Image (60%) */}
            <div className="w-full md:w-[60%] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
              <div className="relative w-full h-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Side - Content (40%) */}
            <div className="hidden md:flex md:w-[40%] flex-col bg-white">
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-bold">H</span>
                  </div>
                  <div>
                    <span className="font-bold text-gray-900 block">hayratfoundationina</span>
                    <span className="text-xs text-gray-500">Hayrat Foundation</span>
                  </div>
                </div>
              </div>

              {/* Body - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
                <div className="mb-4">
                  <h3 className="font-bold text-2xl text-primary-800 mb-3 leading-tight">
                    {selectedItem.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                    <FaCalendar className="text-gold-600" />
                    <span>{selectedItem.date}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {selectedItem.description}
                </p>
              </div>

              {/* Footer */}
              <div className="p-5 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>

            {/* Mobile - Full Screen Image with Close */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-br from-gray-900 to-black flex flex-col">
              <div className="flex-1 relative p-4">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="bg-white rounded-t-3xl p-6 max-h-[45vh] overflow-y-auto custom-scrollbar shadow-2xl">
                <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">H</span>
                  </div>
                  <span className="font-semibold text-sm text-gray-900">hayratfoundationina</span>
                </div>
                <h3 className="font-bold text-xl text-primary-800 mb-2 leading-tight">
                  {selectedItem.title}
                </h3>
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-3">
                  <FaCalendar className="text-gold-600" />
                  <span>{selectedItem.date}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line mb-4">
                  {selectedItem.description}
                </p>
                <button className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-3 rounded-full font-semibold shadow-md">
                  Pelajari Lebih Lanjut
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
