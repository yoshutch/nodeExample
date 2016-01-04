/**
 * Created by yoshu_000 on 12/17/2015.
 */
var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end("BOOYAH I Rule!");
}).listen(8080);

console.log("Server running on port 8080");