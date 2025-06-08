import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { PostFrontmatter, PostSource, PostListing } from './types';

const POSTS_DIRECTORY = path.join(process.cwd(), 'app/blog/posts');

export async function getPostBySlug(slug: string): Promise<PostSource> {
  const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  
  try {
    const fileContents = await fs.promises.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      meta: {
        title: data.title || '',
        date: data.date || new Date().toISOString(),
        readTime: data.readTime || '5 min read',
        excerpt: data.excerpt || '',
      },
      content: content,
      slug,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    throw new Error(`Post with slug "${slug}" not found`);
  }
}

export async function getAllPosts(): Promise<PostListing[]> {
  try {
    const fileNames = await fs.promises.readdir(POSTS_DIRECTORY);
    const posts = [];
    
    for (const fileName of fileNames) {
      if (!fileName.endsWith('.mdx')) continue;
      
      try {
        const slug = fileName.replace(/\.mdx$/, '');
        const fullPath = path.join(POSTS_DIRECTORY, fileName);
        const fileContents = await fs.promises.readFile(fullPath, 'utf8');
        const { data } = matter(fileContents);

        posts.push({
          title: data.title || 'Untitled Post',
          date: data.date || new Date().toISOString(),
          readTime: data.readTime || '5 min read',
          excerpt: data.excerpt || '',
          slug,
        });
      } catch (error) {
        console.error(`Error processing file ${fileName}:`, error);
        continue;
      }
    }
    
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}
