import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import style from "./Home.module.css";
import Loading from "../../components/Loading/Loading";
import Carousel from '../../components/Carousel/Carousel'
import { useSelector } from "react-redux";
import ImagenHome from "../../components/ImagenHome/ImagenHome";

const Home = () => {
  const product = useSelector((state) => state.Products);
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
