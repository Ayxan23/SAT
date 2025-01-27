"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import {
  MdOutlineAccountCircle,
  IoMdAddCircleOutline,
  BiSolidEdit,
  RiDeleteBin5Fill,
} from "@/icons";

import Link from "next/link";
const AdminPage = ({ isVisible, setIsVisible }) => {
  const [active, setActive] = useState("");

  function checkActive(path) {
    setActive(path);
    localStorage.setItem("admActive", path);
  }

  useEffect(() => {
    const savedActive = localStorage.getItem("admActive");
    if (savedActive) {
      setActive(savedActive);
    }
    return () => localStorage.setItem("admActive", "panel");
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
          src="/photo/admin.png"
          alt="profile photo"
          fill
          unoptimized
          priority
          as="image"
        />
      </div>
      <h3>Admin</h3>

      <div className={styles.accNav}>
        <Link
          href={"/admin/panel"}
          onClick={() => {
            checkActive("panel");
            setIsVisible(false);
          }}
          className={active == "panel" ? styles.accActive : ""}
        >
          <MdOutlineAccountCircle size={25} />
          Panel
        </Link>
        <Link
          href={"/admin/verify"}
          onClick={() => {
            checkActive("verify");
            setIsVisible(false);
          }}
          className={active == "verify" ? styles.accActive : ""}
        >
          <IoMdAddCircleOutline size={25} />
          Verify
        </Link>
        <Link
          href={"/admin/edit"}
          onClick={() => {
            checkActive("edit");
            setIsVisible(false);
          }}
          className={active == "edit" ? styles.accActive : ""}
        >
          <BiSolidEdit size={22} />
          Edit
        </Link>
        <Link
          href={"/admin/delt"}
          onClick={() => {
            checkActive("delt");
            setIsVisible(false);
          }}
          className={active == "delt" ? styles.accActive : ""}
        >
          <RiDeleteBin5Fill size={20} />
          Delete
        </Link>
      </div>
    </div>
  );
};

export default AdminPage;
