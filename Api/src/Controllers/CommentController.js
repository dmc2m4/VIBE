const { Comment, Product, User } = require("../db.js");

const postComment = async (id, req) => {
  const product = await Product.findByPk(id);

  const newComment = await Comment.create(req);

  const user = await User.findOne({ where: { email: req.email } });

  await newComment.addComment(product)

  await newComment.addComment(user)

  return newComment;
};

const putComment = async (id, req) => {
  const { response } = req;
  await Comment.update({ deletedAt: null }, { where: { id } });
  let update = await Comment.findByPk(id);
  if (response) update.response = response;
  await update.save();
};

const deleteComment = async (id) => {
  await Comment.destroy({ where: { id } });
};

module.exports = {
  postComment,
  putComment,
  deleteComment
};
