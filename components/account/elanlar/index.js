import React from "react";
import AccBlog from "@/components/account/elanlar/acc-blog";
import Blogs from "@/mocks/blog.json";
import styles from "./styles.module.css";

const AccountElanlar = () => {
  return (
    <section className={styles.elanlarWrapper}>
      <div className={styles.accName}>
        <h3>Elanlarım</h3>
        <div></div>
      </div>

      <AccBlog blogs={Blogs} />
    </section>
  );
};

export default AccountElanlar;
