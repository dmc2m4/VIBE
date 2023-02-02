import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import createAddresses from "../../redux/actions/createAdress";

export const Add = () => {
  const [input, setInput] = useState({
    email: "",
    street: "",
    number: "",
    zipCode: "",
    province: "",
    location: "",
    apartment: "",
    description: "",
  });
  const dispatch = useDispatch();

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createAddresses(input));
    console.log(input);
  }
  return (
    <div>
      <Link to='/myaccount/direction'>
        <button>Back</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={input.email}
          onChange={handleChange}
        />
        <input
          type='text'
          name='street'
          placeholder='Street'
          value={input.street}
          onChange={handleChange}
        />
        <input
          type='number'
          name='number'
          placeholder='Number'
          value={input.number}
          onChange={handleChange}
        />
        <input
          type='number'
          name='zipCode'
          placeholder='ZipCode'
          value={input.zipCode}
          onChange={handleChange}
        />
        <input
          type='text'
          name='province'
          placeholder='Province'
          value={input.province}
          onChange={handleChange}
        />
        <input
          type='text'
          name='location'
          placeholder='Location'
          value={input.location}
          onChange={handleChange}
        />
        <input
          type='text'
          name='apartment'
          placeholder='Apartment'
          value={input.apartment}
          onChange={handleChange}
        />
        <input
          type='text'
          name='description'
          placeholder='Description'
          value={input.description}
          onChange={handleChange}
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};
