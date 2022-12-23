
function persist(value){
    fetch("/store", {
     
        // Adding method type
        method: "POST",
         
        // Adding body or contents to send
        body: JSON.stringify(value),
         
        // Adding headers to the request
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

/*
    This function takes an object and converts to a proxy object.
    It also takes care of proxying nested objectsa and array.
*/
let getProxy = (original) => {
    return new Proxy(original, {
        get(target, name, receiver) {
            let rv = Reflect.get(target, name, receiver);
            // need to store parent for array values as the key is an index not a propert
            parent = name;
            return rv;
        },
        set(target, name, value, receiver) {
            // Proxies new objects 
            if(typeof value === "object"){
                value = getProxy(value);
                // write object
            }
            if(typeof Number(name)!== NaN){
                // use the parent
                console.log(parent);
                // write object in index
            }

            // persist
            persist(proxy);
            return Reflect.set(target, name, value, receiver);
        },
        deleteProperty: function(target, property) {
            if (property in target) {
                delete target[property];
                // persist
                persist(proxy);
            }
        }
    })
}
let proxy = getProxy({}); 

proxy.name={}    
proxy.name.first={}                         // nested object
proxy.name.first.names=[]                   // nested array
proxy.name.first.names[0]={first:"vetri"}   // nested array with an object