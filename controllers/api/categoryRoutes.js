const express = require('express');
const router = express.Router();

// categories
const categories = [
  {
    name: 'Main',
    link: '/category/main',
    image: 'assets/main.png'
  },
  {
    name: 'Soups',
    link: '/category/soups',
    image: 'assets/soups.png'
  },
  {
    name: 'Sides',
    link: '/category/sides',
    image: 'assets/sides.png'
  },
  {
    name: 'Appetizers',
    link: '/category/appetizers',
    image: 'assets/appetizers.png'
  },
  {
    name: 'Desserts',
    link: '/category/desserts',
    image: 'assets/desserts.png'
  },
  {
    name: 'Vegetarian',
    link: '/category/vegetarian',
    image: 'assets/vegetarian.png'
  },
  {
    name: 'Drinks',
    link: '/category/drinks',
    image: 'assets/drinks.png'
  }
];

// route for categories
router.get('/categories', (req, res) => {
  res.json(categories);
});

module.exports = router;
