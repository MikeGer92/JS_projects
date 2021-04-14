const basketItem = {
    render(product) {
        return `<div class="product">
                    <div><b>Наименование</b>: ${product.name}</div>
                    <div><b>Цена за шт./кг.</b>: ${product.price}</div>
                    <div><b>Количество</b>: ${product.quantity}</div>
                    <div><b>Стоимость</b>: ${product.quantity * product.price}</div>
                </div>`;
    }
};

let     nameNum = 0,
        totalPrice = 0;
const basket = {

    baskListBlock: null,
    clearBaskButton: null,
    showListButton: null,
    hiddenListButton: null,
    quantDiv: null,
    coastDiv:null,
    basketItem,
    createBasketBlock,
    products : [
        {
            id : 'pr1',
            group: 'milkProd',
            name: 'Молоко',
            price: 60,
            quantity: 3,
            img: '#'
        },
        {
            id : 'pr2',
            group: 'milkProd',
            name: 'Йогурт',
            price: 32,
            quantity: 4,
            img: '#'
        },
        {
            id : 'pr3',
            group: 'breadProd',
            name: 'Багет',
            price: 40,
            quantity: 1,
            img: '#'
        },
        {
            id : 'pr4',
            group: 'breadProd',
            name: 'Круасан',
            price: 220,
            quantity: 0.7,
            img: '#'
        },
        {
            id : 'pr5',
            group: 'cheeseProd',
            name: 'Сыр',
            price: 640,
            quantity: 0.4,
            img: '#'
        },
        {
            id : 'pr6',
            group: 'vegProd',
            name: 'Перец',
            price: 270,
            quantity: 0.3,
            img: '#'
        },
        {
            id : 'pr7',
            group: 'fruProd',
            name: 'Яблоки',
            price: 80,
            quantity: 1.2,
            img: '#'
        },

    ],



    init() {
        this.createBasketBlock();
        this.baskListBlock = document.querySelector('.basketlist_deactive');
        this.clearBaskButton = document.querySelector('.clear_btn');
        this.showListButton = document.querySelector('.list_btn');
        this.quantDiv = document.querySelector('quantDiv');
        this.coastDiv = document.querySelector('coastDiv');
        this.clearBaskButton.addEventListener('click', () => this.clearCart());
        this.showListButton.addEventListener('click', () => this.baskListShow());
        
        this.render();
    },
    render() {
        if (this.products.length) {
            this.products.forEach(product => {
                this.baskListBlock.insertAdjacentHTML('beforeend', this.basketItem.render(product));
            });
            this.baskListBlock.insertAdjacentHTML('afterbegin', `В корзине ${this.products.length} товаров стоимостью ${this.getCartPrice()}`);
        } else {
            this.baskListBlock.textContent = 'Ваша корзина пуста!';
        }
        this.coastDiv.innerText = this.getCartPrice();
        this.quantDiv.innerText = this.products.length;
    },
    getCartPrice() {
        return this.products.reduce(function (price, product) {
            return price + product.price * product.quantity;
        }, 0);
    },
    baskListShow() {
        this.showListButton.innerText = 'Скрыть список';
        this.baskListBlock.className = 'basketlist';
        this.showListButton.className = 'hidden_btn';
        this.hiddenListButton = document.querySelector('.hidden_btn');
        this.hiddenListButton.addEventListener('click', () => this.baskListHidden());

    },
    baskListHidden() {
        this.baskListBlock.className = 'basketlist_deactive';
        this.showListButton.innerText = 'Показать список';
        this.showListButton.addEventListener('click', () => this.baskListShow());
    },
    clearCart() {
        this.products = [];
        this.quantDiv.innerText = 0;
        this.quantDiv.innerText = 0;
        this.render();
    },
};
basket.init();
        

function createBasketBlock() {
    let baskDiv = document.createElement('baskDiv'),
        coastBlock = document.createElement('coastBlock'),
        quantBlock = document.createElement('quantBlock'),
        quantDiv = document.createElement('quantDiv'),
        coastDiv = document.createElement('coastDiv'),
        titleQuant = document.createElement('titQuant'),
        titleCoast = document.createElement('titCoast'),
        cont = document.querySelector('.container'),
        zerBtn = document.createElement('zerroButton');

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
}

