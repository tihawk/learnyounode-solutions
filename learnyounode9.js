var http = require("http");

let data = ['', '', ''];
let finished = [false, false, false];

for (let i = 2; i < 5; i++)
{
    http.get(process.argv[i], function(response){
        response.setEncoding('utf8');
        
        response.on("data", function(chunk){
            data[i-2] += chunk;
        });
        response.on("end", function(){
            finished[i-2] = true;
            printIfFinished();
        });
    });
}

function printIfFinished(){
    if(finished[0] === true && finished[1] === true && finished[2] === true)
    {
        console.log(data[0]);
        console.log(data[1]);
        console.log(data[2]);
    }
}