const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const publicPath = path.join(__dirname  , '../public');
const {generateMessage} = require('./utils/message');

const port = process.env.PORT || 2800;
var app = express();
var server = http.createServer(app);

var io= socketIO(server);

app.use(express.static(publicPath));

io.on('connection' , (socket)=>
{
     console.log('new user connected'); // server prints this message

      socket.emit('newMessage',generateMessage('admin','welcome to chat app'));

      socket.broadcast.emit('newMessage',generateMessage('Admin','new user joined'));
     
     socket.on('createMessage',(msg)=>
     {
          console.log(msg);
          // io.emit messages to ech connecvted user over tge network
          io.emit('newMessage',generateMessage(msg.from,msg.text)); 
         /* socket.broadcast.emit('newMessage', {
                from : msg.from,
                text : msg.text,
                createdAt: new Date().getTime()
          }); */
     }); // event emitted by the client side, listenend by the server side

     socket.on('disconnect' , ()=>
     {
         console.log(' user was disconnected'); // server prints this message
     }); //registers an event listening //connection is on
}); //registers an event listening //connection is on


server.listen(port, ()=>
{
     console.log(`server is up on {port}`);
}); 