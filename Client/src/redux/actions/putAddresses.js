import axios from "axios";
import { API_URL } from "../../config";

const putAddresses = (value) => {
  return async function () {
    try {
      await axios.put(`${API_URL}/user/address`, value);
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default putAddresses;
