import products from "./products";

let productName: string = "beanie";
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;
let shippingAddress: string = "55 Toronto Terrace"

const product = products.filter((product) => product.name === productName)[0];
// console.log(product);

for (let i = 0; i < products.length; i++) {
  if (products[i].preOrder === true) {
    console.log(
      `${products[i].name} - We'll send you a message when it's on it's way`
    );
  }
}

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 25) {
    shipping = 0
    console.log(`We provide free shipping for ${products[i].name}!`)
    }
  else if (products[i].price < 25) {
    shipping = 5
}
}

// console.log(products[0].preOrder);
