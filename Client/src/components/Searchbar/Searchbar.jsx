import React from "react";
import style from './Searchbar.module.css';
import lupa from '../../assets/lupas.png';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { searchProducts } from "../../redux/actions/searchProducts";
// import { cleanPage } from "../../redux/actions/cleanPage";
import getPage from "../../redux/actions/getPage";

const Searchbar = () => {
  // const [search, setSearch] = useState("");
  // const products = useSelector(state => state.Products);
  const dispatch = useDispatch();
  const [name,setName] = useState("")

  function handleChange (e) {
    e.preventDefault();
   setName(e.target.value);
  }

  // function findProducts () {
  //   const filter = products.filter(p => p.name.toUpperCase().includes(search.toUpperCase()));
  //   if(!filter.length){
  //     alert('Products not found')
  //   }else {
  //     dispatch(searchProducts(products));
  //     dispatch(cleanPage());
  //     console.log('hola');
  //   }
  // }

  return (
    <div className={style.containerSearch}>
      <form onSubmit={(e)=>{
        e.preventDefault();
        dispatch(getPage(name))
        setName("");
      }}>

      <input type="text" className={style.search} value={name} onChange={(e) =>handleChange(e)} placeholder="Search..."  /> 
      <img src={lupa} alt="" className={style.lupa} type="submit"/>
      </form>
    </div>
  );
};

export default Searchbar;
