import React from "react";
import { NavLink } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      {/* <img src='' alt=''></img> */}
      <NavLink to="/signup">
        <button>Sign Up</button>
      </NavLink>
    </div>
  );
};

export default Landing;
