import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userLogin from "../../redux/actions/userLogin"

export const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state)=> state.User)
console.log(user);
  // useEffect(()=>{
  //   dispatch(userLogin(user));
  // },[dispatch,user])

  return (
    <div>
      {/* <img src={user.picture} alt={user.name} /> */}
      <p>{user.name}</p>
      <Link to='/profile/data'>Data</Link>
      <Link to='/profile/history'>ShoppingHistory</Link>
      <Link to='/profile/direction'>Direction</Link>
    </div>
  );
};
