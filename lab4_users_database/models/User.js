const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  city: {
    type: String,
    required: true,
    match: [/^[A-Za-z\s]+$/, 'City must contain only alphabets and spaces'],
  },
  website: {
    type: String,
    required: true,
    match: [/^(http|https):\/\/[^ "]+$/, 'Invalid URL'],
  },
  zipcode: {
    type: String,
    required: true,
    match: [/^\d{5}-\d{4}$/, 'Invalid ZIP code format'],
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d-\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format'],
  },
});

module.exports = mongoose.model('User', userSchema);
