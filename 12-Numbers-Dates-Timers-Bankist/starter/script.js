'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-02-05T17:01:17.194Z',
    '2024-02-07T23:36:17.929Z',
    '2024-02-09T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////

// Functions

const formatMovementDate = function(date, locale) {
  const calcDayPass = (date1, date2) => 
  Math.round(Math.abs(date2 - date1) / (1000 * 60 *60 *24));

  const dayPassed = calcDayPass(new Date(), date);
  // console.log(dayPassed);

  if(dayPassed === 0 ) return 'Today';
  if(dayPassed === 1 ) return 'Yesterday'; 
  if(dayPassed === 2 ) return '2 days ago';
  if(dayPassed <= 7) return `${dayPassed} days ago` ;
  
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth()+ 1}`.padStart(2, 0); ;
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;

    return new Intl.DateTimeFormat(locale).format(date); 

  
}
const formatCurrency = function(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}



const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i])
    const displayDate = formatMovementDate(date, acc.locale)

    const formattedMov = formatCurrency(mov, acc.locale, acc.currency)
    
    // new Intl.NumberFormat(acc.locale, {
    //   style: 'currency',
    //   currency: acc.currency,
    // }).format(mov);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  

  labelBalance.textContent  = formatCurrency(acc.balance, acc.locale, acc.currency)
  
 
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency)

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(Math.abs(out), acc.locale, acc.currency)

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(interest, acc.locale, acc.currency)
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//LOG out TIMER
const startLogOUTTImer= function(){
  const trick = function(){
    const min = String(Math.trunc(time / 60)).padStart(2,0);
    const sec = String(time % 60).padStart(2,0);
  
    //In each all, print the remaining time to UI 
    labelTimer.textContent = `${min}:${sec}`;

    //decreas 1s
      

    //When 0 seconds , Top timer and log out user
    if(time === 0 ) {
      clearInterval(timer);
      labelWelcome.textContent = `Log in to get started
      `;
      containerApp.style.opacity = 0;
    }
    time--;
  }
  
  
  //set time to 5 minutes
  let time = 120;
  //Call the timer ever seccond 
  trick();
  const timer = setInterval(trick, 1000); //วิธีทำให้ไม่ดีเลย์และนับเวลาทันทีหลังจาก login 
  return timer;

} ;



let currentAccount, timer;
///// ---- FAKE always logged in ---- 

// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;



////experimenting API --------------------------------





///////////////////////////////////////
// Event handlers


btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //
    ////current Date
  const now = new Date();
  const options = {
  hour: 'numeric',
  minute: 'numeric',
  day:'numeric',
  month: 'long',
  year: 'numeric'
,weekday: 'long'
}
// const locale = navigator.language;
// console.log(locale);

labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(now);

// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth()+ 1}`.padStart(2, 0); ;
// const year = now.getFullYear();
// const hour = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);

// labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();


    //timer ตรวจสอบว่ามีการจับเวลาอยู่หรือไม่ ถ้ามี ให้เคลียร์
  if(timer) clearInterval(timer)
  timer = startLogOUTTImer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
//Add transfer date 
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);

    //reset the timer
    clearInterval(timer)
    timer = startLogOUTTImer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
   setTimeout(function(){ currentAccount.movements.push(amount);

    //Add Loan date 
    currentAccount.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);}, 2500);

      //reset the timer
      clearInterval(timer)
      timer = startLogOUTTImer();
  };
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//เลข ฐาน 10 จะแม่นในจำนวนเต็มแต่พอเศษส่วน จะมีหลังจุดที่เกิดขึ้นได้เพราะ จะมอง จุดทศนิยมเศษส่วน
//เลขฐาน 2 จะมองแค่ 0 1
// console.log(1/10 + 2/10);
// console.log(Number('56'));


// //ส่วนการที่จะเปลี่ยยนตัวหนังสือเป็นตัวเลข จะสามารถ ใส่เครื่องหมาย + หน้า '' ได้เลย
// console.log(typeof(+'56'));

// //parsing แสดงออกมา ** แต่ต้องขึ้นต้นด้วยตัวเลข เช่นค่าที่มาจาก CSS จะอ่านออกมาเป็นตัวเลข ใช้คำสั่งตัวเลข
// console.log(Number.parseInt('30px' ,10));
// console.log(Number.parseInt('px30', 10)); // แบบนี้ไม่ได้

// console.log(Number.parseInt('2.5rem')); //  2
// console.log(Number.parseFloat('2.5rem'));   // 2.5

// //Number.isNaN 

// //วิธีเชคว่า ค่าไหนเป็นตัวเลข ดีที่สุดคือ Number.isFinite

// console.log(Number.isFinite(20));
// console.log(Number.isFinite('20'));
// console.log(Number.isFinite(+'20x'));
// console.log(Number.isFinite(2 / 0));

// console.log(Number.isInteger(23));  //true
// console.log(Number.isInteger('23'));  //false

//------------------------------------------------------//

//แส8วร์รูท 

// console.log(Math.sqrt(100));
// console.log(100 ** (1/2));  //วิธีการแบบไม่ใช้ Math

// console.log(Math.max(2,5,15,11,6,1));
// console.log(Math.max(2,5,'15',11,6,1));
// console.log(Math.max(2,5,'15px',11,6,1)); //NAN

// console.log(Math.min(2,5,'15',11,6,1));

// //การคำนวณพื้นที่ วงกลม pR^2
// console.log(Math.PI * Number.parseFloat('10px') **2); //ไพน์ อาร์ กำลัง 2 

// //การกำหนดตัวสุ่มให้อยู่ในข่วงโดย สร้าง ฟังก์ขั่น
// const randomInt = (min,max) => Math.trunc(Math.random() * (max - min ) + 1) + min;
// console.log(randomInt(1, 20 ));

// //การปัดเศษ trunc คือตัดเศษออก
// //round ปัดเศษตามจุดทศนิยม และ 
// //ceil คือ การปัดขึ้น และ 
// //floor ปัดเศษ ลง 

// console.log(Math.floor(-56.22));//  -57
// console.log(Math.trunc(-56.22)); //  -56

// //Rouding decimal 
// console.log((2.7).toFixed(0)); // จะได้ผลลัพธ์ออกเป็น str
// console.log(+(2.777669).toFixed(3));

//การทดสอบตัวดำเนินการอื่นๆ  
//การทำให้สีแต่ละ แถว 
// labelBalance.addEventListener('click', function (){
//   [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
//     if ( i % 2 === 0 ) row.style.backgroundColor = 'orangered';
//     if ( i % 3 === 0 ) row.style.backgroundColor = 'blue';
//   });
// });

// const diameter = 287_460_000_000;
// console.log(diameter);

// //ต้องระวังการนำไป แปลงจาก ตัวอักษรเป็นตัวเลขจะผิดพลาดได้

// //Bigint ปกติมันจะจำกัด จำนวนเลขในการแสดงผลหรือคำนวณ แต่ถ้าเราใส่ n ไว้หลังจำนวนเลข จะแสดงทั้งหมด

// console.log(12113132323145584288324020492402n);

//create A DATE

// const now = new Date();
// console.log(now);

// console.log(new Date('December 24, 2015'));

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear(), future.getMonth(), future.getDate());
// console.log((future.toISOString()));
// console.log(future.getTime());
// console.log(new Date(2142231780000)); //Thu Nov 19 2037 15:23:00 GMT+0700 (Indochina Time)
// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);



///********* Operation wiht date *///++
//ผลลัพธ์ในการลับ จะเป็นหน่วน มิลลิ sec แล้วเราค่อยมาปรับเป็น จำนวน วันอีกที 
//Math.abs ทำให้เป็นค่าบวกเสมอ 

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);

// const calcDayPass = (date1, date2) => Math.abs(date2 - date1) / (1000 * 60 *60 *24)
// const day1 = calcDayPass(new Date(2037, 3, 4), new Date(2037, 3, 14, 10))
// console.log(day1);


// const num = 24256324.23;
// const options = {
//   style: "currency",
//   // unit: "celsius",
//   currency: "EUR",
//  //useGrouping: false,
// }

// console.log('US: ', new Intl.NumberFormat('en-US',options).format(num));
// console.log('THAI: ', new Intl.NumberFormat('th-TH',options).format(num));
// console.log('Germany: ', new Intl.NumberFormat('de-DE',options).format(num));


//การตั้งการหมดเวลา SET TIME OUT
// const ingredients = ['olives' ,'']

// const pizzaTimer = setTimeout((ing1, ing2) => console.log(`Here is your pizza 🍕 with
// ${ing1} and ${ing2}`), 3000,...ingredients);
// console.log('Waiting ...');

// if(ingredients.includes('spanish')) clearTimeout(pizzaTimer)


//setTimeout funcion 

// setInterval(function(){
//   const now = new Date();
//   const hour = `${now.getHours()}`.padStart(2, 0);
//   const min = `${now.getMinutes()}`.padStart(2, 0);
//   const sec = `${now.getSeconds()}`.padStart(2, 0);
//   console.log(hour,":", min, ":" ,sec);
// },1000)


