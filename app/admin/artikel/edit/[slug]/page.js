'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function EditArtikelPage({ params }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    coverImage: '',
    author: 'Hayrat Indonesia',
    category: 'Berita',
    published: true,
    content: '',
  });

  useEffect(() => {
    fetchArticle();
  }, []);

  const fetchArticle = async () => {
    try {
      const res = await fetch(`/api/articles/${params.slug}`);

      if (!res.ok) {
        setMessage('Artikel tidak ditemukan');
        setMessageType('error');
        return;
      }

      const data = await res.json();
      if (data.article) {
        setFormData({
          title: data.article.title || '',
          slug: data.article.slug || '',
          excerpt: data.article.excerpt || '',
          coverImage: data.article.coverImage || '',
          author: data.article.author || 'Hayrat Indonesia',
          category: data.article.category || 'Berita',
          published: Boolean(data.article.published),
          content: data.article.content || '',
        });
      }
    } catch (error) {
      setMessage('Gagal mengambil data artikel');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const nextValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: nextValue,
      ...(name === 'title'
        ? {
            slug: value
              .toLowerCase()
              .replace(/[^a-z0-9\s-]/g, '')
              .replace(/\s+/g, '-')
              .replace(/-+/g, '-')
              .trim(),
          }
        : {}),
    }));
  };

  const handleContentChange = (value) => {
    setFormData((prev) => ({ ...prev, content: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');
    setMessageType('');

    try {
      const res = await fetch(`/api/articles/${params.slug}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setMessage('Artikel berhasil diperbarui. Mengalihkan...');
        setMessageType('success');
        router.push('/admin/artikel');
        return;
      }

      const data = await res.json();
      setMessage(data.message || 'Gagal memperbarui artikel');
      setMessageType('error');
    } catch (error) {
      setMessage('Terjadi kesalahan. Silakan coba lagi.');
      setMessageType('error');
    } finally {
      setSaving(false);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ align: [] }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-700"></div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Edit Artikel</h1>
        <p className="text-gray-600">Perbarui artikel atau berita</p>
      </div>

      <div className="card shadow-lg bg-white">
        <div className="card-body space-y-6">
          {message ? (
            <div className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-error'} shadow`}>
              <span>{message}</span>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium text-gray-700">Judul</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="slug" className="text-sm font-medium text-gray-700">Slug</label>
                <input
                  id="slug"
                  name="slug"
                  type="text"
                  value={formData.slug}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                />
                <p className="text-xs text-gray-500">URL: /artikel/{formData.slug || 'slug-artikel'}</p>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="excerpt" className="text-sm font-medium text-gray-700">Excerpt</label>
              <textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                rows={3}
                className="textarea textarea-bordered w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="coverImage" className="text-sm font-medium text-gray-700">URL Cover Image</label>
              <input
                id="coverImage"
                name="coverImage"
                type="url"
                value={formData.coverImage}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="author" className="text-sm font-medium text-gray-700">Penulis</label>
                <input
                  id="author"
                  name="author"
                  type="text"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="input input-bordered w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="text-sm font-medium text-gray-700">Kategori</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="select select-bordered w-full"
                  required
                >
                  <option value="Bantuan Kemanusiaan">Bantuan Kemanusiaan</option>
                  <option value="Pendidikan">Pendidikan</option>
                  <option value="Kesehatan">Kesehatan</option>
                  <option value="Program">Program</option>
                  <option value="Kegiatan">Kegiatan</option>
                  <option value="Berita">Berita</option>
                  <option value="Opini">Opini</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Konten</label>
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={handleContentChange}
                modules={quillModules}
              />
            </div>

            <div className="flex items-center space-x-3">
              <input
                id="published"
                name="published"
                type="checkbox"
                checked={formData.published}
                onChange={handleChange}
                className="checkbox checkbox-primary"
              />
              <label htmlFor="published" className="text-sm text-gray-700">Publish artikel sekarang</label>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t">
              <button type="submit" disabled={saving} className="btn btn-primary px-6">
                {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
              <button type="button" onClick={() => router.push('/admin/artikel')} className="btn btn-ghost px-6">
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
