import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPage } from "../../redux/actions/cleanPage";
import getPage from "../../redux/actions/getPage";
import updateFilters from "../../redux/actions/updateFilters";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const colorList = [
    "all",
    "red",
    "blue",
    "green",
    "black",
    "white",
    "brown",
    "yellow",
    "green",
    "pink",
  ];
  const sizeList = ["all", "L", "M", "S", "XS", "XL"];

  const categoryList = [
    "all",
    "shirts",
    "t-shirts",
    "pants",
    "shoes",
    "shorts",
    "jackets",
    "sweatshirts",
  ];
  // const [newFilters, setNewFiltreds] = useState({});
  const filters = useSelector((state) => state.Filters);
  function handleChange(e) {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value,
      //  !== "all"
      //   ? e.target.value
      //   : delete newFilters[`${e.target.name}`],
    };
    dispatch(updateFilters(newFilters));
    dispatch(cleanPage());
  }
  return (
    <div className={style.container}>
      <span>Colors</span>
      <select
        name="color"
        id="color"
        onChange={handleChange}
        className={style.selectFilter}
        // value={filters.color}
      >
        <option value="defaultValue" disabled>
          Color
        </option>
        {colorList.map((color, i) => (
          <option
            name="color"
            value={filters["color"] ? filters["color"] : color}
            key={i}
            selected={filters["color"] === color ? true : false}
          >
            {color}
          </option>
        ))}
      </select>
      <span>Size</span>
      <select
        name="size"
        id="size"
        onChange={handleChange}
        className={style.selectFilter}
        // value={filters.size}
      >
        <option value="defaultValue" disabled>
          Size
        </option>
        {sizeList.map((size, i) => (
          <option
            name="size"
            value={filters["size"] ? filters["size"] : size}
            key={i}
            selected={filters["size"] === size ? true : false}
          >
            {size}
          </option>
        ))}
      </select>
      <span>Categories</span>
      <select
        name="category"
        id="category"
        onChange={handleChange}
        className={style.selectFilter}
        // value={filters.category}
      >
        <option value="defaultValue" disabled>
          Categories
        </option>
        {categoryList.map((category, i) => (
          <option
            name="category"
            value={filters["category"] ? filters["category"] : category}
            key={i}
            selected={filters["category"] === category ? true : false}
          >
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
