'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tentang Kami', href: '/tentang' },
    { name: 'Program', href: '/program' },
    { name: 'Artikel', href: '/artikel' },
    { name: 'Kontak', href: '/kontak' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/hayrat-logo.png"
              alt="Hayrat Indonesia"
              width={180}
              height={60}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-700 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Support Button */}
            <Link
              href="/dukung-kami"
              className="flex items-center space-x-2 bg-gradient-to-r from-primary-700 to-primary-800 text-white px-6 py-2.5 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
            >
              <FaHeart className="text-sm" />
              <span>Dukung Kami</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary-700 transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-700 transition-colors font-medium px-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                href="/dukung-kami"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-700 to-primary-800 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 font-semibold"
                onClick={() => setIsOpen(false)}
              >
                <FaHeart className="text-sm" />
                <span>Dukung Kami</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
