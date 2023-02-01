import axios from "axios";
import types from "./types";

const loginUser = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("proyecto-final-vibes-production.up.railway.app/user/login", user);
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
