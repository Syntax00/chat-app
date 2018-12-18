const path = require('path');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

io.on('connection', (socket) => {
    console.log('New user connected.');

    // User socket.emit() to create and listen to a custom event
    socket.on('createMessage', (messageData) => {
        socket.emit('newMessage', {
            ...messageData,
        });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected.');
    });
});

app.use(express.static(publicPath));
app.use(bodyParser.json());



server.listen(port, () => {
    console.log(`Server is running on port ${port}..`);
});