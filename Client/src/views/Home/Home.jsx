import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import style from "./Home.module.css";
import Carousel from '../../components/Carousel/Carousel'
import ImagenHome from "../../components/ImagenHome/ImagenHome";

const Home = () => {

  return (
    <div className={style.container}>
      <Carousel/>
      <ImagenHome/>
      <ContainerProduct />
      <Pagination />
      
    </div>
  );
};

export default Home;
