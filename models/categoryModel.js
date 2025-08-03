const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Category Title is required'],
    },
    imageUrl: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
    },
    
},
    {timestamps: true});

module.exports = mongoose.model('category', categorySchema);