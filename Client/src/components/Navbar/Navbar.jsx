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


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleFav, setToggleFav] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const dispatch = useDispatch();
  const [category, setcategory] = useState({
    category: "",
  });
  useEffect(()=>{
    dispatch(updateFilters(category))
  },[dispatch, category])
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
    setcategory({
      ...category,
      [e.target.name]: e.target.value !== "all" ? e.target.value : null,
    });
  };

  const handleToggleAll = () => {
    setToggle(false);
    setToggleFav(false);
    setToggleOrders(false);
  };
  return (
    <nav className={style.container}>
      <div className={style.containerIcon} onClick={handleToggleAll}>
        <img src={iconVibe} alt='' className={style.icon} />
      </div>
      <div className={style.containerUl}>
        <ul className={style.containerLi}>
          <li className={style.liNav}>
            <h2 className={style.links}>Shop</h2>
          </li>
          <li className={style.liNav}>
            <select name='category' className={style.selectCategories}>
              {categories.map((category, i) => (
                <option
                  value={category}
                  key={i}
                  className={style.titleSelect}
                  onClick={(e) => handleChange(e)}
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
        <li className={style.liImg} onClick={handleToggle}>
          <img src={heart} alt='fav' className={style.imgNav} />
        </li>
        <li className={style.liImg} onClick={handleToggle}>
          <img src={car} alt='car' className={style.imgNav} />
        </li>
        <li onClick={handleToggle} className={style.liImg}>
          {" "}
          <img src={user} alt='user' className={style.imgNav} />
        </li>
      </div>
      {toggle && <Account />}
    </nav>
  );
};

export default Navbar;
