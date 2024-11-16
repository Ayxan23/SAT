"use client";
import React from "react";
import Blog from "@/components/blog";

import Blogs from "@/mocks/blog.json";

const HomeContainer = ({ search, category}) => {
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

  return (
    <div>
      <Blog blogs={findBlog} />
    </div>
  );
};

export default HomeContainer;
