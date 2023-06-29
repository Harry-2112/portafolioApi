const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createServicio,getAllServicio,getServicio,editServicio,deleteServicio } = require('../controllers/servicioControllers')


const router = express.Router();

//create servicio
router.post("/servicios",validateToken, createServicio);

//get all servicios
router.get("/servicios", getAllServicio);

//get a servicios
router.get("/servicios/:id",validateToken, getServicio);

//update a servicios
router.put("/servicios/:id",validateToken,editServicio );

//delete a servicios
router.delete("/servicios/:id",validateToken,deleteServicio );

module.exports = router;
