const { Router } = require('express');

// Importar todos los routers;
const userRouter = require('./userRouter.js');
const router = Router();

// Configurar los routers
router.use('/user', userRouter);


module.exports = router;
