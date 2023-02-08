const { Product, Review, Comment, User } = require("../db.js");

const getAllProduct = async () => {
  const allProduct = await Product.findAll();
  return allProduct;
};

const getProductById = async function (id) {
  const product = await Product.findByPk(id,{
    include:[
      {model: Review},
      {model: Comment, 
      include: {
        model: User
      }}
    ]
  });
  return product;
};

const postProduct = async (value) => {
  const newProduct = await Product.create(value);
  return newProduct;
};

const destroyProduct = async (id) => {
  await Product.destroy({
    where: {
      id: id,
    },
  });
};

const restoreProduct = async (id) => {
  await Product.restore({
    where: {
      id: id,
    },
  });
};

const putProduct = async (req) => {
  const {
    id,
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
  const update = await Product.findByPk(id);
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
  destroyProduct,
  putProduct,
  getProductById,
  postProduct,
  restoreProduct,
};
