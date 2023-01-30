import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


export const Add = () => {
  const [input, setInput] = useState({
    nameandsurname: "",
    cp: "",
    street: "",
    number: "",
    flat: "",
    telephonenumber: "",
  });
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div>
      <Link to="profile/direction/">
          <button>Back</button>
      </Link>
      <form onSubmit={(e) => habdleSubmit(e)}>
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
          name='telephonecontact'
          placeholder='Telephone Contact'
          value={input.telephonenumber}
          onChange={handleChange}
        />
        <button type='submit'>Save</button>
      </form>
    </div>
  );
};
