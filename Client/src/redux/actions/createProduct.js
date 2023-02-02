import axios from "axios";
import {API_URL} from "../../config"

const createProduct = (product) => {
  return async function () {
    const response = await axios
      .post(`${API_URL}/product`, product)
      .catch((e) => e.error);
    return response;
  };
};

export default createProduct;
