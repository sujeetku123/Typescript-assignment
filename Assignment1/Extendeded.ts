// ans A. Default values
var a,b;
function add(a,b=10){
    console.log(a+b);
}



// ans B. 
/*var i;
function userFriends(username,...arg){
    console.log("Name: "+username);
    console.log("Friends: ")
    for(i in arg){
    console.log(arg[i])
    }
}
 userFriends("john","tom","dick","harry");


 //ans C.
 function printCapitalNames(name1,name2,name3,name4,name5){
     console.log("Names after")
     console.log(name1.toUpperCase()+" "+name2.toUpperCase()+" "+name3.toUpperCase()+" "+name4.toUpperCase()+" "+name5.toUpperCase());
 } 

var nameList=["john","tom","nik","sam","wick"];
console.log("Names Before: ",nameList)
printCapitalNames(...nameList);*/