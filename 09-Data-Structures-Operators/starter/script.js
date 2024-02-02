'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no duplicates)
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happened, on average, every  ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every  ${time / gameEvents.size} minutes`
// );
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL\
// GOOD LUCK �
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${min} : ${event}`);
// }

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());
// console.log('jedsadagorn'.toUpperCase());

// const passenger = 'jeDSadaAgorN';
// const passengerLow = passenger.toLowerCase();
// const passengerCorrect = passenger[0].toUpperCase() + passengerLow.slice(1);
// console.log(passengerCorrect);

// const email = 'hello@baejita.io';
// const login = '  Hello@BaejIta.Io \n';
// const lowerEmail = login.toLowerCase();
// const trimEmail = lowerEmail.trim(); // ตัดช่องว่าง
// console.log(trimEmail);

// const normorizeEmail = login.toLowerCase().trim();
// console.log(normorizeEmail);
//ตรวจสอบว่าใช่อีเมลล์เดียวกันหรือไม่
// console.log(email === normorizeEmail);

//replace
const priceGB = '125,96฿';
const priceUS = priceGB.replace('฿', '$').replace(',', '.');
console.log(priceUS);

const announcement = 'All passenger come to boarding door 56. Boarding door 56';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));

const plane2 = 'Airbus A56pro';
console.log(plane2.includes('A56'));
console.log(plane2.startsWith('Air'));
console.log(plane2.includes('B56'));

//

// console.log(plane[0]);
// console.log('B713'[0]);

// console.log(airline.length);
// console.log(airline.indexOf('i'));
// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else {
//     console.log('You got lucky 😎');
//   }
// };

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('1E');
