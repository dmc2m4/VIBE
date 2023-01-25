const { Router } = require("express");

const {
    getFavorites
} = require("../controllers/FavoritesController")
const favoritesRouter = Router();

favoritesRouter.get(("/"), async (req, res) => {
    try {
        const favorites = await getFavorites(req.body);
        res.status(200).send(favorites)
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// favoritesRouter.post(("/"), async (req, res) => {
//     try {
//         const newFavorites = await postFavorites(req.body)
//         res.status(200).send(favorites)
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// })

module.exports = favoritesRouter
