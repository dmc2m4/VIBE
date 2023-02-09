import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Addresses.module.css";
import getAddresses from "../../redux/actions/getAddresses";
import deleteAddresses from "../../redux/actions/deleteAddresses";


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
      <Link to="/myaccount">
        <button>Back</button>
      </Link>
      <h3>Address</h3>
      {addresses?.map((a, i) => (
        // {handleDelete(a.id)}
        <div key={i}>
          <button onClick={() =>{handleDelete(a.id)}}> x </button>
          <p>{a.street}</p>
          <p>{a.number}</p>
          <p>{a.zipCode}</p>
          <p>{a.province}</p>
          {a.location ? <p>{a.location}</p> : null}
          {a.apartment ? <p>{a.apartment}</p> : null}
          {a.description ? <p>{a.description}</p> : null}
        </div>
      ))}
      <Link to="/myaccount/addresses/add">
        <p>Add</p>
      </Link>
    </div>
  );
};
