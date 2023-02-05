import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getAddresses from "../../redux/actions/getAdresses";
import style from './Direction.module.css'

export const Direction = () => {
  const address = useSelector((state) => state.Addresses);
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAddresses(user))
  },[dispatch])
  
  
  return (
    <div className={style.container}>
      <Link to="/myaccount">
        <button>Back</button>
      </Link>
      <h3>Address</h3>
      {address?.map  (a => (
        <div>
          <p>{a.street}</p>
          <p>{a.number}</p>
          <p>{a.zipCode}</p>
          <p>{a.province}</p>
          {a.location?<p>{a.location}</p>: null}
          {a.apartment?<p>{a.apartment}</p>: null}
          {a.description?<p>{a.description}</p>: null}
        </div>
      ))}
      <Link to='/myaccount/direction/add'>
        <p>Add</p>
      </Link>
    </div>
  );
};



