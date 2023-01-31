import React from "react";
import style from "./Searchbar.module.css";
import lupa from "../../assets/lupas.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import cleanPage from "../../redux/actions/cleanPage";
import updateFilters from "../../redux/actions/updateFilters";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState({});
  function handleChange(e) {
    e.preventDefault();
    setName({ name: e.target.value.toUpperCase() });
  }

  function findProducts() {
    dispatch(cleanPage());
    dispatch(updateFilters(name));
  }

  return (
    <div className={style.containerSearch}>
      <input
        type="text"
        className={style.search}
        onChange={handleChange}
        placeholder="Search..."
      />
      <img src={lupa} alt="" className={style.lupa} onClick={findProducts} />
    </div>
  );
};

export default Searchbar;
