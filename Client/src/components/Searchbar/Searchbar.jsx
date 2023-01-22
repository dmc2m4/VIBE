import React from "react";
import style from './Searchbar.module.css'
import lupa from '../../assets/lupas.png'

const Searchbar = () => {
  return (
    <div className={style.containerSearch}>
      <input type="text" className={style.search} placeholder="Search..."  /> 
      <img src={lupa} alt="" className={style.lupa} />
    </div>
  );
};

export default Searchbar;
