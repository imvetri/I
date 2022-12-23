// (function(){
//     let a = "";

//     function setB(a) {
        
//     }

    
//     function getB() {
//         return a
//     }

//     return{

//         getA: getA,
//         setA: setA
//     }

    
// })()


// var Employee = {
//   company: 'xyz'
// }
// var emp1 = Object.create(Employee);
// delete emp1.company
// console.log(emp1.company);


// {} -


// function a(){}
// a.prototype.print = function(){}

// b = new a();
// c = new a();
// d = new a();
// e = new a();
// f = new a();



// function print(a){

    
// }


// // I'll try for this

// function bind(){
//     // take the arguments callback, context, args
//     // pick context
//     // pick arguments
//     // return a funtion that has access to these local variables?

//     let callback = arguments[0]
//     let context = arguments[0]
//     let args = arguments // splice from 1- n

//     return function(){
//         callback.apply(context, args)
//     }
// }


// Function.prototype.myBind = function (){
//     console.log(this)
//     // take the arguments callback, context, args
//     // pick context
//     // pick arguments
//     // return a funtion that has access to these local variables?

//     let context = arguments[0]
//     let args = arguments // splice from 1- n

//     return function(){
//         this.apply(context, args)
//     }
// }


// // context, ...arg
// print.myBind(null,3)()



// console.log(aLet); // undefined  . 
// var aLet = 10;
// console.log(aLet);


// // var a = {}

// var b = a; // pass by reference

// var c = JSON.parse(JSON.stringify(a)) // example for pass by value


// var a = {

//     print : ()=>{console.log(this)}
// }

// var b = {

//     print : function(){console.log(this)}
// }

// a.print(); // this - calling obj
// b.print(); // this - calling obj

// newFunction = a.print;
// newFunction() // this - calling obj

// anotherFunction = b.print;
// anotherFunction() // undefined


// promiseFun().then(B).then(C);


// // async function a(){
// //     await value= promiseFun();
// //     await newValue = B(value);
// //     await anotherFunctionvalue = C(newValue);
    
// // }


// let hash = {};

// function memoise(cb, args){
//     if(hash[cb.toString+JSON.stringify(args)]) {// check if it is computed already
//         console.log("CACHED",  hash[cb.toString+JSON.stringify(args)])
//         return hash[cb.toString+JSON.stringify(args)]
//     }
//     else { // compute, cache it, return it
//         let result = cb.call(null, args);
//         console.log("NEWLY CACHED",  hash[cb.toString+JSON.stringify(args)])
//         hash[cb.toString+JSON.stringify(args)] = result;
//         return result;
//     }
// }
// // call the function with dummy functions 
// function add10(n){
//   return n + 10;
// }
// memoise(add10, 10)
// memoise(add10, 20)
// memoise(add10, 10) // 10

// // explain the edge case


// var a ;

// if (a === undefined){

//     console.log(true );
// }
// if(typeof a === "object" && a.toString() === "null"){
    
// }


function mul(A){
    return function b(B){
        return A*B;
    }
}



mul(4)(5)