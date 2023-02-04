const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Comment",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      question: {
        type: DataTypes.TEXT,
      },
      response: {
        type: DataTypes.TEXT,
      }
    },
    {
      timestamps: true,
      createdAt: true,
    }
  );
};
