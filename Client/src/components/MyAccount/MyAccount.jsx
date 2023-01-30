
import { Link } from "react-router-dom";
import { Profile } from "./Profile";


export const MyAccount = () => {


  return (
    <div>

      <Link to ='/profile'>
        <Profile/>
      </Link>

    </div>
  );
};




