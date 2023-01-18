const {User} = require ("../db.js")
//arriba de esta linea hacemos los requires

const getAllUsers = async () => {
    const allUsers = await User.findAll()
    return allUsers
}

const postUsers = async (value) => {
    const searchingUser = await User.findAll({
        where: {
            email: value.email.toUpperCase()
        }
    })
    if (searchingUser.length) throw new Error ('this user already exist')
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i
    if (!regexEmail.test(value.email)) throw new Error ('this is not an email');
    const newUser = await User.create(value)
    return newUser;
}
module.exports = {
    getAllUsers,
    postUsers
}