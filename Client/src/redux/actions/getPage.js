import types from "./types";

const getPage = (type, info, page) => {
  return async function () {
    const response = await axios
      .post("http://localhost:3001/paging", type, info, page)
      .catch((e) => e.error);
    return response;
  };
};

export default getPage;
