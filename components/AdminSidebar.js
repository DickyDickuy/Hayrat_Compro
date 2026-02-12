'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { 
  FaHome, 
  FaNewspaper, 
  FaUser, 
  FaSignOutAlt,
  FaCog,
} from 'react-icons/fa';

export default function AdminSidebar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const menuItems = [
    { name: 'Dashboard', href: '/admin', icon: FaHome },
    { name: 'Artikel', href: '/admin/artikel', icon: FaNewspaper },
    { name: 'Pengaturan', href: '/admin/pengaturan', icon: FaCog },
  ];

  const isActive = (path) => {
    if (path === '/admin') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-primary-900 to-primary-800 text-white min-h-screen fixed left-0 top-0">
      <div className="p-6">
        {/* Logo */}
        <Link href="/admin" className="flex items-center justify-center mb-8">
          <Image
            src="/images/hayrat-logo.png"
            alt="Hayrat Indonesia"
            width={180}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* User Info */}
        {user && (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gold-400 rounded-full flex items-center justify-center">
                <FaUser className="text-primary-900" />
              </div>
              <div>
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-xs text-gray-300">{user.role}</p>
              </div>
            </div>
          </div>
        )}

        {/* Menu Items */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                  isActive(item.href)
                    ? 'bg-white text-primary-900 font-semibold shadow-lg'
                    : 'text-gray-200 hover:bg-white/10'
                }`}
              >
                <Icon className="text-lg" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-200 hover:bg-red-500/20 hover:text-red-300 transition-all mt-6 w-full"
        >
          <FaSignOutAlt className="text-lg" />
          <span>Keluar</span>
        </button>
      </div>
    </aside>
  );
}
