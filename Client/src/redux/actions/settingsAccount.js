import axios from "axios";
import types from "./types";

const settingsAccount = (id) => {
    return async function (dispatch) {
      await axios
        .get(`http://localhost:3001/user/${id}`)
        .then((data) => {
          dispatch({ type: types.GET_ACCOUNT, payload: data.data });
        })
        .catch((e) => e.error);
    };
  };

export default settingsAccount;