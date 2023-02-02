import axios from "axios";
import {API_URL} from "../../config";

const createUser = (user) => {
  return async function () {
    const response = await axios
      .post(`${API_URL}/user/signup`, user)
      .catch((e) => e.error);
    return response;
  };
};

export default createUser;
