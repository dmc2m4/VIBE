import axios from "axios";
import { API_URL } from "../../config";

export const getAddresses = (email) => {
  return async function () {
    try {
      const address = await axios.get(`${API_URL}/user/address`, email);
      return address.data;
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default getAddresses;
