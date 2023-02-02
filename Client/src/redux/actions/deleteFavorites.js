import {API_URL} from "../../config";

export const deleteFavorites = async (value) => {
  return await fetch(`${API_URL}/favorites`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(value)
  })
}
  
  export default deleteFavorites;


 