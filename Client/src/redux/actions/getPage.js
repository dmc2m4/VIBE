import types from "./types";

const getPage = (type, info, page) => {
  return async function () {
    const response = await axios.post(
      "http://localhost:3001/paging",
      type,
      info,
      page
    );
    return response;
  };
};

export default getPage;


