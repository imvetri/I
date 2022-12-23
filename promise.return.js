function job(data){

    return new Promise(function(resolve,reject){
        if(typeof data !== "number"){
            reject("error")
        } if(typeof data === "number" && data%2===1){
            setTimeout(()=>{resolve("odd")}, 1000)
        }if(typeof data === "number" && data%2===0){
            setTimeout(()=>{reject("odd")}, 2000)
        }
        setTimeout(()=>{resolve()},2000)
    })
}