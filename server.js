const express = require('express');
const app = express();

// Connect to the MongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase', { useNewUrlParser: true });

// Allow the API to receive and send data in JSON format
app.use(express.json());

// Load the routes
const dataRoutes = require('./routes/data');
app.use('/data', dataRoutes);

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
