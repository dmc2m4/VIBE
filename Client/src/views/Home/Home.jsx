import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Pagination />
      <Products />
    </div>
  );
};

export default Home;
