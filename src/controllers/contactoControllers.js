const contactoSchema = require("../models/contacto");

const createContacto = async (req, res) => {
    const contacto = contactoSchema(req.body);
	contacto
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllContacto = async (req, res) => {
    contactoSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getContacto = async (req, res) => {
    const { id } = req.params;
	contactoSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const editContacto = async (req, res) => {
    const { id } = req.params;
	const {
		direccion,
		telefono,
		email,
	} = req.body;
	contactoSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					direccion,
					telefono,
					email,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const deleteContacto = async (req, res) => {
    const { id } = req.params;
	contactoSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
    createContacto,
    getAllContacto,
    getContacto,
    editContacto,
    deleteContacto,
}