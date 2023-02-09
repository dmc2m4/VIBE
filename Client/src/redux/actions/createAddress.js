import axios from "axios";
import { API_URL } from "../../config";
import types from "./types";

const createAddresses = (value) => {
  return async function (dispatch) {
    try {
      await axios.post(`${API_URL}/user/address`, value);
      dispatch({
        type: types.CREATE_ADDRESS,
        payload: value,
      });
    } catch (error) {
      return alert(error.message);
    }
  };
};

export default createAddresses;
