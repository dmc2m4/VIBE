import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from './ShoppingHistory.module.css';
import axios from 'axios';
import {ACCESS_TOKEN} from '../../config'


export const ShoppingHistory = () => {
  const user = sessionStorage.getItem('userEmail');

  useEffect(async ()=> {
   const response =  await axios.get(`https://api.mercadopago.com/v1/payments/search?sort=date_created&criteria=desc&external_reference=${user}&limit=300`,
            {
              headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
            }, )
            console.log(response)
  },[]);


  return (
    <div className={style.container}>
      <Link to='/myaccount'>
        <button>Back</button>
      </Link>
      <h4>Shoppin History</h4>
    </div>
  );
};
