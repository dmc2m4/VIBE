const { Router } = require("express");

// Importar todos los routers;
const userRouter = require("./userRouter.js");
const productRouter = require("./productRouter");
const paginationRouter = require("./paginationRouter");
const favoritesRouter = require("./favoritesRouter.js");
const commentRouter = require("./commentRouter")

const router = Router();

// Configurar los routers
router.use("/user", userRouter);
router.use("/product", productRouter);
router.use("/pagination", paginationRouter);
router.use("/favorites", favoritesRouter);
router.use("/comment", commentRouter);


module.exports = router;
