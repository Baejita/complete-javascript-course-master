'use strict';

/*
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

Person.hey = function(){
    console.log('Hey there ✋');
    console.log(this);

}

Person.hey()

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

 const arr = [3, 6, 3, 4, 7, 6]
 console.log(arr.__proto__);
 console.log(arr.__proto__ === Array.prototype);
 console.log(arr.__proto__.__proto__);

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

    static hey() {
       
            console.log('Hey there ✋');
            console.log(this);
        
        
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
PersonCl.hey();
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


//***** Object.create 

const PersonProto = {
    calcAge () {
        console.log(2024 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1991);
sarah.calcAge();

//  //Challenge 2 Classes
class CarCl {
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }

    accelerate (){
        this.speed += 10
        console.log(`${this.name} when accelate is ${this.speed } km/hr`)
    }
    
        brake (){
        this.speed -= 5
        console.log(`${this.name} when break is ${this.speed  } km/hr`)}

    get speedUS() {
        return this.speed  / 1.6 ;
    }

    set speedUS(speed){
        this.speed = speed  * 1.6 ;
    }
}

const ford = new CarCl('Ford', 120);
console.log(`${ford.speedUS} mi/hr`);
ford.accelerate();
ford.speed = 50 ;
console.log(ford);

*/

/*
const Person = function(firstName, birthYear){
    //instant Properties
this.firstName = firstName;
this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
    console.log(2024 - this.birthYear);
}

const Student = function(firstName, birthYear, course) {
    
    Person.call(this, firstName, birthYear); //ใช้วิธีนี้แทนถ้า constuctor มีส่วนที่ซ้ำกัน 
    // this.firstName = firstName;
    // this.birthYear = birthYear;
    this.course = course;
}

//Linking prototype
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}


Student.prototype.constructor = Student;
const mike = new Student('Mike', 1995, 'JavaScript')

mike.introduce();
mike.calcAge();



console.dir(Student.prototype.constructor)

*/

/*
const PersonProto = {
    calcAge () {
        console.log(2024 - this.birthYear);
    },

    init(firstName, birthYear){
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course){
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 1991, 'Computer Science')
jay.introduce();
jay.calcAge();
console.log(jay.__proto__);
*/

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) private methods

/*
class Accout {
    // 1) Public fields (instance)
    locale = navigator.language;
    
    //2) private fields [instance]
    #movement = [];
    #pin;




    constructor(owner, currency, pin, ){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;
        //this._movement = [];
        //this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${this.owner}`);
    }

    // 3) Public methods

    // public interface
    getmovement() {
       return this.#movement;
    }

    deposit (val) {
        this.#movement.push(val);
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }

   

    requestLoan (val){
        if(this._approveLoan(val)){
            this.deposit(val);
            console.log(`Loan approved`);
            return this;
        }
    }

    // 4) private methods
    //#approveLoan (val)  ยังไม่ใช้งานไม่ได้
        _approveLoan (val) {
        return true;
    }
}

const acc1 = new Accout('Jonas', 'Eur', 1111)

// acc1._movement.push(250);
// acc1._movement.push(-399);
// acc1._movement.push(750);
acc1.deposit(500);
acc1.withdraw(200);
acc1.requestLoan(1000);

console.log(acc1.getmovement())

console.log(acc1);

console.log(acc1.movement);

//Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000)
console.log(acc1.getmovement());
*/

// challenge 4

// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// }
class CarCl {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate(){
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/hr`);
    }

    break(){
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/hr`);
        return this;
    }

    get speedUS() {
        return this.speed / 1.6 ;
    }

    set speedUS(speed){
        this.speed = speed * 1.6
    }
}

class EVCl extends CarCl {
    #charge;

    constructor(make, speed, charge) {
    super( make, speed);
    this.#charge = charge;
}

    chargeBattery (chargeTo) {
    this.#charge = chargeTo;
    return this;
}

    accelerate(){
    this.speed += 20;
    this.#charge --;
    console.log(`${this.make} is going at ${this.speed} km/hr, with a charge of ${this.#charge} %`);
    return this;
}
}

const rivian = new EVCl('Rivain', 120, 23)


console.log(rivian);
//console.log(rivian.#charge);
rivian.accelerate().accelerate().accelerate().break().chargeBattery(50).accelerate();

console.log(rivian.speedUS);