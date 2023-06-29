const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createResumen,getAllResumen,getResumen,editResumen,deleteResumen } = require('../controllers/resumenControllers')


const router = express.Router();

//create resumen
router.post("/resumens",validateToken, createResumen);

//get all resumens
router.get("/resumens", getAllResumen);

//get a resumens
router.get("/resumens/:id",validateToken, getResumen);

//update a resumens
router.put("/resumens/:id",validateToken, editResumen);

//delete a resumens
router.delete("/resumens/:id",validateToken,deleteResumen );

module.exports = router;
