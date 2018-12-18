let socket = io();

socket.on('connect', function () {
    console.log('Connected to the Socket Server.');
});

socket.on('disconnect', function () {
    console.log('Disconnected to the Socket Server.');
});

// Listen to and receive data from custom event
socket.on('newMessage', function (messageData) {
    console.log('New Message:');
    console.log(messageData);
});
