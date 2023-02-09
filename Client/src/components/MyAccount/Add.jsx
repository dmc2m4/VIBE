import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import direction from '../../assets/direction.png'
import getAddresses from "../../redux/actions/getAddresses";
import createAddress from '../../redux/actions/createAddress'
import style from './Add.module.css'
export const Add = () => {
  const navigate = useNavigate();
  const user = sessionStorage.getItem("userEmail");
  const user2 = useSelector((state) => state.User);
  const [input, setInput] = useState({
    email: user2.email,
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

    dispatch(createAddress(input)).then(
      res => {
        dispatch(getAddresses(user))
      }).then(
        resp => {
          navigate('/myaccount/addresses');
        }
      )

  }

  return (
    <div className={style.container}>
    <div className={style.containerForm}>
    <div className={style.back}>
      <Link to='/myaccount/addresses' className={style.back}>
      <img src='https://cdn-icons-png.flaticon.com/512/507/507257.png' alt="back" className={style.iconBack}/>
      </Link>
      </div>
      <div className={style.containerTitle}>
      <div className={style.containerIcon}>
      <img src={direction} alt="direction" className={style.icon}/>
      </div>
      <h1>Add Direction</h1>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
      <div className={style.formAdd}>
        <input
          type="text"
          name="street"
          placeholder="Street"
          value={input.street}
          onChange={handleChange}
          className={style.inputFormAdd}
        />
       
        <input
          type="number"
          name="number"
          placeholder="Number"
          value={input.number}
          onChange={handleChange}
          className={style.inputFormAdd}
        />
        </div>
        <div div className={style.formAdd}>
        <input
          type="number"
          name="zipCode"
          placeholder="ZipCode"
          value={input.zipCode}
          onChange={handleChange}
          className={style.inputFormAdd}
        />
       
       
        <input
          type="text"
          name="province"
          placeholder="Province"
          value={input.province}
          onChange={handleChange}
          className={style.inputFormAdd}
        />
        </div>
        <div div className={style.formAdd}>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={input.location}
          onChange={handleChange}
          className={style.inputFormAdd}
        />
        <input
          type="text"
          name="apartment"
          placeholder="Apartment"
          value={input.apartment}
          onChange={handleChange}
          className={style.inputFormAdd}
        />
            </div>
            <div div className={style.formAdd}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={input.description}
          onChange={handleChange}
          className={style.inputFormAdd}
        />
        </div>
      <div className={style.containerButton}>
        <button type='submit' className={style.button}>Save</button>
        </div>
      </form>
    </div>
    </div>
  );
};
