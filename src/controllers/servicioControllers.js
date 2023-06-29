const servicioSchema = require("../models/servicio");

const createServicio = async (req, res) => {
   const servicio = servicioSchema(req.body);
	servicio
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllServicio = async (req, res) => {
    servicioSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getServicio = async (req, res) => {
    const { id } = req.params;
	servicioSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const editServicio = async (req, res) => {
    const { id } = req.params;
	const {
		icon,
		service,
		resumen,
	} = req.body;
	servicioSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					icon,
					service,
					resumen,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const deleteServicio = async (req, res) => {
   const { id } = req.params;
	servicioSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
    createServicio,
    getAllServicio,
    getServicio,
    editServicio,
    deleteServicio,
}