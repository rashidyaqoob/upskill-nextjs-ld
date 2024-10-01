import Link from 'next/link';
import '../styles.css'

export default function BlogTemplate({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog-layout">
      <aside className="sidebar">
        <h2>Blog Sidebar</h2>
        <ul>
          <li>
          <Link href="/blog">Latest Blogs</Link>
        </li>
          <li>Categories</li>
          <li>Tags</li>
        </ul>
      </aside>
      <main className="main-content">
        {children}
      </main>
    </div>
  );
}
