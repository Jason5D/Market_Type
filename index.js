"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
let productName = "beanie";
let shipping;
let taxPercent;
let taxTotal;
let total;
let shippingAddress = "55 Toronto Terrace";
const product = products_1.default.filter((product) => product.name === productName)[0];
// console.log(product);
for (let i = 0; i < products_1.default.length; i++) {
    if (products_1.default[i].preOrder === true) {
        console.log(`${products_1.default[i].name} - We'll send you a message when it's on it's way`);
    }
}
for (let i = 0; i < products_1.default.length; i++) {
    if (products_1.default[i].price > 25) {
        shipping = 0;
        console.log(`We provide free shipping for ${products_1.default[i].name}!`);
    }
    else if (products_1.default[i].price < 25) {
        shipping = 5;
    }
}
// console.log(products[0].preOrder);
