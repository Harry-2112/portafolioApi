const mongoose = require("mongoose");

const principalSchema = new mongoose.Schema({
	nombre: { type: String, required: true },
	profesion: { type: String, required: true },
	cv: { type: String, required: true },
	image: {
		public_id:String,
		secure_url:String
	}
});

module.exports = mongoose.model("Principal", principalSchema);