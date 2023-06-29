const mongoose = require("mongoose");

const testimonioSchema = new mongoose.Schema({
	img: { type: String, required: true, default: "../assets/images/testimonials/1.jpeg" },
	testimonio: { type: String, required: true },
	nombre: { type: String, required: true },
	puesto: { type: String, required: true }
});

module.exports = mongoose.model("Testimonio", testimonioSchema);
