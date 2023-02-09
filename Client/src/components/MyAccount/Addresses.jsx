import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Addresses.module.css";
import getAddresses from "../../redux/actions/getAddresses";
import deleteAddresses from "../../redux/actions/deleteAddresses";
import setSwap from "../../redux/actions/setSwap";

export const Addresses = () => {
  const user = useSelector((state) => state.User);
  const swap = useSelector((state) => state.Swap);
  const address = useSelector((state) => state.Addresses)
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteAddresses(id));
    dispatch(setSwap())
  };

  useEffect(() => {
    dispatch(getAddresses(user.email));
  }, [dispatch, user, swap, address]);

  return (
    <div className={style.container}>
      <Link to="/myaccount">
        <button>Back</button>
      </Link>
      <h3>Address</h3>
      {console.log(user.Addresses)}
      {user?.Addresses?.map((a, i) => (
        <div key={i}>
          <button onClick={() => handleDelete(a.id) }> x </button>
          <p>{a.street}</p>
          <p>{a.number}</p>
          <p>{a.zipCode}</p>
          <p>{a.province}</p>
          {a.location ? <p>{a.location}</p> : null}
          {a.apartment ? <p>{a.apartment}</p> : null}
          {a.description ? <p>{a.description}</p> : null}
        </div>
      ))}
       <Link to="/myaccount/addresses/add">
        <button>Add</button>
      </Link> 
    </div>
  );
};
