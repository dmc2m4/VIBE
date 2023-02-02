import { Link } from "react-router-dom";

export const ShoppingHistory = () => {
  return (
    <div>
      <Link to='/myaccount'>
        <button>Back</button>
      </Link>
      <h4>Shoppin History</h4>
    </div>
  );
};
