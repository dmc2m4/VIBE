import axios from "axios";
import { API_URL } from "../../config";
import types from "./types";

export const getAddresses = (email) => {
  return async function (dispatch) {
    try {
      const address = await axios.post(`${API_URL}/user/address/get`, {email: email});
      dispatch({
        type: types.CREATE_ADDRESS,
        payload: address.data,
      });
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default getAddresses;
