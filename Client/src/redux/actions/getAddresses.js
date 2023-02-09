import axios from "axios";
import { API_URL } from "../../config";

export const getAddresses = (email) => {
  return async function () {
    try {
      const address = await axios.post(`${API_URL}/user/address/get`, {email: email});
      console.log(address.data);
      return address.data;
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default getAddresses;
