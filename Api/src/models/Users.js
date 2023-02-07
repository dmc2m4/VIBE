const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
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
   /*    password: {
        type: DataTypes.STRING,
        allowNull: false,
      }, */
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
        defaultValue:
          "https://t3.ftcdn.net/jpg/00/64/67/80/360_F_64678017_zUpiZFjj04cnLri7oADnyMH0XBYyQghG.webp",
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    },
    {
      paranoid: true,
      timestamps: true,
      createdAt: false,
      updatedAt: "actualizado",
    }
  );
};
