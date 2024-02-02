'use strict';

// const oneword = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const toUperCaseWord = function (str) {
//   const [first, ...last] = str.split(' ');
//   return [first.toUpperCase(), ...last].join(' ');
// };

// const tranformer = function (str, fn) {
//   console.log(`Tranformer: ${str}`);
//   console.log(`Tranformer: ${fn(str)}`);
// };

// tranformer('Baejita Love javascript', toUperCaseWord);
// tranformer('Baejita Love javascript', oneword);

// const hi5 = function () {
//   console.log('✋');
// };

// document.body.addEventListener('click', hi5);
// ['Jonas', 'Baejita', 'Apple'].forEach(hi5);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

//ARROW function
// const greet = greeting => name => lastname =>
//   console.log(`${greeting} ${name} ${lastname}`);

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Baejita');

// greet('Hello')('Jedsadagorn')('Intawicha');

// const binThai = {
//   airline: 'KarnBinThai',
//   iataCode: 'BK',
//   bookings: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// binThai.book(2546892, 'Jedsadagorn Intawicha');

// const bankkok = {
//   name: 'Bankkok',
//   airline: 'BK',
//   iataCode: 'NYRT',
//   bookings: [],
// };

// const book = binThai.book;

// //does not work
// // book(123456789, 'Phachi');

// //call method
// book.call(bankkok, 123456, 'Sara Willaims');
// console.log(bankkok);

// book.call(binThai, 8888999, 'Chis Refield');

// const swiss = {
//   airline: 'Swiss',
//   iataCode: 'LLK',
//   bookings: [],
// };

// book.call(swiss, 696565, 'Namj Jijse');

// //apply method
// const flightData = [1212121, 'Kiuny Jonsyg'];
// book.apply(swiss, flightData);

// //ใช้ได้เหมือนกับวิธีใหม่นี้
// book.call(swiss, ...flightData);

// //bind method เป็นการสร้างฟังชั่นเข้าไป
// const bookBK = book.bind(bankkok);
// bookBK(23, 'Marie Yakota');

// const bookBK56 = book.bind(bankkok, 56);
// bookBK56('Brewer Matt');

// //lufthansa.buyPlande()
// bankkok.planes = 300;
// bankkok.buyPlane = function () {
//   console.log(this);

//   this.planes++;
//   console.log(this.planes);
// };
// document
//   .querySelector('.buy')
//   .addEventListener('click', bankkok.buyPlane.bind(bankkok));

// //patial appication
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVat = addTax.bind(null, 0.23); //กำหนดให้ค่า rate ตายตัว
// console.log(addVat(200));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };
// const addVat2 = addTaxRate(0.23);
// console.log(addVat2(100));
// console.log(addVat2(200));

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?
// The Complete JavaScript Course 21
// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section �
// GOOD LUCK
// const answers = { Javascript0: 0, Python1: 0, Rust2: 0, Cplus3: 0 };
// // console.log(typeof answers.Javascript0);
// const registerNewAnswer = function () {
//   const answer = prompt(
//     `What is your favourite programming language?
//       0: JavaScript
//       1: Python
//       2: Rust
//       3: C++`
//   );

//   if (answer == 0) {
//     {
//       answers.Javascript0 += 1;
//     }
//   } else if (answer == 1) {
//     answers.Python1 += 1;
//   } else if (answer == 2) {
//     answers.Rust2 += 1;
//   } else if (answer == 3) {
//     answers.Cplus3 += 1;
//   } else {
//     alert(`Wrong Answer. Try again`);
//   }
//   // console.log(typeof answer, answer);
//   // console.log(answers.Javascript0);
//   // console.log(answers.Python1);
//   // console.log(answers.Rust2);
//   // console.log(answers.Cplus3);

//   const valueOfanswer = Object.values(answers);
//   console.log(...valueOfanswer);

//   let string = [];
//   for (let i = 0; i < valueOfanswer.length; i++) {
//     string.push(`valueOfanswer[${i}]`);
//     console.log(string);
//   }

//   // let sumii = '';
//   // for (const [i, ii] of string.entries()) {
//   //   console.log(ii);
//   //   sumii += `${ii}`;
//   //   sumii += ' ';
//   // }
//   // console.log(sumii);

//   // const spritSumii = function () {
//   //   let spit = sumii.split(' ');
//   //   console.log(spit);
//   // };
//   // spritSumii();
//   console.log(
//     `Poll result are ${valueOfanswer[0]}, ${valueOfanswer[1]}, ${valueOfanswer[2]}, ${valueOfanswer[3]} `
//   );
//   // console.log(valueOfanswer, valueOfanswer[1]);
// };
// // const displayResults = function () {
// //   answerif()
// //   console.log(answers);
// //   // console.log(`Poll result are ${}`);
// //
// document.querySelector('.poll').addEventListener('click', registerNewAnswer);

// const poll = {
//   question: 'What is your favorite programming language?',
//   option: ['0: JavaScript', '1:Python', '2:Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = Number(
//       prompt(
//         `${this.question}\n${this.option.join('\n')}\n (Write option number)`
//       )
//     );
//     console.log(answer);

//     //register answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;
//     this.disPlayResult();
//     this.disPlayResult('string');
//   },
//   disPlayResult(type = 'array') {
//     if (type === 'arry') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };
// // poll.registerNewAnswer();

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// poll.disPlayResult.call({ answers: [5, 2, 3] }, 'string');
// poll.disPlayResult.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');

// poll.disPlayResult.call({ answers: [1, 5, 3, 9, 6, 1] });
// // § Data 1: [5, 2, 3]
// // § Data 2: [1, 5, 3, 9, 6, 1]

//ฟังชันที่เรียกใช้เพียงครั้งเดียว
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This also never runs again'))();

//closure

// const secureBooking = function () {
//   let passsengerCount = 0;

//   return function () {
//     passsengerCount++;
//     console.log(`${passsengerCount} passengers`);
//   };
// };

// const booker = secureBooking();
// booker();
// booker();
// booker();

// console.dir(booker);

//Example 1
// let f;

// const g = function () {
//   const a = 56;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 299;
//   f = function () {
//     console.log(b * 5);
//   };
// };
// g();
// f();

// //re-assing f function
// h();
// f();
// console.dir(f);

// //Exampel 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passenger`);
//     console.log(`There are 3 groups, each with ${perGroup} passenger`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// //จะเห็นว่า จะใช้การเรียกตัวแปลใน ฟังชั่นก่อน ที่จะเรียกใช้ perGroup ข้างนอก แต่ถุ้าเราปิด ข้างในก็จะเรียกใช้ ข้างนอกได้เหมือนกัน
// const perGroup = 1000;
// boardPassengers(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
