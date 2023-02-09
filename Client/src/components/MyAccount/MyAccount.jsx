import { Link } from "react-router-dom";
import style from './MyAccount.module.css'
export const MyAccount = () => {
  return (
    <div className={style.container}>
      <Link to='/myaccount/profile'>
        <h4>Profile</h4>
      </Link>
      <Link to='/myaccount/addresses'>
        <h4>Addresses</h4>
      </Link>
      <Link to='/myaccount/shoppinghistory'>
        <h4>Shopping History</h4>
      </Link>
    </div>
  );
};
