import axios from 'axios';

const setFavorites = (value) => {
    return async function () {
      try {
         await axios.post("proyecto-final-vibes-production.up.railway.app/favorites", value);
      } catch (error) {
        return alert(error.message)
      }
    };
  };
  
  export default setFavorites;