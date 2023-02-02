import { Link } from "react-router-dom";

export const MyAccount = () => {
  return (
    <div>
      <Link to='/myaccount/profile'>
        <h4>Profile</h4>
      </Link>
      <Link to='/myaccount/direction'>
        <h4>Direction</h4>
      </Link>
      <Link to='/myaccount/shoppinghistory'>
        <h4>Shppping History</h4>
      </Link>
    </div>
  );
};
