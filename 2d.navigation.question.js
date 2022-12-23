var picture = ["aaaba","ababa","aaaca"]

var form = {
    a: {
        indexes : {
            
        },
        visits : 0
    },
    b: {
        indexes : {
            
        },
        visits : 0
    },
    c: {
        indexes : {
            
        },
        visits : 0
    }
}


for(var i=0;i<picture.length;i++){
    for(var j=0;j<picture[i].length;j++){
        form[picture[i][j]].indexes[i+","+j] = 0
    }
}

function up(index){
    var first = Number(index.split(",")[0])
    var second = Number(index.split(",")[1])
    return (first-1)+","+(second);
}

function down(index){
    var first = Number(index.split(",")[0])
    var second = Number(index.split(",")[1])
    return (first+1)+","+(second);
}


function left(index){
    var first = Number(index.split(",")[0])
    var second = Number(index.split(",")[1])
    return (first)+","+(second-1);
}


function right(index){
    var first = Number(index.split(",")[0])
    var second = Number(index.split(",")[1])
    return (first)+","+(second+1);
}

function performVisit( character, start ){
    if(form[character].indexes[start] === 0 ){
        delete form[character].indexes[start];
        performVisit( character, up(start))
        performVisit( character, down(start))
        performVisit( character, left(start))
        performVisit( character, right(start))
    }
}

while(Object.keys(form.a.indexes).length!==0 ){
    form.a.visits++;
    performVisit("a", Object.keys(form.a.indexes)[0]);
}

while(Object.keys(form.b.indexes).length!==0 ){
    form.b.visits++;
    performVisit("b", Object.keys(form.b.indexes)[0]);
}

while(Object.keys(form.c.indexes).length!==0 ){
    form.c.visits++;
    performVisit("c", Object.keys(form.c.indexes)[0]);
}

console.log(form.a.visits+form.b.visits+form.c.visits)
