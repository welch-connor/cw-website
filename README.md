# Connor Welch's Personal Website & Blog

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)

A modern, responsive personal website and blog built with Next.js 14, TypeScript, and Bootstrap 5. This project showcases my portfolio, blog posts, and professional information with a focus on clean, maintainable code and modern development practices.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **MDX** for rich blog content
- **Bootstrap 5** for responsive design
- **Static Site Generation (SSG)** for optimal performance
- **Code Syntax Highlighting**
- **Responsive Design** that works on all devices
- **Component-Based Architecture** for better maintainability
- **Type-Safe Components** with TypeScript
- **Reusable UI Components** for consistent design
- **Performance Optimized** with code splitting and lazy loading

## 🏗️ Component Architecture

The project follows a modular component-based architecture with a clear separation of concerns:

```
components/
├── layout/           # Layout components (Header, Footer, etc.)
├── sections/         # Page sections (Hero, About, Skills, etc.)
└── ui/               # Reusable UI components (Button, Card, etc.)

data/
├── skills.ts        # Skills data
└── social.ts         # Social media links

types/                # TypeScript type definitions
```

### Key Refactoring Improvements

1. **Type Safety**
   - Added TypeScript interfaces for all props and data structures
   - Improved type safety across all components

2. **Reusable Components**
   - Created a library of reusable UI components (Button, Card, Section, etc.)
   - Consistent styling and behavior across the application

3. **Separation of Concerns**
   - Moved data to dedicated files in the `data` directory
   - Separated UI logic from business logic

4. **Performance**
   - Optimized component rendering
   - Reduced bundle size with proper code splitting

5. **Maintainability**
   - Consistent code style and structure
   - Better documentation and type definitions
   - Improved error handling

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cw-website.git
   cd cw-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Development

### Available Scripts

- `dev` - Start the development server
- `build` - Build the application for production
- `start` - Start the production server
- `lint` - Run ESLint
- `format` - Format code with Prettier
- `type-check` - Check TypeScript types

### Code Style

- Use TypeScript for all new code
- Follow the [React Hooks rules](https://reactjs.org/docs/hooks-rules.html)
- Use functional components with TypeScript interfaces
- Prefer named exports over default exports
- Keep components small and focused on a single responsibility

### Component Guidelines

1. **Props Interface**
   - Define a TypeScript interface for all component props
   - Use descriptive prop names with proper types
   - Mark optional props with `?`

2. **Styling**
   - Use Bootstrap utility classes when possible
   - For custom styles, use CSS Modules or styled-components
   - Keep styles scoped to components

3. **State Management**
   - Use React's built-in state management for local state
   - Consider using Context API for global state when needed
   - Keep state as local as possible

4. **Accessibility**
   - Use semantic HTML elements
   - Add proper ARIA attributes
   - Ensure keyboard navigation works
   - Test with screen readers

## 📝 Blog

This website includes a blog powered by MDX, allowing you to write content with React components. Blog posts are located in the `content/posts` directory.

### Creating a New Blog Post

1. Create a new `.mdx` file in the `content/posts` directory
2. Add the required frontmatter:
   ```mdx
   ---
   title: 'Your Blog Post Title'
   date: 'YYYY-MM-DD'
   readTime: 'X min read'
   excerpt: 'A brief description of your blog post.'
   ---
   ```
3. Write your content using Markdown or MDX syntax

For more details, see the [Blog Content Guide](./content/README.md).

## 🎨 Styling

This project uses Bootstrap 5 for styling. Custom styles can be added in the `app/globals.css` file.

## 📦 Dependencies

- Next.js 14
- React 18
- TypeScript
- Bootstrap 5
- MDX
- next-mdx-remote
- gray-matter

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [MDX Documentation](https://mdxjs.com/)
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)