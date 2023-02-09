const { User, Product } = require("../db");

const getPurchasesByUser = async (email) => {
  console.log(email);
  const user2 = await User.findOne({
    where: {
      email: email,
    },
    include: {
      model: Product,
      as: "purchases",
    },
  });
  return user2.purchases;
};

const putPurchases = async ({ items, user }) => {
  console.log(items, user);
  let user2 = await User.findOne({
    where: {
      email: user,
    },
  });
  items.forEach(async (e) => {
    let product = await Product.findByPk(e.id);
    await user2.addPurchases(product);
    await product.update({ stock: product.stock - e.quantity });
  });
};

module.exports = {
  getPurchasesByUser,
  putPurchases,
};
