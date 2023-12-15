// let d = new Date();
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());

// let a = new Date();
function callback(){
    let a = new Date();
    console.log(a.getHours()+":"+a.getMinutes()+":"+a.getSeconds());
}

setInterval(callback,1000);
