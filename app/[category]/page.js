import React from "react";
import HomeContainer from "@/containers/home";

const Home = async ({ params, searchParams }) => {
  const { category } = await params;
  const { search } = await searchParams;

  return (
    <div>
      <HomeContainer search={search} category={category} />
    </div>
  );
};

export default Home;
