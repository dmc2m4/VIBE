import axios from 'axios';

const setFavorites = (value) => {
    return async function () {
      try {
         await axios.post("http://localhost:3001/favorites", value);
      } catch (error) {
        return alert(error.message)
      }
    };
  };
  
  export default setFavorites;