const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createExperiencia,getAllExperiencia,getExperiencia,editExperiencia,deleteExperiencia } = require('../controllers/experienciaControllers')


const router = express.Router();

//create experiencia
router.post("/experiencias",validateToken, createExperiencia);

//get all experiencias
router.get("/experiencias", getAllExperiencia);

//get a experiencias
router.get("/experiencias/:id",validateToken, getExperiencia);

//update a experiencias
router.put("/experiencias/:id",validateToken, editExperiencia);

//delete a experiencias
router.delete("/experiencias/:id",validateToken, deleteExperiencia);

module.exports = router;
