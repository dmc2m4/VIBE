const { DataTypes, STRING } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Product",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          this.setDataValue("name", value.toUpperCase());
        },
      },
      img: {
        type: DataTypes.STRING(1000),
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.ENUM(
          "shirts",
          "t-shirts",
          "pants",
          "shoes",
          "shorts",
          "jackets",
          "sweatshirts",
          "accesories"
        ),
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM("male", "female", "unisex"),
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      season: {
        type: DataTypes.ENUM(
          "summer",
          "spring",
          "winter",
          "autumn",
          "all seasons"
        ),
        allowNull: false,
      },
      stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      isfav: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
      /* public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }, */
    },
    {
      paranoid: true,
      timestamps: true,
      createdAt: true,
    }
  );
};
