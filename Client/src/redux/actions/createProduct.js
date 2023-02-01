import axios from "axios";

const createProdcut = (product) => {
  return async function () {
    const response = await axios
      .post("proyecto-final-vibes-production.up.railway.app/product", product)
      .catch((e) => e.error);
    return response;
  };
};

export default createProdcut;
