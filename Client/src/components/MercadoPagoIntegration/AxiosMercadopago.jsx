import axios from "axios";


export const response = await axios
.post(`http://localhost:3001/product/pay/`, items, {
  header: {
    "Content-Type": "application/json",
    "Content-security-policy": "default-src 'self' *.mercadolibre.com",
  },
})
.then((res) => {
  setPreferenceId(res.data.global);
  console.log(res);
})
.catch((e) => e.error);

return response;
