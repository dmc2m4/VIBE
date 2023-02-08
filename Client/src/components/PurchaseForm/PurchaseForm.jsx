import React, { useState } from "react";
import MercadoPagoIntegration from "../MercadoPagoIntegration/MercadoPagoIntegration";
import style from './PurchaseForm.module.css'
export const PurchaseForm = () => {
  const [input, setInput] = useState({});
  const [pay, setPay] = useState(true);

  function addInput(name, type) {
    const nameFormatted = name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <div className={style.containerInput}>
        <label>{nameFormatted}</label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={nameFormatted}
          onChange={handleChange}
          className={style.inputForm}
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
    console.log(pay);
  }

  return (
    <div className={style.container}>
      <form onSubmit={(e) => handleSubmit(e)} className={style.paymentForm}>
      <div className={style.containerForm}>
      <div>
      <div className={style.containerMinTitle}>
      <h3>Dates</h3>
      </div>
      <div className={style.containerInputs}>
        {addInput("name", "text")}
        {addInput("surname", "text")}
        </div>
        <div className={style.containerInputs}>
        {addInput("email", "text")}
        {addInput("phone", "text")}
        </div>
        <div className={style.containerInputs}>
        {addInput("zip_code", "text")}
        {addInput("street_name", "text")}
        </div>
        <div className={style.containerInputs}>
        {addInput("street_number", "text")}
        </div>
        </div>
        <div>
        <div className={style.containerMinTitle}>
        <h3 className={style.minTitle}>Shipments</h3>
        </div>
        <div className={style.containerInputs}>
        {addInput("zip_code", "text")}
        {addInput("street_name", "text")}
        </div>
        <div className={style.containerInputs}>
        {addInput("street_number", "text")}
        {addInput("floor", "text")}
        </div>
        <div className={style.containerInputs}>
        {addInput("apartament", "text")}
        {addInput("city_name", "text")}
        </div>
        <div className={style.containerInputs}>
        {addInput("state_name", "text")}
        {addInput("country_name", "text")}
        </div>
        </div>
        </div>
        <button type="submit" className={style.buttonCar}>Request Payment</button>
      </form>
      {pay ? null : <MercadoPagoIntegration items={input} />}
    </div>
  );
};
