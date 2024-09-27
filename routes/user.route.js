const express = require("express");
const { getUsers, getUser, createUser, updateUser, deleteUser, loginUser, getUserProfile } = require('../controllers/user.controller.js');
const { verifyToken, verifyAdmin } = require('../middleware/authorization.middleware.js');

const router = express.Router();

// public
router.post('/login', loginUser);       // Login
router.post('/register', createUser);   // Register

// protected
router.use(verifyToken);

router.put('/profile', updateUser);     // Update user by ID
router.get('/profile', getUserProfile); // Get user profile

//admin
router.use(verifyAdmin);

router.get('/', getUsers);              // Get all users
router.get('/:id', getUser);            // Get user by ID
router.delete('/:id', deleteUser);      // Delete user by ID

module.exports = router;