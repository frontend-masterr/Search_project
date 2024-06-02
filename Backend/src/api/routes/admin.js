const express = require('express');
const User = require('../models/user');

const router = express.Router();

// Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send('Error getting users');
    }
});

// Update user verification status
router.put('/users/:id/verify', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.verified = req.body.verified;
        await user.save();
        res.send('User verification status updated successfully');
    } catch (error) {
        res.status(500).send('Error updating user verification status');
    }
});

module.exports = router;
