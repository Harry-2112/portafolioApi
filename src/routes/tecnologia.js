const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createTecnologia,getAllTecnologia,getTecnologia,editTecnologia,deleteTecnologia } = require('../controllers/tecnologiaControllers')


const router = express.Router();

//create tecnologia
router.post("/tecnologias",validateToken, createTecnologia);

//get all tecnologias
router.get("/tecnologias", getAllTecnologia);

//get a tecnologias
router.get("/tecnologias/:id",validateToken, getTecnologia);

//update a tecnologias
router.put("/tecnologias/:id",validateToken, editTecnologia);

//delete a tecnologias
router.delete("/tecnologias/:id",validateToken,deleteTecnologia );

module.exports = router;
