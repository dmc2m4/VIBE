import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Filters = () => {
  const dispatch = useDispatch();
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
    color: "",
    size: "",
    type: "",
  });
  function handleChange(e) {
    setFiltreds({ ...filtreds, [e.target.name]: e.target.value });
    console.log(filtreds);
  }
  useEffect(() => {
    // dispatch(getPage());
  }, [filtreds]);
  return (
    <div>
      <span>Colors</span>
      <select name="color" id="color" onChange={handleChange}>
        {colorList.map((color, i) => (
          <option name="color" value={color} key={i}>
            {color}
          </option>
        ))}
      </select>
      <span>Size</span>
      <select name="size" id="size" onChange={handleChange}>
        {sizeList.map((size, i) => (
          <option name="size" value={size} key={i}>
            {size}
          </option>
        ))}
      </select>
      <span>Type</span>
      <select name="type" id="type" onChange={handleChange}>
        {typeList.map((type, i) => (
          <option name="type" value={type} key={i}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
