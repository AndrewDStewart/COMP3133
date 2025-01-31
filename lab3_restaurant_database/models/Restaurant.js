const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
    restaurant_id: String,  // Ensure this is correct
    name: String,
    cuisine: String,        // Ensure this matches your DB field
    city: String
});

module.exports = mongoose.model('Restaurant', restaurantSchema);

