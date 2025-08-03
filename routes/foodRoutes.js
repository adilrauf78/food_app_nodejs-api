const express = require('express');
const authMiddlewares = require('../middlewares/authMiddlewares');
const { createFoodController, getAllFoodController, getFoodByIdController, updateFoodController, deleteFoodController } = require('../controller/foodController');

const router = express.Router();

//Create a new food item
router.post('/create', authMiddlewares, createFoodController);

//Get all food items
router.get('/getall', getAllFoodController);

//Ge single food item by ID
router.get('/get/:id', getFoodByIdController);

//Update food item by ID
router.put('/update/:id', authMiddlewares, updateFoodController);

//Delete food item by ID
router.delete('/delete/:id', authMiddlewares, deleteFoodController);


module.exports = router;