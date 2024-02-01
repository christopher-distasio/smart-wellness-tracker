const foodEntries = require('express').Router()
const db = require('../models');
const { FoodEntry } = db

// GET /foodEntries
foodEntries.get('/', async (req, res) => {
  
  try {
    
    const foodEntries = await FoodEntry.findAll();
    res.json(foodEntries);
    
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve food entries' });
  }
});

// POST /foodEntries
foodEntries.post('/', async (req, res) => {
  try {
    const { name, calories } = req.body;
    const foodEntry = await FoodEntry.create({ name, calories });
    res.status(201).json(foodEntry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create food entry' });
  }
});

// GET /foodEntries/:id
foodEntries.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const foodEntry = await FoodEntry.findByPk(id);
    if (foodEntry) {
      res.json(foodEntry);
    } else {
      res.status(404).json({ error: 'Food entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve food entry' });
  }
});

// PUT /foodEntries/:id
foodEntries.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, calories } = req.body;
    const [updated] = await FoodEntry.update({ name, calories }, { where: { id } });
    if (updated) {
      res.json({ message: 'Food entry updated successfully' });
    } else {
      res.status(404).json({ error: 'Food entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update food entry' });
  }
});

// DELETE /foodEntries/:id
foodEntries.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await FoodEntry.destroy({ where: { id } });
    if (deleted) {
      res.json({ message: 'Food entry deleted successfully' });
    } else {
      res.status(404).json({ error: 'Food entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete food entry' });
  }
});

module.exports = foodEntries;
