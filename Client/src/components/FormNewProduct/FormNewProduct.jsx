import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import createProduct from "../../redux/actions/createProduct";
import CloudDropzone from "../Dropzone/CloudDropzone";
import style from "./FormNewProduct.module.css";
import cleanImages from "../../redux/actions/cleanImages";
import removeImage from "../../redux/actions/removeImage";

const FormNewProduct = () => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({});
  const [validated, setValidated] = useState(false);
  let currentImages = useSelector((state) => state.Images);

  function handleChange(e) {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  }

  const validate = (product) => {
    if (!product.name) return false;
    if (!product.size) return false;
    if (!product.color) return false;
    if (!product.category) return false;
    if (!product.gender) return false;
    if (!product.cost) return false;
    if (!product.season) return false;
    if (!product.stock) return false;
    setValidated(true);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (validate) {
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

  function addSelect(name, arr, dis = false) {
    const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <div className={style.containerInput}>
        <label>{nameFormatted}</label>
        <select
          onChange={handleChange}
          name={name}
          className={style.inputForm}
          disabled={dis}
        >
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

  function handleDelete(e) {
    dispatch(removeImage(e.target.value));
  }

  useEffect(() => {
    validate(newProduct);
  }, [newProduct, currentImages]);

  return (
    <div className={style.containerForm}>
      <form onSubmit={handleSubmit}>
        <div className={style.containerFormSecundary}>
          {addInput("name", "text")}
          {addSelect("color", [
            "red",
            "pink",
            "black",
            "blue",
            "green",
            "brown",
            "white",
            "yellow",
            "grey",
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
            "accesories",
          ])}
          {addSelect("gender", ["male", "female", "unisex"])}
          {addInput("cost", "number")}
          {addInput("stock", "number")}
          {addSelect(
            "size",
            newProduct.category === "shoes"
              ? [
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
                ]
              : ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
            newProduct.category === null ? true : false
          )}
          <div className={style.containerInput}>
            <label>Image</label>
            <CloudDropzone />
          </div>
        </div>
        <div className={style.containerButton}>
          <button
            type="submit"
            className={style.buttonCreate}
            disabled={!validated || !currentImages ? true : false}
            onClick={() =>
              setNewProduct({
                ...newProduct,
                img: currentImages,
              })
            }
          >
            Create Product
          </button>
        </div>
      </form>
      <div className={style.containerImages}>
        {currentImages
          ? currentImages?.split(",").map((image, i) => {
              return image ? (
                <button
                  className={style.images}
                  value={image}
                  key={i}
                  onClick={(e) => handleDelete(e)}
                >
                  {image ? <img src={image} key={i} /> : null}
                </button>
              ) : null;
            })
          : null}
      </div>
    </div>
  );
};

export default FormNewProduct;
