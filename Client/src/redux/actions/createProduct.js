import axios from "axios";

const createProduct = (product) => {
  return async function () {
    const response = await axios
      .post("http://localhost:3001/product", product)
      .catch((e) => e.error);
    return response;
  };
};

export default createProduct;
