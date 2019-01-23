var socket = io(); //makes a request from client to the server to keep an open sockrt io // creates a connection
       
        socket.on('connect' , function()
        {
             console.log('connected to the server'); //client prints this message  // connect is a event name here
       
              
        }); 

        socket.on('disconnect' , function()
        {
                console.log('connected to the server'); // fires when connection is dropped //clients print this message
        });

        socket.on('newMessage', function(message)
        {
              console.log('client is trying to listen to an event emitted by the server');
              console.log(message);
        }); //newEmail is the name of the event  // event is received from the server side and email object is received