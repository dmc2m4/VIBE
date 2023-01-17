import React from "react";
import "./Searchbar.css";
import iconSearch from "../../assets/search_icon.svg";

const Searchbar = () => {
  return (
    <div className="searchbar_box">
      <input type="text" className="search_input" />
      <img src={iconSearch} alt="icon_search" className="icon_search"/>
    </div>
  );
};

export default Searchbar;
