import { Link } from "react-router-dom";
import { Add } from "./Add";

export const Direction = () => {
  return (
    <div>
      <Link to='/profile'>
        <button>Back</button>
      </Link>
      <h3>Address</h3>
      <Link to='profile/direction/add'>
        <p>Add</p>
      </Link>
    </div>
  );
};
