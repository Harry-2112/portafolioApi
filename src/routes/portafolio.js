const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createPortafolio,getAllPortafolio,getPortafolio,editPortafolio,deletePortafolio } = require('../controllers/portafolioControllers')


const router = express.Router();

//create portafolio
router.post("/portafolios",validateToken,  createPortafolio);

//get all portafolios
router.get("/portafolios", getAllPortafolio);

//get a portafolios
router.get("/portafolios/:id",validateToken,  getPortafolio);

//delete a portafolios
router.delete("/portafolios/:id",validateToken, editPortafolio );

//update a portafolios
router.put("/portafolios/:id",validateToken,  deletePortafolio);



module.exports = router;
