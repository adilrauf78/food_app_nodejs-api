const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//Register
const registerController = async(req, res) =>{
    try {
        const {userName, email, password, address, phone, } = req.body;
        if(!userName || !email || !password || !address || !phone){
            res.status(500).send({
                success: false,
                message: 'Please provide all fields',
            })
        }
        //check user
        const existing = await userModel.findOne({ email });
        if(existing){
            res.status(500).send({
                success: false,
                message: 'Email is already Registerd. Please login',
            })
        }
        //hashing
        var salt = bcrypt.genSaltSync(10);
        const hashedPassword = await bcrypt.hash(password, salt, );
        //create new user
        const user = await userModel.create({userName, email, password: hashedPassword, address, phone})
        res.status(201).send({
            success: true,
            message: 'Successfully Registered',
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Register API',
            error
        })
    }    
}


//Login

const loginController = async (req, res) => {
    try {
        const {email , password} = req.body;
        //validation
        if(!email || !password){
            return res.status(500).send({
                success: false,
                message: 'Please provide Email or Password',
            })
        }
        //check user
        const user = await userModel.findOne({ email });
        if(!user){
             return res.status(404).send({
                success: false,
                message: 'User not found',
            })
        }
        //check user password || compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(500).send({
                success: false,
                message: "Invalid Creditionals"
            })
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '7d',
        })
        user.password = undefined;
        res.status(200).send({
            success: true,
            message: "Successfully Login",
            token,
            user,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Login Api",
            error
        })
    }
}

module.exports = {registerController, loginController};