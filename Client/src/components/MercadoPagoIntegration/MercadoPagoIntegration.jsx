import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const FORM_ID = "payment-form";
import {API_URL} from "../../config"
// import putPurchases from "../../redux/actions/putPurchases";

const MercadoPagoIntegration = ({ items }) => {
  const carrito = useSelector((state) => state.Cart);
  const [preferenceId, setPreferenceId] = useState(null);
  // const dispatch = useDispatch()
  // const user = sessionStorage.getItem("userEmail")
  items.Cart = carrito;

  async function getPreference() {
    const response = await axios
      .post(`${API_URL}/product/pay`, items)
      .then((res) => {
        // console.log(res)
        setPreferenceId(res.data.global);
      })
      .catch((e) => e.error);
    return response;
  }
  if (preferenceId) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
    script.setAttribute("data-preference-id", preferenceId);
    const form = document.getElementById(FORM_ID);
    form.appendChild(script);
    // dispatch(putPurchases(carrito, user));
  }

  useEffect(() => {
    getPreference();
  }, []);

  return <form id={FORM_ID} method='GET' className='pay-button' />;
};

export default MercadoPagoIntegration;

// import axios from 'axios';
// import { Request, Response } from 'express';
// import mercadopago from 'mercadopago';

// import { ACCESS_TOKEN } from '../../../config';

// mercadopago.configure({ access_token: ACCESS_TOKEN! });

// interface Item {
//   id: string;
//   category_id: string;
//   picture_url: string;
//   title: string;
//   quantity: number;
//   unit_price: number;
// }

// interface Payer {
//   first_name: string;
//   last_name: string;
//   address: {
//     street_number: number;
//     street_name: string;
//     zip_code: number;
//   };
// }

// interface Order {
//   id: string;
// }

// interface Transaction_details {
//   total_paid_amount: number;
// }

// interface Additional_info {
//   items: Item[];
//   payer: Payer;
// }

// interface PurchaseByMP {
//   id: string;
//   status: string;
//   status_detail: string;
//   date_created: string;
//   order: Order;
//   transaction_details: Transaction_details;
//   additional_info: Additional_info;
//   statement_descriptor: string;
// }

// interface Purchase {
//   id: string;
//   payer: Payer;
//   items: Item[];
//   date_created: string;
//   status: string;
//   status_detail: string;
//   total_paid_amount: number;
//   statement_descriptor: string;
// }

// export const getPayment = async (req: Request, res: Response) => {
//   try {
//     const { email } = req.params;
//     let response;

//     if (email) {
//       response = await axios.get(
//         `https://api.mercadopago.com/v1/payments/search?sort=date_created&criteria=desc&external_reference=${email}&limit=300`,
//         {
//           headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
//         },
//       );
//     } else {
//       response = await axios.get(
//         `https://api.mercadopago.com/v1/payments/search?sort=date_created&criteria=desc&limit=200`,
//         {
//           headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
//         },
//       );
//     }

//     const payments = response.data.results.map((purchase: PurchaseByMP) => {
//       const payment: Purchase = {
//         id: purchase.id,
//         payer: purchase.additional_info.payer,
//         items: purchase.additional_info.items,
//         date_created: purchase.date_created,
//         status: purchase.status,
//         status_detail: purchase.status_detail,
//         total_paid_amount: purchase.transaction_details.total_paid_amount,
//         statement_descriptor: purchase.statement_descriptor,
//       };

//       return payment;
//     });

//     res.status(200).json(payments);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };
