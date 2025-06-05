export interface PostFrontmatter {
  title: string;
  date: string;
  readTime: string;
  excerpt?: string;
  slug: string;
}

export interface PostSource {
  meta: Omit<PostFrontmatter, 'slug'>;
  content: string;
  slug: string;
}

export interface PostListing extends Omit<PostFrontmatter, 'slug'> {
  excerpt: string;
  slug: string;
}

export interface MdxComponents {
  [key: string]: React.ComponentType<any>;
}
