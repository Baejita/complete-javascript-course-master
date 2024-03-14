//Exporting modules
console.log('Exporting modules');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

export {totalPrice, totalQuantity as tq}
const totalPrice = 1020;
const totalQuantity = 99;

//สร้างฟังชั่นส่งออกที่ทำให้เข้าไปเลย
export default  function (product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}


//blocking code 
// console.log('start fetching users');
// await fetch('https://jsonplaceholder.typicode.com/users')
// console.log('Finish fetching users');


