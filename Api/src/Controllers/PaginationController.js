const { Product } = require("../db");

const getPagination = async (page, info = {}) => {
  function filtered() {
    let filter = {};
    if (info.color) {
      filter.color = info.color;
    }
    if (info.size) {
      filter.size = info.size;
    }
    if (info.category) {
      filter.category = info.category;
    }
    if (info.season) {
      filter.season = info.season;
    }
    const response = Object.keys(filter).length > 0 ? filter : null;
    return response;
  }

  const products = await Product.findAndCountAll({
    where: filtered(),
    offset: page,
    limit: 5,
  });

  const allProducts = await Product.findAll({
    where: filtered(),
  });
  const result = allProducts.length;

  return { products: products, num: result };
};

module.exports = { getPagination };
