const express = require('express');
const Str = require('@supercharge/strings');
const app = express();
const server = require('http').createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const port = 9898;


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    setInterval(()=>{
        io.sockets.emit('broadcast', Str.random() );
    }, 3 * 1000);
});



server.listen(port, () => console.log((new Date()) + 'Server is running on port ' + port + ' ...'));


