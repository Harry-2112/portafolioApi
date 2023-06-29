const mongoose = require("mongoose");

const servicioSchema = new mongoose.Schema({
	icon: { type: String, required: true },
	service: { type: String, required: true },
	resumen: { type: String, required: true }
  });

module.exports = mongoose.model("Servicio", servicioSchema);
