const { Router } = require("express");
const {
  getAllUsers,
  postUsers,
  deleteUsers,
  putUsers
} = require("../controllers/UserControllers");
const PUM = require("../middlewares/PostUserMiddleware");
const { User } = require("../db");

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).send(allUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.post("/", PUM, async (req, res) => {
  try {
    const newUser = await postUsers(req.body);
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.delete('/delete/:email', async (req, res)=>{
  try {
      // console.log(req.params);
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

module.exports = userRouter;
