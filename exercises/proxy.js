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
            }
            if(Number(name)!== NaN){
                // use the parent
                console.log(parent);
            }
            return Reflect.set(target, name, value, receiver);
        },
        deleteProperty: function(target, property) {
            if (property in target) {
                delete target[property];
            }
        }
    })
}

let first = {};
let proxy = getProxy(first);        // In the beginning was ther object or objects ?

/*
    Here are the tests
*/

proxy.name={}                               // object
proxy.name.first={}                         // nested object
proxy.name.first.names=[]                   // nested array 
proxy.name.first.names[0]={first:"vetri"}   // nested array with an object

/*
    Here are the serialised values
*/
// console.log(JSON.stringify(first))  // {"name":{"first":{"names":[{"first":"vetri"}]}}}



// delete proxy.name.first.names[0].first




/*
    Here are some examples for array shorthand  
*/

proxy.name.first.names[0]

first = proxy.name.first;  
first.names[0].first = "vel"                    // will work

console.log(proxy.name.first.names[0].first)    // will return 'vel'

names = proxy.name.first.names;  
names[0].first = "vetri";                       

console.log(proxy.name.first.names[0].first)    // will return 'vel' not vetri

