import axios from "axios";
import {API_URL} from "../../config"


const createProduct = (value) => {
  return async function () {
    const response = await axios
      .post(`${API_URL}/product`, value)
      .catch((e) => e.error);
    return response;
  };
};

export default createProduct;
