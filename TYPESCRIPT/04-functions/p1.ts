function a(){
    alert("This is default function");
}
a();

function add(x : string, y: string){
    console.log("X=", x);
    console.log("y=",y);
}
add('Angular','React');

//expression function
let sum = function(x: number, y : number) : number{
    return x + y;
}
console.log("sum=", sum(10,20));

function applydiscount(price, discount = 0.05){
    return price * (1 - discount);
}
console.log(applydiscount(100));

function applydiscount1(price : number, discount : number = 0.05) : number{
    return price *(1 - discount);
}
console.log(applydiscount1(100));


function getTotal(...numbers : number[]) : number{
  let total = 0;
  numbers.forEach((num) => total += num);
  return total;
}
console.log("getTotal(10,20)", getTotal(10,20));
console.log("getTotal(10,20,30)", getTotal(10,20,30));


//function overloading
function add1(a : number | string, b : number| string) : number | string{
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }
    else{
        return 0;
    }
    //same for other cases
}
console.log("add1", add1(10,20));

function add2(a  : number, b : number) : number;
function add2 (a : string, b : string ) : string;
function add2 (a : any, b : any) : any {
    return a + b;
}
console.log("add2",add2(10,20));
console.log("true",false);