import axios from "axios";

// const createUser = (user) => {
//   return async function (){
//     const response = await axios.post("http://localhost:3001/user", user);
//     return response
//   }
// }

function createUser(user) {
  return async function () {
    return await axios
      .post("http://localhost:3001/user", user)
      .then(res => res)
      .catch((e) => e.message);
  };
}

export default createUser;
