const orderModel = require("../models/orderModel");


//Place an order
const placeorderController = async (req, res) => {
    try {
        const { cart } = req.body;
        if (!cart) {
            return res.status(400).send({
                success: false,
                message: 'Cart and payment method are required',
            });
        }
        let total = 0;
        cart.map((i) => {
            total += i.price;
        });
        const order = new orderModel({
            foods: cart,
            paymentMethod: total,
            buyer: req.body.id,
        });
        await order.save();
        res.status(201).send({
            success: true,
            message: 'Order placed successfully',
            order,
        });

    } catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    }
};
  
//Order Status Update
const updateOrderStatusController = async (req, res) => {
    try {
        const { status } = req.body;
        const order = await orderModel.findByIdAndUpdate(req.params.id, { status }, { new: true });
        if (!order) {
            return res.status(404).send({
                success: false,
                message: 'Order not found',
            });
        }
        res.status(200).send({
            success: true,
            message: 'Order status updated successfully',
            order,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({
            success: false,
            message: 'Server Error',
            error: error.message,
        });
    }
};
module.exports = {
    placeorderController,
    updateOrderStatusController,
};