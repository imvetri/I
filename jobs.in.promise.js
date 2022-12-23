function job1(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{resolve("done 1s")}, 1000)
    })
}

function job2(){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{resolve("done 2s")}, 2000)
    })
}


var promise = job1();

promise

.then(function(a){
    console.log("1",a)
    return job2();
})

.then(function(a){
    console.log("2",a)
    return 3;
})

.then(function(a){
    console.log("3",3)
    return 4;
})