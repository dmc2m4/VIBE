const { Product } = require("../db");
const { Sequelize, Op } = require("sequelize");

const getPagination = async (page, info = {}) => {
  let filter = {};

  function filtered() {
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
      filter.name = { [Op.substring]: info.name };
    }

    return Object.keys(filter).length > 0 ? filter : null;
  }
  function order() {
    if (info.alphabetically === "A-Z") {
      return [["name", "ASC"]];
    }
    if (info.alphabetically === "Z-A") {
      return [["name", "DESC"]];
    }
    if (info.price === "Descending Price") {
      return [["cost", "DESC"]];
    }
    if (info.price === "Ascending Price") {
      return [["cost", "ASC"]];
    }
    return null;
  }
  const response = await Product.findAndCountAll({
    where: filtered(),
    order: order(),
    offset: page,
    limit: 5,
  });

  return response;
};

module.exports = { getPagination };
