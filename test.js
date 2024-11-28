import React, { useEffect, useRef, useState, useCallback } from "react";

const InfiniteScroll = () => {
  const [posts, setPosts] = useState([]); // Gönderileri tutan state
  const [page, setPage] = useState(1); // Sayfa numarası
  const loaderRef = useRef(null); // Intersection Observer için referans

  // Fetch fonksiyonu
  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch(`https://api.example.com/posts?page=${page}`);
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...data]);
    } catch (error) {
      console.error("Hata oluştu:", error);
    }
  }, [page]);

  // Intersection Observer
  useEffect(() => {
    const currentLoader = loaderRef.current; // loaderRef'i bir değişkende sakla
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );
  
    if (currentLoader) {
      observer.observe(currentLoader);
    }
  
    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, []);
  

  // Fetch işlemini yeni sayfa numarası ile tetikleme
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <div>
      <h1>Gönderiler</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post.title}</li>
        ))}
      </ul>
      {/* Intersection Observer için hedef */}
      <div ref={loaderRef} style={{ height: "20px", backgroundColor: "lightgray" }}>
        Yükleniyor...
      </div>
    </div>
  );
};

export default InfiniteScroll;