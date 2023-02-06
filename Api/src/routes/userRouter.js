const { Router } = require("express");
const { createAddresses } = require("../Controllers/AddressController");
const {
  getAllUsers,
  deleteUsers,
  putUsers,
  loginUser
} = require('../Controllers/UserControllers');
const getAdmin = require('../Controllers/AdminController.js')


const userRouter = Router();

userRouter.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.post("/address", async (req, res) => {
  try{
    const userAdresses = await getUserAdresses(req.body)
    res.status(200).send(userAdresses)
  }catch (error){
    res.status(400).send(error.message);
  }
})

userRouter.post("/address/create", async (req, res) => {
  try{
    await createAddresses(req.body);
    res.status(200).send('address created')
  }catch(error){
    res.status(400).send(error.message);
  }
})

userRouter.post("/login", async (req, res) => {
  try{
    const user = await loginUser(req.body);
    res.status(200).send(user)
  }catch(error){
    res.status(401).send(error.message)
  }
})

userRouter.delete('/delete/:email', async (req, res)=>{
  try {
      const {email} = req.params;
      await deleteUsers(email)
      res.status(200).send('User deleted')
  }catch(error){
      res.status(400).send(error.message)
  }
})

userRouter.put("/updateUser/:id", async (req, res) => {
  const { id } = req.params;

  try {
    putUsers(id, req.body);
    res.status(201).send("User updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.get('/admin', async (req, res) => {
  try {
      const adminList = await getAdmin(req.body);
      res.status(200).send(adminList);
  }
  catch (error) {
      return res.status(500).send(error.message);
  }
});


module.exports = userRouter;
