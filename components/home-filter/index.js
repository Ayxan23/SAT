"use client";
import Link from "next/link";
import styles from "./styles.module.css";
import Categ from "@/mocks/categ.json";

const HomeFilter = ({ sortListings, category }) => {
  let findCateg = Categ.find((cat) => cat.value == category);

  return (
    <section className={styles.filterWrapper}>
      <Link href="/" className={styles.filterStatic}>
        {findCateg?.name ?? "Elanlar"}
      </Link>
      <div className={styles.filter}>
        <p onClick={() => sortListings("uploadDate")}>Tarixə Görə</p>
        <p onClick={() => sortListings("price-asc")}>Artan Qiymət</p>
        <p onClick={() => sortListings("price-desc")}>Azalan Qiymət</p>
      </div>
    </section>
  );
};

export default HomeFilter;
