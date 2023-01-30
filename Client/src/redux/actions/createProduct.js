import axios from "axios";

const createProduct = (product) => {
  return async function () {
    const response = await axios
      .post("http://localhost:3001/product", product, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .catch((e) => e.error);
    return response;
  };
};

export default createProduct;
