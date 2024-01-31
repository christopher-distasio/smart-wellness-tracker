// Import necessary modules and models
const express = require('express');
const router = express.Router();
const FoodEntry = require('../models/FoodEntry');

// Create a new food entry
router.post('/', async (req, res) => {
  try {
    const newFoodEntry = await FoodEntry.create(req.body);
    res.status(201).json(newFoodEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all food entries
router.get('/', async (req, res) => {
  try {
    const foodEntries = await FoodEntry.find();
    res.json(foodEntries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific food entry by ID
router.get('/:id', async (req, res) => {
  try {
    const foodEntry = await FoodEntry.findById(req.params.id);
    if (foodEntry) {
      res.json(foodEntry);
    } else {
      res.status(404).json({ error: 'Food entry not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a specific food entry by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedFoodEntry = await FoodEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedFoodEntry) {
      res.json(updatedFoodEntry);
    } else {
      res.status(404).json({ error: 'Food entry not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a specific food entry by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedFoodEntry = await FoodEntry.findByIdAndDelete(req.params.id);
    if (deletedFoodEntry) {
      res.json({ message: 'Food entry deleted' });
    } else {
      res.status(404).json({ error: 'Food entry not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;