'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);

    if (!result.success) {
      setError(result.message || 'Login gagal. Silakan coba lagi.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 pattern-overlay">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-md shadow-lg p-8 lg:p-10 border-t-4 border-gold-500">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-900 rounded-md flex items-center justify-center mx-auto mb-4">
              <span className="text-gold-500 font-bold text-3xl font-serif">H</span>
            </div>
            <h1 className="text-2xl font-serif font-bold text-primary-900">
              Admin Portal
            </h1>
            <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest font-bold">Hayrat Indonesia</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6 text-sm font-medium">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-primary-900 mb-2">
                Email
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                  placeholder="admin@hayratindonesia.org"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-primary-900 mb-2">
                Password
              </label>
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-md focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                  placeholder="••••••••"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary-900 text-white py-3 rounded-md font-bold hover:bg-gold-500 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 mt-2"
            >
              {loading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  <span>MEMPROSES...</span>
                </>
              ) : (
                <span>MASUK</span>
              )}
            </button>
          </form>

          {/* Back to Home */}
          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <Link href="/" className="text-gray-500 hover:text-primary-900 text-sm font-bold transition-colors">
              ← KEMBALI KE BERANDA
            </Link>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 text-center text-white">
          <p className="text-sm opacity-90">
            Demo Credentials: admin@hayrat.id / admin123
          </p>
        </div>
      </div>
    </div>
  );
}
