let input = [
    [ 0,0,0,0,1,0,1 ],
    [ 1,1,1,1,1,0,0 ],
    [ 0,0,1,1,1,1,0 ],
    [ 0,0,0,0,0,0,0]
   ];
 
 
   function maintainIndexes(input){
     for(var i=0;i<input[0].length;i++){        // Row
       for(var j=0;j<input[i][j].length;j++){   // Column
         // check if it is 1
         if(input[i][j]==1){
           // store index in hash
           hash[i,",",j] = 0; // something        
         }
       }
     }  
   }
 
   maintainIndexes(input)