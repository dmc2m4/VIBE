const { User,Product } = require("../db.js");
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const emailController = require('./EmailController')

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    include: [{
      model: Product,
      as: "favorites"
    }]
  })
  return allUsers
};

const loginUser = async (value) => {
  const findUser = await User.findOne({
    where: {
      email: value.email
    }
  })
  if(findUser){
    return findUser
  }else{
    const newUser = await User.create({
      name: value.name,
      email: value.email,
    })
    return newUser
  }
}

const deleteUsers = async function (email) {
  await User.destroy({ where: { email } })
}

const putUsers = async (value) => {
  
};

module.exports = {
  getAllUsers,
  deleteUsers,
  putUsers,
  loginUser,
};
