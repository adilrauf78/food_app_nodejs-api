const mongoose = require('mongoose');


const foodSchema = new mongoose.Schema({
   
        name: {
            type: String,
            required: true ['Food name is required'],
        },
        description: {
            type: String,
            required: true ['Food description is required'],
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'category',
            required: true,
        },
        imageUrl: {
            type: String,
            default: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
        },
        isAvailable: {
            type: Boolean,
            default: true,
        },
        ratings: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        ratingsCount: {
            type: Number,
            default: 0,
        }
    
},
    {timestamps: true});

module.exports = mongoose.model('food', foodSchema);