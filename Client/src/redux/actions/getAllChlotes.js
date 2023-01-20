import types from "./types";
import axios from "axios";

function getAllClothes() {
  return function (dispatch) {
    return fetch(`http://localhost:3001/product`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_ALL_PRODUCTS,
          payload: data,
        });
      });
  };
}

export default getAllClothes;
