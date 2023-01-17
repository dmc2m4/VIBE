import React from "react";

const Formlanding = () => {
  return (
    <div className='container'>
      <form>
        <label>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          placeholder='enter your username'
        />
        <label>LastName:</label>
        <input
          type='text'
          id='lastname'
          name='lastname'
          placeholder='enter your lastname'
        />
        <label>Date of birth</label>
        <input
          type='date'
          name='dateofbirth'
          min='1900-01-01'
          max='2023-01-31'
          placeholder='enter your date'
        />
        <label>Usuario</label>
        <input
          type='text'
          id='usuario'
          name='usuario'
          placeholder='enter your usuario'
        />
        <label>Password</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='enter your password'
        />
        <label>Confirm Password</label>
        <input
          type='password'
          id='password'
          name='password'
          placeholder='confirm your password'
        />
        <label>Mail</label>
        <input
          type='email'
          id='mail'
          name='email'
          placeholder='enter your mail'
        />
        <label>Accept the terms and conditions</label>
        <input type='checkbox' id='accptterms' name='acceptterms' value='si' />
        <button type='submit'>Create Acount</button>
      </form>
    </div>
  );
};

export default Formlanding;
