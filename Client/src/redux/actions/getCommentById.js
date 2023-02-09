import axios from 'axios';
import {API_URL} from "../../config";


export const getCommentById = (id) => {
  
    return async function () {
      try {
        const comment = await axios.get(`${API_URL}/comment`, id);
        return comment
      } catch (error) {
        return alert(error.message)
      }
    };
  };

  export default getCommentById;
