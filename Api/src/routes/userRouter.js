const { Router } = require("express");
const { getAllUsers, postUsers } = require("../Controllers/UserControllers");
const PUM = require("../Middlewares/PostUserMiddleware");
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

userRouter.delete("/delete", async (req, res) => {
  const { email } = req.body;
  try {
    await User.destroy({
      where: {
        email: email,
      },
      force: true,
    });
    res.status(200).send("Deleted successfully")
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = userRouter;
