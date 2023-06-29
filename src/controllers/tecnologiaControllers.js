const tecnologiaSchema = require("../models/tecnologia");

const createTecnologia = async (req, res) => {
   const tecnologia = tecnologiaSchema(req.body);
	tecnologia
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllTecnologia = async (req, res) => {
    tecnologiaSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getTecnologia = async (req, res) => {
    const { id } = req.params;
	tecnologiaSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const editTecnologia = async (req, res) => {
    const { id } = req.params;
	const {
		nombre,
		progreso,
	} = req.body;
	tecnologiaSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					nombre,
					progreso,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const deleteTecnologia = async (req, res) => {
   const { id } = req.params;
	tecnologiaSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
    createTecnologia,
    getAllTecnologia,
    getTecnologia,
    editTecnologia,
    deleteTecnologia,
}