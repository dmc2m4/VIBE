import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Addresses.module.css";
import getAddresses from "../../redux/actions/getAddresses";
import deleteAddresses from "../../redux/actions/deleteAddresses";
import direction from '../../assets/direction.png'
import add from '../../assets/add.png'



export const Addresses = () => {
  const user = sessionStorage.getItem('userEmail')
  const addresses = useSelector(state => state.Addresses)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteAddresses(id)).then(
      res => {
        dispatch(getAddresses(user))
      }
    )
  };

  useEffect(()=> {
    dispatch(getAddresses(user))
  },[dispatch])

  return (
    <div className={style.container}>
     <div className={style.back}>
      <Link to='/myaccount' className={style.back}>
      <img src='https://cdn-icons-png.flaticon.com/512/507/507257.png' alt="back" className={style.iconBack}/>
      </Link>
      </div>
      <div className={style.containerTitle}>
      <div className={style.containerIcon}>
      <img src={direction} alt="direction" className={style.icon}/>
      </div>
      <h1>Address</h1>
      </div>
      <div className={style.containerDirection}>
      {addresses?.map((a, i) => (
        // {handleDelete(a.id)}
        <div key={i} className={style.cardDirection}>
          <button onClick={() =>{handleDelete(a.id)}} className={style.buttonDelete}> x </button>
          <p><b>Street :</b> {a.street}</p>
          <p><b>Number :</b> {a.number}</p>
          <p><b>Zip-Code :</b> {a.zipCode}</p>
          <p><b>Provice :</b> {a.province}</p>
          {a.location ? <p><b>Location :</b> {a.location}</p> : null}
          {a.apartment ? <p><b>Apartment:</b> {a.apartment}</p> : null}
          {a.description ? <p><b>Description : </b> {a.description}</p> : null}
        </div>
      ))}</div>
      <div className={style.containerPrincipal} >
      <Link to="/myaccount/addresses/add" className={style.containerAdd}>
        <img src={add} alt='add' className={style.iconAdd}/>
        <p>Add</p>
      </Link>
      </div>
    </div>
  );
};
