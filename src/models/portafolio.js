const mongoose = require("mongoose");

const portafolioSchema = mongoose.Schema({
	filtro: {
		type: String,
		required: true
	},
	href: {
		type: String,
		required: true
	},
	alt: {
		type: String,
		required: true
	},
	data: {
		nombre: {
			type: String,
			required: true
		},
		link: {
			type: String,
			required: true
		},
		categoria: {
			type: String,
			required: true
		},
		cliente: {
			type: String,
			required: true
		},
		rol: {
			type: String,
			required: true
		},
		fecha: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		imagenes: [{
			type: String,
			required: true
		}]
	}
});

module.exports = mongoose.model("Portafolio", portafolioSchema);
