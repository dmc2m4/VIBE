import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import style from "./Home.module.css";
import Carousel from '../../components/Carousel/Carousel'


const Home = () => {

  return (
    <div className={style.container}>
      <Carousel/>
      <ContainerProduct />
      <Pagination />
    </div>
  );
};

export default Home;
