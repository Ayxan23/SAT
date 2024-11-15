import React from "react";

const Home = async ({ params }) => {
  const { id } = await params;
  console.log(id);
  
  return <div>Home</div>;
};

export default Home;
