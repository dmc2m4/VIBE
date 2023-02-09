const { Product, Review, User } = require("../db.js");

const postReview = async (value) => {
  const {id, email, rating, title, text} = value
  const product = await Product.findOne({
    where: {
      id: id,
    },
  });
  const user = await User.findOne({
    where: {
      email: email,
    },
  });

  const newReview = await Review.create({
    rating: rating,
    title: title,
    text: text,
  });

  await product.addReviews(newReview);
  await user.addReviews(newReview);

  return newReview;
};

const destroyReview = async (id) => {
  await Review.destroy({
    where: {
      id: id,
    },
  });
};

module.exports = {
  postReview,
  destroyReview,
};
