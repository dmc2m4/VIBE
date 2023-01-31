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