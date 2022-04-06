




const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    console.log('Server up and running...');
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests...');
});