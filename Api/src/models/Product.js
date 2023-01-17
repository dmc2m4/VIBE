const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    // description: {
    //     type: DataTypes.STRING,
    //     allowNull: false
    // },
    img: {
        type:DataTypes.STRING,
        allowNull: false,
    },
    size: {
        type: DataTypes.STRING,
        allowNull:  false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.ENUM('shirts', 't-shirts', 'pants', 'shoes', 'shorts', 'jackets', 'sweatshirts'),
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: false,
    },
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        validate : {
            min: 1,
            max: 5,
            isEven (value){
                if(value < 1|| value > 5) throw new Error ("the rating must be a value between 1 and 5")
            },
          }
    },
    season: {
        type: DataTypes.ENUM('summer', 'spring', 'winter', 'autumn','all seasons'),
        allowNull: false
      },
  },{
    timestamps: true,
    createdAt: false,
    updatedAt: 'actualizado'
  });
};