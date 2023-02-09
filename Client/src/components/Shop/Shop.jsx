import React, { useState } from "react";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import CategoriesLink from "../CategoriesLink/CategoriesLink";
import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import filterIcon from "../../assets/filter-icon.png";
import "./Shop.css";
import "animate.css"
import Filters from "../Filters/Filters";
import closeBtn from "../../assets/close-button.png";

const Shop = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div
        className="shop-container"
        style={
          active
            ? { opacity: "0.5", pointerEvents: "none", scrollBehavior: "none" }
            : null
        }
      >
        <div className="categories-container">
          <div className="shop-categories">
            <CategoriesLink />
          </div>
        </div>
        <div className="shop-cards">
          <ContainerProduct />
        </div>
        <div className="filter-container">
          <button className="filter-btn" onClick={() => setActive(!active)}>
            FILTERS
            <img src={filterIcon} className="filter-img" />
          </button>
        </div>
        <div>
          <Pagination />
        </div>
      </div>

      {active ? (
        <div className="filterBox">
          <img src={closeBtn} onClick={() => setActive(!active)} />
          <Filters className="filters" />
        </div>
      ) : null}
    </div>
  );
};

export default Shop;
