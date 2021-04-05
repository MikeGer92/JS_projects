// Task_1

let num = 50;
num +='';
let arrNumber = num.split('');
while (arrNumber.length < 3) {
    arrNumber.unshift(0);
}
let obj = {};
if (arrNumber.length > 3) {
    return null;
} else {
    obj.сотни = +arrNumber[0]; 
    obj.десятки = +arrNumber[1]; 
    obj.единицы = +arrNumber[2];
}
console.log(obj);

// Task_2-3

class Product {
    constructor(group, name, price, quantity) {
        this.group = group;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

let basket = {

    products : {

        milk: new Product('milkProd', 'milk', 60, 3),
        yogurt : new Product('milkProd', 'yogurt', 32, 4),
        baguette : new Product('breadProd', 'baguette', 40, 1),
        croissant :  new Product('breadProd', 'croissant', 220, 0.7),
        cheese : new Product('cheeseProd', 'cheese', 640, 0.4),
        pepper : new Product('vegProd', 'pepper', 270, 0.3),

    },
        
    shoppingList() {
        let basketList = [];
        for (let key in basket.products) {
            basketList.push(basket.products[key].name);
        }
        console.log(basketList);
    },
    countBasketPrice() {
        let totalPrice = 0;
        for (let key in basket.products) {
            let coast = basket.products[key].price * basket.products[key].quantity;
            totalPrice += coast;
        }
        console.log(totalPrice);
    }
};
basket.shoppingList();
basket.countBasketPrice();
basket.products.apple = new Product('fruProd', 'apple', 80, 1.2);
basket.shoppingList();
basket.countBasketPrice();