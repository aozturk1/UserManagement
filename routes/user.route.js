const express = require("express");
const User = require("../models/user.model.js");
const router = express.Router();
const {getUsers, getUser, createUser, updateUser, deleteUser} = require('../controllers/user.controller.js');


router.get('/', getUsers);
router.get("/:id", getUser);

router.post("/", createUser);

// update a User
router.put("/:id", updateUser);

// delete a User
router.delete("/:id", deleteUser);




module.exports = router;