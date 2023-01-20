const { User } = require("../db.js");
const bcrypt = require('bcrypt');

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const postUsers = async ({ name, password, password2, img, email }) => {
    const cryptPassword = bcrypt.hashSync(password, 10);
    const cryptPassword2 = bcrypt.hashSync(password2, 10);
    const newUser = await User.create({
      name: name,
      password: cryptPassword,
      password2:cryptPassword2,
      email,
      img,
    })
    return newUser;
  }


  const deleteUsers = async function (email){
     await User.destroy({where: {email}})
}

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
