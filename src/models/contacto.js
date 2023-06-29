const mongoose = require("mongoose");

const contactoSchema = mongoose.Schema({
	direccion: {
		type: String,
		require: true,
	},
	telefono: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
	}
});

module.exports = mongoose.model("Contacto", contactoSchema);
