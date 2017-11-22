var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
    req.on('data', function(chunk){
        chunk = chunk.toString().toUpperCase();
        chunk = new Buffer(chunk, 'utf8');
        res.write(chunk);
    })
});
server.listen(process.argv[2]);