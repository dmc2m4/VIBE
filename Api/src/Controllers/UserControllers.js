const { User,Product, Address} = require("../db.js");

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    include: [{
      model: Product,
      as: "favorites"
    }]
  })
  return allUsers
};

const getUserAdresses = async (value) => {
  console.log(value);
  const findUser = await User.findOne({
    where: {
      email: value.email
    },
    include: {
      model: Address
    }
  })
  return findUser.Addresses
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
  const user = await User.findByPk(value.id)
  

};

module.exports = {
  getAllUsers,
  deleteUsers,
  putUsers,
  loginUser,
  getUserAdresses,

};
