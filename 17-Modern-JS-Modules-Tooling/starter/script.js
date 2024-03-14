//Importing modules
// import {addToCart , totalPrice as price, tq} from './shopiingCart.js'
console.log('importing modules');

// addToCart('bread' , 5)
// console.log(price, tq);

// import * as shopiingCart from './shopiingCart.js';
// shopiingCart.addToCart('bread', 5);
// console.log(shopiingCart.totalPrice);

// import add, {addToCart , totalPrice as price, tq}  from './shopiingCart.js';
// add('pizz', 6);
// console.log(price);


import add, {cart} from './shopiingCart.js';
add('pizz', 6);
add('bread', 2);
add('butter', 1);
console.log(cart);

/*
const getLastPost = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json();
    
    return { title : data.at(-1).title, text : data.at(-1).body };

}

const lastPort = getLastPost()
console.log(lastPort);


//not Clean
// lastPort.then( last  => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);

*/

/*
const ShoppingCart2 = (function() {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 256;
    const totalQuantity = 56;

   const addToCart = function (product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart`);
   };
    const orderStock = function (product, quantity){
            console.log(`${quantity} ${product} ordered from supplier`);
    };

    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    }
}) ()

ShoppingCart2.addToCart('apple', 5)
ShoppingCart2.addToCart('pizza', 2)
console.log(ShoppingCart2);

*/

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';


const state = {
    cart: [
        {product : 'Pizza', quantity: 3},
        {product : 'Bread', quantity: 5},
    ],
    user: { loggedIn: true}
}

//วิธีปกติแบบไม่ใช้ module
const stateclone = Object.assign({state});

//วิธีใช้ module ในการโคลน
const statCloneSet = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateclone); 
console.log(statCloneSet);