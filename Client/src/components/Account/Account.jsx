import React from "react";
import style from "./Account.module.css";
import { LogOutGoogle } from "../../LogOutGoogle/LogOutGoogle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Account = () => {
  const clearCacheData = () => {
    caches.keys().then((name) => {
      name.forEach((name) => {
        caches.delete(name);
      });
    });
  };
  const user = useSelector((state) => state.User);

  return (
    <div className={style.menu}>
      <ul>
        <li>
          <Link to="/myaccount">My Account</Link>
        </li>
        {user.isAdmin ? (
          <li>
            <Link to="/admin-dashboard">Admin Dashbord</Link>
          </li>
        ) : null}
        <li
          onClick={() => {
            clearCacheData();
            sessionStorage.removeItem("userEmail");
            localStorage.removeItem("globalCart");
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
