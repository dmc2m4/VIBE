import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.container}>
      <div>
        <ContainerProduct />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
