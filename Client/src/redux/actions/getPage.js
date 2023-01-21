import types from "./types";

const getPage = (info) => {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/pagination",
      firstElement,
      info
    );
    return response;
  };
};

export default getPage;
