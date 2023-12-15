/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {

    let p = new Promise(function(resolves){
        setTimeout(resolves,t*1000);
    })

    return p;

}

function wait2(t) {

    let p = new Promise(function(resolves){
        setTimeout(resolves,t*1000);
    })
    return p;
}

function wait3(t) {
    
    let p = new Promise(function(resolves){
        setTimeout(resolves,t*1000);
    })
    return p;
}

function calculateTime(t1, t2, t3) {

    let a = new Date();
    let i = wait1(t1);
    let j = wait2(t2);
    let k = wait3(t3);


    return Promise.all([i,j,k]).then(function(){
        let d = new Date();
        return d.getTime()-a.getTime();
    })

}

module.exports = calculateTime;
