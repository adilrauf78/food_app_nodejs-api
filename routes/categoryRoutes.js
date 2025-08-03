const express = require('express');
const authMiddlewares = require('../middlewares/authMiddlewares');
const { createCategoryController, getAllCategoriesController, updateCategoryController, deleteCategoryController } = require('../controller/categoryController');

const router = express.Router();
// Create Category Routes || POST
router.post('/create', authMiddlewares, createCategoryController);

//Get All Categories Routes || GET
router.get('/getall', getAllCategoriesController);

// Update Category Routes || PUT
 router.put('/update/:id', authMiddlewares, updateCategoryController);

//Delete Category Routes || DELETE
 router.delete('/delete/:id', authMiddlewares, deleteCategoryController);

module.exports = router;