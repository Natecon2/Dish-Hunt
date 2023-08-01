const router = require('express').Router();
const categoryRoutes = require('./categoryRoutes');
const recipeRoutes = require('./recipeRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;