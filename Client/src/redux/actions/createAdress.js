import axios from "axios";
import {API_URL} from "../../config"

const createAddresses = (value) => {
  return async function () {
    try{
      await axios.post(`${API_URL}/user/address/create`, value)
    }catch(error){
      alert (error.message)
    }
  };
};

export default createAddresses;
