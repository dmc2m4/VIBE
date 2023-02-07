import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const FORM_ID = "payment-form";

const MercadoPagoIntegration = ({ items }) => {
  
  const carrito = useSelector((state) => state.Cart);
  // const { id } = useParams(); // id de producto
  const [preferenceId, setPreferenceId] = useState(null);
  console.log(preferenceId);
  items.Cart = carrito;
  console.log(items);
  
  async function getPreference() {
    const response = await axios
      .post(`http://localhost:3001/product/pay/`, items, {
        header: {
          "Content-Type": "application/json",
          "Content-security-policy": "default-src 'self' *.mercadolibre.com",
        },
      })
      .then((res) => {
        setPreferenceId(res.data.global);
        console.log(res);
      })
      .catch((e) => e.error);
  
    return response;
  }
  useEffect(() => {
  //   // luego de montarse el componente, le pedimos al backend el preferenceId
  //   // axios.post('/api/orders', { productId: id }).then((order) => {
  //   //   setPreferenceId(order.preferenceId);
  //   // });
    const result = getPreference();
    setPreferenceId(result);
    console.log(result);
  }, []);
  const mp = new MercadoPago('APP_USR-df3f00dc-f276-4c41-9d96-d78855152cc0', {
    locale: 'es-AR'
  });
  mp.checkout({
    preference: {
      id: 'id ?>'
    },
    render: {
      container: '.cho-container',
      label: 'tomas',
    }
  });
  console.log(mp)
  useEffect(() => {
    if (preferenceId) {
      console.log(preferenceId);
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      // `https://www.mercadopago.com.ar/checkout/v1/web-payment-checkout.js`
      script.setAttribute("data-preference-id", preferenceId);
      const form = document.getElementById(FORM_ID);
      console.log(FORM_ID);
      form.appendChild(script);
      console.log(script);
    }
  }, console.log(preferenceId)[preferenceId]);
  
  return <form id={FORM_ID} method='GET' className='cho-container'/>;
};
export default MercadoPagoIntegration;










// const [preferenceId, setPreferenceId] = useState(null);
//   console.log(preferenceId);
//   items.Cart = carrito;
//   console.log(items);


//   const obtancePreferences = useCallback(
//     async() => {
//       const response = await axios
//     .post(`http://localhost:3001/product/pay/`, items, {
//       header: {
//         "Content-Type": "application/json",
//         "Content-security-policy": "default-src 'self' *.mercadolibre.com",
//       },
//     })
//     .then((res) => {
//       setPreferenceId(res.data.global);
//       console.log(res);
//     })
//     .catch((e) => e.error);

//   return response;
  

//     },[items]
//   )
