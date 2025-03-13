const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

// Use body-parser middleware
router.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form data
router.post('/', (req, res) => {
    console.log(req.body); // Logs the submitted form data
    res.send('POST received!');
});

module.exports = router;

