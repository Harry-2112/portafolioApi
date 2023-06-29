const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
	src: {
		type: String,
		require: true,
	},
	titulo: {
		type: String,
		require: true,
	},
	autor: {
		type: String,
		require: true,
	},
	fecha: {
		type: String,
		require: true,
	},
	categoria: {
		type: String,
		require: true,
	},
	link: {
		type: String,
		require: true,
	},
});

module.exports = mongoose.model("Blog", blogSchema);
