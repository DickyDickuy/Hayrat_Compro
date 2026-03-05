import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Article from '@/models/Article';
import { rateLimits, getClientIdentifier } from '@/lib/rateLimit';

// GET all articles
export async function GET(request) {
  try {
    // Rate limiting
    const identifier = getClientIdentifier(request);
    const rateCheck = rateLimits.articles.check(identifier);
    
    if (rateCheck.limited) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': rateCheck.resetTime.toString(),
          }
        }
      );
    }

    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = Math.min(parseInt(searchParams.get('limit') || '10'), 50); // Max 50 items
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
    }, {
      headers: {
        'X-RateLimit-Remaining': rateCheck.remaining.toString(),
      }
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
  const identifier = getClientIdentifier(request);
  const rateCheck = rateLimits.createArticle.check(identifier);

  if (rateCheck.limited) {
    return NextResponse.json(
      { message: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let payload;

  try {
    payload = await request.json();
  } catch (error) {
    return NextResponse.json(
      { message: 'Invalid JSON payload' },
      { status: 400 }
    );
  }

  try {
    await connectDB();

    const article = new Article(payload);
    await article.validate();

    const slugExists = await Article.exists({ slug: article.slug });
    if (slugExists) {
      return NextResponse.json(
        { message: 'Article with this slug already exists' },
        { status: 409 }
      );
    }

    await article.save();

    return NextResponse.json(
      { success: true, article },
      {
        status: 201,
        headers: {
          'X-RateLimit-Remaining': rateCheck.remaining.toString(),
        },
      }
    );
  } catch (error) {
    if (error.name === 'ValidationError') {
      return NextResponse.json(
        { message: 'Validation failed', errors: error.errors },
        { status: 400 }
      );
    }

    if (error.code === 11000 && error.keyPattern?.slug) {
      return NextResponse.json(
        { message: 'Article with this slug already exists' },
        { status: 409 }
      );
    }

    console.error('Create article error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
