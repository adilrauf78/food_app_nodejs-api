const foodModel = require("../models/foodModel");

// Create a new food item
const createFoodController = async(req, res) => {
try {
    const { name, description, price, category, imageUrl, isAvailable, ratings, ratingsCount } = req.body;
    if (!name || !description || !price || !category) {
        return res.status(400).send({
            success: false,
            message: 'All fields are required'
        });
    }
    const food = new foodModel({name, description, price, category, imageUrl, isAvailable, ratings, ratingsCount});
    await food.save();
    res.status(201).send({
        success: true,
        message: 'Food item created successfully',
        data: food
    });
} catch (error) {
    console.error(error);
    res.status(500).send({
        message: 'Server error while creating food item',
        error
    });
}
};

//Get all food items
const getAllFoodController = async(req, res) => {
try {
    const foods = await foodModel.find().populate('category');
    res.status(200).send({
        success: true,
        message: 'Food items fetched successfully',
        data: foods
    });
} catch (error) {
    console.error(error);
    res.status(500).send({
        message: 'Server error while fetching food items',
        error
    });
}
};

// Get single food item by ID
const getFoodByIdController = async(req, res) => {
    try {
        const foodId = req.params.id;
        const food = await foodModel.findById(foodId).populate('category');
        if (!food) {
            return res.status(404).send({
                success: false,
                message: 'Food item not found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Food item fetched successfully',
            data: food
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Server error while fetching food item',
            error
        });
    }
};

// Update food item by ID
const updateFoodController = async(req, res) => {
    try {
        const foodId = req.params.id;
        if (!foodId) {
            return res.status(400).send({
                success: false,
                message: 'Food ID is required'
            });
        }
        const food = await foodModel.findByIdAndUpdate(foodId);
        if (!food) {
            return res.status(404).send({
                success: false,
                message: 'Food item not found'
            });
        }
        const { name, description, price, category, imageUrl, isAvailable, ratings, ratingsCount } = req.body;
        const updatedFood = await foodModel.findByIdAndUpdate(foodId, {
            name, description, price, category, imageUrl, isAvailable, ratings, ratingsCount
        }, { new: true });
        res.status(200).send({
            success: true,
            message: 'Food item updated successfully',
            data: food
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Server error while updating food item',
            error
        });
    }
}

//Delete food item by ID
const deleteFoodController = async(req, res) => {
    try {
        const foodId = req.params.id;
        if (!foodId) {
            return res.status(400).send({
                success: false,
                message: 'Food ID is required'
            });
        }
        const food = await foodModel.findByIdAndDelete(foodId);
        if (!food) {
            return res.status(404).send({
                success: false,
                message: 'Food item not found'
            });
        }
        res.status(200).send({
            success: true,
            message: 'Food item deleted successfully',
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Server error while deleting food item',
            error
        });
    }
};

module.exports = {createFoodController, getAllFoodController, getFoodByIdController, updateFoodController, deleteFoodController};
