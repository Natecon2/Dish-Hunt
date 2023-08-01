const express = require('express');
const router = express.Router();

// categories
const categories = [
  {
    name: 'Main',
    link: '/category/main',
    image: '/images/main.jpg'
  },
  {
    name: 'Soups',
    link: '/category/soups',
    image: '/images/soups.jpg'
  },
  {
    name: 'Sides',
    link: '/category/sides',
    image: '/images/sides.jpg'
  },
  {
    name: 'Appetizers',
    link: '/category/appetizers',
    image: '/images/appetizers.jpg'
  },
  {
    name: 'Desserts',
    link: '/category/desserts',
    image: '/images/desserts.jpg'
  },
  {
    name: 'Vegetarian',
    link: '/category/vegetarian',
    image: '/images/vegetarian.jpg'
  },
  {
    name: 'Drinks',
    link: '/category/drinks',
    image: '/images/drinks.jpg'
  }
];

// route for categories
router.get('/categories', (req, res) => {
  res.json(categories);
});

module.exports = router;
