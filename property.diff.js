let propertyDiff = function (oldObject, newObject) {
    
    // Take all the properties from two objects and filter out objects
    let oldObjectProperties = Object.keys(oldObject)
    let newObjectProperties = Object.keys(newObject)

    let objectResults = {};

    // Run recursively for object types.
    if(oldObjectPropertiesObjectType.length == newObjectPropertiesObjectType.length && newObjectPropertiesObjectType.length >0 ){
        objectResults = {};
        oldObjectPropertiesObjectType.forEach(property=>{
            objectResults[property]=propertyDiff(oldObject[property], newObject[property])
        })
    }

    let deletedProperties=[], createdProperties=[], updatedProperties=[];

    deletedProperties = oldObjectProperties.filter(oldObjectProperty=>{
        return newObjectProperties.every(newObjectProperty=>newObjectProperty !== oldObjectProperty)
    })

    createdProperties = newObjectProperties.filter(newObjectProperty=>{
        return oldObjectProperties.find(oldObjectProperty=>oldObjectProperty === newObjectProperty)===undefined
    })

    updatedProperties = newObjectProperties.filter(newObjectProperty=>{
        return oldObject[newObjectProperty]!==newObject[newObjectProperty] && oldObject[newObjectProperty]!== undefined
    })

    return {
        deletedProperties,
        createdProperties,
        updatedProperties,
        objectResults
    }
    
}

/** TESTS **/

var oldObject, newObject, result;

// New property created 
oldObject = {};
newObject = { name: ""}
result = propertyDiff(oldObject, newObject)
console.log('created with one property ',result.createdProperties[0]==="name")

// Property deleted
oldObject = {name:""};
newObject = {}
result = propertyDiff(oldObject, newObject)
console.log('deleted one property', result.deletedProperties[0]==='name')

// Property updated
oldObject = {name:""};
newObject = {name:"hello"}
result = propertyDiff(oldObject, newObject)
console.log('updated one property', result.updatedProperties[0]==='name')

// New property created in nested object
oldObject = {name:{}};
newObject = { name: { firstName: ""}}
result = propertyDiff(oldObject, newObject)
console.log('object property created', result.objectResults['name'].createdProperties[0]==='firstName')

// Property deleted in nested object 
oldObject = {name:{firstName: ""}};
newObject = { name: {}}
result = propertyDiff(oldObject, newObject)
console.log('object property created', result.objectResults['name'].deletedProperties[0]==='firstName')

// Property updated in nested object
oldObject = {name:{firstName: ""}};
newObject = { name: {firstName: "name"}}
result = propertyDiff(oldObject, newObject)
console.log('object property created', result.objectResults['name'].updatedProperties[0]==='firstName')

// New property created 
oldObject = {};
newObject = { name: {}}
result = propertyDiff(oldObject, newObject)
console.log('created with one property ',result.createdProperties[0]==="name")


// New property created 
oldObject = {name:{firstName:{hello:"sdf"}}};
newObject = { name: {}}
result = propertyDiff(oldObject, newObject)
console.log('created with one property ',result.createdProperties[0]==="name")