"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function BlogPost() {
  const [post, setPost] = useState(null);
  const params = useParams(); 
  const { id } = params; 


  useEffect(() => {
    async function fetchPost() {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const data = await response.json();
      setPost(data);
    }
    fetchPost();
  }, [id]);

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
}
