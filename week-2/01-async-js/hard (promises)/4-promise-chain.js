/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

    // console.log(t1);
    let i = wait1(t1);
    return i.then(function(){
        let j = wait2(t2);
        return j.then(function(){
            let k = wait3(t3);
            return k.then(function(){
                let d = new Date();
                return d.getTime()-a.getTime();
            })
        })
    })
    
}

module.exports = calculateTime;
