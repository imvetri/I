var node = $("#__data234")[0];

// add debugger;
debugger;

// stomach aching because of water coffee milk mixing

// paste the code

var computedStyle = getComputedStyle(node)

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

computedStyleString.replaceAll()
