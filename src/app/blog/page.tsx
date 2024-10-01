"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>
            <h3>{post.title}</h3>
              <p>{post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
