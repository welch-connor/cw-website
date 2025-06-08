import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { postsMeta } from '../postsMeta';


// Statically generate all blog slugs from the posts folder
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'app/blog/posts');
  const files = fs.readdirSync(postsDir);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => ({ slug: file.replace(/\.mdx$/, '') }));
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function Page({ params }: PageProps) {
  const meta = postsMeta[params.slug];
  if (!meta) {
    // Fallback UI or error for missing metadata
    return (
      <div className="container py-5">
        <Link href="/blog" className="text-decoration-none mb-4 d-inline-block">
          &larr; Back to Blog
        </Link>
        <article>
          <h1 className="display-4 fw-bold mb-3">Post Not Found</h1>
          <p className="lead mb-0">No metadata found for this post. Please check your postsMeta.ts file.</p>
        </article>
      </div>
    );
  }
  const formattedDate = meta.date ? new Date(meta.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) : '';

  return (
    <div className="container py-5">
      <Link href="/blog" className="text-decoration-none mb-4 d-inline-block">
        &larr; Back to Blog
      </Link>
      <article>
        <header className="mb-5">
          <h1 className="display-4 fw-bold mb-3">{meta?.title}</h1>
          <div className="d-flex align-items-center text-muted mb-4">
            {meta?.date && (
              <time dateTime={meta.date} className="d-flex align-items-center me-3">
                <i className="bi bi-calendar3 me-1"></i>
                {formattedDate}
              </time>
            )}
            {meta?.readTime && (
              <span className="d-flex align-items-center">
                <i className="bi bi-clock me-1"></i>
                {meta.readTime}
              </span>
            )}
          </div>
          {meta?.excerpt && <p className="lead mb-0">{meta.excerpt}</p>}
        </header>
      </article>
    </div>
  );
}