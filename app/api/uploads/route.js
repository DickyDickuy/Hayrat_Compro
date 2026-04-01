import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';

// Ensure this route runs on the Node.js runtime (not edge) because it handles file uploads
export const runtime = 'nodejs';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file || typeof file === 'string') {
      return NextResponse.json({ message: 'File tidak ditemukan' }, { status: 400 });
    }

    // Basic guardrails for non-technical admins
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return NextResponse.json({ message: 'Ukuran file terlalu besar. Maksimal 5MB.' }, { status: 413 });
    }

    const cleanName = (file.name || 'cover').replace(/[^a-zA-Z0-9._-]/g, '_');
    const blob = await put(`articles/${Date.now()}-${cleanName}`, file, {
      access: 'public',
      addRandomSuffix: true,
    });

    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ message: 'Gagal mengunggah gambar' }, { status: 500 });
  }
}
