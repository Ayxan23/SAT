"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import { IoClose, RxHamburgerMenu, IoPerson, IoSearch } from "@/icons";
import { useRouter, usePathname } from "next/navigation";
import styles from "./styles.module.css";

import ThemeToggle from "@/components/theme-button";
import az from "@/language/az.json";
import ru from "@/language/ru.json";

const Header = () => {
  const [dynamicParam, setDynamicParam] = useState("");
  const [screenW, setScreenW] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const [language, setLanguage] = useState("az");

  const router = useRouter();

  let category = usePathname().split("/")[1].trim();
  if (!category) {
    category = "elanlar";
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }

    const setRes = () => setScreenW(window.innerWidth >= 900);
    setRes();
    window.addEventListener("resize", setRes);
    return () => window.removeEventListener("resize", setRes);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "az" ? "ru" : "az";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };
  const texts = language === "az" ? az : ru;

  const onSearch = () => {
    if (dynamicParam.trim() != "") {
      router.push(`/${category}/?search=${dynamicParam.trim()}`);
    }
  };
  const onEnter = (e) => {
    if (e.key === "Enter" && dynamicParam.trim() != "") {
      router.push(`/${category}/?search=${dynamicParam.trim()}`);
    }
  };

  return (
    <header className={`${styles.header} container fluid`}>
      {screenW ? (
        <section className={`${styles.headerWrapper} headW`}>
          <div className={styles.headerLogo}>
            <Link href="/">sat.az</Link>
          </div>

          <div className={styles.headerSearch}>
            <input
              onChange={(e) => setDynamicParam(e.target.value)}
              onKeyDown={(e) => onEnter(e)}
              placeholder={texts.inputPlaceholder ?? "axtar"}
            />
            <div onClick={onSearch}>
              <IoSearch size={28} />
            </div>
          </div>
          <nav className={styles.headerNav}>
            <Link href="#">{texts.category ?? "Kateqoriya"}</Link>
            <Link href="#">
              <div className={styles.personIcon}>
                <IoPerson />
              </div>
              {texts.log ?? "Giriş"}
            </Link>
            <ThemeToggle />
            <div className={styles.headerButton} onClick={toggleLanguage}>
              {texts.button ?? "AZ"}
            </div>
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
                placeholder={texts.inputPlaceholder ?? "axtar"}
                onKeyDown={(e) => onEnter(e)}
              />
              <div onClick={onSearch}>
                <IoSearch size={28} />
              </div>
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
            <Link href="#">{texts.category ?? "Kateqoriya"}</Link>

            <Link href="#">
              <div className={styles.personIcon}>
                <IoPerson />
              </div>
              {texts.log ?? "Giriş"}
            </Link>
            <ThemeToggle />
            <div className={styles.headerButton} onClick={toggleLanguage}>
              {texts.button ?? "AZ"}
            </div>
          </nav>
        </section>
      )}
    </header>
  );
};

export default Header;
