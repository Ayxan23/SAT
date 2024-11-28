"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { IoMdEye, IoPerson, BiSolidCategory } from "@/icons";

const Detail = ({ blog }) => {
  const [isLog, setIsLog] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.detailWrapper}>
      <div className={styles.detailImage}>
        <Image priority fill unoptimized alt={blog?.name} src={blog?.img} />
      </div>
      <div className={styles.detailTop}>
        <div className={styles.blogTextDetail}>
          <p>{blog?.city}</p>
          <p>{blog?.date}</p>
          <p>{blog?.time}</p>
        </div>
        <h2>{blog?.name}</h2>
        <h3>{blog?.price} AZN</h3>
      </div>
      <div className={styles.blogTextBottom}>
        <p>
          <IoMdEye /> 20
        </p>
        <Link href={`/${blog?.category}`} className={styles.blogCat}>
          <BiSolidCategory />
          {blog?.category}
        </Link>
        <p>
          <IoPerson />
          {blog?.userName}
        </p>
      </div>
      <h4>{blog?.desc}</h4>
      <h5
        onClick={() => {
          setIsLog(true);
        }}
      >
        {isLog ? blog?.userTel : "SAT"}
      </h5>
    </section>
  );
};

export default Detail;
