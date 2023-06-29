const mongoose = require("mongoose");

const redeSchema = new mongoose.Schema({
	red: { type: String, required: true },
	link: { type: String, required: true },
  });

module.exports = mongoose.model("Rede", redeSchema);