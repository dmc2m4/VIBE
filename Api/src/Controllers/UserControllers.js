const { User } = require("../db.js");

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const postUsers = async (value) => {
  const newUser = await User.create(value);
  return newUser;
};

const deleteUsers = async (value) => {
  await User.destroy({
    where: {
      id: value,
    },
  });
};

module.exports = {
  getAllUsers,
  postUsers,
  deleteUsers,
};
