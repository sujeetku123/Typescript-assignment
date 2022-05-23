
//Write a program that returns next Armstrong number after calling getNextArmstrong() method.

const  listArmStrong=[0, 1, 153, 370,407];
const iterator = listArmStrong[Symbol.iterator]();
function getNextArmstrong(){
    
    return iterator.next().value;
}
console.log(getNextArmstrong());
console.log(getNextArmstrong());
console.log(getNextArmstrong());
