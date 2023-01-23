import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import style from './Home.module.css'

const Home = () => {
  return (
    <div className={style.container}>
      <Navbar />
      <Products />
      <Pagination />
    </div>
  );
};

export default Home;
