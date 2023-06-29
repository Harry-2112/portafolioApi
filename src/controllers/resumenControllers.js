const resumenSchema = require("../models/resumen");

const createResumen = async (req, res) => {
   const resumen = resumenSchema(req.body);
	resumen
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllResumen = async (req, res) => {
    resumenSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getResumen = async (req, res) => {
    const { id } = req.params;
	resumenSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const editResumen = async (req, res) => {
    const { id } = req.params;
	const {
		nombre,
		direccion,
		telefono,
		nacimiento,
		email,
		interes,
		profesion,
		resumen,
	} = req.body;
	resumenSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					nombre,
					direccion,
					telefono,
					nacimiento,
					email,
					interes,
					profesion,
					resumen,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const deleteResumen = async (req, res) => {
   const { id } = req.params;
	resumenSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
    createResumen,
    getAllResumen,
    getResumen,
    editResumen,
    deleteResumen,
}