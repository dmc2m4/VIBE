import React from "react";
import style from "./Searchbar.module.css";
import lupa from "../../assets/lupas.png";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanPage } from "../../redux/actions/cleanPage";
import getPage from "../../redux/actions/getPage";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState({ name: undefined });
  const page = useSelector((state) => state.Page);
  function handleChange(e) {
    e.preventDefault();
    setName({ name: e.target.value.toUpperCase() });
  }

  function findProducts() {
    // dispatch(getPage(page, name));
    // dispatch(cleanPage());
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
