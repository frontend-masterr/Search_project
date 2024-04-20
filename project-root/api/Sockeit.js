const { Server } = require('socket.io');

const io = new Server();

io.on('connection', (socket) => {
    // Handle socket events here
});

const server = http.createServer(app);
io.attach(server);
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
