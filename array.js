const superheors=["ritu","minu","kinu"]
const newheros=["sd","sp","sc"]
// superheors.push(newheros)//not a good way beacuse its not merging its pushing array inside that array [ritu,minu..[sd,sp..]] 
// console.log(superheors)
const allheros=superheors.concat(newheros)
//console.log(allheros)//output-[ 'ritu', 'minu', 'kinu', 'sd', 'sp', 'sc' ]
const usingspreadoperator=[...superheors,...newheros]
//console.log(usingspreadoperator)//same output as concat but its more preferable as we can have as many as array that needs spreing
const another=[1,2,3,[4,5,6],7,8,[9,3,4,[1,2,3]]]
//const newanother=another.flat(Infinity)//all same as concat
const newanother=another.flat(1)//output-[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, [ 1, 2, 3 ] ]upto 1 depth resolved 
console.log(newanother)