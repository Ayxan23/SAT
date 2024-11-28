"use client";
import React, { useContext } from "react";
import Link from "next/link";
import MainContext from "@/context/MainContext";

import styles from "./styles.module.css";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  let { language } = useContext(MainContext);

  return (
    <footer className={`${styles.footer} fluid`}>
      <section>
        <div></div>
        <div className={styles.footerWrapper}>
          <div className={styles.footerTop}>
            <div className={styles.footerLogo}>
              <Link href="/">sat.az</Link>
            </div>
            <div className={styles.footerInfo}>
              <h4> {language == "az" ? "Sosial Şəbəkə" : "Социальные Сети"}</h4>
              <Link href="https://www.instagram.com/" target="_blank">
                <FaInstagram />
                <p>sat.azerbaijan</p>
              </Link>
            </div>
            <div className={styles.footerInfo}>
              <h4>{language == "az" ? "Bizimlə Əlaqə" : "Связаться С Нами"}</h4>
              <Link href="mailto:info@sat.az">
                <MdMailOutline />
                <p>info@sat.az</p>
              </Link>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <Link href="/">© sat.az</Link>
          </div>
        </div>
        <div></div>
      </section>
    </footer>
  );
};

export default Footer;
