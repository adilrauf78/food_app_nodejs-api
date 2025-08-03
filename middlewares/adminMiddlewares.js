
const userModel = require("../models/userModel");
// Middleware to check if the user is an admin
module.exports = async(req, res, next) =>{
    try {
        const user = await userModel.findById(req.body.id);
        if (user.usertype !== 'admin') {
            return res.status(403).send({
                success: false,
                message: 'Access denied, admin only',
            });
        }
        else{
            next();
        }
    } catch (error) {
       console.log(error);
       res.status(500).send({
        success: false,
        message: 'Un-Authorize Access',
       }) 
    }
}