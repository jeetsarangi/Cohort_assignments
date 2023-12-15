const fs = require('fs');

let text = "New message to ";

fs.readFile('easy/somefile.txt', 'utf8',function(err,data){
    console.log("The read data is :\n"+data);
    fs.writeFile('easy/somefile.txt',text,function(err){
        if(err){
            console.log(err);
        }
    })
});

