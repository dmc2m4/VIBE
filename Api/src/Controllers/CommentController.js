const { Comment, Product, User } = require("../db.js");

const postComment = async (value) => {
  const product = await Product.findByPk(value.id);
  const user = await User.findOne({ where: { email: value.email } });
  const newComment = await Comment.create({
    question: value.question
  });
  await product.addComments(newComment)
  await user.addComments(newComment)
  return newComment;
};

const putComment = async (value) => {
  let comment = await Comment.findByPk(value.id);
  await comment.update({
    response: value.response
  })
};

const deleteComment = async (id) => {
  await Comment.destroy({
    where: {
      id : id
    }
  });
};

const getCommentById = async (id) => {
  const comment =  await Comment.findByPk(id, {
    include: {
      model: User
    }})
  return comment
}

module.exports = {
  postComment,
  putComment,
  deleteComment,
  getCommentById
};
