import axios from "axios";

const loginUser = (user) => {
  return async function () {
    try{
        const response = await axios.post("http://localhost:3001/user/login", user);
        return response;
    }catch(error){
        return alert (error.message)
    }
  };
};

export default loginUser;
