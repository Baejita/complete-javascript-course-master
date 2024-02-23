'use strict';

// const Person = function(firstName, birthYear){
//     //instant Properties
// this.firstName = firstName;
// this.birthYear = birthYear;

// //never to this เพราะถ้าเราสร้าง object มันจะติดมาด้วยเยอะมาก
// // this.calcage = function(){
// //     console.log(2073 - this.birthYear);
// //}

// }

// const jonas = new Person('Jonas', 1991 );
// console.log(jonas);
// // 1. New {} is created 
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2000);
// const jack = new Person('Jack', '1999');

// console.log(jonas instanceof Person);

// //Prototypes
// console.log(Person.prototype);
// Person.prototype.calcage = function() {
//     console.log(2024 - this.birthYear);
// }
// jonas.calcage()
// jack.calcage()
// matilda.calcage()

// console.log(jonas.__proto__);
// console.log(jonas.__proto__  === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));

// //.prototypeOfLinkedObjects
//  Person.prototype.species = 'Homo Sapiens';
//  console.log(jonas.species, jack.species);

//  console.log(jonas.hasOwnProperty('firstName'));//คุณสมบัตินี้อยู่ในต้นแบบ 
//  console.log(jonas.hasOwnProperty('species')); //คุณสมบัตินี้ไม่ได้อยู่ใน ่jonas จริง ๆ ครับ 

//  console.log(jonas.__proto__);
//  //object.prototype (top of prototype chain)
//  console.log(jonas.__proto__.__proto__);
//  console.log(jonas.__proto__.__proto__.__proto__); // null

//  const arr = [3, 6, 3, 4, 7, 6]
//  console.log(arr.__proto__);
//  console.log(arr.__proto__ === Array.prototype);
//  console.log(arr.__proto__.__proto__);

//  //การเพิ่มคุณสมบัตริให้ Array แต่ไม่แนะนำให้ทำวิธีนี้เพราะถ้า java ออก method มาชื่อเหมือนที่เราตั้งจะทำให้ฟังก์ชั่นมีปัญหา
//  Array.prototype.unique = function(){
//    return [...new Set(this)]
//  }

//  console.log(arr.unique());


//  //Challenge
// const Car = function(nameCar, speed){
//     //instant Properties
// this.nameCar = nameCar;
// this.speed = speed;
// }

// const bmw = new Car('BMW', 120);
// const merdedes = new Car('Mercedes', 95);

// Car.prototype.accelerate = function(){
//     this.speed += 10

//     console.log(`${this.nameCar} when accelate is ${this.speed } kg/hr`)
// }

// Car.prototype.brake = function(){
//     this.speed -= 5
//     console.log(`${this.nameCar} when break is ${this.speed  } kg/hr`);}

// bmw.accelerate();
// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.brake();
// bmw.brake();

// merdedes.accelerate();
// merdedes.brake();


