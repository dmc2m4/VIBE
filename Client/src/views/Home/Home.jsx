import React, { useEffect } from "react";

import style from "./Home.module.css";
import Carousel from '../../components/Carousel/Carousel'
import CategoriesLink from '../../components/CategoriesLink/CategoriesLink'
import { useLocation } from "react-router-dom";

const Home = () => {
 const location = useLocation();

 useEffect(()=> {
  const params = new URLSearchParams(location.search)
  console.log(params.get('status'))
 },[])
  return (
    <div className={style.container}>
      <Carousel/>
      <CategoriesLink/>
    </div>
  );
};

export default Home;
