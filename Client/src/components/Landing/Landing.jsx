import React from "react";
import Login from "../Login/Login";
import { NavLink } from "react-router-dom";

const landing = () => {
  return (
    <div>
      {/* <img src='' alt=''></img> */}
      <NavLink to="login">
        <Login />
      </NavLink>
    </div>
  );
};

export default landing;
