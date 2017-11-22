var http = require("http");
var url = require("url");
var parsedUrl;

var responses = {
    "/api/parsetime": function(parsedUrl){
        let date = new Date(parsedUrl.query.iso);
        return {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };
    },
    
    "/api/unixtime": function(parsedUrl){
        return { unixtime: new Date(parsedUrl.query.iso).getTime() };
    }
};

var server = http.createServer(function(req, res){
    //console.log(req.url);
    parsedUrl = url.parse(req.url, true);
    //console.log(parsedUrl.query.iso);
    let resource = responses[parsedUrl.pathname];
    
    if(resource){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(resource(parsedUrl)));
    }
    else{
        res.writeHead(404);
        res.end();
    }
});
server.listen(process.argv[2]);