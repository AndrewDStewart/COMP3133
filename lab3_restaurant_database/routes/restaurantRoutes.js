const express = require('express');
const router = express.Router(); 

const Restaurant = require('../models/Restaurant');

// GET: Get all restaurants
router.get('/restaurants', async (req, res) => {
    try {
      const restaurants = await Restaurant.find();
      res.json(restaurants);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// GET: Get restaurants by cuisine
router.get('/restaurants/cuisine/:cuisine', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({ cuisine: req.params.cuisine });
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});

// GET: Get restaurants with Delicatessen cuisine and city not equal to Brooklyn
router.get('/restaurants/Delicatessen', async (req, res) => {
    try {
        const restaurants = await Restaurant.find({
            cuisine: 'Delicatessen',
            city: { $ne: 'Brooklyn' }
        }, 'cuisine name city')
        .sort({ name: 1 }); // Sort by name ascending
        res.status(200).send(restaurants);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;  // Export the router
