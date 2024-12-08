"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import {
  MdOutlineAccountCircle,
  IoMdAddCircleOutline,
  FaListUl,
  IoMdExit,
} from "@/icons";

import Link from "next/link";
const AccountPage = ({ isVisible, setIsVisible }) => {
  const [active, setActive] = useState("");

  function checkActive(path) {
    setActive(path);
    localStorage.setItem("accActive", path);
  }

  useEffect(() => {
    const savedActive = localStorage.getItem("accActive");
    if (savedActive) {
      setActive(savedActive);
    }
    return () => localStorage.setItem("accActive", "profil");
  }, []);

  return (
    <div
      className={`${styles.sideOne} ${
        isVisible ? `${styles.dnone}` : `${styles.dfind}`
      }`}
    >
      <div className={styles.accImg}>
        <Image
          src="/photo/accbg.jpg"
          alt="account bg"
          fill
          unoptimized
          priority
          as="image"
        />
      </div>
      <div className={styles.accPP}>
        <Image
          src="/photo/nike.jpg"
          alt="profile photo"
          fill
          unoptimized
          priority
          as="image"
        />
      </div>
      <h3>Ayxan Mustafayev</h3>

      <div className={styles.accNav}>
        <Link
          href={"/account/profil"}
          onClick={() => {
            checkActive("profil");
            setIsVisible(false);
          }}
          className={active == "profil" ? styles.accActive : ""}
        >
          <MdOutlineAccountCircle size={25} />
          Profil
        </Link>
        <Link
          href={"/account/add"}
          onClick={() => {
            checkActive("add");
            setIsVisible(false);
          }}
          className={active == "add" ? styles.accActive : ""}
        >
          <IoMdAddCircleOutline size={25} />
          Elan Yerləşdir
        </Link>
        <Link
          href={"/account/elanlar"}
          onClick={() => {
            checkActive("elanlar");
            setIsVisible(false);
          }}
          className={active == "elanlar" ? styles.accActive : ""}
        >
          <FaListUl size={18} />
          Elanlarım
        </Link>
        <Link
          href={"/account/exit"}
          onClick={() => {
            checkActive("cixis");
            setIsVisible(false);
          }}
          className={active == "cixis" ? styles.accActive : ""}
        >
          <IoMdExit size={22} />
          Çıxış
        </Link>
      </div>
    </div>
  );
};

export default AccountPage;
