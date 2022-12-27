console.log('Hello, World');
  
let hash = {}

let input = [
 [ 0,0,0,0,1,0,1 ],
 [ 1,1,1,1,1,0,0 ],
 [ 0,0,1,1,1,1,0 ],
 [ 0,0,0,0,0,0,0]
];


function maintainIndexes(input){
  for(var i=0;i<input.length;i++){        // Row
    for(var j=0;j<input[i].length;j++){   // Column
      // check if it is 1
      if(input[i][j]==1){
        // store index in hash
        hash[(i+","+j)] = 0; // something        
      }
    }
  }  
}

maintainIndexes(input)


let iLand = 0;

while(Object.keys(hash).length!==0){
// pick first item from hash
  let firstItem = Object.keys(hash)[0];

  // increment iland count
  iLand++;
// start traversal
  traverse(firstItem)

}

console.log(iLand);



function traverse(index){
  // remove from hash
  delete hash[index]; // also handles missing indexes, so not to worry about edges and beyond edge
  var i = Number(up(index).split(",")[0]);
  var j = Number(up(index).split(",")[1]);
  if(i<0||i>5){
    if(j<0||j>5){
      return;
    }
  }
  traverse(up(index));
  
   i = Number(down(index).split(",")[0]);
   j = Number(down(index).split(",")[1]);
  if(i<0||i>5){
    if(j<0||j>5){
      return;
    }
  }
  traverse(down(index));
  
   i = Number(left(index).split(",")[0]);
   j = Number(left(index).split(",")[1]);
  if(i<0||i>5){
    if(j<0||j>5){
      return;
    }
  }
  traverse(left(index));
  
   i = Number(right(index).split(",")[0]);
   j = Number(right(index).split(",")[1]);
  if(i<0||i>5){
    if(j<0||j>5){
      return;
    }
  }
  traverse(right(index));

}


function up(currentIndex){
  let i = Number(currentIndex.split(",")[0]);
  let j = Number(currentIndex.split(",")[1]);

  // return up
  return ""+(i-1)+","+j; // hash key for item above current

}



function down(currentIndex){
  let i = Number(currentIndex.split(",")[0]);
  let j = Number(currentIndex.split(",")[1]);

  // return down
  return ""+(i+1)+","+j; // hash key for item below current

}



function left(currentIndex){
  let i = Number(currentIndex.split(",")[0]);
  let j = Number(currentIndex.split(",")[1]);

  // return left
  return ""+(i)+","+(j-1); // hash key for item left to current

}



function right(currentIndex){
  let i = Number(currentIndex.split(",")[0]);
  let j = Number(currentIndex.split(",")[1]);

  // return right
  return ""+(i)+","+(j+1); // hash key for item right to current

}