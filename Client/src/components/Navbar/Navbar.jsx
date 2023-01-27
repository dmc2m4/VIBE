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
import { cleanPage } from "../../redux/actions/cleanPage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import getFavorites from "../../redux/actions/getFavorites";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const user = useSelector(state => state.User);
  const dispatch = useDispatch();
  const [category, setCategory] = useState({ category: undefined });
<<<<<<< HEAD
  const navigate = useNavigate();
  console.log(user);
=======
>>>>>>> 0a111de298db1a61a114ab6ae3c00b7f8d14cad1

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

<<<<<<< HEAD
  const favButton = () => {
    dispatch(getFavorites(user.email))
    navigate(`/favorites/${user.email}`)
  }

  const withouSidebarRoutes = ["/login", "/signup",];
=======
  const withouSidebarRoutes = ["/login", "/signup"];
>>>>>>> 0a111de298db1a61a114ab6ae3c00b7f8d14cad1
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
                onChange={(e) => handleChange(e)}
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
<<<<<<< HEAD
          <li className={style.liImg} >
            <img onClick={favButton} src={heart} alt="fav" className={style.imgNav} />
=======
          <li className={style.liImg}>
            <img src={heart} alt="fav" className={style.imgNav} />
>>>>>>> 0a111de298db1a61a114ab6ae3c00b7f8d14cad1
          </li>
          <li className={style.liImg}>
            <ShoppingSlider/>
          </li>
          <li onClick={handleToggle} className={style.liImg}>
            {" "}
            <img src={user2} alt="user" className={style.imgNav} />
          </li>
        </div>
        {toggle && <Account />}
      </nav>
    );
  }
};

export default Navbar;
