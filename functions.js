function myfunc()
{
   
}
//functions when we donot know number of parameters
//using rest operator
function addsum(...num){
 return num
}
addsum(2,3,4,56)//now num contains all the values 2,3,4,56
//we can pass object and arrays as function parameters as normal function myfun(anyobject) ,function myfun(myarray)
//child can access variables of the parent function that is called clousr
/*addone(5,3) here it will not give any error beacuse js support hoisting 
function addone(num1,num2){
    return num1+num2
}*/
/*addtwo(3,4) here we will get error as we are calling before defination and also storing it in a variable 
const addtwo=function(num1,num2){
    return num1+num2
}*/ 
// this. refers to the current context
const myobj={
    name:"ritu",
    age:21,
    greeting:function(){
        console.log(`${this.name} wellcome`)
        //this inside the object will give the current object 
    }
}
myobj.greeting()
//console.log(this)//will give empty object {}//but in browser it will give window object
/*we cannot use this.user name inside  function only console.log(this ) will give some objects
const fun=function(){
    console.log("normal function")
    console.log(this)
}
fun()*/
/*
const arrowfun=()=>{
   console.log("this is a arrow function")
   console.log(this)//here it will give empty object 
}
arrowfun()*/
// for one lined arrow function we can write it like this like 
// const vname =(p1,p2)=> p1+p2
// const uname=(p1,p2)=>(p1+p2)
// console.log(vname(1,2))
// console.log(uname(2,5)) 
//for returning object we have to use parenthesis in arrow function
// const wname=()=>({user:"tiyu"})
// console.log(wname())

// IIFE -immediately invoked function as we want sometime to load immediatedly and we donot want global variables to distrub 
// our local variables so we make separate scope 
function cha(){
    console.log("used")
}
cha();
//IIFE 
(function cham(){
  console.log("IIFE")
})()