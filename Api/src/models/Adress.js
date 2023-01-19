const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Adress",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      flat: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,
      createdAt: false,
    }
  );
};
