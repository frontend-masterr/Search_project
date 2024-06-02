const express = require('express');
const Chat = require('../models/chat');

const router = express.Router();

// Get all chats
router.get('/', async (req, res) => {
    try {
        const chats = await Chat.find().populate('from to', 'email');
        res.json(chats);
    } catch (error) {
        res.status(500).send('Error getting chats');
    }
});

// Create a new chat message
router.post('/', async (req, res) => {
    try {
        const { from, to, message } = req.body;
        const chat = new Chat({ from, to, message });
        await chat.save();
        res.status(201).send('Chat message created successfully');
    } catch (error) {
        res.status(500).send('Error creating chat message');
    }
});

module.exports = router;

const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    message: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Chat = mongoose.model('Chat', chatSchema);
module.exports = Chat;
