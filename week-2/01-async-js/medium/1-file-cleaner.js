const fs = require('fs');

// let text = "New message to ";

fs.readFile('./easy/somefile.txt', 'utf8',function(err,data){
    
    text = '';

    for(let i = 0;i < data.length;i++){
        if((data[i] == ' ')&&(text.length == 0 || text[text.length-1] == ' ')){
            continue;
        }
        else{
            text += data[i];
        }
    }
    // console.log(data+" "+text);

    fs.writeFile('./easy/somefile.txt',text,function(err){
        if(err){
            console.log(err);
        }
    })
});


