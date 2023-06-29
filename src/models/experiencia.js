const mongoose = require("mongoose");

const experienciaSchema = mongoose.Schema({
	puesto: { type: String, required: true },
	empresa: { type: String, required: true },
	inicio: { type: String, required: true },
	fin: { type: String, required: true },
	resumen: { type: String, required: true }
});

module.exports = mongoose.model("Experiencia", experienciaSchema);
