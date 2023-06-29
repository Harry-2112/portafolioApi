const mongoose = require("mongoose");
  const resumenSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
	direccion: { type: String, required: true },
	telefono: { type: String, required: true },
	nacimiento: { type: String, required: true },
	email: { type: String, required: true },
	interes: { type: String, required: true },
	profesion: { type: String, required: true },
	resumen: { type: String, required: true },
  });


module.exports = mongoose.model("Resumen", resumenSchema);
