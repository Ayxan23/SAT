"use client";
import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { IoMdExit, GoHome, IoPerson } from "@/icons";

const AdminPanel = () => {
  return (
    <section className={styles.exitWrapper}>
      <div className={styles.accName}>
        <h3>Panel</h3>
        <div></div>
      </div>
      <div className={styles.userInfo}>
        <IoPerson />
        200.000
      </div>
      <div className={styles.exitButton}>
        <Link href={"/"}>
          <GoHome size={22} />
          Əsas Səhifə
        </Link>
        <Link
          onClick={() => {
            document.cookie =
              "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          }}
          href={"/"}
        >
          <IoMdExit size={22} />
          Hesabdan Çıx
        </Link>
      </div>
    </section>
  );
};

export default AdminPanel;
