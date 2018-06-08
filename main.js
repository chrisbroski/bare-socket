var http = require('http');
var WebSocketServer = require('websocket').server;
var server = http.createServer();

server.listen(6503, function() {
    console.log((new Date()) + " Server is listening on port 6503");
});

var wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

wsServer.on('connect', function(connection) {
    console.log("Connected to client at " + connection.remoteAddress);
});

wsServer.on('request', function (request) {
    var connection = request.accept("", request.origin);

    // This is how you send
    connection.sendUTF("Successful connection to web socket server");

    // This is how you receive
    connection.on('message', function(msg) {
        console.log("Received Message: " + msg.utf8Data);
    });

    connection.on('close', function() {
        console.log("Disconnected.");
    });
});
