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
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleFav, setToggleFav] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.Page);
  const [category, setCategory] = useState({ category: undefined });
  useEffect(() => {
    dispatch(updateFilters(category));
  }, [dispatch, category]);
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
  const handleChange = (e) => {
    setCategory({
      category: e.target.value !== "all" ? e.target.value : null,
    });
    dispatch(cleanPage());
  };

  const handleToggleAll = () => {
    setToggle(false);
 
  };
  return (
    <nav className={style.container}>
      <div className={style.containerIcon} onClick={handleToggleAll}>
        <Link to ="/home">
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
              onChange={(e) => handleChange(e)}
            >
              <option value="categories" hidden>
                Categories
              </option>
              {categories.map((category, i) => (
                <option value={category} key={i} className={style.titleSelect}>
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
        <li className={style.liImg} >
          <img src={heart} alt="fav" className={style.imgNav} />
        </li>
        <li className={style.liImg} >
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
};

export default Navbar;
