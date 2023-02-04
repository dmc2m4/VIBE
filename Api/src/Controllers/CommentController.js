const { Comment, Product, User } = require("../db.js");

const postComment = async (id, req) => {
  const product = await Product.findByPk(id);

  const newComment = await Comment.create({
    question: req.question,
  });

  const user = await User.findOne({ where: { email: req.idUser } });

  await newComment.addProduct(product)

  await newComment.addUser(user)

  return newComment;
};

const putComment = async (id, req) => {
  const { response } = req;
  let update = await Comment.findByPk(id);
  if (response) update.response = response;
  await update.save();
};

module.exports = {
  postComment,
  putComment,
};
