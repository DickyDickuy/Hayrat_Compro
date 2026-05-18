'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-primary-900">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
            Hubungi <span className="text-gold-500">Kami</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Kami siap melayani dan menjawab pertanyaan Anda. Jangan ragu untuk menghubungi kami untuk kolaborasi, donasi, atau informasi program.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary-900 mb-6">
                Informasi Kontak
              </h2>
              <p className="text-gray-700 mb-10 leading-relaxed text-lg">
                Kunjungi kantor kami atau hubungi kami melalui telepon dan email yang tersedia. Kami akan berusaha merespon secepat mungkin.
              </p>

              <div className="space-y-8">
                {/* Address Pusat */}
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-gold-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Kantor Pusat Turki</h3>
                    <p className="text-gray-600 leading-relaxed font-bold">Hayrat Foundation Isparta</p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Gazi Kemal, Hüsrev Altınbaşak Sk. No:15, 32040 Isparta Merkez/Isparta, Türkiye<br />
                      Telepon: +90 246 210 23 36
                    </p>
                    <p className="text-gray-600 leading-relaxed font-bold">Hayrat Foundation Istanbul/Küçükçekmece</p>
                    <p className="text-gray-600 leading-relaxed">
                      Cumhuriyet, Aşık Veysel Cd. 72/A, 34290 Küçükçekmece/İstanbul, Türkiye<br />
                      Telepon: 021 2624 2434
                    </p>
                  </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-6"></div>

                {/* Address Cabang */}
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-gold-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Kantor Cabang Indonesia</h3>
                    
                    <p className="text-gray-600 leading-relaxed font-bold">Hayrat Foundation Indonesia | Yayasan Ayasofya Center Indonesia</p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Jl. Paris Residence No.100 Blok L, Cemp. Putih, Kec. Ciputat Timur., Kota Tangerang Selatan, Banten 15412<br />
                      Telepon: 021 2784 6453 | WhatsApp: +62 8138 7036 801<br />
                      Email: info@ayasofya.or.id
                    </p>

                    <p className="text-gray-600 leading-relaxed font-bold">Ayasofya Dakwah Center</p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Jl. Ir H. Juanda No.95, Ciputat, Kec. Ciputat Tim., Kota Tangerang Selatan, Banten 15412, Gedung Perpustakaan Lama, Lantai 3, UIN Syarif Hidayatullah Jakarta<br />
                      WhatsApp: +62 821 9762 0361<br />
                      Email: dakwahcenter@ayasofya.or.id
                    </p>

                    <p className="text-gray-600 leading-relaxed font-bold">Madrasah Hayrat Indonesia</p>
                    <p className="text-gray-600 leading-relaxed">
                      Komplek Graha Hijau 2, Blok F No. 30, Kel. Cempaka Putih, Kec. Ciputat Timur, Kota Tangerang Selatan, Banten<br />
                      WhatsApp: +62 813 8703 6801<br />
                      Email: student.dormitory@ayasofya.or.id
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-primary-900 mb-8">
                  Kirim Pesan
                </h2>

                {success && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-4 mb-6 font-medium">
                    Terima kasih! Pesan Anda telah terkirim dan akan segera kami proses.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-primary-900 mb-2">
                      Nama Lengkap <span className="text-gold-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all rounded-md"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-primary-900 mb-2">
                        Email <span className="text-gold-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all rounded-md"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-primary-900 mb-2">
                        Nomor Telepon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all rounded-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-bold text-primary-900 mb-2">
                      Subjek <span className="text-gold-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all rounded-md"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-primary-900 mb-2">
                      Pesan <span className="text-gold-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all rounded-md"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary-900 text-white px-6 py-4 font-medium hover:bg-primary-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 rounded-md"
                  >
                    <FaPaperPlane />
                    <span>{loading ? 'Mengirim...' : 'Kirim Pesan'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
