// function sum (a,b){
//     return a + b;
// }
// let ans = sum(3,4);
// console.log(ans);

// function sumn (n){
//     return n*(n+1)*0.5;
//     //or we can use it by usinng for loop
// }
// let sol = sumn(10)
// console.log(sol);

const { isUtf8 } = require("buffer");
const { time } = require("console");
const fs = require("fs");
const contents = fs.readFileSync("a.txt","utf-8");
console.log(contents);

//callback 
function print(err,data){
    console.log(data);
}


const content1 = fs.readFile("a.txt","utf-8",print);

const content2 = fs.readFile("b.txt","utf-8",print);
console.log("done!!"); 

console.log("hi");
function timeout(){
    console.log("async done!!");
}

setTimeout(timeout,5000);
console.log("async");