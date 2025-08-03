const express = require('express');
const authMiddlewares = require('../middlewares/authMiddlewares');
const adminMiddlewares = require('../middlewares/adminMiddlewares');
const { placeorderController, updateOrderStatusController } = require('../controller/orderController');

const router = express.Router();

//Place an order
router.post('/placeorder/', authMiddlewares, placeorderController);

//Order Status Update
router.post('/orderstatus/:id', authMiddlewares, adminMiddlewares, updateOrderStatusController);

module.exports = router;