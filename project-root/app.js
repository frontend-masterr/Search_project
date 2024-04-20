const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
const config = require('./config');
const User = require('./api/models/User');
const Project = require('./api/models/Project');
const Message = require('./api/models/Message');
const auth = require('./api/auth');
const chat = require('./api/chat');
const files = require('./api/files'); // (اگر از آپلود فایل استفاده می کنید)

// Connect to MongoDB
mongoose.connect(config.db.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use middleware
app.use(express.json());

// API routes
app.use('/api/auth', auth);
app.use('/api/chat', chat);
app.use('/api/files', files); // (اگر از آپلود فایل استفاده می کنید)

// Start the server
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', chat.handleConnection);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
