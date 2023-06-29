const principalSchema = require("../models/principal");
const fs = require('fs-extra')
const { uploadImage, deleteImage } = require('../utils/cloudinary.js')

const createPrincipal = async (req, res) => {
	const principal = principalSchema(req.body);
	if (req.files?.image) {
		const result = await uploadImage(req.files.image.tempFilePath)
		principal.image = {
			public_id: result.public_id,
			secure_url: result.secure_url
		}
		await fs.unlink(req.files.image.tempFilePath)
	}
	principal
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllPrincipal = async (req, res) => {
	principalSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getPrincipal = async (req, res) => {
	const { id } = req.params;
	principalSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const editPrincipal = async (req, res) => {
	const { id } = req.params;
	try {
		const principal = await principalSchema.findById(id)
		if (!principal)
			return res.status(404).json({ message: "Product Not Found" });
		if (req.files?.image) {
			if (principal.image && principal.image.public_id) {
				await deleteImage(principal.image.public_id);
			}
			const result = await uploadImage(req.files.image.tempFilePath)
			req.body.image = {
				public_id: result.public_id,
				secure_url: result.secure_url
			}
		}
		const updatePrincipal = await principalSchema.findByIdAndUpdate(id, req.body, {
			new: true,
		});

		return res.json(updatePrincipal);
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}
};

const deletePrincipal = async (req, res) => {
	const { id } = req.params;
	const principal = await principalSchema.findById(id)
	//await deleteImage(principalSchema.image.public_id)
	if (principal.image && principal.image.public_id) {
		await deleteImage(principal.image.public_id);
	}


	principalSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
	createPrincipal,
	getAllPrincipal,
	getPrincipal,
	editPrincipal,
	deletePrincipal,
}