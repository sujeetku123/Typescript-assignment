// add methods  printorder and getprice
const order={
    id:10,
    title:'juice',
    price:1200,
    printOrder(){
        console.log(this.id+""+this.title+""+this.price)
    }
}
var getPrice=function(){ //to get price
    return getPrice;
}
const Ordersource={
    OrderId:1,
    title:"pizza",
    price:150
};
console.log(Ordersource)
console.log(Ordersource.price)
const Ordertarget={
    OrderId:2,
    title:"Burger",
    price:500
};
//assign copies source object to target object

const returnedtarget=Object.assign(Ordersource,Ordertarget) 
console.log(Ordersource); 
console.log(returnedtarget);



