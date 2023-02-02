import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import getAddresses from "../../redux/actions/getAdresses";

export const Direction = () => {
  const address = useSelector((state) => state.Address);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAddresses())
  },[dispatch])
  
  console.log(address);
  return (
    <div>
      <Link to='/myaccount'>
        <button>Back</button>
      </Link>
      <h3>Address</h3>
      {address.email ? (
        address
      ) : (
        <div>
          <h4>Enter your Address</h4>
        </div>
      )}
      <Link to='/myaccount/direction/add'>
        <p>Add</p>
      </Link>
    </div>
  );
};
