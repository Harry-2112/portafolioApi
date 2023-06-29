const express = require("express");
const validateToken = require('../middlewares/validateToken')
const { createBlog,getAllBlog,getBlog,editBlog,deleteBlog } = require('../controllers/blogControllers')

const router = express.Router();

//create blog
router.post("/blog",validateToken, createBlog);

//get all blogs
router.get("/blogs", getAllBlog);

//get a blogs
router.get("/blogs/:id",validateToken, getBlog);

//update a blogs
router.put("/blogs/:id",validateToken, editBlog);

//delete a blogs
router.delete("/blogs/:id",validateToken, deleteBlog);

module.exports = router;
