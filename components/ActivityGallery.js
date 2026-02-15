'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaSearchPlus, FaCalendar } from 'react-icons/fa';

export default function ActivityGallery() {
  const activities = [
    {
      id: 1,
      title: 'Pembagian Sembako Ramadan 2026',
      date: 'March 15, 2026',
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800',
      description: `Program pembagian sembako untuk warga kurang mampu di bulan Ramadan 2026. Kegiatan ini melibatkan lebih dari 500 keluarga penerima manfaat di wilayah Jakarta dan sekitarnya.

Alhamdulillah, dengan dukungan para donatur dan relawan, kami berhasil menyalurkan paket sembako yang berisi beras, minyak goreng, gula, dan kebutuhan pokok lainnya.

Kegiatan ini merupakan bagian dari komitmen kami untuk membantu sesama, terutama di bulan yang penuh berkah ini. Semoga bantuan ini dapat meringankan beban ekonomi keluarga penerima manfaat.

Terima kasih kepada semua pihak yang telah berkontribusi dalam program ini. Mari terus bersama menyebarkan kebaikan!`,
    },
    {
      id: 2,
      title: 'Kajian Bulanan - Tafsir Al-Quran',
      date: 'February 20, 2026',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
      description: `Kajian rutin bulanan dengan tema Tafsir Al-Quran yang dihadiri oleh ratusan jamaah dari berbagai wilayah. Ustadz Dr. Ahmad Hidayat memberikan pemaparan mendalam tentang makna ayat-ayat suci.

Kegiatan ini diadakan di Masjid Agung dengan fasilitas yang nyaman dan dilengkapi dengan sistem audio yang memadai. Peserta sangat antusias dalam mengikuti kajian dan aktif bertanya.

Kajian seperti ini rutin kami adakan setiap bulan untuk meningkatkan pemahaman umat tentang Islam yang rahmatan lil 'alamin. Kami juga menyediakan materi kajian dalam bentuk video dan transkrip.

Untuk informasi kajian bulanan berikutnya, silakan follow media sosial kami atau hubungi kontak yang tersedia.`,
    },
    {
      id: 3,
      title: 'Bakti Sosial Kesehatan Gratis',
      date: 'January 10, 2026',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
      description: `Program pelayanan kesehatan gratis untuk masyarakat kurang mampu. Kegiatan ini meliputi pemeriksaan kesehatan umum, cek tekanan darah, gula darah, dan pembagian obat gratis.

Tim medis yang terlibat terdiri dari 15 dokter umum dan 20 perawat profesional dari berbagai rumah sakit mitra. Lebih dari 800 pasien telah dilayani dalam program ini.

Selain pemeriksaan kesehatan, kami juga memberikan edukasi tentang pola hidup sehat, pentingnya olahraga, dan gizi seimbang. Kegiatan ini mendapat sambutan positif dari masyarakat.

Program bakti sosial kesehatan akan terus kami laksanakan secara berkala di berbagai wilayah untuk menjangkau lebih banyak masyarakat yang membutuhkan.`,
    },
    {
      id: 4,
      title: 'Pelatihan Keterampilan untuk Pemuda',
      date: 'December 5, 2025',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
      description: `Pelatihan keterampilan digital marketing dan desain grafis untuk pemuda usia 18-25 tahun. Program ini bertujuan untuk meningkatkan daya saing pemuda di era digital.

Pelatihan berlangsung selama 3 minggu dengan materi yang komprehensif, mulai dari dasar hingga tingkat mahir. Peserta juga mendapatkan sertifikat resmi setelah menyelesaikan program.

Instruktur yang mengajar adalah praktisi profesional dengan pengalaman lebih dari 10 tahun di bidangnya. Metode pembelajaran yang interaktif membuat peserta cepat memahami materi.

Sebanyak 50 peserta telah lulus dari program ini dan beberapa di antaranya sudah mendapatkan pekerjaan atau memulai usaha sendiri. Ini adalah bukti nyata dari dampak positif program pemberdayaan kami.`,
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
                Current & Past <span className="text-gradient">Activity</span>
              </h2>
              <p className="text-gray-600">Kegiatan dan program yang telah kami laksanakan</p>
            </div>
            <button className="group flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <span>Show More Activities</span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          </div>

          {/* Grid of Thumbnails */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
                      Click to View Details →
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
                  Learn More About This Activity
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
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
