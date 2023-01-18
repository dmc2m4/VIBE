/* [13:55, 18/1/2023] Daniel Henry: rutas:
delete - products 
put - products
delete - user 
put - user
[13:57, 18/1/2023] Daniel Henry: /:userId/favorites */

const { Product } = require("../db.js");

const getAllProduct = async () => {
  const allProduct = await Product.findAll();
  return allProduct;
};

const postProduct = async (value) => {
  const newProduct = await Product.create(value);
  return newProduct;
};

module.exports = {
  getAllProduct,
  postProduct,
};
