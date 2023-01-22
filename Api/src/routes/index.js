const { Router } = require('express');

// Importar todos los routers;
const userRouter = require('./userRouter.js');
const productRouter = require('./productRouter')
const router = Router();

// Configurar los routers
router.use('/user', userRouter);
router.use('/product', productRouter);git 

module.exports = router;
