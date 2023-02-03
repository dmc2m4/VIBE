import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Direction = () => {
  const adress = useSelector((state) => state.Adress);

  return (
    <div>
      <Link to="/myaccount">
        <button>Back</button>
        {adress.nameandsurname ? adress : null}
      </Link>
      <h3>Address</h3>
      <Link to="/myaccount/direction/add">
        <p>Add</p>
      </Link>
    </div>
  );
};
