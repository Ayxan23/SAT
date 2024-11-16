import React from "react";
import Blogs from "@/mocks/blog.json";
import Detail from "@/components/blog-detail";
import { notFound } from "next/navigation";

const BlogDetail = async ({ params }) => {
  const { id, category } = await params;
  const findBlog = Blogs.find(
    (blog) => blog.id == id && blog.category == category
  );
  if (!findBlog) {
    notFound();
  }

  return (
    <div>
      <Detail blog={findBlog} />
    </div>
  );
};

export default BlogDetail;
