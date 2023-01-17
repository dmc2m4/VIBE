const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    img: {
      type: DataTypes.STRING,
    },
    profile: {
      type: DataTypes.ENUM('customer', "seller", "seller-customer"),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    }
  },{
    timestamps: true,
    createdAt: false,
    updatedAt: 'actualizado'
  });
};