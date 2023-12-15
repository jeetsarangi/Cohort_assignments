const fs = require('fs');

function callback(err,data){
    console.log("Read done as:");
    console.log(data);
    // console.log(err);
}

fs.readFile('easy/3-read-from-file.md', 'utf8',callback);

// k = 0;
for(let i = 0;i < 10000000;i++){
    console.log("Hii");
}