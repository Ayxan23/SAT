"use client";
import React, { useContext, useEffect, useState } from "react";

import { useRouter, usePathname } from "next/navigation";
import styles from "./styles.module.css";

import HeaderWeb from "@/components/header/header-web/index";
import HeaderMob from "@/components/header/header-mob/index";

import az from "@/language/az.json";
import ru from "@/language/ru.json";
import MainContext from "@/context/MainContext";

const Header = () => {
  const [dynamicParam, setDynamicParam] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  // const [screenW, setScreenW] = useState(true);

  let { language, setLanguage } = useContext(MainContext);

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
  });

  // useEffect(() => {
  //   const setRes = () => setScreenW(window.innerWidth >= 900);
  //   setRes();
  //   window.removeEventListener("resize", setRes);
  //   window.addEventListener("resize", setRes);
  //   return () => window.removeEventListener("resize", setRes);
  // }, []);

  const toggleLanguage = () => {
    const newLang = language === "az" ? "ru" : "az";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
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
      {/* {screenW ? ( */}
      <HeaderWeb
        texts={texts}
        onSearch={onSearch}
        onEnter={onEnter}
        toggleLanguage={toggleLanguage}
        setDynamicParam={setDynamicParam}
        language={language}
      />
      {/* ) : ( */}
      <HeaderMob
        texts={texts}
        onSearch={onSearch}
        onEnter={onEnter}
        toggleLanguage={toggleLanguage}
        setDynamicParam={setDynamicParam}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        language={language}
      />
      {/* )} */}
    </header>
  );
};

export default Header;
