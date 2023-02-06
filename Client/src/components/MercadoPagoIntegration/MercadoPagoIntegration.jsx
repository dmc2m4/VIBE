import axios from "axios";
import React, { useEffect, useState } from "react";
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
      .post(`http://localhost:3001/product/pay/`, items)
      .then((res) => {
        setPreferenceId(res.data.global);
        console.log(res);
      })

      .catch((e) => e.error);

    return response;
  }
  useEffect(() => {
    // luego de montarse el componente, le pedimos al backend el preferenceId
    // axios.post('/api/orders', { productId: id }).then((order) => {
    //   setPreferenceId(order.preferenceId);
    // });
    const result = getPreference();
    setPreferenceId(result);
  }, []);
  useEffect(() => {
    if (preferenceId) {
      console.log(preferenceId)
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement("script");
      console.log(script)
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return <form id={FORM_ID} method='GET' />;
};
export default MercadoPagoIntegration;


