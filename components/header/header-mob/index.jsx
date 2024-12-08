"use client";
import React, { useState } from "react";
import Link from "next/link";
import { IoClose, RxHamburgerMenu, IoPerson, IoSearch } from "@/icons";
import ThemeToggle from "@/components/theme-button";
import styles from "../styles.module.css";
import Categs from "@/mocks/categ.json";

const HeaderMob = ({
  texts,
  onSearch,
  onEnter,
  toggleLanguage,
  setDynamicParam,
  isVisible,
  setIsVisible,
  language,
}) => {
  const [isCategory, setIsCategory] = useState(false);

  return (
    <section className={`${styles.headerSection} dtrue`}>
      <div></div>
      <div className={styles.headerWrapper}>
        <div className={styles.mobBox}>
          <div className={styles.headerLogo}>
            <Link href="/">sat.az</Link>
          </div>

          <div className={styles.headerSearch}>
            <input
              type="text"
              autoComplete="off"
              name="search"
              placeholder={texts.inputPlaceholder ?? "axtar"}
              onChange={(e) => setDynamicParam(e.target.value)}
              onKeyDown={(e) => onEnter(e)}
            />
            <div onClick={() => onSearch()}>
              <IoSearch size={28} />
            </div>
          </div>

          <div
            className={styles.mobHam}
            onClick={() => {
              setIsVisible(!isVisible);
              setIsCategory(false);
            }}
          >
            {isVisible ? <IoClose /> : <RxHamburgerMenu />}
          </div>
        </div>

        <nav
          className={styles.headerNav}
          style={{ display: isVisible ? "flex" : "none" }}
        >
          <div
            className={styles.headerButton}
            onClick={() => {
              setIsCategory(!isCategory);
            }}
          >
            {texts.category ?? "Kateqoriya"}
          </div>

          <Link
            onClick={() => {
              setIsVisible(false);
            }}
            href="/account/profil"
          >
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
              onClick={() => {
                setIsCategory(false);
                setIsVisible(false);
              }}
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

export default HeaderMob;
