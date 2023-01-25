const { User,Product } = require("../db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const emailController = require('./EmailController')

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    include: [{
      model: Product,
      as: "favorites"
    }]
  })
  return allUsers
};

const postUsers = async ({ name, password, img, email }) => {
  const cryptPassword = bcrypt.hashSync(password, 10);
  const newUser = await User.create({
    name: name,
    password: cryptPassword,
    email,
    img,
  });
  if (newUser) {
    emailController.sendEmail(newUser.email,
      `Hola ${newUser.email} \n tu cuenta ha sigo registrada exitosamente \n Bienvenido!!`)
  }

  let token = jwt.sign({ user: newUser }, "secret", { expiresIn: "7d" })

  return { token };
}

const loginUser = async (value) => {
  const user = await User.findOne(
    {
      where: {
        email: value.email
      }
    });
  if (!user) {
    return "hola"
  } else {
    if (bcrypt.compareSync(value.password, user.password)) {
      let token = jwt.sign({ user: user }, "secret", { expiresIn: "7d" });
      return { token }
    } else {
      return "chao";
    }
  }

}

const deleteUsers = async function (email) {
  await User.destroy({ where: { email } })
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
  putUsers,
  loginUser
};
