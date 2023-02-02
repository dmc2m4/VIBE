import axios from "axios";
import types from "./types";
import {API_URL} from "../../config"

const settingsAccount = (id) => {
    return async function (dispatch) {
      await axios
        .get(`${API_URL}/user/${id}`)
        .then((data) => {
          dispatch({ type: types.GET_ACCOUNT, payload: data.data });
        })
        .catch((e) => e.error);
    };
  };

export default settingsAccount;