import axios from "axios";

const createUser = (user) => {
  return async function (){
    const response = await axios.post("http://localhost:3001/user", user);
    return response
  }
}

export default createUser;
