const blogSchema = require("../models/blog");

const createBlog = async (req, res) => {
    const blog = blogSchema(req.body);
    blog
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

const getAllBlog = async (req, res) => {
    blogSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

const getBlog = async (req, res) => {
    const { id } = req.params;
    blogSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}
const editBlog = async (req, res) => {
    const { id } = req.params;
    const {
        src,
        titulo,
        autor,
        fecha,
        categoria,
        link,
    } = req.body;
    blogSchema
        .updateOne(
            { _id: id },
            {
                $set: {
                    src,
                    titulo,
                    autor,
                    fecha,
                    categoria,
                    link,
                },
            }
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}
const deleteBlog = async (req, res) => {
    const { id } = req.params;
    blogSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}

module.exports = {
    createBlog,
    getAllBlog,
    getBlog,
    editBlog,
    deleteBlog,
}