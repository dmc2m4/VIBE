import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import userLogin from "../../redux/actions/userLogin"

export const Data = () => {

  const user = useSelector((state)=> state.User)

  const dispatch = useDispatch();

  console.log(user);

  // useEffect(()=>{
  //   dispatch(userLogin(user))
  // },[dispatch])

  return (
    <div>
      <Link to='/profile'>
        <button>Back</button>
      </Link>
      <h4>Account Data</h4>
      {/* <p>Username: {user.name} </p> */}
      <p>Name: {user.name} </p>
      <p>Email: {user.email} </p>
    </div>
  );
};
