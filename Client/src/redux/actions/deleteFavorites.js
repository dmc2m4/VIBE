// import axios from 'axios';

// const deleteFavorites = (value) => {
//     return async function () {
//       try {
//          await axios.delete("http://localhost:3001/favorites", value);
//       } catch (error) {
//         return alert(error.message)
//       }
//     };
//   };

export const deleteFavorites = async (value) => {
  return await fetch(`http://localhost:3001/favorites`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(value)
  })
}
  
  export default deleteFavorites;


  // const getAddresses = (email) => {
    //   console.log(email);
    //   return async function (dispatch) {
    //     try {
    //       await fetch
    //         ("http://localhost:3001/user/address",{
    //           method: "GET",
    //           headers:{'Content-Type': 'application/json'},
    //           body: JSON.stringify(email),
    //         })
    //         .then((res) => res.json())
    //         .then((data) =>
    //           dispatch({ type: types.CREATE_ADDRESSES, payload: data })
    //         );
    //     } catch (error) {
    //       return alert(error);
    //     }
    //   };
    // };
