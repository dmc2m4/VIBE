import axios from "axios";

const createUser = (user) => {
  return async function () {
    const response = await axios
      .post("proyecto-final-vibes-production.up.railway.app/user/signup", user)
      .catch((e) => e.error);
    return response;
  };
};

export default createUser;
