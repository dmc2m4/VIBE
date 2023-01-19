import axios from "axios";

const GET_ALL_CHLOTHES = "GET_ALL_CHLOTHES";

function getAllChlotes() {
  return async function (dispatch) {
    return await axios
      .get("/products")
      .then((res) => {
        dispatch({ type: GET_ALL_CHLOTHES, payload: res.data });
      })
      .catch((e) => e.message);
  };
}

export default getAllChlotes;
