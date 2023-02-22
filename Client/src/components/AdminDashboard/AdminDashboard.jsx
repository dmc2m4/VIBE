import React from "react";
import { NavLink } from "react-router-dom";
import style from "./AdminDashboard.module.css";
import accounts from "../../assets/myAccount.png";
import products from "../../assets/createProduct.png";

const AdminDashboard = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <h3 className={style.dashText}>Admin Dashboard</h3>
        <NavLink to="/admin-management" style={{textDecoration:"none"}}>
          <button className={style.button}>
            <img src={accounts} className={style.image} />
            Users Dashboard
          </button>
        </NavLink>
        <NavLink to="/createProduct" style={{textDecoration:"none"}}>
          <button className={style.button}>
            <img src={products} className={style.image} />
            Create Product
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminDashboard;
