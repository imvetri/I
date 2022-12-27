var node = $("#__data234")[0];



function getComputedStyleString(node){
    
    var computedStyle = JSON.parse(JSON.stringify(getComputedStyle(node)))
    
    // delete propertis if it is a number
    Object.keys(computedStyle).forEach(key=>{
        // check if it is a number
        if(Number(key)/2>=0) {
            delete computedStyle[key];
        }
    })
    // convert it to string
    var computedStyleString = JSON.stringify(computedStyle)
    
    // replace all comma with semicolo
    
    return computedStyleString.replaceAll(",",";").replace("{","").replace("}","")

}

// get the node 
node

// loop through all its kids.
visitKids(node)


function visitKids(node ){
    // fetch its computed computedStyle
    var computedStyleString = getComputedStyleString(node);
    node.setAttribute("style",`${computedStyleString}`)
    node.innerHTML
    Array.from(node.children).forEach(visitKids)
}