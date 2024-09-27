const express = require("express");
const { getUsers, getUser, createUser, updateUser, deleteUser, loginUser, getUserProfile } = require('../controllers/user.controller.js');
const verifyToken = require('../middleware/authorization.middleware.js');

const router = express.Router();

// public
router.post('/login', loginUser);     // Login
router.post('/register', createUser); // Register


router.use(verifyToken);

// protected
router.get('/', getUsers);              // Get all users
router.get('/profile', getUserProfile); // Get user profile
router.get('/:id', getUser);            // Get user by ID
router.put('/:id', updateUser);         // Update user by ID
router.delete('/:id', deleteUser);      // Delete user by ID

module.exports = router;