import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { FaEye, FaBullseye, FaHistory, FaCheckCircle } from 'react-icons/fa';

export default function TentangPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary-900 pattern-overlay relative overflow-hidden">
        {/* Decorative Arabic calligraphy background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[600px] opacity-10">
          <Image
            src="/images/Caligraphy.png"
            alt="Islamic Calligraphy"
            fill
            className="object-contain object-right"
          />
        </div>
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Tentang <span className="text-gold-500">Hayrat Indonesia</span>
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Yayasan dakwah dan kemanusiaan yang berkomitmen untuk menyebarkan nilai-nilai Islam 
            HAYRAT YARDIM dan membantu mereka yang membutuhkan.
          </p>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-padding bg-cream-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
              Visi &amp; Misi Kami
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Vision / Goals */}
            <div className="bg-white border-t-4 border-gold-500 p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-primary-900 flex items-center justify-center mb-8">
                <FaEye className="text-gold-500 text-3xl" />
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p className="text-xl font-semibold text-primary-900">
                  <strong>Visi Utama</strong>
                </p>
                <p>
                  Visi utama Hayrat Foundation di seluruh dunia adalah Khidmat Iman dan Quran. Di Indonesia, secara spesifik kami mengemban visi untuk hadir dan menemani masyarakat dalam upaya pengentasan masalah kemanusiaan melalui peningkatan kualitas kesejahteraan berlandaskan pilar Zakat, Infak, Sedekah, dan Wakaf (ZISWAF).
                </p>

                <div className="pt-2">
                  <p className="text-xl font-semibold text-primary-900 mb-4">
                    <strong>Tujuan Kami</strong>
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                      <span>Menguatkan Iman Tahqiqi.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                      <span>Menyebarkan sunnah dan syariah.</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                      <span>Mewujudkan persatuan umat Islam.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white border-t-4 border-primary-900 p-10 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gold-500 flex items-center justify-center mb-8">
                <FaBullseye className="text-white text-3xl" />
              </div>
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p className="text-xl font-semibold text-primary-900">
                  <strong>Misi Kami</strong>
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                    <span>
                      <strong>Pendidikan &amp; Infrastruktur:</strong> Membangun sekolah, asrama, perpustakaan, dan lembaga pendidikan swasta yang membentuk individu berwawasan luas, berakhlak mulia, dan berjiwa patriotik.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                    <span>
                      <strong>Pengembangan SDM:</strong> Memberikan beasiswa bagi siswa untuk menempuh pendidikan spesialisasi sains di luar negeri.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                    <span>
                      <strong>Penerbitan:</strong> Mencetak, menerbitkan, dan mendistribusikan Al-Qur'an bersanad (Tevâfuk) serta buku-buku ilmu pengetahuan, sejarah, dan agama.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                    <span>
                      <strong>Manajemen Aset:</strong> Mengelola aset bergerak dan tidak bergerak secara optimal sesuai amanah umat.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                    <span>
                      <strong>Sosial Kemanusiaan:</strong> Menyalurkan bantuan tepat sasaran kepada kaum miskin, para janda, dan anak yatim.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section-padding bg-white border-y border-gray-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-primary-900 flex items-center justify-center mb-6">
                <FaHistory className="text-gold-500 text-2xl" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">
                Sejarah <span className="text-gold-500">Kami</span>
              </h2>
              <div className="w-16 h-1 bg-gold-500 mb-8"></div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p className="text-primary-900 font-semibold">
                  <strong>Jejak Langkah Hayrat Foundation Global dan Indonesia</strong>
                </p>
                <p>
                  Hayrat Foundation didirikan pada tahun 1974 di Isparta, Turki, oleh Ahmet Hüsrev Altınbaşak, murid terbaik ulama besar Badiuzzaman Said Nursi. Berpusat di Istanbul dan Küçükçekmece, yayasan ini berkembang pesat mengelola lebih dari 1000 cabang di Turki dan berekspansi ke lebih dari 40 negara, dengan cabang resmi di 33 negara.
                </p>
                <p>
                  Di Indonesia, perjalanan dakwah Hayrat Foundation dimulai sejak tahun 2011. Khidmat kami terus bertumbuh dari program sosial kemanusiaan hingga pendidikan. Seiring dengan tingginya kebutuhan umat, kami meresmikan Madrasah Tahfiz di Bekasi (2016) dan menginisiasi berdirinya Nursi Research Center di UIN Jakarta pada tahun 2018.
                </p>
                <p>
                  Guna memfokuskan pilar aktivitas kami di Indonesia, pada tanggal 21 Juni 2021, kami secara resmi mendirikan Yayasan Ayasofya Center Indonesia (ACI) di bawah payung hukum Kementerian Hukum dan HAM Republik Indonesia sebagai motor penggerak di bidang sosial kemanusiaan (ZISWAF). Langkah ini disusul dengan peresmian Ayasofya Dakwah Center di UIN Syarif Hidayatullah Jakarta pada 16 Maret 2022 sebagai pusat studi Turki dan peradaban Islam.
                </p>
              </div>
            </div>
            <div className="relative h-[600px] bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800"
                alt="History"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border-8 border-white/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Nilai-Nilai <span className="text-gold-500">Kami</span>
            </h2>
            <div className="w-16 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Langkah gerak kami dilandasi oleh semangat Ruhiah, Ilmiah, dan Khidmah, dengan memegang teguh nilai-nilai berikut:
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <div className="border border-primary-800 p-8">
              <div className="flex items-start">
                <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                <p className="leading-relaxed text-lg">
                  <strong>Keikhlasan dan Ketakwaan:</strong> Keikhlasan adalah landasan utama dalam menjaga kesucian setiap langkah dakwah. Kami juga menjunjung tinggi ketakwaan, khususnya dalam menjaga adab terhadap Al-Quran.
                </p>
              </div>
            </div>

            <div className="border border-primary-800 p-8">
              <div className="flex items-start">
                <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                <p className="leading-relaxed text-lg">
                  <strong>Profesionalisme dan Kebersamaan:</strong> Setiap program dikelola secara profesional dan terkoordinasi dengan baik melalui kemitraan strategis, menumbuhkan solidaritas untuk menciptakan kedamaian yang berkelanjutan.
                </p>
              </div>
            </div>

            <div className="border border-primary-800 p-8">
              <div className="flex items-start">
                <FaCheckCircle className="text-gold-500 mt-1 mr-4 flex-shrink-0" />
                <div className="space-y-5">
                  <p className="leading-relaxed text-lg">
                    <strong>Solusi Atas Tiga Tantangan Utama:</strong>
                  </p>
                  <div className="space-y-4">
                    <p className="leading-relaxed text-lg">
                      <strong>Melawan Kebodohan:</strong> Menyediakan pendidikan yang menyeimbangkan kecerdasan akal budi dan spiritual.
                    </p>
                    <p className="leading-relaxed text-lg">
                      <strong>Melawan Kemiskinan:</strong> Membangun fondasi perekonomian umat menuju kemandirian dan kesejahteraan.
                    </p>
                    <p className="leading-relaxed text-lg">
                      <strong>Melawan Perselisihan:</strong> Memperkuat persaudaraan dan kerja sama yang konstruktif.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
