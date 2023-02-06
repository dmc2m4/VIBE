import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cleanPage from "../../redux/actions/cleanPage";
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
    "grey",
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
    "accesories",
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
      <select
        name="color"
        id="color"
        onChange={handleChange}
        className={style.selectFilter}
      >
        <option disabled selected>
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
      <select
        name="size"
        id="size"
        onChange={handleChange}
        className={style.selectFilter}
      >
        <option disabled selected>
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
      <select
        name="category"
        id="category"
        onChange={handleChange}
        className={style.selectFilter}
      >
        <option disabled selected>
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
        <option disabled selected>
          Alphabet
        </option>
        <option
          value="all"
          selected={filters["alphabetically"] === "all" ? true : false}
        >
          All
        </option>
        <option
          value="A-Z"
          selected={filters["alphabetically"] === "A-Z" ? true : false}
        >
          A-Z
        </option>
        <option
          value="Z-A"
          selected={filters["alphabetically"] === "Z-A" ? true : false}
        >
          Z-A
        </option>
      </select>
      <select
        name="price"
        id="price"
        onChange={handleChange}
        className={style.selectFilter}
      >
        <option disabled selected>
          Price
        </option>
        <option
          value="all"
          selected={filters["price"] === "all" ? true : false}
        >
          all
        </option>
        <option
          value="Ascending Price"
          selected={filters["price"] === "Ascending Price" ? true : false}
        >
          Ascending Price
        </option>
        <option
          value="Descending Price"
          selected={filters["price"] === "Descending Price" ? true : false}
        >
          Descending Price
        </option>
      </select>
    </div>
  );
};

export default Filters;
