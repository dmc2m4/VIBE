import React from "react";
import { useState } from "react";
import style from "./Navbar.module.css";
import Searchbar from "../Searchbar/Searchbar";
import iconVibe from "../../assets/iconVibe.png";
import heart from "../../assets/heart.png";
import user2 from "../../assets/user.png";
import Account from "../Account/Account";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ShoppingSlider from "../ShoppingSlider/ShoppingSlider";
import updateFilters from "../../redux/actions/updateFilters";
import cleanPage from "../../redux/actions/cleanPage";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import getFavorites from "../../redux/actions/getFavorites";
import getPage from "../../redux/actions/getPage";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [category, setCategory] = useState({ category: undefined });
  const navigate = useNavigate();


  console.log(user);

  useEffect(() => {
    dispatch(updateFilters(category));
    // localStorage.getItem("user")
    // console.log(user);
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
  function handleChange(e) {
    const newCategory = {
      [e.target.name]: e.target.value,
    };
    if (e.target.value === "all") {
      delete newCategory[e.target.name];
    }
    dispatch(updateFilters(newCategory));
    dispatch(cleanPage());
  }

  const handleToggleAll = () => {
    setToggle(false);
  };

  const favButton = () => {
    dispatch(getFavorites(user.email));
    navigate(`/favorites/${user.email}`);
  };
  const cleanProducts = () => {
    dispatch(getPage());
  };

  const shopButton = () => {
    dispatch(getPage());
  };

  return (
    <div className={style.containerNav}>
    <nav className={style.container}>
      <div className={style.containerIcon} onClick={handleToggleAll}>
        <Link to="/home">
          <img src={iconVibe} alt="" className={style.icon} />
        </Link>
      </div>
      <div className={style.containerUl}>
        <ul className={style.containerLi}>
          <li className={style.liNav}>
            <NavLink
              to="/home"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h2 className={style.links} onClick={() => cleanProducts()}>
                Home
              </h2>
            </NavLink>
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
                <option value={category} key={i} className={style.titleSelect}>
                  {category}
                </option>
              ))}
            </select>
          </li>
          <li className={style.liNav}>
            <NavLink
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <h2 className={style.links}>About</h2>
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Searchbar />
      </div>
      <div className={style.containerImg}>
        <li className={style.liImg}>
          <img
            onClick={favButton}
            src={heart}
            alt="fav"
            className={style.imgNav}
          />
        </li>
        <li className={style.liImg}>
          <ShoppingSlider />
        </li>
        <li onClick={handleToggle} className={style.liImg}>
          {" "}
          <img src={user2} alt="user" className={style.imgNav} />
        </li>
      </div>
      {toggle && <Account />}
    </nav>
    </div>
  );
};

export default Navbar;
