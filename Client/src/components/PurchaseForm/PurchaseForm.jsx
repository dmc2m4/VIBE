import React, { useState } from "react";
import MercadoPagoIntegration from "../MercadoPagoIntegration/MercadoPagoIntegration";

export const PurchaseForm = () => {
  const [input, setInput] = useState({});
  const [pay, setPay] = useState(true);

  function addInput(name, type) {
    const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <div>
        <label>{nameFormatted}</label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={nameFormatted}
          onChange={handleChange}
        />
      </div>
    );
  }
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setPay(false);
    console.log(pay)
  }

  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} className="payment-form">
        {addInput("name", "text")}
        {addInput("surname", "text")}
        {addInput("email", "text")}
        {addInput("phone", "text")}
        {addInput("zip_code", "text")}
        {addInput("street_name", "text")}
        {addInput("street_number", "text")}
        <h3>Shipments</h3>
        {addInput("zip_code", "text")}
        {addInput("street_name", "text")}
        {addInput("street_number", "text")}
        {addInput("floor", "text")}
        {addInput("apartament", "text")}
        {addInput("city_name", "text")}
        {addInput("state_name", "text")}
        {addInput("country_name", "text")}
        <button type="submit">Request Payment</button>
      </form>
      {(pay) ? null : <MercadoPagoIntegration items={input} />}
    </div>
  );
};
