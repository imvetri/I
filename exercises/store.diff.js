let propertyDiff = function (oldObject, newObject) {
    
    // Take all the properties from two objects and filter out objects
    let oldObjectProperties = Object.keys(oldObject).filter(property=> typeof oldObject[property]!== "object");
    let newObjectProperties = Object.keys(newObject).filter(property=> typeof oldObject[property]!== "object");

    // Take all the object properties from the two objects
    let oldObjectPropertiesObjectType = Object.keys(oldObject).filter(property=> typeof oldObject[property]=== "object").sort();
    let newObjectPropertiesObjectType = Object.keys(newObject).filter(property=> typeof oldObject[property]=== "object").sort();

    // throw error if property is of object type in one and non-object in another
    if(oldObjectPropertiesObjectType.some(prop=>newObjectProperties.find(newProp=>newProp === prop)) || newObjectPropertiesObjectType.some(prop=>oldObjectProperties.find(oldProp=>oldProp === prop)) ){
        throw "Invalid properties type, one or more properties has a mismatching type"
    }

    let objectResults = {};


    // Run recursively for object types.
    if(oldObjectPropertiesObjectType.length == newObjectPropertiesObjectType.length && newObjectPropertiesObjectType.length >0 ){
        objectResults = {};
        oldObjectPropertiesObjectType.forEach(property=>{
            objectResults[property]=propertyDiff(oldObject[property], newObject[property])
        })
    }

    let deletedProperties=[], createdProperties=[], updatedProperties=[];

    if(oldObjectProperties.length>0 || newObjectProperties.length>0) {
        /**
            1. Take all the properties from two objects
            2. Find existing, new, deleted properties
        **/

        // 2.1 Find deleted properties. Look for properties missing in the newObject and present in the old Object
        deletedProperties = oldObjectProperties.filter(oldObjectProperty=>{
            return newObjectProperties.every(newObjectProperty=>newObjectProperty !== oldObjectProperty)
        })

        // 2.2 Find new properties. Look for properties present in newObject and missing in oldObject
        createdProperties = newObjectProperties.filter(newObjectProperty=>{
            return oldObjectProperties.find(oldObjectProperty=>oldObjectProperty === newObjectProperty)===undefined
        })

        // 2.3 Find updated properties. Look for properties present in newObject and in oldObject with different values
        updatedProperties = newObjectProperties.filter(newObjectProperty=>{
            return oldObject[newObjectProperty]!==newObject[newObjectProperty] && oldObject[newObjectProperty]!== undefined
        })

    }
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