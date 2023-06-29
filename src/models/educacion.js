const mongoose = require("mongoose");

const educacionSchema = new mongoose.Schema({
	grado: { type: String, required: true },
	escuela: { type: String, required: true },
	inicio: { type: String, required: true },
	fin: { type: String, required: true },
	certificado: { type: String, required: true },
	resumen: { type: String, required: true }
  });

module.exports = mongoose.model("Educacion", educacionSchema);
