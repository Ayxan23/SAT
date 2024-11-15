"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./styles.module.css";

import { IoSearch } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { redirect } from "next/navigation";

const Header = () => {
  const [dynamicParam, setDynamicParam] = useState("");
  const [isWideScreen, setIsWideScreen] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsWideScreen(window.innerWidth >= 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <header className={`${styles.header} container fluid`}>
      {isWideScreen ? (
        <section className={`${styles.headerWrapper} headW`}>
          <div className={styles.headerLogo}>
            <Link href="/">sat.az</Link>
          </div>
          <div className={styles.headerSearch}>
            <input
              onChange={(e) => setDynamicParam(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  redirect(`/${dynamicParam}`);              
                }
              }}
              placeholder="axtar"
            />
            <Link href={`/${dynamicParam}`}>
              <IoSearch />
            </Link>
          </div>
          <nav className={styles.headerNav}>
            <Link href="#">kateqoriya</Link>
            <Link href="#">
              <div className={styles.personIcon}>
                <IoPerson />
              </div>
              login
            </Link>

            <Link href="#">
              <div className={styles.moonIcon}>
                <FiMoon />
              </div>
            </Link>
            <Link href="#">az</Link>
          </nav>
        </section>
      ) : (
        <section className={styles.headerWrapper}>
          <div className={styles.mobBox}>
            <div className={styles.headerLogo}>
              <Link href="/">sat.az</Link>
            </div>

            <div className={styles.headerSearch}>
              <input
                onChange={(e) => setDynamicParam(e.target.value)}
                placeholder="axtar"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    redirect(`/${dynamicParam}`);
                  }
                }}
              />
              <Link href={`/${dynamicParam}`}>
                <IoSearch />
              </Link>
            </div>

            <div
              className={styles.mobHam}
              onClick={() => {
                setIsVisible(!isVisible);
                if (!isVisible) {
                  document.body.style.overflow = "hidden";
                } else {
                  document.body.style.overflow = "";
                }
              }}
            >
              {isVisible ? <IoClose /> : <RxHamburgerMenu />}
            </div>
          </div>

          <nav
            className={styles.headerNav}
            style={{ display: isVisible ? "flex" : "none" }}
          >
            <Link href="#">Kateqoriya</Link>

            <Link href="#">
              <div className={styles.personIcon}>
                <IoPerson />
              </div>
              Login
            </Link>

            <Link href="#">
              <div className={styles.moonIcon}>
                <FiMoon />
              </div>
            </Link>

            <Link href="#">az</Link>
          </nav>
        </section>
      )}
    </header>
  );
};

export default Header;
