import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import style from "./Home.module.css";
import Carousel from '../../components/Carousel/Carousel'
import CategoriesLink from '../../components/CategoriesLink/CategoriesLink'

const Home = () => {

  return (
    <div className={style.container}>
      <Carousel/>
      <CategoriesLink/>
      <ContainerProduct />
      <Pagination />
    </div>
  );
};

export default Home;
