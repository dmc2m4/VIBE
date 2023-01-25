import React from "react";
import Pagination from "../../components/Pagination/Pagination";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import style from "./Home.module.css";
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";

const Home = () => {
  const product = useSelector((state) => state.Products);
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
