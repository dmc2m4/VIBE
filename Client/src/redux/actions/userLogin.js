import axios from "axios";
import types from "./types";

const loginUser = (user) => {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/user/login", user);
      dispatch({
        type: types.LOGIN_USER,
<<<<<<< HEAD
        payload: response.data,
      })

=======
        payload: response,
      })
      console.log(response)
>>>>>>> 0a111de298db1a61a114ab6ae3c00b7f8d14cad1
    } catch (error) {
      return alert(error.message)
    }
  };
};

export default loginUser;
