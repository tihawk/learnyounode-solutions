var fs = require("fs");
var path = require("path");
var fileNames = [];

function filter(folder, type, callback){
    fs.readdir(folder, function doneReading(err, files){
        if(err){return callback(err);}
        
        for(let file of files)
        {
            if(path.extname(file).slice(1) === type)
            {
                fileNames.push(file);
            }
        }
        callback(null, fileNames);
    });
}

module.exports = filter;