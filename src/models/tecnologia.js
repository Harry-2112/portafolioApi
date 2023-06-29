const mongoose = require("mongoose");

const tecnologiaSchema = mongoose.Schema({
	nombre: { type: String, required: true },
	progreso: { type: Number, required: true }
});

module.exports = mongoose.model("Tecnologia", tecnologiaSchema);
