'use client';

import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-gold-400">Hayrat Indonesia</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Yayasan dakwah dan kemanusiaan yang berkomitmen untuk menyebarkan Islam HAYRAT YARDIM 
              dan membantu sesama melalui berbagai program dakwah, pendidikan, dan kemanusiaan.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Navigasi</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Program
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Program Kami</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/program" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pendidikan
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Kesehatan
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Bantuan Bencana
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pemberdayaan Ekonomi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-400">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <FaMapMarkerAlt className="text-gold-500 mt-1 flex-shrink-0" />
                <span>Jl. Contoh No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <FaPhone className="text-gold-500 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <FaEnvelope className="text-gold-500 flex-shrink-0" />
                <span>info@hayratindonesia.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Hayrat Indonesia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privasi" className="text-gray-500 hover:text-white transition-colors text-sm">
                Kebijakan Privasi
              </Link>
              <Link href="/syarat" className="text-gray-500 hover:text-white transition-colors text-sm">
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
