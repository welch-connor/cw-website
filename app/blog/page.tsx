import Link from 'next/link';
import { Metadata } from 'next';
import { PostListing } from '@/lib/mdx/types';

// This is a server component that runs at build time
async function getPosts() {
  // Use dynamic import to ensure this only runs on the server
  const { getAllPosts } = await import('@/lib/mdx');
  return getAllPosts();
}

interface BlogPostCardProps {
  post: PostListing;
}

function BlogPostCard({ post }: BlogPostCardProps) {
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="card border-0 shadow-sm hover-shadow transition-all">
      <div className="card-body">
        <h2 className="h4 mb-2">
          <Link 
            href={`/blog/${post.slug}`} 
            className="text-decoration-none text-dark hover-text-primary"
          >
            {post.title}
          </Link>
        </h2>
        <div className="d-flex align-items-center text-muted small mb-3">
          <time dateTime={post.date} className="d-flex align-items-center me-3">
            <i className="bi bi-calendar3 me-1"></i>
            {date}
          </time>
          <span className="d-flex align-items-center">
            <i className="bi bi-clock me-1"></i>
            {post.readTime}
          </span>
        </div>
        <p className="mb-0">
          {post.excerpt || 'Read more...'}
        </p>
        <div className="mt-3">
          <Link 
            href={`/blog/${post.slug}`} 
            className="btn btn-sm btn-outline-primary"
          >
            Read More
          </Link>
        </div>
      </div>
    </article>
  );
}

export const metadata: Metadata = {
  title: "Connor's Blog",
  description: 'Read my latest blog posts about tech trends, business, and more.',
};

export default async function BlogPage() {
  try {
    console.log('Rendering BlogPage component');
    const posts = await getPosts();
    console.log('Posts in BlogPage:', JSON.stringify(posts, null, 2));

    if (!posts || posts.length === 0) {
      console.warn('No blog posts found!');
      return (
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h1 className="display-4 fw-bold mb-3">A blog about...anything!</h1>
              <p className="lead text-muted">No blog posts found.</p>
              <div className="alert alert-warning">
                <p className="mb-0">No blog posts were found. Please check the console for more details.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <header className="mb-5 text-center">
              <h1 className="display-4 fw-bold mb-3">A blog about...anything!</h1>
              <p className="lead text-muted">
                Whimsical musings on tech trends, business, and life.
              </p>
            </header>

            <div className="row g-4">
              {posts.map((post) => (
                <div key={post.slug} className="col-12">
                  <BlogPostCard post={post} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error in BlogPage component:', error);
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="alert alert-danger">
              <h4>Error loading blog posts</h4>
              <p className="mb-0">An error occurred while loading the blog posts. Please try again later.</p>
              <p className="mt-2 mb-0 small text-muted">
                Error: {error instanceof Error ? error.message : 'Unknown error'}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
