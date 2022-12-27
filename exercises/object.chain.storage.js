function GetAssessmentTemplate(index,end){
    return AssessmentTemplates.slice(index,end)
}
function SetAssessmentTemplate(Index, Object) {
    /*

        Works on nested objects

        Object.assign({}, undefined ) // {}

        Object.assign({},undefined ,{name:"sdf"}) // {name: "sdf"}

        Object.assign({hellow:{name:1}},undefined ,{name:"sdf"}) // {hellow: {…}, name: "sdf"}

        Object.assign({hellow:{name:1}},undefined ,{hellow:{name:4}}) // {hellow: {name:4}}


    */
    AssessmentTemplates[index] = Object.assign({},AssessmentTemplates[index],data) // Works for create, update, delete, nested properties, nested objects

    /**
    AssessmentTemplates can also be fetched from parent object 
    */

    Object.AssessmentTemplates // returns all assessmentTemplates
}

// https://wiki.wdf.sap.corp/wiki/display/AIN/Guidelines+-+APM+GraphQL+APIs