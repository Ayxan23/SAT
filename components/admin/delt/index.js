import React from "react";
import AccBlog from "@/components/admin/delt/acc-blog";
import Blogs from "@/mocks/blog.json";
import styles from "./styles.module.css";

const AdminDel = () => {
  return (
    <section className={styles.elanlarWrapper}>
      <div className={styles.accName}>
        <h3>Delete</h3>
        <div></div>
      </div>

      <AccBlog blogs={Blogs} />
    </section>
  );
};

export default AdminDel;
