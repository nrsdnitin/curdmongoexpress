const express = require('express');
const router = express.Router();
const Data = require('../model');

// Create a new piece of data
router.post('/', async (req, res) => {
  const data = new Data({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    const savedData = await data.save();
    res.send(savedData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get a list of all data
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get a single piece of data by ID
router.get('/:id', async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Update a piece of data by ID
router.patch('/:id', async (req, res) => {
  try {
    const updatedData = await Data.updateOne(
      { _id: req.params.id },
      { $set: { name: req.body.name, age: req.body.age } },
    );
    res.send(updatedData);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Delete a piece of data by ID
router.delete('/:id', async (req, res) => {
  try {
    const removedData = await Data.deleteOne({ _id: req.params.id });
    res.send(removedData);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
