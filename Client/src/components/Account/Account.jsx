import React from "react";
import style from "./Account.module.css";
import { LogOutGoogle } from "../../LogOutGoogle/LogOutGoogle";

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
          <a href='/createProduct'>My account</a>
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
