const {Router} = require('express')
const {getAllUsers, } = require('../Controllers/controllers')

const userRouter = Router()

userRouter.get('/', async (req, res) => {
    try{
        const allUsers = getAllUsers() 
        res.status(200).send(allUsers)
    }catch(error){
        res.status(400).send(error.message)
    }
})

module.exports = userRouter