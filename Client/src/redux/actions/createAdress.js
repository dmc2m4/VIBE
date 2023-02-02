import axios from "axios";

const createAddresses = (value) => {
  return async function () {
    try{
      await axios.post("http://localhost:3001/user/address/create", value)
    }catch(error){
      alert (error.message)
    }
  };
};

export default createAddresses;
