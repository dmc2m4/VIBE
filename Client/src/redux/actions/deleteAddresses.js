import axios from "axios";
import { API_URL } from "../../config";
import types from "./types";

export const deleteAddresses = (id) => {
  return async function (dispatch) {
    try {
      await axios.post(`${API_URL}/user/address/destroy`, { id: id });
      dispatch({ type: types.DELETE_ADDRESS, payload: id });
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default deleteAddresses;
