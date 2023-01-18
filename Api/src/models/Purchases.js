const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "purchases",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      cost: {
        //del producto en el momento, ver como se hace eso
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Finished", "Pending", "Cancelled"),
      },
    },
    { timestamps: true, createdAt: true }
  );
};
