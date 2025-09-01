//two ways to create objects
//using constructor method it creates single to syntax-Object.create
//using object literals
const mysym=Symbol("xyy")
const myobject={
 //key value pairs
 [mysym]:"keeey"//its an symbol
//  mysym:"keeey"//iits an string
}
//if we want to freeze somthing
//Object.freeze(myobject)
//how to add a function in object 
myobject.greet=function(){
    console.log("Hello Ritu")
}
// console.log(myobject.greet)//it will print function anonymous
// console.log(myobject.greet())

//----------------------------------------------
const newobj=new Object()//singleton object
//merging object
const obj1={
    nam:"ritu",
    age:12
}
const obj2={
    work:"IT",
    Salary:"20lpa"
}
const obj3={obj1,obj2}
//console.log(obj3) output -{
//   obj1: { nam: 'ritu', age: 12 },
//   obj2: { work: 'IT', Salary: '20lpa' }
// }
// const obj4= Object.assign(obj1,obj2)//obj1 gets modified
const obj4= Object.assign({},obj1,obj2)//obj1 not modified
console.log(obj1)
