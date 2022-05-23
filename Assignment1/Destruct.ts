//Destructing
var names = ["alpha", "beta", "gamma", "delta"];
var [firstelement,secondelement,thirdelement,fourthelement]= names;
console.log(thirdelement);


//Ans b.

var organization ={
    name:"Bhargav",
    address:{
        city:"Vizag",
        state:"Ap",
        pincode:530018
    }
}

const {address:{city:city1,state:state1,pincode:pincode1}}=organization;

console.log(pincode1);
