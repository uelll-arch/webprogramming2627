import { useState, useEffect } from 'react';

export default function PostListFetch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Gagal mengambil data');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) return <p>Memuat data...</p>;
  return <ul>{posts.slice(0, 5).map(post => <li key={post.id}>{post.title}</li>)}</ul>;
}