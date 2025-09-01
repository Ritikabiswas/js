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