import React, { useState } from "react";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import CategoriesLink from "../CategoriesLink/CategoriesLink";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import filterIcon from "../../assets/filter-icon.png";
import "animate.css"
import Filters from "../Filters/Filters";
import closeBtn from "../../assets/close-button.png";
import style from './Shop.module.css'

const Shop = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div
        className={style.shopContainer}
        style={
          active
            ? { opacity: "0.5", pointerEvents: "none", scrollBehavior: "none" }
            : null
        }
      >
        <div className={style.categoriesContainer}>
          <div className={style.shopCategories}>
            <CategoriesLink />
          </div>
        </div>
        <div className={style.shopCards}>
          <ContainerProduct />
        </div>
        <div className={style.filterContainer}>
          <button className={style.filterBtn} onClick={() => setActive(!active)}>
            FILTERS
            <img src={filterIcon} className={style.filterImg} />
          </button>
        </div>
        <div>
          <Pagination />
        </div>
      </div>

      {active ? (
        <div className={style.filterBox}>
          <img src={closeBtn} onClick={() => setActive(!active)} />
          <Filters className={style.filters} />
        </div>
      ) : null}
    </div>
  );
};

export default Shop;
