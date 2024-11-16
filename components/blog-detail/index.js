"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Detail = ({ blog }) => {
  const [isLog, setIsLog] = useState(false);

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
      <h4>{blog?.desc}</h4>
      <h5
        onClick={() => {
            setIsLog(true)
        }}
      >
        {isLog ? blog?.userTel : "SAT"}
      </h5>
    </section>
  );
};

export default Detail;
