const { Router } = require("express");

const {
  postFavorites,
  getFavoritesByUser,
  deleteFavorites,
} = require("../Controllers/FavoritesController");
const favoritesRouter = Router();

favoritesRouter.post("/", async (req, res) => {
    const value = req.body
    try {
        await postFavorites(value);
        res.status(200).send('The product has been added to your favorites list')
    } catch (error) {
        res.status(400).send(error.message)
    }
})

favoritesRouter.get("/", async (req, res) => {
    const value = req.body
    try{
        const favorites = await getFavoritesByUser(value);
        res.status(200).send(favorites)
    }catch(error){
        res.status(401).send(error.message)
    }
})

favoritesRouter.post("/", async (req, res) => {
    const value = req.body
    try{
        await deleteFavorites(value);
        res.status(200).send('Favorite deleted')
    }catch(error){
        res.status(401).send(error.message)
    }
})

module.exports = favoritesRouter;
