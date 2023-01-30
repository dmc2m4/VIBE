import React from "react";
import style from "./Account.module.css";
import { LogOutGoogle } from "../../LogOutGoogle/LogOutGoogle";
import { MyAccount } from "../MyAccount/MyAccount";

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
          <a href='/createProduct'><MyAccount/></a>
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
