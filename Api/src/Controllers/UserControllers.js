const { User, Product, Address } = require("../db.js");

const getAllUsers = async () => {
  const allUsers = await User.findAll({
    include: [
      {
        model: Product,
        as: "favorites",
      },
    ],
  });
  return allUsers;
};

const getUserAdresses = async (value) => {
  const findUser = await User.findOne({
    where: {
      email: value.email,
    },
    include: {
      model: Address,
    },
  });
  return findUser.Addresses;
};

const loginUser = async (value) => {
  const findUser = await User.findOne({
    where: {
      email: value.email,
    },
  });
  if (findUser) {
    return findUser;
  } else {
    const newUser = await User.create({
      name: value.name,
      email: value.email,
      img: value.picture,
    });
    return newUser;
  }
};

const destroyUsers = async (email) => {
  await User.destroy({
    where: {
      email: email,
    },
  });
};

const restoreUsers = async (email) => {
  await User.restore({
    where: {
      email: email,
    },
  });
};

const putUsers = async (value) => {
  let user = await User.findByPk(value.id);
  if (value.name) {
    user.name = value.name;
  }
/*   if (value.password) {
    user.password = value.password;
  }
  */
  if (value.email) {
    user.email = value.email;
  }
  if (value.img) {
    user.img = value.img;
  }
  if (value.isAdmin) {
    user.isAdmin = value.isAdmin;
  }
  await user.save();
};

module.exports = {
  getAllUsers,
  destroyUsers,
  restoreUsers,
  loginUser,
  getUserAdresses,
  putUsers,
};
