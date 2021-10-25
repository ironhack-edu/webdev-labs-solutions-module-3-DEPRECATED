const express = require('express');
const router = express.Router();
const fileUploader = require('../config/cloudinary.config');

const { isAuthenticated } = require('./../middleware/jwt.middleware');

router.get('/', (req, res, next) => {
  res.json('All good in here');
});

// POST /api/upload
router.post(
  '/upload',
  isAuthenticated,
  fileUploader.single('profileImage'),
  (req, res, next) => {
    if (!req.file) {
      next(new Error('No file uploaded!'));
      return;
    }

    // Get the URL of the uploaded file and send it as a response.
    res.json({ secure_url: req.file.path });
  }
);

module.exports = router;
