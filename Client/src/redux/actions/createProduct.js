import axios from "axios";

const createProdcut = (product) => {
  return async function (){
    const response = await axios.post("http://localhost:3001/product", product);
    return response
  }
}

export default createProdcut;
