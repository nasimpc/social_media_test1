const path = require('path');
const express = require('express');

const router = express.Router();
const usercontroller = require('../controllers/user');

router.post('/add-user', usercontroller.addUser);
router.post('/add-comment', usercontroller.addComment);

router.get('/get-users', usercontroller.getUser);
router.get('/get-comments/:postId', usercontroller.getComment);

router.delete('/delete-user/:id', usercontroller.deleteUser);

// router.edit('/edit-user/:id', usercontroller.editUser);

module.exports = router;