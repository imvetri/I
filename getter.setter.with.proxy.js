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
            }
            if(Number(name)!== NaN){
                // use the parent
                console.log(parent);
            }

            if(value==="ON") console.log("ON")
            if(value==="OFF") console.log("OFF")
            return Reflect.set(target, name, value, receiver);
        },
        deleteProperty: function(target, property) {
            if (property in target) {
                delete target[property];
            }
        }
    })
}

let state = [];
state[0] = {
    values: "ON"
}
state[1] = {
    values: "ON"
}

state[1].values = "OFF"  // CONSOLE.log("OFF")