const { Comment, Product, User } = require("../db.js");

const postComment = async (value) => {
  const product = await Product.findByPk(value.id);
  if (!product) {
    throw new Error("Product not found");
  }
  const user = await User.findOne({ where: { email: value.email } });
  if (!user) {
    throw new Error("User not found");
  }
  const newComment = await Comment.create({
    question: value.question,
  });
  await product.addComment(newComment);
  await user.addComment(newComment);
  return newComment;
};

const putComment = async (value) => {
  let comment = await Comment.findByPk(value.id);
  await comment.update({
    response: value.response,
  });
};

const destroyComment = async (id) => {
  await Comment.destroy({
    where: {
      id: id,
    }, //averiguar force true para reiniciar base de datos y
       // asi borrar los que borre y sigue en base
  });
};

const getCommentById = async (id) => {
  const comment = await Comment.findByPk(id, {
    include: {
      model: User,
    },
  });
  return comment;
};

module.exports = {
  postComment,
  putComment,
  destroyComment,
  getCommentById,
};
