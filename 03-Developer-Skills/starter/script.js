// // Remember, we're gonna use strict mode in all scripts now!
// "use strict";

// // const measureKelvin = function () {
// //   const measurement = {
// //     type: "tempt",
// //     unit: "celcius",
// //     //fix C
// //     // value: Number(prompt('Degrees celcius')),
// //     value: 10,
// //   };
// //   //fix B
// //   console.log(measurement);
// //   console.table(measurement);
// //   // console.log(typeof measurement.value);
// //   // console.warn(measurement.value);
// //   // console.error(measurement.value);
// //   const kelvin = measurement.value + 273;
// //   return kelvin;
// // };
// // console.log(measureKelvin());

// // Coding Challenge #1

// // Given an array of forecasted maximum temperatures, the thermometer displays a

// // string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// // days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// // Your tasks:

// // 1. Create a function 'printForecast' which takes in an array 'arr' and logs a

// // string like the above to the console. Try it with both test datasets.

// // 2. Use the problem-solving framework: Understand the problem and break it up
// // into sub-problems!
// // Test data:
// const data1 = [17, 21, 33];
// const data2 = [12, 5, -5, 0, 4];
// // GOOD LUCK �
// let tempt = [];
// let days = [];
// let forcast = "";

// const printForecast = function (data) {
//   for (let i = 0; i < data.length; i++) {
//     // tempt += `...${data[i]} C`;
//     // days += `in ${[i + 1]} days`;
//     forcast += `...${data[i]} C` + ` in ${[i + 1]} days`;
//   }
// };

// const maximumTemp = function (data) {
//   let max = data[0];
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] > max) {
//       max = data[i];
//     }
//   }
//   return max;
// };

// console.log(printForecast(data1));
// // console.log(tempt);
// // console.log(days);
// console.log(forcast);
// console.log(maximumTemp(data1));

const randomName = function () {
  const name = ["Aun", "Sau", "Bae", "Mike", "Pang", "Now"];
  const ran = Math.trunc(Math.random() * name.length + 1);
  const randomnameee = name[ran - 1];

  console.log(randomnameee);
  console.log(ran);
};

document.querySelector("body").addEventListener("click", randomName);
