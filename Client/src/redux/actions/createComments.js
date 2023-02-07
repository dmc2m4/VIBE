import axios from "axios";

const createComment = (idProduct, idUser, comment) => {
  return async function () {
    const response = await axios
      .post(`http://localhost:3001/comment/${idProduct}`, {idUser: idUser, question: comment})
      .catch((e) => e.error);
    return response;
  };
};

export default createComment;
