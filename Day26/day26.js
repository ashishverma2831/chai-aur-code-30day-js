// Description: Websocket server
const WebSocket = require("ws");

wss.on("connection", (ws) => {
    // ws.on("open", () => {
    //     console.log("Connection opened");
    // });
    ws.on("error",console.error);
    ws.on("message", (message) => {
        console.log(`Received message => ${message}`);
    });
    ws.send("Hello! Message from server!!");
});