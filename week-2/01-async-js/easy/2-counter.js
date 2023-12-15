let a = 0;
function mysetTimout(callback){
    console.log(a);
    a++;
    setTimeout(callback,1000,callback);
}


mysetTimout(mysetTimout);



