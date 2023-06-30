const principalSchema = require("../models/principal");

const createPrincipal = async (req, res) => {
	const principal = principalSchema(req.body);
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