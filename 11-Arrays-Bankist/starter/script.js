'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} </div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov} €</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((accum, curr) => accum + curr, 0);

  labelBalance.textContent = `${acc.balance} €`;
};

const calDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, incom) => acc + incom, 0);
  labelSumIn.textContent = `${incomes} €`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, out) => acc + out, 0);
  labelSumOut.textContent = `${Math.abs(outcomes)} €`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} €`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner //สร้าง aarry ใหม่ชื่อ username โดยอ้างถึงตัวแปล acc(มันคือ accounsts). owner (ที่เข้าถึง owner ในแต่ละคน)
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
// console.log(...accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //display welcome
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
  }
  //ทำให้ช่องกรอก มันหายไปหลังจากกรอก แล้ว
  inputLoginUsername.value = inputLoginPin.value = '';
  //ทำให้เวลากดแล้ว เคอร์เซอร์ไม่อยู่ในช่องนั้น ๆ
  inputLoginPin.blur();
  //Display Movement ทำให้หน้าจอแสดงเพาะไปลดตัวปิดลง
  containerApp.style.opacity = 100;
  //display balance
  //display summary

  displayMovements(currentAccount.movements);
  calcDisplayBalance(currentAccount);
  calDisplaySummary(currentAccount);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
    if(
      amount > 0 &&
      receiverAcc &&
      currentAccount.balance >= amount && 
      recieverAcc?.username !==currentAccount.username
    ) {
      //doing the transfer
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);

      //update UI 
      updateUI(currentAccount);
    }
  // if (amount > 0 && amount <= calcDisplayBalance()) {
  //   console.log('OK');
  // }
  // console.log(amount, receiverAcc);
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov > amount * 0.1)) {
    //Add Movement 
    currentAccount.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e){
  e.preventDefault();

  if(
    inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin
  ){
    const index = accounts.findIndex (
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //Delete accout
    accounts.splice(index, 1);

    //hide UI
    containerApp.style.opacity =0 ;
  }

  inputCloseUsername.value = inputClosePin.value = '';


});



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

//slice
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4)); //เอา2 ตัด 4เป็นต้นไปออก ดังนั้นจำนวนที่เหลือใน arr = 4-2 = 2 ตัวคือ c,d
// console.log(arr.slice(-2));
// console.log(arr, arr.slice(), ...arr);

//splice จะทำการแบ่งคล้าย slice แต่ทำให้ โครงสร้างเดิมของ arr เปลี่ยนไปด้วยคือ เหลือแต่ อันที่ไม่เอา แสดงผล
// console.log(arr.splice(2), arr);

//reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());

// //concat
// const letters = arr.concat(arr2);
// //ผลเหมือนกัน
// console.log(letters); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// console.log([...arr, ...arr2]); //['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// // JOIN คือแทรกด้วยตัวอะไรก็ตาม แทนคอมมา
// console.log(letters.join(' - '));

// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// //geting last array element from array
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-1));
// console.log('Baejit'.at(0));

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements)
// entries ค่าแรกจะเป็น index, array element {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
//   }
// }

// //ส่วน forEach ค่าแรกเป็น array element ค่าสองคือ index, 3 คือ array
// console.log('------ for Each-------');
// movements.forEach(function (movement, index, array) {
//   movement > 0
//     ? console.log(`Movement ${index + 1}: You deposited ${movement}  `)
//     : console.log(`Movement ${index + 1}: You withdraw ${Math.abs(movement)}`);
// });

//MAP
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// console.log(currencies);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// //Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// const juliaData = [3, 5, 2, 12, 7];
// const kateData = [4, 1, 15, 8, 3];

// const checiDogs = function (juliaData, kateData) {
//   // console.log(juliaData.slice(1, -2));

//   const allData = juliaData.slice(1, -2).concat(kateData);
//   console.log(allData);
//   // const setallData = new Set(allData);
//   // console.log(setallData);
//   // const arrayallData = [...setallData];
//   allData.forEach(function (value, i) {
//     if (value >= 3) {
//       console.log(`Dog number ${i + 1} is an adult, and is ${value} years old`);
//     } else {
//       console.log(
//         `Dog number ${i + 1} is still a puppy, and is ${value} years old 🐶`
//       );
//     }
//   });
// };

// checiDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log('------------------------------------');
// checiDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets

// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK
// const ageDog = [5, 2, 4, 1, 15, 8, 3];
// const ageDog2 = [16, 6, 10, 5, 6, 1, 4];
// const ageAllDog = [...ageDog, ...ageDog2];
// console.log(ageAllDog);

// const calAverAgeHu = function (ageDog) {
// const humanAge = ageDog.map(age => (age <= 2 ? age * 2 : 16 + age * 4));
// console.log(humanAge);

// const filterLess18 = humanAge.filter(age => age > 18);
// console.log(filterLess18);

// // const averageAgeHumans =
// //   filterLess18.reduce((sum, age) => sum + age, 0) / filterLess18.length;

// //เราสามารถทำแบบนี้ได้จาก method ของ reduce
// const averageAgeHumans = filterLess18.reduce(
//   (sum, age, i, arr) => sum + age / arr.length,
//   0
// );

// const humanAgeChallenge3 = ageDog
//   .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
//   .filter(age => age > 18)
//   .reduce((sum, age, i, arr) => sum + age / arr.length, 0);
// console.log(humanAgeChallenge3);

// console.log(
//   `The average human age of all adult dogs is ${averageAgeHumans} years old.`
// );
// };
// calAverAgeHu([5, 2, 4, 1, 15, 8, 3]);
// calAverAgeHu([16, 6, 10, 5, 6, 1, 4]);

// console.log(humanAge);
// console.log(filterLess18);
// console.log(sumAgesHumans);
// console.log(averageAgeHumans(sumAgesHumans));

//Lern array map and filter, reduce method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

//Flat and flatMap
const arr = [[1,2,3] , [4,5,6] ,7 , 8];
//console.log(arr.flat());

const arrdeep = [[[1,2],3] , [4, [5,6]] ,7 , 8];
//console.log(arrdeep.flat(2)); //ใส่เลขเข้าไปในวงเล็บแฟลทเพ่อกำหนดความลึกเข้าไปใน array

//Name เรียงตามตัวอักษร 
const owners = ['Jonas', 'Zach', 'Adam', 'Marthas'];
console.log(owners.sort());

//Numbers แปลงตัวเลขให้เป็น อักษร คือจาก - และจาก 1 ไป
console.log(movements);

//ให้เรียยงลำดัับจากน้อยไปหามากโดยใช้ฟังก์ชั่น 
//return < 0 A,B  (Keep order)
//returnt > 0 B,A (Sitch order)
//จากน้อยไปมากกกกกก 
movements.sort((a,b) => {
  if(a > b ) return 1; //ตัวเลขสมมติให้มากกว่า 0 
  if(a < b )return -1;
});
console.log(movements);

//จากมากไปน้อย
movements.sort((a,b) => {
  if(a > b ) return -1; //ตัวเลขสมมติให้มากกว่า 0 
  if(a < b )return 1;
});
console.log(movements);

// const accountMovments = accounts.map(acc => acc.movements)
// console.log(accountMovments);
// const allMovments = accountMovments.flat()
// console.log(allMovments);

// //รวมยอดโดยคำสั่ง reduce
// const overalBalance = allMovments.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

//รวมฟังก็ชั่นเดียว flat
// const overalBalance2 = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// //รวมฟังก็ชั่นเดียว flatMap3
// const overalBalance3 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance3);

// //ตรวจสอบเท่ากับ 
// console.log(movements);
// console.log(movements.includes(-130));

// //ตรวจสอบโดยมีเงื่อนไข 
// console.log(movements.some( mov => mov === -130));

// const anyDeposits = movements.some(mov => mov >5000)
// console.log(anyDeposits);

// //Every
// console.log(movements.every( mov => mov > 0));
// console.log(account4.movements.every( mov => mov > 0));

// const deposit = mov => mov < 0 ; 
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

//separate callback 

// const movementsUSD = movements.map(function (mov) {
//   return Math.trunc(mov * eurToUsd);
// });

//MAP ARROW FUNCTIONS
// const movementsUSD = movements.map(mov => Math.trunc(mov * eurToUsd));
// console.log(...movementsUSD);

// const movementDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
//       mov
//     )}`
//   // if (mov > 0) {
//   //   return `Movement ${i + 1}: You deposited ${mov}  `;
//   // } else {
//   //   return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`;
//   // }
// );
// console.log(...movementDescriptions);

// console.log('--------FOR LOOP-------------');
// const eurToUsdfor = [];
// for (const mov of movements) eurToUsdfor.push(Math.trunc(mov * eurToUsd));
// console.log(...eurToUsdfor);

// const deposit = movements.filter(move => move > 0);
// console.log(movements);
// console.log(deposit);

// const withdrawal = movements.filter(move => move < 0);
// console.log(withdrawal);

// console.log(movements);

// const balance = movements.reduce(function (accum, curr, i, arr) {
//   console.log(`Iteration ${i} : ${accum}`);
//   return accum + curr;
// }, 0);

// const balance = movements.reduce((accum, curr) => accum + curr, 0);
// console.log(balance);

// let balance2For = 0;
// for (const move of movements) balance2For += move;
// console.log(balance2For);

//Max vlue
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov)
//     return acc; // ถ้าตัวสะสมมากกว่า ตัวลำดับนั้นๆ  ให้ รีเทิน ค่าตัวสะสม
//   else return mov; // แต่ถ้าตัวสะสมน้อยว่า ตัวนั้นให้คืนค่าตัวนั้นออกมา
// }, movements[0]); // อย่าลืมใส่ค่าแรกของ arry เสมอ
// // console.log(max);

//Pipe line
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);
