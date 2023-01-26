import React from "react";
import style from "./Searchbar.module.css";
import lupa from "../../assets/lupas.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPage } from "../../redux/actions/cleanPage";
import updateFilters from "../../redux/actions/updateFilters";

const Searchbar = () => {
  const [search, setSearch] = useState({});
  const filters = useSelector((state) => state.Filters);
  const dispatch = useDispatch();

  function handleChange(e) {
    e.preventDefault();
    setSearch({ [e.target.name]: e.target.value });
  }

  function findProducts(e) {
    const newSearch = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    if (e.target.value === "") {
      delete newSearch[e.target.name];
    }
    dispatch(updateFilters(search));
    dispatch(cleanPage());
  }

  return (
    <div className={style.containerSearch}>
      <input
        type="text"
        name="name"
        className={style.search}
        onChange={handleChange}
        placeholder="Search..."
      />
      <img src={lupa} alt="" className={style.lupa} onClick={findProducts} />
    </div>
  );
};

export default Searchbar;
