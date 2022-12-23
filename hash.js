let input = [1,2,3,3,3,4,4,5,6,6,7,7,7,8,9]
let hash = {}

input.forEach(item=>{
    hash[item]= hash[item] || 0;
    hash[item]++;
})


console.log(hash)
console.log(Object.keys(hash))