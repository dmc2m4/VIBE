import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const FORM_ID = "payment-form";
import {API_URL} from "../../config"
import putPurchases from "../../redux/actions/putPurchases";

const MercadoPagoIntegration = ({ items }) => {
  const carrito = useSelector((state) => state.Cart);
  const [preferenceId, setPreferenceId] = useState(null);
  const dispatch = useDispatch()
  const user = sessionStorage.getItem("userEmail")
  items.Cart = carrito;

  async function getPreference() {
    const response = await axios
      .post(`${API_URL}/product/pay`, items)
      .then((res) => {
        console.log(res)
        setPreferenceId(res.data.global);
        // dispatch(putPurchases(carrito.items, user))
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
  }

  useEffect(() => {
    getPreference();
  }, []);
  
  return <form id={FORM_ID} method="GET" className="pay-button"/>;
};

export default MercadoPagoIntegration;

