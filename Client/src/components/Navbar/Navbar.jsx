import React from "react";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar";
import Favorites from "../Favorites/Favorites";

const Navbar = () => {
  return (
    <div className="navbar_content">
      <Searchbar />
      <Favorites />
    </div>
  );
};

export default Navbar;
