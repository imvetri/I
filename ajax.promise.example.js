var promise = new Promise(function(resolve,reject){
    resolve("sdf")
})
promise.then(a=>console.log(a))
console.log("Sdfsdf")


var ajaxPromise = new Promise(function(resolve,reject){
    setTimeout(()=>{
        
        resolve("DONE in 1s");
    },1000)
    reject("EXIT")

})
ajaxPromise.then(a=>console.log(a),a=>console.error(a))

ajaxPromise.then(a=>console.log(a),a=>console.error(a))

ajaxPromise.then(a=>console.log(a),a=>console.error(a))

ajaxPromise.then(a=>console.log(a),a=>console.error(a))


var newPromise = new Promise(function(resolve,reject){
    resolve(1);
    resolve(2);
})

newPromise.then(a=>console.log(a))