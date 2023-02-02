const { DataTypes } = require("sequelize");

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
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.STRING,
        allowNull: false,
        //deberia ser un array o ver como lo conectamos con stock
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
          "sweatshirts"
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
      /* public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }, */
    },
    {
      timestamps: true,
      createdAt: true,
    }
  );
};
