const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createTestimonio,getAllTestimonio,getTestimonio,editTestimonio,deleteTestimonio } = require('../controllers/testimonioControllers')


const router = express.Router();

//create testimonio
router.post("/testimonios",validateToken, createTestimonio);

//get all testimonios
router.get("/testimonios", getAllTestimonio);

//get a testimonios
router.get("/testimonios/:id",validateToken, getTestimonio);

//update a testimonios
router.put("/testimonios/:id",validateToken,editTestimonio );

//delete a testimonios
router.delete("/testimonios/:id",validateToken,deleteTestimonio );

module.exports = router;
