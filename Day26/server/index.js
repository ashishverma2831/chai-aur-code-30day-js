const express = require('express');
const { WebSocketServer } = require('ws');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

const wss = new WebSocketServer({ server });
wss.on('connection',(ws)=>{
    ws.on('message',(data)=>{
        console.log("data from client %s : ",data);
        ws.send("Thanks for the message");
    })
})