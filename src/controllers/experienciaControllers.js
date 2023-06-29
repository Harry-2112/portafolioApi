const experienciaSchema = require("../models/experiencia");

const createExperiencia = async (req, res) => {
   const experiencia = experienciaSchema(req.body);
	experiencia
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllExperiencia = async (req, res) => {
    experienciaSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getExperiencia = async (req, res) => {
    const { id } = req.params;
	experienciaSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const editExperiencia = async (req, res) => {
    const { id } = req.params;
	const {
		puesto,
		empresa,
		inicio,
		fin,
		resumen,
	} = req.body;
	experienciaSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					puesto,
					empresa,
					inicio,
					fin,
					resumen,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const deleteExperiencia = async (req, res) => {
   const { id } = req.params;
	experienciaSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
    createExperiencia,
    getAllExperiencia,
    getExperiencia,
    editExperiencia,
    deleteExperiencia,
}