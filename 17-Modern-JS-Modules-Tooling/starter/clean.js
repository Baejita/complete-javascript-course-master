'strict mode'

const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);


const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimit =( limits, user)=> limits?.[user] ?? 0;

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;


//pure function :D
const addExpense = function (state, limits, value, description, user ='jonas') {
  
  const cleanUser = user.toLowerCase();

//เพื่อทำให้เกิดการสร้าง array ใหม่เพิ่มเข้าไป
 return value <= getLimit(limits, cleanUser) ?
      [...state, { value: -value, description, user: cleanUser }] : state;

    // budget.push({ value: -value, description, user: cleanUser });
};
const newBudget1 = addExpense(budget,spendingLimits, 10, 'Pizza 🍕');


const newBudget2 = addExpense(newBudget1,spendingLimits, 100, 'Going to movies 🍿', 'Matilda');


const newBudget3 = addExpense(newBudget2,spendingLimits, 200, 'Stuff', 'Jay');
budget; 
console.log(newBudget3);

// const checkExpenses2 = function (state, limits) {
//     return state.map( entry => {entry
//       return entry.value < -getLimit(limits, entry.user)?
//        {...entry, flag: 'limit'} : entry;
//       //     entry.flag = 'limit';
//     } )

//   // for (const entry of newBudget3) 
//   //   if (entry.value < -getLimit(limits, entry.user)) 
//   //     entry.flag = 'limit';
// };

//เป็นการใช้ เมดตอด map ในการวนรอบอาเรย์ และสร้าง อาร์ใหม่ภายใต้เงื่อนไขคือ ของ entrylvalue ถ้าตามเงื่อนไขให้สร้าง ...entry และ + flag : 'limit' เข้าไป ส่าวนถ้าไม่เข้าเงื่อนไขให้เป็น entry ปกติ
const checkExpenses =  (state, limits) =>
  state.map( entry => 
     entry.value < -getLimit(limits, entry.user)?
     {...entry, flag: 'limit'} : entry
    //     entry.flag = 'limit';
  )

// for (const entry of newBudget3) 
//   if (entry.value < -getLimit(limits, entry.user)) 
//     entry.flag = 'limit';

const finalBudget = checkExpenses(newBudget3, spendingLimits);
console.log(finalBudget);


//Impure
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = 
    state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');

  console.log(bigExpenses);

  // let output = '';
  // for (const entry of budget) 
  //   output += entry.value <= -bigLimit ?  `${entry.description.slice(-2)} / ` : '';

  
  // output = output.slice(0, -2); // Remove last '/ '
  // console.log(output);
};

console.log(budget);
logBigExpenses(finalBudget, 1000)