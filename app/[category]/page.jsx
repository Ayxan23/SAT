import React from "react";
import HomeContainer from "@/containers/home";
import Categs from "@/mocks/categ.json";
import { notFound } from "next/navigation";

const Home = async ({ params, searchParams }) => {
  const { category } = await params;
  const { search } = await searchParams;

  const findCateg = Categs.find((categ) => categ.value == category);
  if (!findCateg && category != "elanlar" && category != "admin") {
    notFound();
  }

  return (
    <div>
      <HomeContainer search={search} category={category} />
    </div>
  );
};

export default Home;
