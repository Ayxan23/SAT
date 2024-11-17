"use client";
import React from "react";
import Blog from "@/components/blog";
import HomeFilter from "@/components/home-filter/index";
import Blogs from "@/mocks/blog.json";
import { useState, useEffect } from "react";

const HomeContainer = ({ search, category }) => {
  const [listings, setListings] = useState(Blogs);

  useEffect(() => {
    let findBlog = Blogs;

    if (category && search && category != "elanlar" && category != "") {
      findBlog = Blogs.filter(
        (blog) =>
          blog.name.toLowerCase().includes(search.toLowerCase()) &&
          blog.category.toLowerCase().includes(category.toLowerCase())
      );
    } else if (search) {
      findBlog = Blogs.filter((blog) =>
        blog.name.toLowerCase().includes(search.toLowerCase())
      );
    } else if (category) {
      findBlog = Blogs.filter((blog) =>
        blog.category.toLowerCase().includes(category.toLowerCase())
      );
    }
    setListings(findBlog);
  }, [search, category]);

  const sortListings = (type) => {
    const sortedListings = [...listings].sort((a, b) => {
      if (type === "price-asc") {
        return a.price - b.price; // Artan fiyat
      } else if (type === "price-desc") {
        return b.price - a.price; // Azalan fiyat
      } else if (type === "uploadDate") {
        return new Date(b.dateSort).getTime() - new Date(a.dateSort).getTime(); // Tarih sıralama
      }
      return 0;
    });

    setListings(sortedListings);
  };

  return (
    <>
      <HomeFilter category={category} sortListings={sortListings} />
      <Blog blogs={listings} />
    </>
  );
};

export default HomeContainer;
