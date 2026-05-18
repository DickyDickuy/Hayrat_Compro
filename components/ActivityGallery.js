'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';

export default function ActivityGallery() {
  const activities = [
    {
      id: 1,
      title: 'Ayasofya Dakwah Center (ADC)',
      date: 'May 10, 2026',
      image: '/images/Hayrat Indonesia Profile/9589453a-f265-4170-8424-5c8f2bfe9ce8-0000.png',
      description: `Pusat pembinaan spiritual dan keilmuan yang secara rutin menyelenggarakan kajian komprehensif kitab tafsir Risalah Nur karya Bediuzzaman Said Nursi.\n\nKehadiran ADC bertujuan untuk mengokohkan iman, mencerdaskan pemikiran, serta membangun karakter umat melalui pemahaman Islam yang rahmatan lil 'alamin.`,
      link: '/program/adc',
    },
    {
      id: 2,
      title: 'Medrese (Pusat Pendidikan Islam)',
      date: 'May 12, 2026',
      image: '/images/Hayrat Indonesia Profile/9589453a-f265-4170-8424-5c8f2bfe9ce8-0001.png',
      description: `Program asrama pendidikan Islam intensif yang mengintegrasikan pembelajaran bahasa Turki gratis dengan kajian keislaman yang mendalam.\n\nDalam lingkungan yang kondusif, mahasiswa dibina untuk memiliki keseimbangan antara keunggulan akademik dan kedalaman spiritual.`,
      link: '/program/medrese',
    },
    {
      id: 3,
      title: 'Janjiqu (Jago Ngaji Al-Qur\'an)',
      date: 'May 14, 2026',
      image: '/images/Hayrat Indonesia Profile/9589453a-f265-4170-8424-5c8f2bfe9ce8-0002.png',
      description: `Bimbingan baca tulis Al-Qur'an terstruktur (Tahsin & Tahfidz) dari tingkat dasar hingga mahir, dirancang khusus dengan metode pendekatan personal.\n\nSistem 'by Plan' memastikan setiap peserta didik dapat mencapai target hafalan dan perbaikan bacaan dengan optimal.`,
      link: '/program/janjiqu',
    },
    {
      id: 4,
      title: 'Ayasofya Scholarship Program (ASP)',
      date: 'May 15, 2026',
      image: '/images/Hayrat Indonesia Profile/9589453a-f265-4170-8424-5c8f2bfe9ce8-0003.png',
      description: `Program beasiswa unggulan yang didedikasikan bagi mahasiswa berprestasi, berfokus pada pengembangan kapasitas diri, kepemimpinan, serta pembinaan spiritual.\n\nPenerima beasiswa mendapatkan berbagai fasilitas pengembangan, termasuk peluang program lanjutan ke Turki.`,
      link: '/program/asp',
    },
    {
      id: 5,
      title: 'Ayasofya Center Indonesia (ACI)',
      date: 'May 18, 2026',
      image: '/images/Hayrat Indonesia Profile/9589453a-f265-4170-8424-5c8f2bfe9ce8-0004.png',
      description: `Lembaga kemanusiaan resmi di bawah naungan Hayrat Indonesia yang aktif menyalurkan bantuan sosial, qurban, dan program tanggap bencana.\n\nKami terus berupaya menebar manfaat dan kebaikan ke berbagai pelosok negeri demi kesejahteraan umat.`,
      link: '/program/aci',
    },
  ];

  const featured = activities[0];
  const regular = activities.slice(1);

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6 border-b border-gray-200 pb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
              Kegiatan Kami
            </h2>
            <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
              Berdedikasi untuk melayani masyarakat melalui pendidikan, dukungan sosial, dan inisiatif kemanusiaan.
            </p>
          </div>
          <Link href="/aktivitas" className="inline-flex items-center space-x-2 bg-white text-primary-900 border-2 border-primary-900 hover:bg-primary-900 hover:text-white px-6 py-3 font-semibold text-sm transition-all duration-300 rounded-md whitespace-nowrap">
            <span>Lihat Semua</span>
            <FaArrowRight />
          </Link>
        </div>

        {/* Featured Card */}
        <Link
          href={featured.link}
          className="group flex flex-col md:flex-row bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:border-gold-500 transition-all duration-500 rounded-2xl overflow-hidden mb-12"
        >
          {/* Image Area */}
          <div className="relative w-full md:w-1/2 lg:w-7/12 aspect-video md:aspect-auto min-h-[300px] overflow-hidden bg-gray-50 border-b md:border-b-0 md:border-r border-gray-100">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
            />
            <div className="absolute top-6 left-6 bg-primary-900 text-white px-4 py-1.5 rounded shadow-lg">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-400">Program Utama</span>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-1/2 lg:w-5/12 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white relative">
            <div className="flex items-center space-x-2 text-gray-400 mb-4">
              <FaCalendar className="text-gold-500 text-sm" />
              <span className="text-xs font-semibold">
                {new Date(featured.date).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4 group-hover:text-gold-600 transition-colors leading-tight">
              {featured.title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 line-clamp-4">
              {featured.description.split('\n')[0]}
            </p>
            <div className="mt-auto">
              <div className="inline-flex items-center text-primary-900 font-semibold text-sm group-hover:text-gold-600 transition-colors">
                <span className="mr-2">Pelajari Lebih Lanjut</span>
                <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid of Remaining Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {regular.map((activity) => (
            <Link
              key={activity.id}
              href={activity.link}
              className="group flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold-500 transition-all duration-300 h-full rounded-2xl overflow-hidden"
            >
              {/* Image Area */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-50 border-b border-gray-100">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                
                {/* Date Badge */}
                <div className="absolute top-5 right-5 bg-primary-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded flex items-center space-x-2 shadow-lg">
                  <FaCalendar className="text-gold-400 text-xs" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
                    {new Date(activity.date).toLocaleDateString('id-ID', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between bg-white">
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-gold-600 transition-colors line-clamp-2 min-h-[3.5rem] leading-snug">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 text-sm leading-relaxed mb-6 flex-1 min-h-[3rem]">
                    {activity.description.split('\n')[0]}
                  </p>
                </div>
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center text-primary-900 font-semibold text-xs group-hover:text-gold-600 transition-colors">
                    <span className="mr-2">Selengkapnya</span>
                    <span className="transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
