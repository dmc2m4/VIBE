const { User, Product, Favorites } = require("../db");

const postFavorites = async (value) => {
  const findUser = await User.findOne({
    where: {
      email: value.email,
    },
  });
  const findProduct = await Product.findByPk(value.id);
  await findProduct.update({ isfav: true });

  await findUser.addFavorites(findProduct);
};

const getFavoritesByUser = async (value) => {
  const user = await User.findOne({
    where: {
      email: value,
    },
    include: [
      {
        model: Product,
        as: "favorites",
      },
    ],
  });

  return user.favorites;
};

const deleteFavorites = async (value) => {
  const findUser = await User.findOne({
    where: {
      email: value,
    },
  });
  const findProduct = await Product.findByPk(value);
  await findProduct.update({ isfav: false });

  await findUser.removeFavorites(findProduct);
};

module.exports = {
  postFavorites,
  getFavoritesByUser,
  deleteFavorites,
};
