import { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getAddresses from "../../redux/actions/getAdresses";

export const Direction = () => {
  const address = useSelector((state) => state.Addresses);
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAddresses(user))
  },[dispatch])
  
  console.log(user.email);
  console.log(address);
  
  return (
    <div>
      <Link to="/myaccount">
        <button>Back</button>
      </Link>
      <h3>Address</h3>
      {address?.map  (a => (
        <p>{a.street}</p>
      ))}
      <Link to='/myaccount/direction/add'>
        <p>Add</p>
      </Link>
    </div>
  );
};



