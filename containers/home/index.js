"use client";
import React from "react";
import Blog from "@/components/blog";
import HomeFilter from "@/components/home-filter/index";
import Blogs from "@/mocks/blog.json";
import { useState, useEffect } from "react";

const HomeContainer = ({ search, category }) => {
  const [listings, setListings] = useState(Blogs);

  function normalizeText(text) {
    const charMap = {
      Ə: "E",
      ə: "e",
      Ş: "S",
      ş: "s",
      Ç: "C",
      Ç: "c",
      Ö: "O",
      ö: "o",
      Ü: "U",
      ü: "u",
      Ğ: "G",
      ğ: "g",
      İ: "I",
      i: "i",
      I: "I",
      ı: "i",
    };

    let result = text.replace(
      /[ƏəŞşÇçÖöÜüĞğİiIı]/g,
      (match) => charMap[match] || match
    );

    console.log("cavab", result);
    return result;
  }

  useEffect(() => {
    let findBlog = Blogs;
    let searchNorm = false;
    if (search) {
      searchNorm = normalizeText(search.toString());
    }

    if (
      category &&
      searchNorm &&
      category != "elanlar" &&
      category != "" &&
      category != "admin"
    ) {
      findBlog = Blogs.filter(
        (blog) =>
          blog.name.toLowerCase().includes(searchNorm.toLowerCase()) &&
          blog.category.toLowerCase().includes(category.toLowerCase())
      );
    } else if (searchNorm) {
      findBlog = Blogs.filter((blog) =>
        blog.name.toLowerCase().includes(searchNorm.toLowerCase())
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
