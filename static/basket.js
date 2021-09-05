'use strict';

let basketCounterEl = document.querySelector('.cartIconWrap span');
let basketTotalValueEl = document.querySelector('.basketTotalValue');
let openBasketBtn = document.querySelector('.cartIconWrap');
let basket = {};
let basketEl = document.querySelector('.basket');
let basketTotalEl = document.querySelector('.basketTotal');

openBasketBtn.addEventListener('click', function () {
    basketEl.classList.toggle('hidden');
});

class ProductAll {
    constructor(id, image, name, description, price) {
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}

let products = [
    new ProductAll(
        1,
        '1.jpg',
        'Product 1',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        44.15,
    ),
    new ProductAll(
        2,
        '2.jpg',
        'Product 2',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        97.34,
    ),
    new ProductAll(
        3,
        '3.jpg',
        'Product 3',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        78.22,
    ),
    new ProductAll(
        4,
        '4.jpg',
        'Product 4',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        32.11,
    ),
    new ProductAll(
        5,
        '5.jpg',
        'Product 5',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        54.66,
    ),
    new ProductAll(
        6,
        '6.jpg',
        'Product 6',
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.',
        11.23,
    ),
];

function addEventListenersForAddToCartButtons() {
    let addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
};

function addedProductHandler(event) {
    let productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
};
addEventListenersForAddToCartButtons();

function addProductToObject(productId) {
    if (!(productId in basket)) {
        basket[productId] = 1;
    } else {
        basket[productId]++;
    }
}

function renderProductInBasket(productId) {
    let productExist = document.querySelector(`.productCount[data-productId="${productId}"]`);
    if (productExist) {
        increaseProductCount(productId);
        recalculateSumForProduct(productId);
    } else {
        renderNewProductInBasket(productId);
    }
}

function renderNewProductInBasket(productId) {
    let productRow = `
        <div class="basketLine">
            <div>${products[productId - 1].name}</div>
            <div>
                <span class="productCount" data-productId="${productId - 1}">1</span> шт.
            </div>
            <div>$${products[productId - 1].price}</div>
            <div>
                $<span class="productTotalRow" data-productId="${productId - 1}">${products[productId - 1].price}</span>
            </div>
        </div>
    `;
    basketTotalEl.insertAdjacentHTML("beforebegin", productRow);
}

function increaseProductCount(productId) {
    let productCountEl = document.querySelector(`.productCount[data-productId="${productId}"]`);
    productCountEl.textContent++;
}

function recalculateSumForProduct(productId) {
    let productTotalRowEl = document.querySelector(`.productTotalRow[data-productId="${productId}"]`);
    let totalPriceForRow = (basket[productId] * products[productId].price).toFixed(2);
    productTotalRowEl.textContent = totalPriceForRow;
}

function calculateAndRenderTotalBasketSum() {
    let totalSum = 0;
    for (let productId in basket) {
        totalSum += basket[productId] * products[productId - 1].price;
    }
    basketTotalValueEl.textContent = totalSum.toFixed(2);
}

function increaseProductsCount() {
    basketCounterEl.textContent++;
}

function addProductIntoBasket(productId) {
    increaseProductsCount();
    addProductToObject(productId);
    renderProductInBasket(productId);
    calculateAndRenderTotalBasketSum();
}

