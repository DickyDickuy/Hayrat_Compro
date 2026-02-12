import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Article from '@/models/Article';

// GET all articles
export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');
    const published = searchParams.get('published');

    const skip = (page - 1) * limit;

    // Build query
    let query = {};
    if (category) query.category = category;
    if (published !== null && published !== undefined) {
      query.published = published === 'true';
    }

    // Get articles
    const articles = await Article.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Article.countDocuments(query);

    return NextResponse.json({
      success: true,
      articles,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });

  } catch (error) {
    console.error('Get articles error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST create new article
export async function POST(request) {
  try {
    await connectDB();

    const data = await request.json();

    // Validate required fields
    if (!data.title || !data.slug || !data.content) {
      return NextResponse.json(
        { message: 'Title, slug, and content are required' },
        { status: 400 }
      );
    }

    // Check if slug already exists
    const existingArticle = await Article.findOne({ slug: data.slug });
    if (existingArticle) {
      return NextResponse.json(
        { message: 'Article with this slug already exists' },
        { status: 400 }
      );
    }

    // Create article
    const article = await Article.create(data);

    return NextResponse.json({
      success: true,
      message: 'Article created successfully',
      article,
    }, { status: 201 });

  } catch (error) {
    console.error('Create article error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
