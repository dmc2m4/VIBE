const { User } = require("../db.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const postUsers = async ({ name, password,  img, email }) => {
    const cryptPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      name: name,
      password: cryptPassword,
      email,
      img,
    });

    let token = jwt.sign({user: newUser}, "secret", {expiresIn: "7d"})

    return {user: newUser, token: token};
  }

const loginUser = async (value) => {
  const findingUser = await User.findOne(
    {where: {
      email: value.email
    }});
    if(!findingUser) {
      throw new Error ('User not found');
    }else{
      if (bcrypt.compareSync(value.password, findingUser.password)){
        let token = jwt.sign({user: findingUser}, "secret", {expiresIn: "7d"});
        return {user: findingUser, token: token}
      }else {
        throw new Error ('Incorrect password');
      }
    }

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
  putUsers,
  loginUser
};
