import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPage } from "../../redux/actions/cleanPage";
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

  const filters = useSelector((state) => state.Filters);
  function handleChange(e) {
    const newFilters = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    if (e.target.value === "all") {
      delete newFilters[e.target.name];
    }
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
      >
        <option value="defaultValue" disabled>
          Color
        </option>
        {colorList.map((color, i) => (
          <option
            name="color"
            value={color}
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
      >
        <option value="defaultValue" disabled>
          Size
        </option>
        {sizeList.map((size, i) => (
          <option
            name="size"
            value={size}
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
      >
        <option value="defaultValue" disabled>
          Categories
        </option>
        {categoryList.map((category, i) => (
          <option
            name="category"
            value={category}
            key={i}
            selected={filters["category"] === category ? true : false}
          >
            {category}
          </option>
        ))}
      </select>
      <select
        name="alphabetically"
        id="alphabetically"
        onChange={handleChange}
        className={style.selectFilter}
      >
        <option
          value="A-Z"
          selected={filters["alphabetically"] === alphabetically ? true : false}
        >
          A-Z
        </option>
        <option
          value="Z-A"
          selected={filters["alphabetically"] === alphabetically ? true : false}
        >
          Z-A
        </option>
      </select>
    </div>
  );
};

export default Filters;
