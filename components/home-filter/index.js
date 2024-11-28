"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import Categ from "@/mocks/categ.json";
import { useContext } from "react";
import MainContext from "@/context/MainContext";

const HomeFilter = ({ sortListings, category }) => {
  let findCateg = Categ.find((cat) => cat.value == category);
  let { language } = useContext(MainContext);
  let categName = findCateg?.name;
  if (language != "az") {
    categName = findCateg?.ruName;
  }

  return (
    <section className={styles.filterWrapper}>
      <Link href="/" className={styles.filterStatic}>
        {categName ?? "Elanlar"}
      </Link>
      <div className={styles.filter}>
        <p onClick={() => sortListings("uploadDate")}>
          {language == "az" ? "Tarixə Görə" : "По Дате"}
        </p>
        <p onClick={() => sortListings("price-asc")}>
          {language == "az" ? "Artan Qiymət" : "Сначала Дешевые"}
        </p>
        <p onClick={() => sortListings("price-desc")}>
          {language == "az" ? "Azalan Qiymət" : "Сначала Дорогие"}
        </p>
      </div>
    </section>
  );
};

export default HomeFilter;
