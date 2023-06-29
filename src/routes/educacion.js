const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createEducacion,getAllEducacion,getEducacion,editEducacion,deleteEducacion } = require('../controllers/educacionControllers')


const router = express.Router();

//create educacion
router.post("/educacions",validateToken, createEducacion);

//get all educacions
router.get("/educacions", getAllEducacion);

//get a educacions
router.get("/educacions/:id",validateToken, getEducacion);

//update a educacions
router.put("/educacions/:id",validateToken, editEducacion);

//delete a educacions
router.delete("/educacions/:id",validateToken, deleteEducacion);

module.exports = router;
