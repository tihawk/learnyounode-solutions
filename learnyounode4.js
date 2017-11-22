var fs = require("fs");
var lines = undefined;

function countLines(callback){
    fs.readFile(process.argv[2], function doneReading(err, str){
        lines = str.toString().split('\n').length-1;
        callback();
    })
}

function logLines(){
    console.log(lines);
}

countLines(logLines);