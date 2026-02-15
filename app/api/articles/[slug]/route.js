import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Article from '@/models/Article';
import { rateLimits, getClientIdentifier } from '@/lib/rateLimit';

// GET single article by slug
export async function GET(request, { params }) {
  try {
    // Rate limiting
    const identifier = getClientIdentifier(request);
    const rateCheck = rateLimits.articles.check(identifier);
    
    if (rateCheck.limited) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    await connectDB();

    const { slug } = params;

    const article = await Article.findOne({ slug });

    if (!article) {
      return NextResponse.json(
        { message: 'Article not found' },
        { status: 404 }
      );
    }

    // Increment view count
    article.views += 1;
    await article.save();

    return NextResponse.json({
      success: true,
      article,
    });

  } catch (error) {
    console.error('Get article error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT update article
export async function PUT(request, { params }) {
  try {
    // Rate limiting
    const identifier = getClientIdentifier(request);
    const rateCheck = rateLimits.updateArticle.check(identifier);
    
    if (rateCheck.limited) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    await connectDB();

    const { slug } = params;
    const data = await request.json();

    const article = await Article.findOne({ slug });

    if (!article) {
      return NextResponse.json(
        { message: 'Article not found' },
        { status: 404 }
      );
    }

    // Update fields
    Object.keys(data).forEach(key => {
      if (data[key] !== undefined && key !== '_id') {
        article[key] = data[key];
      }
    });

    await article.save();

    return NextResponse.json({
      success: true,
      message: 'Article updated successfully',
      article,
    });

  } catch (error) {
    console.error('Update article error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE article
export async function DELETE(request, { params }) {
  try {
    // Rate limiting
    const identifier = getClientIdentifier(request);
    const rateCheck = rateLimits.updateArticle.check(identifier);
    
    if (rateCheck.limited) {
      return NextResponse.json(
        { message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    await connectDB();

    const { slug } = params;

    const article = await Article.findOneAndDelete({ slug });

    if (!article) {
      return NextResponse.json(
        { message: 'Article not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Article deleted successfully',
    });

  } catch (error) {
    console.error('Delete article error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
