const express = require('express');
const router = require('./authRoutes');
const { getUserController, updateUserController, updatePasswordController, deleteUserController } = require('../controller/userController');
const authMiddlewares = require('../middlewares/authMiddlewares');


//routes
//Get user info || GET
router.get('/getuser', authMiddlewares, getUserController),

//Update user info || PUT
router.put('/updateuser', authMiddlewares, updateUserController),

//update password || Post
router.post('/updatepassword', authMiddlewares, updatePasswordController),

//delete user || DELETE
router.delete('/deleteuser/:id', authMiddlewares, deleteUserController),
module.exports = router;