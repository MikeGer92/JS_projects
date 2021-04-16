const catalog = {
    catalogBlock: null,
    basket: null,
    catList: [
        {
            uin_product: 'pr1',
            group: 'milkProd',
            name: 'Молоко',
            price: 60,
            img: "catalog/imges/pr1.jpg"
        },
        {
            uin_product: 'pr2',
            group: 'milkProd',
            name: 'Йогурт',
            price: 32,
            img: 'catalog/imges/pr2.jpg'
        },
        {
            uin_product: 'pr3',
            group: 'breadProd',
            name: 'Багет',
            price: 40,
            img: 'catalog/imges/pr3.jpg'
        },
        {
            uin_product: 'pr4',
            group: 'breadProd',
            name: 'Круасан',
            price: 220,
            img: 'catalog/imges/pr4.jpg'
        },
        {
            uin_product: 'pr5',
            group: 'cheeseProd',
            name: 'Сыр',
            price: 640,
            img: 'catalog/imges/pr5.jpg'
        },
        {
            uin_product: 'pr6',
            group: 'vegProd',
            name: 'Перец',
            price: 270,
            img: 'catalog/imges/pr6.jpg'
        },
        {
            uin_product: 'pr7',
            group: 'fruProd',
            name: 'Яблоки',
            price: 80,
            img: 'catalog/imges/pr7.jpg'
        },

    ],
    init(catalogBlockClass, bask) {
        this.catalogBlock = document.querySelector(`.${catalogBlockClass}`);
        this.basket = bask;
        this.render();
        this.addEventHandLers();
    },
    render() {
        if (this.getCatalogListLength() > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },
    addEventHandLers() {
        this.catalogBlock.addEventListener('click', event => this.addToBasket(event));
    },
    addToBasket(event) {
        if (!event.target.classList.contains('toBasket')) return;
        const uin_product = event.target.dataset.uin_product;
        const prodToAdd = this.catList.find((product) => product.uin_product === uin_product);
        this.basket.addToBasket(prodToAdd);
        
    },
    getCatalogListLength() {
        return this.catList.length;
    },  
    renderCatalogList() {
        this.catalogBlock.innerHTML = '';
        this.catList.forEach (product => {
            this.catalogBlock.insertAdjacentHTML('beforeend',this.renderCatalogItem(product));
        });
    },
    renderCatalogItem(product) {
        return `<div class="product">
                    <h3>${product.name}</h3>
                    <p>${product.price} рублей</p>
                    <div class='product_photo'><img src = '${product.img}'</div>
                    <button class = "toBasket" data-uin_product = "${product.uin_product}">В корзину</button>
                </div>`;
 
    },
    renderEmptyCatalog() {
        this.catalogBlock.innerHTML = '';
        this.catalogBlock.textContent = 'Каталог товаров пуст';

    },
    
};
const basketItem = {
    render(product) {
        return `<div class="baskProduct">
                    <div><b>УИНТ</b>: ${product.uin_product}</div>
                    <div><b>Наименование</b>: ${product.name}</div>
                    <div><b>Цена за шт./кг.</b>: ${product.price} рублей</div>
                    <div class='prod_quant'>
                        <b>Количество</b>: ${product.quantity} шт./кг.;
                        <div class=change_quant>
                            <button class='change minus' data-uin_product = "${product.uin_product}">-</button>
                            <b>Изменить</b> 
                            <button class='change plus' data-uin_product = "${product.uin_product}">+</button>
                        </div>
                    </div>
                    <div><b>Стоимость</b>: ${product.quantity * product.price} рублей</div>
                </div>`;
    }
};
const basket = {
    bask: null,
    cart: null,
    baskListBlock: null,
    clearBaskButton: null,
    showListButton: null,
    hiddenListButton: null,
    quantDiv: null,
    coastDiv:null,
    basketItem,
    products : [
        {
            uin_product: 'pr1',
            group: 'milkProd',
            name: 'Молоко',
            price: 60,
            quantity: 3,
            img: '#'
        },

    ],



    init() {
        this.baskListBlock = document.querySelector('.basketlist_deactive');
        this.bask = document.querySelector('.basket');
        this.cart = document.querySelector('.cart');
        this.clearBaskButton = document.querySelector('.clear_btn');
        this.showListButton = document.querySelector('.list_btn');
        this.quantDiv = document.querySelector('.quant');
        this.coastDiv = document.querySelector('.coast');
        this.clearBaskButton.addEventListener('click', () => this.clearCart());
        this.showListButton.addEventListener('click', () => this.baskListShow());
        this.bask.addEventListener('click', () => this.showBasketForm());
        this.addEventHanders();
        
        this.render();
    },
    addEventHanders() {
        this.baskListBlock.addEventListener('click', event => this.changeQuant(event));
    },    
    showBasketForm() {
            this.cart.classList.toggle('cart_active');
        
    },
    render() {
        if (this.products.length) {
            this.baskListBlock.innerHTML = '';
            this.products.forEach(product => { 
                this.baskListBlock.insertAdjacentHTML('beforeend', this.basketItem.render(product));
            });
           
            this.baskListBlock.insertAdjacentHTML('beforeend', `В корзине ${this.products.length} товаров стоимостью ${this.getCartPrice()} рублей`);
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
    addToBasket(good) {

        if (good) {
            const findInBasket = this.products.find(({uin_product}) => good.uin_product === uin_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.products.push({...good, quantity: 1});
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },
    changeQuant(event) {
        if (!event.target.classList.contains('change')) return;
        const uin_product = event.target.dataset.uin_product;
        const prodQuant = this.products.find((product) => product.uin_product === uin_product);
        if (event.target.classList.contains('minus')){
            if (prodQuant.quantity > 0) {
                prodQuant.quantity--; 
            } else {
                prodQuant.quantity = 0;
            }
        }else {
            prodQuant.quantity++;
        }
        this.render();
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
catalog.init('catalog', basket);