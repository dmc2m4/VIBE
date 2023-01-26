import axios from "axios";
import types from "./types";

const loginUser = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/user/login", user);
      dispatch({
        type: types.LOGIN_USER,
        payload: response,
      })
      console.log(response)
    } catch (error) {
      return alert(error.message)
    }
  };
};

export default loginUser;
