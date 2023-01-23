import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPage } from "../../redux/actions/cleanPage";
import getPage from "../../redux/actions/getPage";
import updateFilters from "../../redux/actions/updateFilters";
import style from './Filters.module.css'

const Filters = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.Page);
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
  const [filtreds, setFiltreds] = useState({
    color: undefined,
    size: undefined,
    category: undefined,
  });
  function handleChange(e) {
    setFiltreds({
      ...filtreds,
      [e.target.name]: e.target.value !== "all" ? e.target.value : null,
    });
    dispatch(cleanPage());
  }

  useEffect(() => {
    dispatch(updateFilters(filtreds));
    dispatch(getPage(page, filtreds));
  }, [filtreds]);

  return (
    <div className={style.container}>
      <span>Colors</span>
      <select name="color" id="color" onChange={handleChange} className={style.selectFilter}>
        {colorList.map((color, i) => (
          <option name="color" value={color} key={i}>
            {color}
          </option>
        ))}
      </select>
      <span>Size</span>
      <select name="size" id="size" onChange={handleChange} className={style.selectFilter}>
        {sizeList.map((size, i) => (
          <option name="size" value={size} key={i}>
            {size}
          </option>
        ))}
      </select>
      <span>Categories</span>
      <select name="category" id="category" onChange={handleChange} className={style.selectFilter}>
        {categoryList.map((category, i) => (
          <option name="category" value={category} key={i}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
