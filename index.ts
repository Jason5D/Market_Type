import products from "./products";

let productName: string = "beanie";

const product = products.filter((product) => product.name === productName)[0];
console.log(product);
