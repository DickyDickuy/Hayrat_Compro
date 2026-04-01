'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function CreateArtikelPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [uploadingCover, setUploadingCover] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');
  const [coverPreview, setCoverPreview] = useState('');
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

  const handleCoverUpload = async (file) => {
    if (!file) return;
    setUploadingCover(true);
    setUploadMessage('');
    setCoverPreview(URL.createObjectURL(file));

    const data = new FormData();
    data.append('file', file);

    try {
      const res = await fetch('/api/uploads', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (!res.ok || !result.url) {
        throw new Error(result.message || 'Gagal mengunggah gambar');
      }

      setFormData((prev) => ({ ...prev, coverImage: result.url }));
      setUploadMessage('Gambar berhasil diunggah dan sudah terisi otomatis.');
    } catch (error) {
      setUploadMessage(error.message || 'Upload gagal. Coba lagi.');
    } finally {
      setUploadingCover(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setMessageType('');
    try {
      const res = await fetch('/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        setMessage('Artikel berhasil dibuat. Mengalihkan...');
        setMessageType('success');
        router.push('/admin/artikel');
        return;
      }

      if (res.status === 429) {
        setMessage('Terlalu banyak permintaan. Coba lagi sebentar lagi.');
        setMessageType('error');
        return;
      }

      const data = await res.json();
      setMessage(data.message || 'Gagal membuat artikel');
      setMessageType('error');
    } catch (error) {
      setMessage('Terjadi kesalahan. Silakan coba lagi.');
      setMessageType('error');
    } finally {
      setLoading(false);
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

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Buat Artikel Baru</h1>
        <p className="text-gray-600">Tambahkan artikel atau berita baru</p>
      </div>

      <div className="card shadow-lg bg-white">
        <div className="card-body space-y-6">
          {message ? (
            <div
              className={`alert ${messageType === 'success' ? 'alert-success' : 'alert-error'} shadow`}
            >
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
                  placeholder="Masukkan judul artikel"
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
                  placeholder="judul-artikel"
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
                placeholder="Ringkasan singkat artikel"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-700">Cover Image</label>
                {formData.coverImage ? (
                  <span className="text-xs text-green-600">Tersimpan</span>
                ) : null}
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="p-4 rounded-xl border bg-gray-50 space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Upload gambar (disarankan)</p>
                      <p className="text-xs text-gray-500">Format JPG/PNG, maksimal 5MB. Setelah diupload, URL otomatis terisi.</p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleCoverUpload(e.target.files?.[0])}
                      className="file-input file-input-bordered w-full"
                    />
                    {uploadMessage ? (
                      <p className={`text-xs ${uploadMessage.includes('berhasil') ? 'text-green-600' : 'text-red-600'}`}>
                        {uploadMessage}
                      </p>
                    ) : null}
                    {uploadingCover ? (
                      <p className="text-xs text-primary-600">Mengunggah...</p>
                    ) : null}
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="coverImage" className="text-sm font-medium text-gray-700">Atau tempel URL manual</label>
                    <input
                      id="coverImage"
                      name="coverImage"
                      type="url"
                      value={formData.coverImage}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="https://example.com/image.jpg"
                    />
                    <p className="text-xs text-gray-500">Kolom ini akan terisi otomatis setelah upload berhasil.</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">Pratinjau</p>
                  <div className="h-52 w-full rounded-xl border bg-gray-100 overflow-hidden flex items-center justify-center">
                    {coverPreview || formData.coverImage ? (
                      <img
                        src={coverPreview || formData.coverImage}
                        alt="Preview cover"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-sm text-gray-400">Belum ada gambar</span>
                    )}
                  </div>
                </div>
              </div>
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
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary px-6"
              >
                {loading ? 'Menyimpan...' : 'Simpan Artikel'}
              </button>
              <button
                type="button"
                onClick={() => router.back()}
                className="btn btn-ghost px-6"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
