//código que genera un servidor http en el puerto que especifiquemos
var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('Hello World!');
    res.end();
});
var port = 3000;
server.listen(port);
server.once('listening', function() {
    console.log('Hello World server listening on port %d', port);
});