import React from "react";
import { useState } from "react";

const Filters = () => {
  const colorList = [
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
  const sizeList = ["XS", "S", "XL", "L"];
  const typeList = ["Jacket", "T-Shirt", "Pants", "Hat", "Sneakers"];
  const [filtreds, setFiltreds] = useState({
    color: [],
    size: [],
    type: [],
  });
  function handleClick(e) {
    const selected = e.target.name;
    console.log(filtreds);
    if (!filtreds.selected.includes(e.target.value)) {
      setFiltreds({ ...filtreds, [e.target.name]: e.target.value });
    }
  }
  return (
    <div>
      <span>Colors</span>
      <select multiple name="color" id="color">
        {colorList.map((color) => (
          <option value={color} onClick={(e) => handleClick(e)}>
            {color}
          </option>
        ))}
      </select>
      <span>Size</span>
      <select multiple name="size" id="size">
        {sizeList.map((size) => (
          <option value={size} onClick={(e) => handleClick(e)}>
            {size}
          </option>
        ))}
      </select>
      <span>Type</span>
      <select multiple name="type" id="type">
        {typeList.map((type) => (
          <option value={type} onClick={(e) => handleClick(e)}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
