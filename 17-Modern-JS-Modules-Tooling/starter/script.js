//Importing modules
// import {addToCart , totalPrice as price, tq} from './shopiingCart.js'
console.log('importing modules');

// addToCart('bread' , 5)
// console.log(price, tq);

// import * as shopiingCart from './shopiingCart.js';
// shopiingCart.addToCart('bread', 5);
// console.log(shopiingCart.totalPrice);

import add, {addToCart , totalPrice as price, tq}  from './shopiingCart.js';
add('pizz', 6);
console.log(price);