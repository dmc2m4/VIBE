import axios from "axios";
import { API_URL } from "../../config";

export const deleteAddresses = (id) => {
  return async function () {
    try {
      await axios.post(`${API_URL}/user/address/destroy`, id);
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default deleteAddresses;
