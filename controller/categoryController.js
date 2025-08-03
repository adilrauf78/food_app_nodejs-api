const categoryModel = require("../models/categoryModel");

const createCategoryController = async(req,res)=> {
    try {
        const { title, imageUrl } = req.body;
        if (!title) {
            return res.status(400).send({
                success: false,
                message: 'Title are required'
            });
        }
        const newCategory = new categoryModel({ title,imageUrl });

        await newCategory.save();
        res.status(201).send({
            success: true,
            message: 'Category created successfully',
            data: newCategory
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in creating category',
            error
        });
    }
}

// Get All Categories Controller
const getAllCategoriesController = async(req, res) => {
    try {
        const categories = await categoryModel.find({});
        if (!categories) {
            return res.status(404).send({
                success: false,
                message: 'No categories found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'All categories fetched successfully',
            count: categories.length,
            data: categories
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in fetching categories',
            error
        });
    }
}
const updateCategoryController = async(req, res) => {
    try {
        const { id } = req.params;
        const { title, imageUrl } = req.body;
        if (!title) {
            return res.status(400).send({
                success: false,
                message: 'Title is required'
            });
        }
        const updatedCategory = await categoryModel.findByIdAndUpdate(id, { title, imageUrl }, { new: true });
        if (!updatedCategory) {
            return res.status(404).send({
                success: false,
                message: 'Category not found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Category updated successfully',
            data: updatedCategory
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in updating category',
            error
        });
    }
}

const deleteCategoryController = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await categoryModel.findByIdAndDelete(id);
        if (!deletedCategory) {
            return res.status(404).send({
                success: false,
                message: 'Category not found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Category deleted successfully',
            data: deletedCategory
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in deleting category',
            error
        });
    }
}
module.exports = {createCategoryController,getAllCategoriesController, updateCategoryController, deleteCategoryController}