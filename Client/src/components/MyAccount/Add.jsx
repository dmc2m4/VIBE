import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import  createAdress  from "../../redux/actions/createAdress";

export const Add = () => {
  const [input, setInput] = useState({
    nameandsurname: "",
    cp: "",
    street: "",
    number: "",
    flat: "",
    telephonenumber: "",
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
    dispatch(createAdress(input));
    console.log(input);
  }
  return (
    <div>
      <Link to='/myaccound/direction/'>
        <button>Back</button>
      </Link>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          name='nameandsurname'
          placeholder='Name and surname'
          value={input.nameandsurname}
          onChange={handleChange}
        />
        <input
          type='text'
          name='cp'
          placeholder='Cp'
          value={input.cp}
          onChange={handleChange}
        />
        <input
          type='text'
          name='street'
          placeholder='Steet'
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
          type='text'
          name='flat'
          placeholder='Flat'
          value={input.flat}
          onChange={handleChange}
        />
        <input
          type='number'
          name='telephonenumber'
          placeholder='Telephone Contact'
          value={input.telephonenumber}
          onChange={handleChange}
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};
