const express = require('express');
const { signup, login, refreshToken } = require('../controllers/authController');
const { 
  getUserProfile, 
  updateUserProfile, 
  deleteUserAccount 
} = require('../controllers/userController');
const { verifyToken } = require('../middleware/authMiddleware');

const router = express.Router();

// Authentication routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/refresh-token', refreshToken);

// User management routes
router.get('/profile', verifyToken, getUserProfile);
router.put('/profile', verifyToken, updateUserProfile);
router.delete('/account', verifyToken, deleteUserAccount);

module.exports = router;