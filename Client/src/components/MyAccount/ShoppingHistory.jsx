import { Link } from "react-router-dom";
import style from './ShoppingHistory.module.css'
export const ShoppingHistory = () => {
  return (
    <div className={style.container}>
      <Link to='/myaccount'>
        <button>Back</button>
      </Link>
      <h4>Shoppin History</h4>
    </div>
  );
};
