import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Filters />
      <Products />
      <Pagination />
    </div>
  );
};

export default Home;
