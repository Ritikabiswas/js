console.log("ritu")
//---------VARIABLES-----------------------------
//declare variable
const sId=1222
//cannot e changed
let email="riti"
var id="223"
//prefer not to use var beacuse of block scope and functional scope mismatch
city="silchar"
// sId=3 cannot be changed
email="toutur"
id="344"
city="jagiroad"
let accountState;
//we will get undefined
console.table([sId,email,id,city,accountState])


//-----------------DATA TYPES-------------------------------
//" use strict";//all js will be evaluated as newer version
//null= standalone value means value defined hai but empty hai
//undefined=declared but not defined yet 
//symbol=jyadatar react mai uniqueness find karne k liye 
let nam=null
console.log(typeof nam)//object
console.log(typeof accountState)//undefined
console.log(typeof city)

