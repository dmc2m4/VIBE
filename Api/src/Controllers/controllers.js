const {User} = require ("../db.js")
//arriba de esta linea hacemos los requires

const getAllUsers = async () => {
    const allUsers = await User.findAll()
    return allUsers
}

module.exports = {
    getAllUsers
}