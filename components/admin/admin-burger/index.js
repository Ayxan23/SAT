"use client";
import React from "react";
import { IoClose, RxHamburgerMenu } from "@/icons";
import styles from "./styles.module.css";

const AdminNav = ({isVisible, setIsVisible}) => {

  return (
    <div className={styles.accHead}>
      <div></div>
      <div
        className={styles.accNavButton}
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {isVisible ? <IoClose /> : <RxHamburgerMenu />}
      </div>
      <div></div>
    </div>
  );
};

export default AdminNav;
