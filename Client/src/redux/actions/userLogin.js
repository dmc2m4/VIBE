import axios from "axios";
import types from "./types";
import { API_URL } from "../../config";

const loginUser = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(`${API_URL}/user/login`, user)
      dispatch({
        type: types.LOGIN_USER,
        payload: response.data,
      })
      
    } catch (error) {
      return alert(error.message)
    }
  };
};

export default loginUser;
