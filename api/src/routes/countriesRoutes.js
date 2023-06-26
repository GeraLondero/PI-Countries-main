const { Router } = require('express');
//Por lo que entiedo hasta ahora, aca adentro tengo que crear las rutas. 
const {getHandlers, getHandlersID} = require("../handlers/countriesHandlers"); 
const countRoutes = Router(); 

countRoutes.get("/", getHandlers);
countRoutes.get("/:id", getHandlersID);


module.exports = countRoutes; 