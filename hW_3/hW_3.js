// Task_1
let n = 100;

nextNumber:
for (let i = 2; i <= n; i++) { 
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
        continue nextNumber;
        }
  }
  console.log(i);
}

// Task_2
let basket = [],
    prodFir = ['milk', 2, 60],
    prodSec = ['broad', 3, 30],
    prodThi = ['cheese', 0.4, 640];

    basket.push(prodFir);
    basket.push(prodSec);
    basket.push(prodThi);

    console.log(basket);

// Task_3
let price = 0;
    function countBasketPrice(arr) {
        arr.forEach(elem => {
            let coast = elem[1] * elem[2];
            price += coast;    
        });
        console.log(price);  
    }
countBasketPrice(basket);

// Task_4
for (var i = 0; i < 10; console.log(++i)){}


// Task_5
let str = "x";
console.log(str);
for(var x = 0; x < 20; x++) {
    console.log(str += "xx");
}