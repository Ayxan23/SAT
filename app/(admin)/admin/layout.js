"use client";
import React, { useState } from "react";
import AdminPage from "@/components/admin/admin-nav/index";
import AdminNav from "@/components/admin/admin-burger/index";
import styles from "@/components/admin/admin-nav/styles.module.css";

const AdminLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className={styles.accWrapper}>
      <AdminNav setIsVisible={setIsVisible} isVisible={isVisible} />
      <AdminPage setIsVisible={setIsVisible} isVisible={isVisible} />
      <div className={styles.sideTwo}>{children}</div>
    </section>
  );
};

export default AdminLayout;
