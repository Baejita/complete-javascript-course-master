//Exporting modules
console.log('Exporting modules');

const shippingCost = 10;
const cart = [];

export const addToCart = function (product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

export {totalPrice, totalQuantity as tq}
const totalPrice = 1020;
const totalQuantity = 99;

export default  function (product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

