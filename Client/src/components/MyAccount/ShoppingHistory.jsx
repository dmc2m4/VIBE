import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import style from './ShoppingHistory.module.css';
import getPurchases from "../../redux/actions/getPurchases";


export const ShoppingHistory = () => {
  const user = sessionStorage.getItem('userEmail');
  const dispatch = useDispatch()
  const purchases = useSelector(state => state.Purchases)
  const navigate = useNavigate()

  useEffect(async ()=> {
   dispatch(getPurchases(user))
  },[dispatch]);

  function reviewButton (id){
    navigate(`/createReview/${id}`)
  }


  return (
    <div className={style.container}>
      <Link to='/myaccount'>
        <button>Back</button>
      </Link>
      {purchases?.map(p => (
        <div>
          <img src={p.img} alt="" />
          <p>{p.name}</p>
          <button onClick={() => reviewButton(p.id)}>Review</button>
        </div>
      ))}
    </div>
  );
};
