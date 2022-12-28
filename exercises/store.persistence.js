var store = {
    assessmentTemplate:{
        CREATE: ()=> console.log("ASSESSMENT TEMPLATE CREATED"), // BE change needed. yes / No ?
        UPDATE: ()=> console.log("ASSESSMENT TEMPLATE UPDATED"),
        DELETE: ()=> console.log("ASSESSMENT TEMPLATE DELETED"),
    },

    impacts:{
        CREATE: ()=> console.log("IMPACTS CREATED"),
        UPDATE: ()=> console.log("IMPACTS UPDATED"),
        DELETE: ()=> console.log("IMPACTS DELETED"),
    },

    dimensions:{
        CREATE: ()=> console.log("DIMENSION CREATED"),
        UPDATE: ()=> console.log("DIMENSION UPDATED"),
        DELETE: ()=> console.log("DIMENSION DELETED"),
    },

    scales:{
        CREATE: ()=> console.log("SCALES CREATED"),
        UPDATE: ()=> console.log("SCALES UPDATED"),
        DELETE: ()=> console.log("SCALES DELETED"),
    },
}

var operations = {
    add : "CREATE",
    delete: "DELETE",
    update: "UPDATE"
}

function persistChanges(diff, data){
    var prev = data;
    diff.path.forEach((prop, index)=>{
        if(index===diff.path.length-1){
            // for properties inside an array
            if(typeof prop === "string" && typeof diff.path[index-1] === "number"){
                if(diff.op==="add"){
                    store[diff.path[diff.path.length-3]][operations[diff.op]]();
                }
                if(diff.op==="delete"){
                    store[diff.path[diff.path.length-3]][operations[diff.op]]();
                }
                if(diff.op==="update"){
                    store[diff.path[diff.path.length-3]][operations[diff.op]]();
                }
            }
            // for Properties inside an object
            else{
                if(diff.op==="add"){
                    store[diff.path[diff.path.length-2]][operations[diff.op]]();
                }
                if(diff.op==="delete"){
                    store[diff.path[diff.path.length-2]][operations[diff.op]]();
                }
                if(diff.op==="update"){
                    store[diff.path[diff.path.length-2]][operations[diff.op]]();
                }
            }

        }  
        prev = prev[prop];
    })
}

function setAssessmentTemplate(oldData, newData) {
    // Needs Effort to get https://github.com/cosmicanant/recursive-diff/tree/master/src into code base
    // As a package it is difficult to consume in UI5
    // CReuse the code along with jsDocs in apmlibreusable - .5 to 3 days
    var diffs = recursiveDiff.getDiff(oldData, newData); 
    diffs.forEach(diff=>persistChanges(diff, newData))
}

// Till here, create a separate file and export setAssessmentTemplate method. 
// If you add threshold, add it to Store object 


// Below is example working code for create, update, delete scales and update assessmentTemplate

var oldData = {
    assessmentTemplate: {
        id: "7F3928603A1F4886B295C15175D77400",
        status: "CREATED",
        version: 0,
        displayValue: "Assessment_009",
        updatedOn: "2021-09-20T08:32:47.335Z",
        alphaNumeric: false,
        calculationMethod: {
            weightingAtImpact: false,
            weightingAtDimension: false,
            methodAtImpact: "MAXIMUM",
            methodAtDimension: "ADDITION"
        },
        description: {
            short: "Description for Assessment_009",
            long: "",
            language: ""
        },
        descriptions: [
            {
                short: "Description for Assessment_009",
                long: "",
                language: ""
            }
        ],
        impacts: [{
            dimensions: [{
                scales: [{

                }]
            }]
        }]
    }
}

var addData = {
    assessmentTemplate: {
        id: "7F3928603A1F4886B295C15175D77400",
        status: "CREATED",
        version: 0,
        displayValue: "Assessment_009",
        updatedOn: "2021-09-20T08:32:47.335Z",
        alphaNumeric: false,
        calculationMethod: {
            weightingAtImpact: false,
            weightingAtDimension: false,
            methodAtImpact: "MAXIMUM",
            methodAtDimension: "ADDITION"
        },
        description: {
            short: "Description for Assessment_009",
            long: "",
            language: ""
        },
        descriptions: [
            {
                short: "Description for Assessment_009",
                long: "",
                language: ""
            }
        ],
        impacts: [{
            dimensions: [{
                scales: [{
                    id:"sdf"
                }]
            }]
        }]
    }
}
// test
setAssessmentTemplate( oldData, addData)

var updateData = {
    assessmentTemplate: {
        id: "7F3928603A1F4886B295C15175D77400",
        status: "CREATED",
        version: 0,
        displayValue: "Assessment_009",
        updatedOn: "2021-09-20T08:32:47.335Z",
        alphaNumeric: false,
        calculationMethod: {
            weightingAtImpact: false,
            weightingAtDimension: false,
            methodAtImpact: "MAXIMUM",
            methodAtDimension: "ADDITION"
        },
        description: {
            short: "Description for Assessment_009",
            long: "",
            language: ""
        },
        descriptions: [
            {
                short: "Description for Assessment_009",
                long: "",
                language: ""
            }
        ],
        impacts: [{
            dimensions: [{
                scales: [{
                    id: "d"
                }]
            }]
        }]
    }
}
// update 
setAssessmentTemplate( addData, updateData)


var deleteData = {
    assessmentTemplate: {
        id: "7F3928603A1F4886B295C15175D77400",
        status: "CREATED",
        version: 0,
        displayValue: "Assessment_009",
        updatedOn: "2021-09-20T08:32:47.335Z",
        alphaNumeric: false,
        calculationMethod: {
            weightingAtImpact: false,
            weightingAtDimension: false,
            methodAtImpact: "MAXIMUM",
            methodAtDimension: "ADDITION"
        },
        description: {
            short: "Description for Assessment_009",
            long: "",
            language: ""
        },
        descriptions: [
            {
                short: "Description for Assessment_009",
                long: "",
                language: ""
            }
        ],
        impacts: [{
            dimensions: [{
                scales: [{
                }]
            }]
        }]
    }
}
// delete 
setAssessmentTemplate( updateData, deleteData)


var updateAssessment = {
    assessmentTemplate: {
        id: "7F3928603A1F4886B295C15175D77400",
        status: "CREATED",
        version: 1,
        displayValue: "Assessment_009",
        updatedOn: "2021-09-20T08:32:47.335Z",
        alphaNumeric: false,
        calculationMethod: {
            weightingAtImpact: false,
            weightingAtDimension: false,
            methodAtImpact: "MAXIMUM",
            methodAtDimension: "ADDITION"
        },
        description: {
            short: "Description for Assessment_009",
            long: "",
            language: ""
        },
        descriptions: [
            {
                short: "Description for Assessment_009",
                long: "",
                language: ""
            }
        ],
        impacts: [{
            dimensions: [{
                scales: [{
                }]
            }]
        }]
    }
}
// delete 
setAssessmentTemplate( deleteData, updateAssessment)
