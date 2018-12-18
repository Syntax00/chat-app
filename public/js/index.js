let socket = io();

socket.on('connect', function () {
    console.log('Connected to the Socket Server.');
    socket.emit('createMessage', {
        from: 'Mohamed Ahmed',
        to: 'Omar Khaled',
        content: 'Hello, Omar! Are you there?',
        time: new Date()
    });

    socket.on('newMessage', (messageData) => {
        console.log('New Message:', messageData);
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected to the Socket Server.');
});

// Listen to and receive data from custom event
socket.on('newEmail', function (emailData) {
    console.log('New email alert.');
    console.log(emailData);
});