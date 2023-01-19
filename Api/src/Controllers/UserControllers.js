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

const putUsers = async (value, req) => {
const { name, password, email, img } = req
  const update = await User.findByPk(value);
  if (name) update.name = name;
  if (password) update.password = password;
  if (email) update.email = email;
  if (img) update.img = img;
  await update.save();
};

module.exports = {
  getAllUsers,
  postUsers,
  deleteUsers,
  putUsers
};
