var module = require("./module6");
var folder = process.argv[2];
var type = process.argv[3];

function callback(err, files){
    for(let file of files){
        console.log(file);
    }
}
//console.log(folder);
module(folder, type, callback);