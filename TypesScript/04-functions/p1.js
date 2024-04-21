function a() {
    alert("This is default function");
}
a();
function add(x, y) {
    console.log("X=", x);
    console.log("y=", y);
}
add('Angular', 'React');
//expression function
var sum = function (x, y) {
    return x + y;
};
console.log("sum=", sum(10, 20));
function applydiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applydiscount(100));
function applydiscount1(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applydiscount1(100));
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log("getTotal(10,20)", getTotal(10, 20));
console.log("getTotal(10,20,30)", getTotal(10, 20, 30));
//function overloading
function add1(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return 0;
    }
    //same for other cases
}
console.log("add1", add1(10, 20));
function add2(a, b) {
    return a + b;
}
console.log("add2", add2(10, 20));
console.log("true", false);
