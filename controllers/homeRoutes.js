const express = require('express');
const router = express.Router();

const Recipe = require('../models/recipe.js');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().limit(10);
    res.render('home', { recipes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
