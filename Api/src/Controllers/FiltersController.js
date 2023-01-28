const { Product } = require("../db");
const { Op } = require("sequelize");

const getFilters = async (page, info = {}) => {
  function filtered() {
    let filter = {};
    if(info.alphabetically){
      filter.alphabetically = info.alphabetically
    }
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
      // filter.name = info.name;
      // console.log(filter);
    }
    return Object.keys(filter).length > 0 ? filter : null;
  }
  const response = await Product.findAll({
    where: filtered(),
  });
  return response;
};

module.exports = { getPagination };
