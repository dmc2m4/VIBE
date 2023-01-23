import React from "react";
import style from './Searchbar.module.css';
import lupa from '../../assets/lupas.png';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../redux/actions/searchProducts";
import { cleanPage } from "../../redux/actions/cleanPage";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const products = useSelector(state => state.Products);
  const dispatch = useDispatch();

  function handleChange (e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function findProducts () {
    const filter = products.filter(p => p.name.toUpperCase().includes(search.toUpperCase()));
    if(!filter.length){
      alert('Products not found')
    }else {
      dispatch(searchProducts(products));
      dispatch(cleanPage());
      console.log('hola');
    }
  }


  return (
    <div className={style.containerSearch}>
      <input type="text" className={style.search} onChange={handleChange} placeholder="Search..."  /> 
      <img src={lupa} alt="" className={style.lupa} onClick={findProducts} />
    </div>
  );
};

export default Searchbar;
