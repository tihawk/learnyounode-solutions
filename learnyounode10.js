var net = require("net");
var date = new Date();

var dateStr = date.getFullYear() + '-' + (parseInt(date.getMonth())+1) + '-' + date.getDate() + ' ' + (parseInt(date.getHours())+100).toString().slice(1) + ":" + (parseInt(date.getMinutes())+100).toString().slice(1) + "\n";

var server = net.createServer(function (socket){
    socket.end(dateStr);
});
server.listen(process.argv[2]);