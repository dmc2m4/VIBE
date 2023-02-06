import React from "react";
import ContainerProduct from "../../containers/containerProductHome/ContainerProduct";
import CategoriesLink from "../CategoriesLink/CategoriesLink";
import Pagination from "../Pagination/Pagination";
import filterIcon from "../../assets/filter-icon.png";
import Footer from "../Footer/Footer";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="shop-categories">
        <CategoriesLink />
      </div>
      <div className="shop-cards">
        <ContainerProduct />
      </div>
      {/* <div className="filter-container">
        <button className="filter-btn">
          FILTERS
          <img src={filterIcon} className="filter-img" />
        </button>
      </div> */}
      <Pagination />
      <Footer />
    </div>
  );
};

export default Shop;
