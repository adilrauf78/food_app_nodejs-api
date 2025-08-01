const express = require('express');
const authMiddlewares = require('../middlewares/authMiddlewares');
const { createRestaurantController } = require('../controller/resturantController');

const router = express.Router();
// Create Restaurant Routes || POST
router.post('/create', authMiddlewares, createRestaurantController);
// Get Restaurant Routes || GET


module.exports = router;