const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: [true, 'user name is required'],
    },
    email:{
        type: String,
        required: [true, 'email is required'],
        unique: true,
    },
    password:{
        type: String,
        required: [true, 'password is required'],
    },
    address: {
        type: Array,
        required: [true, 'address is required'],
    },
    phone: {
        type: String,
        required: [true, 'phone is required',]
    },
    usertype: {
        type: String,
        default: 'client',
        enum: ['client', 'admin', 'vendor', 'driver'],
    },
    profile:{
        type: String,
        default: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png',
        
    }
},{timestamps: true});

module.exports = mongoose.model('user', userSchema);