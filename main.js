const http = require('http');
const fs = require('fs');
const WebSocketServer = require('websocket').server;
var server;

function webServer(req, rsp) {
    rsp.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    fs.createReadStream(__dirname + '/index.html').pipe(rsp);
}

server = http.createServer(webServer);

server.listen(6503, function() {
    console.log((new Date()) + " Server is listening on port 6503");
});

var socketServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

socketServer.on('connect', function(connection) {
    console.log("Connected to client at " + connection.remoteAddress);
});

socketServer.on('request', function (request) {
    var connection = request.accept("", request.origin);

    // Send a message to the client
    connection.sendUTF("Successful connection to web socket server");

    // Receive a message from the client
    connection.on('message', function(msg) {
        console.log("Received Message: " + msg.utf8Data);
    });

    connection.on('close', function() {
        console.log("Disconnected.");
    });
});
