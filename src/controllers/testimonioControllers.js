const testimonioSchema = require("../models/testimonio");

const createTestimonio = async (req, res) => {
   const testimonio = testimonioSchema(req.body);
	testimonio
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllTestimonio = async (req, res) => {
    testimonioSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getTestimonio = async (req, res) => {
    const { id } = req.params;
	testimonioSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const editTestimonio = async (req, res) => {
    const { id } = req.params;
	const {
		img,
		testimonio,
		nombre,
		puesto,
	} = req.body;
	testimonioSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					img,
					testimonio,
					nombre,
					puesto,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const deleteTestimonio = async (req, res) => {
   const { id } = req.params;
	testimonioSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
    createTestimonio,
    getAllTestimonio,
    getTestimonio,
    editTestimonio,
    deleteTestimonio,
}