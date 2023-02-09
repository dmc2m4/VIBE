const { User } = require("../db.js");

const getAdmin = async () => {
  const userList = await User.findAll({ where: { isAdmin: true } });
  return userList;
};

const getBannedUsers = async () => {
  const userList = await User.findAll({ where: { banned: true } });
  return userList;
};

const switchBan = async (id) => {
  let user = await User.findOne({ where: { id: id } });
  await user.update({
    banned: !user.banned,
  });
};

const switchAdmin = async (id) => {
  let user = await User.findOne({ where: { id: id } });
  await user.update({
    isAdmin: !user.isAdmin,
  });
};

module.exports = {
  getAdmin,
  switchBan,
  switchAdmin,
  getBannedUsers,
};
