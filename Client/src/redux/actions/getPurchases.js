import axios from "axios";
import { API_URL } from "../../config";
import types from "./types";

const getPurchases = (value) => {
    return async function (dispatch) {
        try {
            const response = await axios.post(`${API_URL}/purchases/user`, {email: value})
            dispatch({
                type: types.GET_PURCHASES,
                payload: response.data
            })
        } catch (error) {
            alert(error.message)
        }
    }
}

export default getPurchases