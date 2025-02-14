"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoPerson, IoSearch } from "@/icons";
import ThemeToggle from "@/components/theme-button";
import styles from "../styles.module.css";
import Categs from "@/mocks/categ.json";
// import { useAuth } from "@/hooks/useAuth";

const HeaderWeb = ({
  texts,
  onSearch,
  onEnter,
  toggleLanguage,
  setDynamicParam,
  language,
}) => {
  // let auth = useAuth();
  // console.log(auth);
  const [isCategory, setIsCategory] = useState(false);

  return (
    <section className={`${styles.headerSection} dfalse`}>
      <div></div>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <Link href="/admin/panel">alsat</Link>
        </div>

        <div className={styles.headerSearch}>
          <input
            type="text"
            autoComplete="off"
            name="search"
            onChange={(e) => setDynamicParam(e.target.value)}
            onKeyDown={(e) => onEnter(e)}
            placeholder={texts.inputPlaceholder ?? "axtar"}
          />
          <div onClick={() => onSearch()}>
            <IoSearch size={28} />
          </div>
        </div>
        <nav className={styles.headerNav}>
          <div
            className={styles.headerButton}
            onClick={() => {
              setIsCategory(!isCategory);
            }}
          >
            {texts.category ?? "Kateqoriya"}
          </div>
          <Link href="/account/profil">
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
      </div>
      <div
        style={{ display: isCategory ? "grid" : "none" }}
        className={styles.headerCategory}
      >
        <div></div>
        <div className={styles.headerCatBox}>
          {Categs.map((categ, i) => (
            <Link
              onClick={() => setIsCategory(false)}
              href={categ.value ?? "/"}
              key={i}
            >
              {language == "az" ? categ.name : categ.ruName}
            </Link>
          ))}
        </div>
        <div></div>
      </div>
      <div></div>
    </section>
  );
};

export default HeaderWeb;
