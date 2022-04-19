const express = require('express');
const Str = require('@supercharge/strings');
const app = express();
const server = require('http').createServer(app);
const  io  = require("socket.io")(server, {
    cors: {origin: 'http://localhost:4200'}
});;
//const io = new Server(server);
const port = 9898;
const packstueck_nummer = [339987849,313593471,335102294,339987853,338097425,320513280]


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
io.on('connection', (socket) => {
    console.log('a user connected');
    setInterval(()=>{
        let randomIndex = Math.floor(Math.random()*packstueck_nummer.length);
        io.sockets.emit('broadcast', packstueck_nummer[randomIndex] );
    }, 3 * 1000);
});



server.listen(port, () => console.log((new Date()) + 'Server is running on port ' + port + ' ...'));

