import { Link } from "react-router-dom";
import style from './MyAccount.module.css'
import Profile from "./Profile"
export const MyAccount = () => {
  return (
    <div className={style.container}>
      <Profile/>
      <Link to='/myaccount/addresses'>
        <h4>Addresses</h4>
      </Link>
      <Link to='/myaccount/purchases'>
        <h4>Shopping History</h4>
      </Link>
    </div>
  );
};
