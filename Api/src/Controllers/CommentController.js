const { Comment, Product, User } = require("../db.js");

const postComment = async (value) => {
  console.log(value);
  const product = await Product.findByPk(value.id);
  console.log(product);
  if (!product) {
    throw new Error("Product not found");
  }
  const user = await User.findOne({ where: { email: value.email } });
  console.log(user);
  if (!user) {
    throw new Error("User not found");
  }
  const newComment = await Comment.create({
    question: value.question
  });
  console.log(newComment);
  await product.addComment(newComment)
  await user.addComment(newComment)
  return newComment;
};

const putComment = async (value) => {
  let comment = await Comment.findByPk(value.id);
  await comment.update({
    response: value.response
  })
};

const deleteComment = async (id) => {
  const comment = await Comment.findByPk(id);
  await comment.destroy();
};

const getCommentById = async (id) => {
  const comment =  await Comment.findByPk(id)
  return comment
}

module.exports = {
  postComment,
  putComment,
  deleteComment,
  getCommentById
};
