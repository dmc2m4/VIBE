import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <Filters />
      <Products />
      <Pagination />
    </div>
  );
};

export default Home;
