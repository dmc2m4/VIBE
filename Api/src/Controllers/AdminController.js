const {User} = require('../db.js')

async function getAdmin() {
  const userList = await User.findAll({where:{isAdmin: true}});
  return userList;
}

module.exports =  getAdmin;