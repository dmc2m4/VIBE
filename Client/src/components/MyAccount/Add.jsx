import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import createAddresses from "../../redux/actions/createAdress";
import style from './Add.module.css'
export const Add = () => {
  const navigate = useNavigate()
  const user = sessionStorage.getItem('userEmail');
  const [input, setInput] = useState({
    email: user,
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
    navigate('/myaccount/direction')
  }
  return (
    <div className={style.container}>
      <Link to='/myaccount/direction'>
        <button>Back</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)}>
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
