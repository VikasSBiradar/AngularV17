let products = [
    {name : 'phone', price : 700},
    {name : 'tablet', price : 900}
];

for (var j =0; j< products.length; j++){
    if(products[j].price == 900){
        break;
    }
}

console.log(products[j]);

let discount = 0;
let product = products[1];

switch(product.name){
    case 'phone' : 
    discount = 5;
    break;
    case 'tablet':
        discount =10;
}

console.log(`There is a ${discount} % on ${product.name}.`);