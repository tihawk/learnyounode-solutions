var fs = require("fs");
var path = require("path");
var folder = process.argv[2];
var type = process.argv[3];

fs.readdir(folder, function callback(err, list){
    for(let file of list)
    {
        if(path.extname(file).slice(1) === type)
        {
            console.log(file);
        }
    }
});