import React from "react";
import AccBlog from "@/components/admin/verify/acc-blog";
import Blogs from "@/mocks/blog.json";
import styles from "./styles.module.css";

const AdminVerify = () => {
  return (
    <section className={styles.elanlarWrapper}>
      <div className={styles.accName}>
        <h3>Verify</h3>
        <div></div>
      </div>

      <AccBlog blogs={Blogs} />
    </section>
  );
};

export default AdminVerify;
