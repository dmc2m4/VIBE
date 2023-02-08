import axios from 'axios';
import { API_URL } from "../../config";

const putPurchases = (items, user) => {
    return async function () {
        try {
            await axios.post(`${API_URL}/purchases`, {items :items, user: user})
        } catch (error) {
            alert(error.message)
        }
    };
};


export default putPurchases;