const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "product",
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
      },
      img: {
        type: DataTypes.TEXT(100000),
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
        type: DataTypes.ENUM("male", "female"),
        allowNull: false,
      },
      cost: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.INTEGER,
        validate: {
          min: 1,
          max: 5,
          isEven(value) {
            if (value < 1 || value > 5)
              throw new Error("the rating must be a value between 1 and 5");
              //capaz le mandamos un enum del 1 al 5, para que elija el puntaje
          },
        },
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
    { timestamps: true, createdAt: true }
  );
};
