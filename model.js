const mongoose = require('mongoose');

// Create a schema for the data
const dataSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Create a model for the data
module.exports = mongoose.model('Data', dataSchema);
