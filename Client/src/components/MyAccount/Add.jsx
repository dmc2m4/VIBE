import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import createAddresses from "../../redux/actions/createAdress";
import direction from '../../assets/direction.png'
import style from './Add.module.css'
export const Add = () => {
  const navigate = useNavigate()
  const user = sessionStorage.getItem('userEmail');
  const [input, setInput] = useState({
    email: user.email
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
    navigate('/myaccount/addresses')
  }
  return (
    <div className={style.container}>
    <div className={style.containerForm}>
    <div className={style.back}>
      <Link to='/myaccount/direction' className={style.back}>
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
      <div>
        <input
          type='text'
          name='street'
          placeholder='Street'
          value={input.street}
          onChange={handleChange}
          className={style.inputForm}
        />
       
        <input
          type='number'
          name='number'
          placeholder='Number'
          value={input.number}
          onChange={handleChange}
          className={style.inputForm}
        />
        </div>
        <div>
        <input
          type='number'
          name='zipCode'
          placeholder='ZipCode'
          value={input.zipCode}
          onChange={handleChange}
          className={style.inputForm}
        />
       
       
        <input
          type='text'
          name='province'
          placeholder='Province'
          value={input.province}
          onChange={handleChange}
          className={style.inputForm}
        />
        </div>
        <div>
        <input
          type='text'
          name='location'
          placeholder='Location'
          value={input.location}
          onChange={handleChange}
          className={style.inputForm}
        />
        <input
          type='text'
          name='apartment'
          placeholder='Apartment'
          value={input.apartment}
          onChange={handleChange}
          className={style.inputForm}
        />
            </div>
            <div>
        <input
          type='text'
          name='description'
          placeholder='Description'
          value={input.description}
          onChange={handleChange}
          className={style.inputForm}
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
