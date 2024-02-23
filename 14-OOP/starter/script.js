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


//class expression 
// const PersonCL = class {

// }

//class declaration 
class PersonCl  {
    constructor(fullname, birthYear) {
        this.fullname = fullname;
        this.birthYear = birthYear;
    }

    //Methods will be Added to 
    calcAge () {
        console.log(2024 - this.birthYear);
    }

    greet () {
        console.log(`Hey ${this.firstName}`)
    }

    get age() {
        return 2024 - this.birthYear;
    }

    set fullname(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name`) 
    } //จะยัง

    get fullname(){
        return this._fullName;
    }
}

const walter = new PersonCl('Walter White', 1888)
walter._fullName;

const jessica = new PersonCl('Jessica Devis', 1996);

console.log(jessica);
// jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

//แบบ constuctor ปกติ 
// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// }

jessica.greet();


//1. Classes are NOT hoisted
//2. Class are First-class citizes
//3. Classes are executed in strict mode

//properties ไม่มีวงเล็บ ส่วน methord มี ()




//เรียนรู้ get และ set สำหรับ object 
const accout = {
    owner : 'Jonas',
    movements: [200, 300, 530 , 120],

    get latest() {
        return this.movements.slice().pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }
};

console.log(accout.latest);  //properties ไม่มีวงเล็บ ส่วน methord มี ()

accout.latest = 599;
console.log(accout.movements);


