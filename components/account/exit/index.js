import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { IoMdExit, GoHome } from "@/icons";

const AccountExit = () => {
  return (
    <section className={styles.exitWrapper}>
      <div className={styles.accName}>
        <h3>Çıxış</h3>
        <div></div>
      </div>
      <div className={styles.exitButton}>
        <Link href={"/"}>
          <GoHome size={22} />
          Əsas Səhifə
        </Link>
        <Link href={"/"}>
          <IoMdExit size={22} />
          Hesabdan Çıx
        </Link>
      </div>
    </section>
  );
};

export default AccountExit;
