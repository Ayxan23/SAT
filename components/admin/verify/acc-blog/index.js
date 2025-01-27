"use client";
import React from "react";

import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { IoMdAddCircleOutline } from "@/icons";

const AccBlog = ({ blogs }) => {
  return (
    <section className={styles.accBlogWrapper}>
      <div className={styles.accBlogBox}>
        {blogs.map((blog, i) => (
          <div key={i} className={styles.accBlogBlog}>
            <Link
              href={`/${blog?.category}/${blog?.id}`}
              className={styles.accBlogLink}
            >
              <div className={styles.accBlogImage}>
                <Image
                  src={blog?.img}
                  alt={blog?.name}
                  fill
                  unoptimized
                  priority
                  as="image"
                />
              </div>
              <div className={styles.accBlogText}>
                <h3>{blog?.name}</h3>
                <h4>{blog?.price} AZN</h4>
                <div className={styles.accBlogTextDetail}>
                  <p>{blog?.city}</p>
                  <p>{blog?.date}</p>
                  <p>{blog?.time}</p>
                </div>
              </div>
            </Link>
            <div className={styles.accBlogEdit}>
              <Link href={`/verify`} className={styles.accBlogEditUp}>
                <IoMdAddCircleOutline />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AccBlog;
