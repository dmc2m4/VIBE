const { Router } = require("express");
const {
  createAddresses,
  destroyAddresses,
  putAddresses,
} = require("../Controllers/AddressController");
const {
  getAllUsers,
  loginUser,
  getUserAdresses,
  putUsers,
  getPurchasesByUser,
} = require("../Controllers/UserControllers");
const {
  getAdmin,
  switchBan,
  switchAdmin,
  getBannedUsers,
} = require("../Controllers/AdminController");

const userRouter = Router();

userRouter.post("/address/destroy", async (req, res) => {
  const { id } = req.body;
  try {
    await destroyAddresses(id);
    res.status(200).send("Deleted address successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

userRouter.put("/address", async (req, res) => {
  const value = req.body;
  try {
    putAddresses(value);
    res.status(201).send("Address updated successfully");
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

userRouter.get("/address", async (req, res) => {
  const { email } = req.body;
  try {
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
  const value = req.body;
  try {
    const user = await loginUser(value);
    res.status(200).json(user);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

userRouter.put("/switchAdmin", async (req, res) => {
  const { id } = req.body;
  try {
    const user = await switchAdmin(id);
    res.status(200).send("User change status");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

userRouter.put("/switchBan", async (req, res) => {
  const { id } = req.body;
  try {
    const user = await switchBan(id);
    res.status(200).send("User change status");
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

userRouter.put("/", async (req, res) => {
  const value = req.body;
  try {
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
