const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createContacto,getAllContacto,getContacto,editContacto,deleteContacto } = require('../controllers/contactoControllers')

const router = express.Router();

//create contacto
router.post("/contactos",validateToken, createContacto );

//get all contactos
router.get("/contactos", getAllContacto );

//get a contactos
router.get("/contactos/:id",validateToken, getContacto );

//update a contactos
router.put("/contactos/:id",validateToken, editContacto );

//delete a contactos
router.delete("/contactos/:id",validateToken, deleteContacto );

module.exports = router;
