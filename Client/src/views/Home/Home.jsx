import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import Pagination from "../../components/Pagination/Pagination";
import Filters from "../../components/Filters/Filters";
import ContainerProduct from '../../containers/containerProductHome/ContainerProduct'
import style from './Home.module.css'
import Loading from "../../components/Loading/Loading";
import { useSelector } from "react-redux";


const Home = () => {
  const product = useSelector ((state)=> state.Products)
  return (
    <div className={style.container}>
    { !product.length ?
      <Loading/>:
      <div>
      <ContainerProduct/> 
      <Pagination />
      </div>
    }
    </div>
  );
};

export default Home;
