const { User } = require("../db.js");
//arriba de esta linea hacemos los requires

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const postUsers = async (value) => {
  const newUser = await User.create(value);
  return newUser;
};
module.exports = {
  getAllUsers,
  postUsers,
};
