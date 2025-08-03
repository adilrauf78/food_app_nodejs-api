const express = require('express');
const authMiddlewares = require('../middlewares/authMiddlewares');
const { createRestaurantController, getAllRestaurantsController, getRestaurantByIdController, deleteRestaurantController } = require('../controller/resturantController');

const router = express.Router();
// Create Restaurant Routes || POST
router.post('/create', authMiddlewares, createRestaurantController);

// Get All Restaurant Routes || GET
router.get('/getall', getAllRestaurantsController)

// Get Restaurant by ID Routes || GET
router.get('/get/:id', getRestaurantByIdController)

//Delete Restaurant Routes || DELETE
router.delete('/delete/:id', authMiddlewares, deleteRestaurantController);

module.exports = router;