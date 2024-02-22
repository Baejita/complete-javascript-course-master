'use strict';

const Person = function(firstName, birthYear){
    //instant Properties
this.firstName = firstName;
this.birthYear = birthYear;

//never to this เพราะถ้าเราสร้าง object มันจะติดมาด้วยเยอะมาก
// this.calcage = function(){
//     console.log(2073 - this.birthYear);
//}

}

const jonas = new Person('Jonas', 1991 );
console.log(jonas);
// 1. New {} is created 
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2000);
const jack = new Person('Jack', '1999');

console.log(jonas instanceof Person);

//Prototypes
console.log(Person.prototype);
Person.prototype.calcage = function() {
    console.log(2024 - this.birthYear);
}
jonas.calcage()
jack.calcage()
matilda.calcage()

console.log(jonas.__proto__);
console.log(jonas.__proto__  === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jonas));

//.prototypeOfLinkedObjects
 Person.prototype.species = 'Homo Sapiens';
 console.log(jonas.species, jack.species);

 console.log(jonas.hasOwnProperty('firstName'));//คุณสมบัตินี้อยู่ในต้นแบบ 
 console.log(jonas.hasOwnProperty('species')); //คุณสมบัตินี้ไม่ได้อยู่ใน ่jonas จริง ๆ ครับ 

 console.log(jonas.__proto__);
 //object.prototype (top of prototype chain)
 console.log(jonas.__proto__.__proto__);
 console.log(jonas.__proto__.__proto__.__proto__); // null

 const arr = [3, 6, 3, 4, 7, 8]
 console.log(arr.__proto__);
 console.log(arr.__proto__ === Array.prototype);