const webSocket = require('ws');

const server = new webSocket.Server({port:8080});

server.on('connection', (ws)=>{
    console.log("New Client connected!");
    
    //Sending a message from the server
    ws.send('This is a welcome message');

    //reply
    ws.on("message", (message) =>{

        if(message == "hi"){
           ws.send(`Hello`);
        }else if(message == "bye"){
            ws.send(`Goodbye`);
        }else{
            ws.send(`Some other message`);
        }

    })

})