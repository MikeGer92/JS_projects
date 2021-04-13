

// Task_1
// let cont = document.querySelector('.container'),
// field = document.createElement('field'),
// table = document.createElement("table"),
// titleRow = document.createElement('titleRow');
// field.style.width = '600px';
// field.style.height = '600px';
// field.style.display = 'flex';
// field.style.justifyContent = 'center';
// field.style.alignItems =  'center';
// field.style.backgroundColor =  'antiquewhite';
// table.style.width = '490px';
// table.style.height = '490px';

// for (let r = 1; r <= 8; r++) {
// let tr = document.createElement('tr');
// tr.style.height = '60px';
// tr.style.border = 'solid 1px black';

// for (let c = 1; c <=8; c++) {
//     let td = document.createElement('td');
//     td.style.width = '60px';
//     td.style.border = 'solid 1px black';
//     tr.appendChild(td);
//     if (r%2 == c%2 && c >0 && r > 0 && c < 9 && r < 9) {
//         td.style.backgroundColor = "black";
//     } else   {
//         td.style.backgroundColor = "white";
//     }

// table.appendChild(tr);  
// }
// cont.appendChild(field);
// field.appendChild(table);
// }

// Task_3

class Product {
    constructor(group, name, price, quantity) {
        this.group = group;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
let nameNum = 0;
let totalPrice = 0;
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
        nameNum = basketList.length;
        console.log(basketList);
    },
    countBasketPrice() {
        totalPrice = 0;
        for (let key in basket.products) {
            let coast = basket.products[key].price * basket.products[key].quantity;
            totalPrice += coast;
        }
        
        console.log(nameNum);
        console.log(totalPrice);
        
    }
};
basket.shoppingList();
basket.countBasketPrice();
basket.products.apple = new Product('fruProd', 'apple', 80, 1.2);
basket.shoppingList();
basket.countBasketPrice();

let baskDiv = document.createElement('baskDiv'),
    coastBlock = document.createElement('coastBlock'),
    quantBlock = document.createElement('quantBlock'),
    quantDiv = document.createElement('quantDiv'),
    coastDiv = document.createElement('coastDiv'),
    titleQuant = document.createElement('titQuant'),
    titleCoast = document.createElement('titCoast'),
    cont = document.querySelector('.container'),
    zerBtn = document.createElement('zerroButton');
    zerBtn.style.width = '100px';
    zerBtn.style.height = '50px';
    zerBtn.style.border = 'solid 1px pink';
    zerBtn.style.borderRadius = '20px';
    zerBtn.style.display = 'flex';
    zerBtn.style.marginTop = '50px';
    zerBtn.style.justifyContent = 'center';
    zerBtn.style.alignItems = 'center';


    


    quantBlock.style.display = 'flex';
    quantBlock.style.justifyContent = 'space-between';
    coastBlock.style.display = 'flex';
    coastBlock.style.justifyContent = 'space-between';
    baskDiv.style.width = '400px';
    baskDiv.style.height = '200px';
    baskDiv.style.display = 'flex';
    baskDiv.style.flexDirection = 'column';
    baskDiv.style.justifyContent = 'space-around';
    baskDiv.style.border = 'solid 2px black';
    titleQuant.style.width= '300px';
    titleQuant.style.height= '94px';
    titleQuant.style.border = 'solid 1px orange';
    quantDiv.style.width = '94px';
    quantDiv.style.height = '94px';
    quantDiv.style.border = 'solid 1px green';
    titleCoast.style.width = '300px';
    titleCoast.style.height = '94px';
    titleCoast.style.border = 'solid 1px red';
    coastDiv.style.width = '94px';
    coastDiv.style.height = '94px';
    coastDiv.style.border = 'solid 1px blue';
    

    quantBlock.appendChild(titleQuant);
    quantBlock.appendChild(quantDiv);
    coastBlock.appendChild(titleCoast);
    coastBlock.appendChild(coastDiv);
    baskDiv.appendChild(quantBlock);
    baskDiv.appendChild(coastBlock);

    cont.appendChild(baskDiv);
    titleQuant.innerText = 'Количество товаров в корзине:';
    titleCoast.innerText = 'Общая стоимость товаров:';
    coastDiv.innerText = totalPrice;
    quantDiv.innerText = nameNum;
    zerBtn.innerText = 'Очистить';
    cont.appendChild(zerBtn);
    zerBtn.addEventListener('click', function() {
        coastDiv.innerText = 0;
        quantDiv.innerText = 0;
    });

    


