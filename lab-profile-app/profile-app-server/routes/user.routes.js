const express = require('express');
const router = express.Router();
const User = require('./../models/User.model');

const { isAuthenticated } = require('./../middleware/jwt.middleware');

// PUT /api/user

router.put('/user', isAuthenticated, (req, res, next) => {
  const { _id } = req.payload;
  const { image } = req.body;

  User.findByIdAndUpdate(_id, { image }, { new: true })
    .then((updatedUser) => {
      // Deconstruct the user object to omit the password
      const { _id, username, campus, course, image } = updatedUser;

      // Create a new object that doesn't expose the password
      const user = { _id, username, campus, course, image };

      res.json({ user: user });
    })
    .catch((err) => next(err));
});

router.get('/user', isAuthenticated, (req, res, next) => {
  const { _id } = req.payload;

  User.findById(_id)
    .then((found) => {
      // Deconstruct the user object to omit the password
      const { _id, username, campus, course, image } = found;

      // Create a new object that doesn't expose the password
      const user = { _id, username, campus, course, image };

      res.json({ user: user });
    })
    .catch((err) => next(err));
});

module.exports = router;
