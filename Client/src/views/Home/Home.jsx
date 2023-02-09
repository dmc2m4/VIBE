import React, { useEffect } from "react";

import style from "./Home.module.css";
import Carousel from "../../components/Carousel/Carousel";
import CategoriesLink from "../../components/CategoriesLink/CategoriesLink";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import putPurchases from "../../redux/actions/putPurchases";

const Home = () => {
  const location = useLocation();
  const cart = localStorage.getItem("globalCart");
  const user = sessionStorage.getItem("userEmail");
  const dispatch = useDispatch();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("status") !== null) {
      if (params.get("status") === "approved") {
        dispatch(putPurchases(JSON.parse(cart).items, user)).then((res) => {
          localStorage.removeItem("globalCart");
        });
      }
    }
  }, []);

  return (
    <div className={style.container}>
      <Carousel />
      <CategoriesLink />
    </div>
  );
};

export default Home;
