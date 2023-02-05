require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_DEPLOY,
} = require("../config.js");
const { userInfo } = require("os");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

// const sequelize = new Sequelize(
//   DB_DEPLOY,
//   {
//     logging: false,
//     native: false,
//   }
// );

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Product, Review, Address, Comment } = sequelize.models;

Product.hasMany(Review);
Review.belongsTo(Product);

Comment.belongsTo(User, { through: "user_comment" });
User.belongsToMany(Comment, { through: "user_comment" });

Comment.belongsTo(Product, { through: "product_comment" });
Product.belongsToMany(Comment, { through: "product_comment" });

  User.belongsToMany(Product, { through: 'purchases'});
  Product.belongsToMany(User, { through: 'purchases'});

  Review.belongsTo(Product, {through: 'product_review'});
  Product.belongsToMany(Review, {through: 'product_review'});

  Review.belongsTo(User, {through: 'user_review'});
  User.belongsToMany(Review, {through: 'user_review'});
  
  Comment.belongsTo(Product, {through: 'product_comment'});
  Product.belongsToMany(Comment, {through: 'product_comment'});

  Comment.belongsToMany(User, {through: 'user_comment'});
  User.belongsToMany(Comment, {through: 'user_comment'});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
