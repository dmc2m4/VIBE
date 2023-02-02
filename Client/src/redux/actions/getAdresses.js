import axios from "axios";
import types from "./types";
import {API_URL} from "../../config"

const getAddresses = (value = []) => {
  console.log(value);
  return async function (dispatch) {
    try {
      const respuesta = await axios.post(
        `${API_URL}/user/address`,
        value
      );
      dispatch({ type: types.CREATE_ADDRESSES, payload: respuesta.data });
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

// console.log(email);
// return async function (dispatch) {
//   const call = await fetch("http://localhost:3001/user/address", email)
//     .then((res) => res.json())
//     .then((data) =>
//       dispatch({ type: types.CREATE_ADDRESSES, payload: data })
//     );
//   return call;
// };
// };
