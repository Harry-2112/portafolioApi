const portafolioSchema = require("../models/portafolio");

const createPortafolio = async (req, res) => {
   const portafolio = portafolioSchema(req.body);
	portafolio
		.save()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getAllPortafolio = async (req, res) => {
    portafolioSchema
		.find()
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

const getPortafolio = async (req, res) => {
    const { id } = req.params;
	portafolioSchema
		.findById(id)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const editPortafolio = async (req, res) => {
    const { id } = req.params;
	portafolioSchema
		.deleteOne({ _id: id })
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}
const deletePortafolio = async (req, res) => {
   const { id } = req.params;
	const {
		filtro,
		href,
		alt,
		data,
	} = req.body;
	portafolioSchema
		.updateOne(
			{ _id: id },
			{
				$set: {
					filtro,
					href,
					alt,
					data,
				},
			}
		)
		.then((data) => res.json(data))
		.catch((error) => res.json({ message: error }));
}

module.exports = {
    createPortafolio,
    getAllPortafolio,
    getPortafolio,
    editPortafolio,
    deletePortafolio,
}