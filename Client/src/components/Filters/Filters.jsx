import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cleanPage from "../../redux/actions/cleanPage";
import updateFilters from "../../redux/actions/updateFilters";
import style from "./Filters.module.css";

const Filters = () => {
  const dispatch = useDispatch();
  const colorList = [
    "All",
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
  function setSize() {
    if (filters["category"] === "shoes") {
      return [
        "All",
        "33",
        "34",
        "35",
        "36",
        "37",
        "38",
        "39",
        "40",
        "41",
        "42",
        "43",
        "44",
      ];
    }
    return ["All", "XXS", "XS", "S", "M", "L", "XL", "XXL"];
  }
  const categoryList = [
    "All",
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
    if (e.target.value === "All") {
      delete newFilters[e.target.name];
    }
    dispatch(updateFilters(newFilters));
    dispatch(cleanPage());
  }

  return (
    <div className={style.container}>
        <h4>Colours</h4>
      <div className={style.contentBox}>
        {colorList.map((color, i) => (
          <button
            className={style.miniColour}
            value={color}
            name="color"
            onClick={handleChange}
            selected={filters["color"] === color ? true : false}
            style={
              filters["color"] === color
                ? { border: "5px solid", borderColor: "rgb(25, 110, 86)" }
                : null
            }
          >
            <span
              key={i}
              style={{
                background: `${color}`,
                height: 40,
                width: 40,
                borderRadius: 4,
              }}
            />
            {color}
          </button>
        ))}
      </div>
      <h4>Size</h4>
      <div
        name="size"
        id="size"
        onChange={handleChange}
        className={style.contentBox}
      >
        {setSize().map((size, i) => (
          <button
            name="size"
            value={size}
            key={i}
            onClick={handleChange}
            selected={filters["size"] === size ? true : false}
            style={
              filters["size"] === size
                ? { border: "5px solid", borderColor: "rgb(25, 110, 86)" }
                : null
            }
            className={style.sizeSelections}
          >
            {size}
          </button>
        ))}
      </div>
      <h4>Category</h4>
      <div
        name="category"
        id="category"
        onChange={handleChange}
        className={style.contentBox}
      >
        {categoryList.map((category, i) => (
          <button
            name="category"
            value={category}
            key={i}
            onClick={handleChange}
            selected={filters["category"] === category ? true : false}
            style={
              filters["category"] === category
                ? { border: "5px solid", borderColor: "rgb(25, 110, 86)" }
                : null
            }
            className={style.selections}
          >
            {category}
          </button>
        ))}
      </div>
      <h4>Alphabetically</h4>
      <div
        name="alphabetically"
        id="alphabetically"
        className={style.contentBox}
        onChange={handleChange}
      >
        <button
          name="alphabetically"
          value="All"
          onClick={handleChange}
          selected={filters["alphabetically"] === "All" ? true : false}
          style={
            filters["alphabetically"] === "All"
              ? { border: "5px solid", borderColor: "rgb(25, 110, 86)" }
              : null
          }
          className={style.selections}
        >
          All
        </button>
        <button
          name="alphabetically"
          value="A-Z"
          onClick={handleChange}
          selected={filters["alphabetically"] === "A-Z" ? true : false}
          style={
            filters["alphabetically"] === "A-Z"
              ? { border: "5px solid", borderColor: "rgb(25, 110, 86)" }
              : null
          }
          className={style.selections}
        >
          A-Z
        </button>
        <button
          name="alphabetically"
          value="Z-A"
          onClick={handleChange}
          selected={filters["alphabetically"] === "Z-A" ? true : false}
          style={
            filters["alphabetically"] === "Z-A"
              ? { border: "5px solid", borderColor: "rgb(25, 110, 86)" }
              : null
          }
          className={style.selections}
        >
          Z-A
        </button>
      </div>
      <h4>Price</h4>
      <div name="price" id="price" className={style.contentBox}>
        <button
          value="All"
          name="price"
          onClick={handleChange}
          selected={filters["price"] === "All" ? true : false}
          style={
            filters["price"] === "All"
              ? { border: "5px solid", borderColor: "rgb(25, 110, 86)" }
              : null
          }
          className={style.selections}
        >
          All
        </button>
        <button
          name="price"
          value="Ascending Price"
          onClick={handleChange}
          selected={filters["price"] === "Ascending Price" ? true : false}
          style={
            filters["price"] === "Ascending Price"
              ? { border: "5px solid", borderColor: "rgb(25, 110, 86)" }
              : null
          }
          className={style.selections}
        >
          Ascending Price
        </button>
        <button
          name="price"
          value="Descending Price"
          onClick={handleChange}
          selected={filters["price"] === "Descending Price" ? true : false}
          style={
            filters["price"] === "Descending Price"
              ? { border: "5px solid", borderColor: "rgb(25, 110, 86)" }
              : null
          }
          className={style.selections}
        >
          Descending Price
        </button>
      </div>
    </div>
  );
};

export default Filters;
