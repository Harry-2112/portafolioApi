const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createRede,getAllRede,getRede,editRede,deleteRede } = require('../controllers/redeControllers')


const router = express.Router();

//create rede
router.post("/redes",validateToken,createRede );

//get all redes
router.get("/redes",getAllRede );

//get a redes
router.get("/redes/:id",validateToken, getRede);

//update a redes
router.put("/redes/:id",validateToken, editRede);

//delete a redes
router.delete("/redes/:id",validateToken,deleteRede );

module.exports = router;
