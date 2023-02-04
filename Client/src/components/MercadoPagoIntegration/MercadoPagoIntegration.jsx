import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const FORM_ID = "payment-form";

const MercadoPagoIntegration = ({ items }) => {
  const { id } = useParams(); // id de producto
  const [preferenceId, setPreferenceId] = useState(null);

  async function getPreference() {
    const response = await fetch(`http://localhost:3001/pay/${id}`, items, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(items),
    })
      .then((res) => setPreferenceId(res.global))
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
  }, [id, items]);

  useEffect(() => {
    if (preferenceId) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "https://www.mercadopago.cl/integrations/v1/web-payment-checkout.js";
      script.setAttribute("data-preference-id", preferenceId);
      const form = document.getElementById(FORM_ID);
      form.appendChild(script);
    }
  }, [preferenceId]);

  return <form id={FORM_ID} method='GET' />;
};
export default MercadoPagoIntegration;
