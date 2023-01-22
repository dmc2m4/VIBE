const { Router } = require('express');

// Importar todos los routers;
const userRouter = require('./userRouter.js');
const productRouter = require('./productRouter')
const pagingRouter = require('./pagingRouter')
const router = Router();

// Configurar los routers
router.use('/user', userRouter);
router.use('/product', productRouter)
router.use('/pagination', pagingRouter)

module.exports = router;
