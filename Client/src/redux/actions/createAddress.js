import axios from "axios";
import { API_URL } from "../../config";


const createAddresses = (value) => {
  return async function (dispatch) {
    try {
      await axios.post(`${API_URL}/user/address`, value);
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default createAddresses;
