const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const server = express();
const publicPath = path.join(__dirname, '../public');

server.use(express.static(publicPath));
server.use(bodyParser.json());



server.listen(port, () => {
    console.log(`Server is running on port ${port}..`);
});