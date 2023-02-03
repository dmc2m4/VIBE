import React from "react";
import style from "./Account.module.css";
import { LogOutGoogle } from "../../LogOutGoogle/LogOutGoogle";
import { Link } from "react-router-dom";

const Account = () => {
  const clearCacheData = () => {
    caches.keys().then((name) => {
      name.forEach((name) => {
        caches.delete(name);
      });
    });
  };

  return (
    <div className={style.menu}>
      <ul>
        <li>
          <a href='/' className='title'>
            My orders
          </a>
        </li>
        <li>
          <Link to='/myaccount'>
            My Account
          </Link>
        </li>
        <li>
          <Link to='/createProduct'>
          Create Product
          </Link>
        </li>
        <li
          onClick={() => {
            clearCacheData();
          }}
        >
          {" "}
          <LogOutGoogle />{" "}
        </li>
      </ul>
    </div>
  );
};

export default Account;
