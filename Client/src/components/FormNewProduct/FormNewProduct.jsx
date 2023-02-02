import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createProduct from "../../redux/actions/createProduct";
import CloudDropzone from "../Dropzone/CloudDropzone";
import style from "./FormNewProduct.module.css";
import cleanImages from "../../redux/actions/cleanImages";

const FormNewProduct = () => {
  const dispatch = useDispatch();
  let currentImages = useSelector((state) => state.Images);
  const [newProduct, setNewProduct] = useState({});
  const [validated, setValidated] = useState(false);

  function handleChange(e) {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
    isProductValid(newProduct);
  }

  const isProductValid = (product) => {
    if (!product.name) return false;
    if (!product.size) return false;
    if (!product.color) return false;
    if (!product.category) return false;
    if (!product.gender) return false;
    if (!product.cost) return false;
    if (!product.season) return false;
    if (!product.stock) return false;
    setValidated(true);
    return true;
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (isProductValid(newProduct)) {
      dispatch(createProduct(newProduct));
      dispatch(cleanImages());
      alert("Product created successfully");
    } else {
      alert("Please complete all fields");
    }
  }
  function addInput(name, type) {
    const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <div className={style.containerInput}>
        <label>{nameFormatted}</label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={nameFormatted}
          onChange={handleChange}
          className={style.inputForm}
        />
      </div>
    );
  }
  function addSelect(name, arr) {
    const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <div className={style.containerInput}>
        <label>{nameFormatted}</label>
        <select onChange={handleChange} name={name} className={style.inputForm}>
          {<option hidden>{nameFormatted}</option>}
          {arr.map((element, i) => {
            return (
              <option value={element} key={i}>
                {element}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
  return (
    <div className={style.containerForm}>
      <form onSubmit={handleSubmit}>
        <div className={style.containerFormSecundary}>
          {addInput("name", "text")}
          {addInput("size", "text")}
          {addSelect("color", [
            "red",
            "pink",
            "black",
            "blue",
            "green",
            "brown",
            "white",
            "yellow",
          ])}
          {addSelect("season", [
            "all seasons",
            "summer",
            "spring",
            "autumn",
            "winter",
          ])}
          {addSelect("category", [
            "shirts",
            "t-shirts",
            "pants",
            "shoes",
            "shorts",
            "jackets",
            "sweatshirts",
          ])}
          {addSelect("gender", ["male", "female", "unisex"])}
          {addInput("cost", "number")}
          {addInput("stock", "number")}
          <div className={style.containerInput}>
            <label>Image</label>
            <CloudDropzone />
          </div>
        </div>
        <div className={style.containerButton}>
          <button
            type="submit"
            className={style.buttonCreate}
            disabled={validated === false || !currentImages ? true : false}
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormNewProduct;
