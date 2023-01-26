const { Router } = require("express");

const {
    postFavorites
} = require("../controllers/FavoritesController")
const favoritesRouter = Router();

favoritesRouter.post(("/"), async (req, res) => {
    try {
        await postFavorites(req.body);
        res.status(200).send('producto agregado a la tabla de favoritos')
    } catch (error) {
        res.status(400).send(error.message)
    }
})


module.exports = favoritesRouter
