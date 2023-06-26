const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countRoutes = require("./countriesRoutes");
const activiRoutes = require("./activitiRoutes"); 

const router = Router();


// Configurar los routers
router.use("/countries", countRoutes); 
router.use("/activities", activiRoutes); 
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
