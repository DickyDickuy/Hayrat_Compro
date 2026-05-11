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
      <section className="pt-40 pb-20 bg-primary-900 border-b-4 border-gold-500">
        <div className="container-custom text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Hubungi <span className="text-gold-500">Kami</span>
          </h1>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
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
              <div className="w-12 h-1 bg-gold-500 mb-8"></div>
              <p className="text-gray-700 mb-10 leading-relaxed text-lg">
                Kunjungi kantor kami atau hubungi kami melalui telepon dan email yang tersedia. Kami akan berusaha merespon secepat mungkin.
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-gold-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Kantor Pusat</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Jl. Contoh No. 123<br />
                      Jakarta Pusat, DKI Jakarta 10110<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-gold-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Telepon</h3>
                    <p className="text-gray-600 leading-relaxed">
                      +62 21 1234 5678<br />
                      +62 812 3456 7890
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 bg-white border border-gray-200 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-gold-500 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">Email Resmi</h3>
                    <p className="text-gray-600 leading-relaxed">
                      info@hayratindonesia.org<br />
                      program@hayratindonesia.org
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white border-t-4 border-primary-900 p-8 lg:p-10 shadow-sm">
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all rounded-sm"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all rounded-sm"
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
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all rounded-sm"
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all rounded-sm"
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
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-all rounded-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-primary-900 text-white px-6 py-4 font-bold hover:bg-gold-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 rounded-sm"
                  >
                    <FaPaperPlane />
                    <span>{loading ? 'MENGIRIM...' : 'KIRIM PESAN'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65833179387!2d106.68942998567033!3d-6.229386799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta!5e0!3m2!1sen!2sid!4v1644000000000!5m2!1sen!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <Footer />
    </>
  );
}
