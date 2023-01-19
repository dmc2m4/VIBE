const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "user",
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        set(value) {
          this.setDataValue("email", value.toLowerCase());
        },
      },
      img: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
      createdAt: false,
      updatedAt: "actualizado",
      paranoid: true,
      deletedAt: false,
    }
  );
};
