import axios from "axios";
import types from "./types";
import {API_URL} from "../../config"

const getAddresses = (value = []) => {
  return async function (dispatch) {
    try {
      const respuesta = await axios.post(
        `${API_URL}/user/address`,
        value
      );
      dispatch({ type: types.CREATE_ADDRESSES, payload: respuesta.data });
    } catch (error) {
      return alert(error);
    }
  };
};
export default getAddresses;

