import axios from "axios";
import types from "./types";

const getAddresses = (email) => {
  console.log(email);
  return function (dispatch) {
    try {
      return fetch
        .get("http://localhost:3001/user/address", email)
        .then((res) => res.json())
        .then((data) =>
        dispatch({ type: types.CREATE_ADDRESSES, payload: data })
        );
    } catch (error) {
      return alert(error);
    }
  };
};

export default getAddresses;

// export const detailCountry = (id) => {
//   return function (dispatch) {
//       return fetch(${API_URL}/country/${id})
//       .then((response) => response.json())
//       .then ((data) => {
//               dispatch({
//                   type: COUNTRY_BY_NAME,
//                   payload: data
//               })
//       })

//   }
// }
