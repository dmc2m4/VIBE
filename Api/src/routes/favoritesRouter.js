const { Router } = require("express");

const {
  postFavorites,
  getFavoritesByUser,
  deleteFavorites,
} = require("../Controllers/FavoritesController");
const favoritesRouter = Router();

favoritesRouter.post("/", async (req, res) => {
  try {
    await postFavorites(req.body);
    res.status(200).send("product in favorites");
  } catch (error) {
    res.status(400).send(error.message);
  }
});
  try {
    await postFavorites(req.body);
    res.status(200).send("product in favorites");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

favoritesRouter.get("/:email", async (req, res) => {
  try {
    const favorites = await getFavoritesByUser(req.params);
    res.status(200).json(favorites);
  } catch (error) {
    res.status(401).send(error.message);
  }
});

favoritesRouter.post("/delete", async (req, res) => {
  try {
    await deleteFavorites(req.body);
    res.status(200).send("Favorite deleted");
  } catch (error) {
    res.status(401).send(error.message);
  }
});

module.exports = favoritesRouter;
