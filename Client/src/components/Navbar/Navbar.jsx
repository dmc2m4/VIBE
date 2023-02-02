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
import { Link, useLocation, useNavigate } from "react-router-dom";
import getFavorites from "../../redux/actions/getFavorites";
import getPage from "../../redux/actions/setCurrentPage";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [category, setCategory] = useState({});
  const navigate = useNavigate();

  //  localStorage.setItem("user", JSON.stringify(user));
  //     console.log(user);

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

  const withouSidebarRoutes = ["/login", "/signup"];
  const { pathname } = useLocation();
  if (withouSidebarRoutes.some((item) => pathname.includes(item))) {
    return null;
  } else {
    return (
      <nav className={style.container}>
        <div className={style.containerIcon} onClick={handleToggleAll}>
          <Link to='/'>
            <img src={iconVibe} alt='' className={style.icon} />
          </Link>
        </div>
        <div className={style.containerUl}>
          <ul className={style.containerLi}>
            <li className={style.liNav}>
              <Link to='/home'>
                <h2 className={style.links} onClick={() => cleanProducts()}>
                  Home
                </h2>
              </Link>
            </li>
            <li className={style.liNav}>
              <select
                name='category'
                className={style.selectCategories}
                onChange={handleChange}
              >
                <option value='categories' hidden>
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
              <Link to='/about'>
                <h2 className={style.links}>About</h2>
              </Link>
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
              alt='fav'
              className={style.imgNav}
            />
          </li>
          <li className={style.liImg}>
            <ShoppingSlider />
          </li>
          <li onClick={handleToggle} className={style.liImg}>
            {" "}
            <img src={user2} alt='user' className={style.imgNav} />
          </li>
        </div>
        {toggle && <Account />}
      </nav>
    );
  }
};

export default Navbar;
