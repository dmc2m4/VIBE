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
    if (info.name) {
      filter.name = info.name;
    }
    return Object.keys(filter).length > 0 ? filter : null;
  }
  const response = await Product.findAndCountAll({
    where: filtered(),
    offset: page,
    limit: 5,
  });
  return response;
};

module.exports = { getPagination };
