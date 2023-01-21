const { Product } = require("../db");

const getPaging = async (info, page) => {

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
    const response = Object.keys(filter).length === 0 ? null : filter;
    return response;
  }

  const product = await Product.findAndCountAll({
    where: filtered(),
    offset: page,
    limit: 5,
  });
  return product;
};

module.exports = { getPaging };
