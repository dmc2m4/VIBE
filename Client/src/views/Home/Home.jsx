import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <ContainerProduct />
      <Pagination />

    </div>
  );
};

export default Home;
