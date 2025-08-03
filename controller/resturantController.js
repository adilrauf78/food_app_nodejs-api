const resturantModel = require("../models/resturantModel");

const createRestaurantController = async(req, res) => {
    try {
        const {title, description,image, food, time, pickup, delivery, isOpen, logoUrl, rating, ratingaccount, code, coords} = req.body;
        if (!title || !coords) {
            return res.status(400).send({
                success: false,
                message: 'Please title and coordinates are required',
            });
        }
        const newRestaurant = new resturantModel({title, description,image, food, time, pickup, delivery, isOpen, logoUrl, rating, ratingaccount, code, coords});
        await newRestaurant.save();
        res.status(201).send({
            success: true,
            message: 'Restaurant created successfully',
            data: newRestaurant,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in creating restaurant',
        });
    }
}

// Get All Restaurants Controller
const getAllRestaurantsController = async(req, res) => {
    try {
        const restaurants = await resturantModel.find({});
        if (!restaurants) {
            return res.status(404).send({
                success: false,
                message: 'No restaurants found',
            });
        }
        res.status(200).send({
            success: true,
            message: 'Restaurants fetched successfully',
            total: restaurants.length,
            data: restaurants,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in fetching restaurants',
        });
    }
}

//Get Restaurant by ID Controller
const getRestaurantByIdController = async(req, res) => {
    try {
        const restaurant = await resturantModel.findById(req.params.id);
        if (!restaurant) {
            return res.status(404).send({
                success: false,
                message: 'Restaurant not found',
            });
        }
        res.status(200).send({
            success: true,
            message: 'Restaurant fetched successfully',
            data: restaurant,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in fetching restaurant',
        });
    }
}

// Delete Restaurant Controller
const deleteRestaurantController = async(req, res) => {
    try {
        const restaurant = await resturantModel.findByIdAndDelete(req.params.id);
        if (!restaurant) {
            return res.status(404).send({
                success: false,
                message: 'Restaurant not found',
            });
        }
        res.status(200).send({
            success: true,
            message: 'Restaurant deleted successfully',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in deleting restaurant',
        });
    }
}
module.exports = {createRestaurantController, getAllRestaurantsController, getRestaurantByIdController, deleteRestaurantController};