"use client";
import React, { useState } from "react";
import AccountPage from "@/components/account-page";
import AccountNav from "@/components/account/account-nav";
import styles from "@/components/account-page/styles.module.css";

const AccountLayout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <section className={styles.accWrapper}>
      <AccountNav setIsVisible={setIsVisible} isVisible={isVisible}/>
      <AccountPage setIsVisible={setIsVisible} isVisible={isVisible} />
      <div className={styles.sideTwo}>{children}</div>
    </section>
  );
};

export default AccountLayout;
