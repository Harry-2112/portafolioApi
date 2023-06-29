const redeSchema = require("../models/rede");

const createRede = async (req, res) => {
   const rede = redeSchema(req.body);
	rede
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllRede = async (req, res) => {
    redeSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getRede = async (req, res) => {
    const { id } = req.params;
	redeSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const editRede = async (req, res) => {
    const { id } = req.params;
	const {
		red,
		link,
	} = req.body;
	redeSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					red,
					link,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const deleteRede = async (req, res) => {
   const { id } = req.params;
	redeSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
    createRede,
    getAllRede,
    getRede,
    editRede,
    deleteRede,
}