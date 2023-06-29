const educacionSchema = require("../models/educacion");

const createEducacion = async (req, res) => {
    const educacion = educacionSchema(req.body);
	educacion
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllEducacion = async (req, res) => {
    educacionSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getEducacion = async (req, res) => {
    const { id } = req.params;
	educacionSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const editEducacion = async (req, res) => {
    const { id } = req.params;
	const {
		grado,
		escuela,
		inicio,
		fin,
		certificado,
		resumen,
	} = req.body;
	educacionSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					grado,
					escuela,
					inicio,
					fin,
					certificado,
					resumen,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const deleteEducacion = async (req, res) => {
    const { id } = req.params;
	educacionSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
    createEducacion,
    getAllEducacion,
    getEducacion,
    editEducacion,
    deleteEducacion,
}