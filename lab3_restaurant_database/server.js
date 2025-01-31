require('dotenv').config(); // Load .env before anything else

const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const restaurantRoutes = require('./routes/restaurantRoutes');
app.use('/', restaurantRoutes);

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    console.error("❌ MONGO_URI is missing. Check your .env file.");
    process.exit(1);
}

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));


app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

