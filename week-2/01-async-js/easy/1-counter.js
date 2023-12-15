let a = 0;
function callback(){

    console.log(a);
    a++;

}

setInterval(callback,1000);
console.log("Counter started:");