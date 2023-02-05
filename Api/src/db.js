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
  DB_DEPLOY
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

// User.belongsToMany(Product, { through: "offered_product" });
// Product.belongsToMany(User, { through: "offered_product" });

User.belongsToMany(Product, { through: Comment});
Product.belongsToMany(User, { through: Comment});

// User.hasMany(Product);
// Product.belongsTo(User);

User.hasMany(Address);
Address.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

User.hasMany(Review);
Review.belongsTo(User);

// Product.hasMany(Comment);
// Comment.belongsTo(Product);

// User.hasMany(Comment);
// Comment.belongsTo(User);


module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
