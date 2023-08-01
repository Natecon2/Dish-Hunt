const express = require('express');
const router = express.Router();
const { Recipe, User } = require('../models');
const withAuth = require('../utilities/auth');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().limit(10);
    res.render('home', { recipes });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
