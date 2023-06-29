const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createPrincipal,getAllPrincipal,getPrincipal,editPrincipal,deletePrincipal } = require('../controllers/principalControllers')


const router = express.Router();

//create principal
router.post("/principals",validateToken, createPrincipal);

//get all principals
router.get("/principals",getAllPrincipal );

//get a principals
router.get("/principals/:id",validateToken,getPrincipal );

//update a principals
router.put("/principals/:id",validateToken,editPrincipal );

//delete a principals
router.delete("/principals/:id",validateToken, deletePrincipal);

module.exports = router;
