function doubleAfter2Seconds(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve(2)    
        },2000)
    })
}