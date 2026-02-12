'use client';

import { useAuth } from '@/context/AuthContext';
import { FaNewspaper, FaUsers, FaChartLine, FaHeart } from 'react-icons/fa';

export default function AdminDashboardPage() {
  const { user } = useAuth();

  const stats = [
    { 
      icon: FaNewspaper, 
      label: 'Total Artikel', 
      value: '0',
      color: 'from-blue-500 to-blue-600'
    },
    { 
      icon: FaUsers, 
      label: 'Total Visitors', 
      value: '0',
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: FaChartLine, 
      label: 'Views Today', 
      value: '0',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: FaHeart, 
      label: 'Donations', 
      value: '0',
      color: 'from-red-500 to-red-600'
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
          Dashboard
        </h1>
        <p className="text-gray-600">
          Selamat datang kembali, <span className="font-semibold">{user?.name}</span>
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="text-white text-xl" />
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
              <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <a
            href="/admin/artikel/create"
            className="bg-gradient-to-r from-primary-700 to-primary-800 text-white px-6 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 text-center"
          >
            + Artikel Baru
          </a>
          <a
            href="/artikel"
            className="bg-gray-100 text-gray-700 px-6 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 text-center"
          >
            Lihat Website
          </a>
          <a
            href="/admin/pengaturan"
            className="bg-gray-100 text-gray-700 px-6 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300 text-center"
          >
            Pengaturan
          </a>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-serif font-bold text-gray-900 mb-4">
          Aktivitas Terbaru
        </h2>
        <div className="text-center text-gray-600 py-8">
          <p>Belum ada aktivitas terbaru</p>
        </div>
      </div>
    </div>
  );
}
