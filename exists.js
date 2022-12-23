
exists = {};

firstloadIDs.forEach(item=>{
    if(exists[item]){
        console.log("EXISTS");
    } else {
        exists[item] = item;
    }
})

secondLoadIDs.forEach(item=>{
    if(exists[item]){
        console.log("EXISTS");
    } else {
        exists[item] = item;
    }
})

thirdLoadIDs.forEach(item=>{
    if(exists[item]){
        console.log("EXISTS");
    } else {
        exists[item] = item;
    }
})

// secondLoadIDs = secondLoad.data.assessmentTemplates.edges.map(item=>item.node.id)