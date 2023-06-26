const { Router } = require('express');
const {Country, Activity} = require("../db")
//Por lo que entiedo hasta ahora, aca adentro tengo que crear las rutas. 
const {creadorGetActivities} = require("../handlers/activitiHandlers"); 
const activiRoutes = Router(); 

activiRoutes.get('/', async (req, res) => {
    try {
        // Buscar todas las actividades en la base de datos
       const allActivities = await Activity.findAll({
          include: Country
       })
       
       // Devolvemos las acitividades encontradas como respuesta
       res.status(200).json(allActivities)
    } catch (error) {
       res.status(400).json({ error: "No se encontraron actividades" })
    }
});

activiRoutes.post('/', async (req,res,next) => {
    try {
         // Crear una nueva actividad utilizando los datos recibidos en el cuerpo de la solicitud
        const response = await creadorGetActivities(req.body);
        res.status(201).json({
            status: 'Se ha creado exitosamente'
        })
    
    } catch (error) {
        
        res.status(400).json({error: 'error en la creacion'})
        next(error)
    }

});


module.exports = activiRoutes; 