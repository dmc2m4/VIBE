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
} = require("../config.js");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);
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

const { User, Product, ShoppingCar, Purchases, Adress, Favorites } =
  sequelize.models;

User.hasMany(Adress, { through: "User_Adress", timestamps: false });
Adress.belongsTo(User, { through: "User_Adress", timestamps: false });
User.hasMany(Product, { through: "User_Product", timestamps: false });
Product.belongsTo(User, { through: "User_Product", timestamps: false });
User.hasMany(Purchases, { through: "User_Purchases", timestamps: false });
Purchases.belongsTo(User, { through: "User_Purchases", timestamps: false });
User.hasOne(ShoppingCar, { through: "User_ShoppingCar", timestamps: false });
ShoppingCar.belongsTo(User, { through: "User_ShoppingCar", timestamps: false });
User.hasOne(Favorites, { through: "User_Favorites", timestamps: false });
Favorites.belongsTo(User, { through: "User_Favorites", timestamps: false });
Purchases.hasMany(Product, { through: "Purchases_Product", timestamps: false });
Product.belongsTo(Purchases, {
  through: "Purchases_Product",
  timestamps: false,
});
ShoppingCar.hasMany(Product, {
  through: "ShoppingCar_Product",
  timestamps: false,
});
Product.belongsTo(ShoppingCar, {
  through: "ShoppingCar_Product",
  timestamps: false,
});
Favorites.hasMany(Product, { through: "Favorites_Product", timestamps: false });
Product.belongsTo(Favorites, {
  through: "Favorites_Product",
  timestamps: false,
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
