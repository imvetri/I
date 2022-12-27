// Find the starting and ending index of largest substring with equal number of 'A' and 'B'.

/*
Input: ABAAABB
Output: 1 to 6

Input: AAAA
Output: Not available

Input: BBAAB
Output: 0 to 3 or 1 to 4

101010

00011000

11110000 = Xor -> 
10101010

*/

/**

Give a string, largest - start from extre

For all substrings - check condition - if passes return - not performant - n square

substrings with equal number of A and B 

Generate substrings 

*/

function valid(string){
    var count = {};
    string.split("").forEach(char=>{
        if(!count[char]){
            count[char] = 0;
        }

        count[char]++;
    })

    return count["A"]===count["B"];
    
}
function count(string){
    var count = {};
    string.split("").forEach(char=>{
        if(!count[char]){
            count[char] = 0;
        }

        count[char]++;
    })

    return count["A"]? count["A"] : 0;
    
}



function generateSubstrings(string){
    var substrings = {};
    var maxLength = 0;
    var maxIndexStart = -1;
    var maxIndexEnd = -1;
    for(var i=0;i<string.length; i++){  // count of characters, starts with single item
        for(var j=i+2;j<=string.length;j++){ // minimum substring length is two
            console.log(count(string.substring(i,j)))
            if(valid(string.substring(i,j)) && (count(string.substring(i,j)) > maxLength )){
                maxIndexStart = i;
                maxIndexEnd = j;
            }
        }
    }
    return [maxIndexStart, maxIndexEnd]
}

generateSubstrings("ABAAABB")
// generateSubstrings("AAAA")
// generateSubstrings("BBAAB")

// last index is skipped