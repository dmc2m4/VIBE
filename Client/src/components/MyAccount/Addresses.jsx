import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Addresses.module.css";
import getAddresses from "../../redux/actions/getAddresses";
import deleteAddresses from "../../redux/actions/deleteAddresses";

export const Addresses = () => {
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [deleted, setDeleted] = useState(false);

  const handleDelete = (id) => {
    dispatch(deleteAddresses(id));
    setDeleted(!deleted);
  };

  useEffect(() => {
    dispatch(getAddresses(user.email));
  }, [dispatch, user, deleted]);

  return (
    <div className={style.container}>
      <Link to="/myaccount">
        <button>Back</button>
      </Link>
      <h3>Address</h3>
      {user?.Addresses?.map((a, i) => (
        <div key={i}>
          <button onClick={() => handleDelete(a.id)}> x </button>
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
        <p>Add</p>
      </Link>
    </div>
  );
};
