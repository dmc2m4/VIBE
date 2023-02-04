const { Product } = require("../db.js");

const getAllProduct = async () => {
  const allProduct = await Product.findAll();
  return allProduct;
};

const getProductById = async function (id) {
  const product = await Product.findByPk(id);
  return product;
};

const postProduct = async (value) => {
  console.log(value);
  const newProduct = await Product.create(value);
  return newProduct
}

const deleteProduct = async (value) => {
  await Product.destroy({
    where: {
      id: value,
    },
  });
};

const putProduct = async (value, req) => {
  const {
    name,
    img,
    size,
    color,
    category,
    gender,
    cost,
    season,
    stock,
    amount,
  } = req;
  const update = await Product.findByPk(value);
  if (name) update.name = name;
  if (img) update.img = img;
  if (size) update.size = size;
  if (color) update.color = color;
  if (category) update.category = category;
  if (gender) update.gender = gender;
  if (cost) update.cost = cost;
  if (season) update.season = season;
  if (stock) update.stock = stock;
  if (amount) update.amount = amount;
  await update.save();
};



module.exports = {
  getAllProduct,
  deleteProduct,
  putProduct,
  getProductById,
  postProduct,
};
