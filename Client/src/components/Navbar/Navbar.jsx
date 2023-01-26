import React from "react";
import { useState } from "react";
import style from "./Navbar.module.css";
import Searchbar from "../Searchbar/Searchbar";
import Favorites from "../Favorites/Favorites";
import iconVibe from "../../assets/iconVibe.png";
import car from "../../assets/car.png";
import heart from "../../assets/heart.png";
import user from "../../assets/user.png";
import Account from "../Account/Account";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import updateFilters from "../../redux/actions/updateFilters";
import getPage from "../../redux/actions/getPage";
import { cleanPage } from "../../redux/actions/cleanPage";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleFav, setToggleFav] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const dispatch = useDispatch();
  const categories = [
    "all",
    "shirts",
    "t-shirts",
    "pants",
    "shoes",
    "shorts",
    "jackets",
    "sweatshirts",
  ];
  const handleToggle = () => {
    setToggle(!toggle);
  };
  function handleChange(e) {
    let newCategory = {
      [e.target.name]:
        e.target.value !== "all"
          ? e.target.value
          : delete newCategory[`${e.target.name}`],
    };
    dispatch(updateFilters(newCategory));
    dispatch(cleanPage());
  }

  const handleToggleAll = () => {
    setToggle(false);
  };

  const withouSidebarRoutes = ["/login", "/signup"];
  const { pathname } = useLocation();
  if (withouSidebarRoutes.some((item) => pathname.includes(item))) {
    return null;
  } else {
    return (
      <nav className={style.container}>
        <div className={style.containerIcon} onClick={handleToggleAll}>
          <Link to="/home">
            <img src={iconVibe} alt="" className={style.icon} />
          </Link>
        </div>
        <div className={style.containerUl}>
          <ul className={style.containerLi}>
            <li className={style.liNav}>
              <h2 className={style.links}>Shop</h2>
            </li>
            <li className={style.liNav}>
              <select
                name="category"
                className={style.selectCategories}
                onChange={handleChange}
              >
                <option value="categories" hidden>
                  Categories
                </option>
                {categories.map((category, i) => (
                  <option
                    value={category}
                    key={i}
                    className={style.titleSelect}
                  >
                    {category}
                  </option>
                ))}
              </select>
            </li>
            <li className={style.liNav}>
              <h2 className={style.links}>About</h2>
            </li>
          </ul>
        </div>
        <div>
          <Searchbar />
        </div>
        <div className={style.containerImg}>
          <li className={style.liImg}>
            <img src={heart} alt="fav" className={style.imgNav} />
          </li>
          <li className={style.liImg}>
            <img src={car} alt="car" className={style.imgNav} />
          </li>
          <li onClick={handleToggle} className={style.liImg}>
            {" "}
            <img src={user} alt="user" className={style.imgNav} />
          </li>
        </div>
        {toggle && <Account />}
      </nav>
    );
  }
};

export default Navbar;
