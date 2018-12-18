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

app.use(express.static(publicPath));
app.use(bodyParser.json());

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.on('userJoined', (userData) => {
        socket.emit('joined');
        socket.broadcast.emit('broadcastJoined', {
            ...userData,
        })
    });

    // User socket.emit() to create and listen to a custom event
    socket.on('createMessage', (messageData) => {
        // Emit the newMessage to every connection

        // io.emit('newMessage', {
        //     ...messageData,
        // });
        
        
        // Emit the newMessage to every connection except the current one 
        socket.broadcast.emit('newMessage', {
            ...messageData
        });
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected.');
    });
});



server.listen(port, () => {
    console.log(`Server is running on port ${port}..`);
});