const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
   foods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'food',
    },],
    paymentMethod: {},
    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    status: {
        type: String,
        enum: ['pending', 'preparing', 'out-for-delivery', 'delivered', 'cancelled'],
        default: 'pending',
    },
},
{timestamps: true});

module.exports = mongoose.model('order', orderSchema);