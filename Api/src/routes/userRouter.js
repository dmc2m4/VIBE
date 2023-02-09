const { Router } = require("express");
const {
  createAddresses,
  destroyAddresses,
/*   putAddresses,
 */} = require("../Controllers/AddressController");
const {
  getAllUsers,
  loginUser,
  getUserAdresses,
  putUsers,
/*   getPurchasesByUser
 */} = require("../Controllers/UserControllers");
const {getAdmin, switchBan, switchAdmin, getBannedUsers} = require('../Controllers/AdminController')

const userRouter = Router();

userRouter.post("/address/destroy", async (req, res) => {
  try {
    const { id } = req.body;
    console.log(req.body);
    await destroyAddresses(id);
    res.status(200).send("Deleted address successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.post("/address", async (req, res) => {
  const value = req.body;
  try {
    await createAddresses(value);
    res.status(200).send("address created");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.post("/address/get", async (req, res) => {
  try {
    const {email} = req.body
    const userAdresses = await getUserAdresses(email);
    res.status(200).json(userAdresses);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.get("/", async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const value = req.body;
    const user = await loginUser(value);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

userRouter.put("/switchAdmin", async (req, res) => {
  try {
    const { id } = req.body;
    const user = await switchAdmin(id);
    res.status(200).send("User change status");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

userRouter.put("/switchBan", async (req, res) => {
  try {
    const { id } = req.body;
    const user = await switchBan(id);
    res.status(200).send("User change status");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

userRouter.put("/", async (req, res) => {
  try {
    const value = req.body;
    putUsers(value);
    res.status(201).send("User updated successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.get("/admin", async (req, res) => {
  try {
    const adminList = await getAdmin();
    res.status(200).json(adminList);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

userRouter.get("/banned", async (req, res) => {
  try {
    const bannedList = await getBannedUsers();
    res.status(200).json(bannedList);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = userRouter;
