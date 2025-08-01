const mongoose = require('mongoose');


const resturantSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Resturant name is required'],
    },
    description: {
        type: String,
        required: [true, 'Resturant description is required'],
    }
    address: {
        type: String,
        required: [true, 'Resturant address is required'],
    },
    phone: {
        type: String,
        required: [true, 'Resturant phone is required'],
    },
    email: {
        type: String,
        required: [true, 'Resturant email is required'],
        unique: true,
    },
    image: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
    },
    food : {type: Array,},
    time : {
        type: String,
        required: [true, 'Resturant time is required'],
    },
    pickup: {
        type: Boolean,
        default: true,
    },
    delivery: {
        type: Boolean,
        default: true,
    },
    isOpen: {
        type: Boolean,
        default: true,
    },
    logoUrl: {
        type: String,
        default: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
    },
    rating: {
        type: Number,
        default: 1,
        min: 0,
        max: 5,
    },
    ratingaccount: {
        type: String,
        default: 0,
    },
    code : {
        type: String,
    },
    coords: {
        id: { type: String, }
        latitude: { type: Number,},
        latitudeDelta: { type: Number,}
        longitude: { type: Number,}
        longitudeDelta: { type: Number,}
        address: { type: String, }
        city: { type: String, }
        state: { type: String, }
        country: { type: String, }
        title: { type: String, }
        
    },
},{timestamps: true});

module.exports = mongoose.model('resturant', resturantSchema);