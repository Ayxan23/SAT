import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = ({ blogs }) => {

  return (
    <section className={styles.blogWrapper}>
      <div className={styles.blogBox}>
        {blogs.map((blog, i) => (
          <div key={i} className={styles.blogBlog}>
            <Link className={styles.blogLink} href={`/${blog?.category}/${blog?.id}`}>
              <div className={styles.blogImage}>
                <Image
                  src={blog?.img}
                  alt={blog?.name}
                  fill
                  unoptimized
                  priority
                  />
              </div>
              <div className={styles.blogText}>
                <h3>{blog?.name}</h3>
                <h4>{blog?.price} AZN</h4>
                <div className={styles.blogTextDetail}>
                  <p>{blog?.city}</p>
                  <p>{blog?.date}</p>
                  <p>{blog?.time}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
