import { Link } from "react-router-dom";
import user from '../../assets/user2.png'
import list from '../../assets/files.png'
import direction from '../../assets/direction.png'
import style from './MyAccount.module.css'
import Profile from "./Profile"
export const MyAccount = () => {
  return (
    <div className={style.container}>
      <Profile/>
      <Link to='/myaccount/addresses'>
        <h4>Addresses</h4>
      </Link>
      <Link to='/myaccount/purchases' className={style.link}>
      <div className={style.containerCat}>
      <div className={style.containerIcon}>
      <img src={list} alt="list" className={style.icon}/>
      </div>
        <h4>Shoppping History</h4>
        </div>
      </Link>
    </div>
  );
};
