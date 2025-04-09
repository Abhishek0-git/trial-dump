// console.log(ap);

// var ap = 2;

// // console.log(ls);

// // let ls = 3;

// let a = null;
// console.log(typeof(a));

// console.log(null == undefined);

// let ab = 200.00;
// console.log(ab);

// console.log(Number.MIN_VALUE);
// console.log(Number.MAX_VALUE);

// console.log(Number.MAX_VALUE + Number.MAX_VALUE);
// console.log(-Number.MAX_VALUE - Number.MAX_VALUE);

// let num = 0o71;
// console.log(num);
// num = 0x1a;
// console.log(num);

// let amount = 0.2 + 0.1;
// console.log(amount);

// console.log("i\' world");

// console.log('A' < 'b');

// let person = {
//     name: 'John',
//     age: 25,
//   };

// let member = person;

// member  .age = 26;

// console.log(person);
// console.log(member);

// console.log('5'*2);

// let ap = {0:'2'};
// console.log(ap[0]-20);

// console.log(~-3);
// console.log(~3);

// console.log(4 << 1);    // 8
// console.log(4 << 2);    // 16
// console.log(4 << 3);    // 32
// console.log(4 << 4);    // 64

// if(true) console.log("ap");

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//       if (i + j == 4) {
//         break;
//       }
//       console.log(i, j);
//     }
// }

// let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let s = "";

// for (let i = 0, j = 1; i < board.length; i++, j++) {
//   s += board[i] + " ";
//   if (j % 3 == 0) {
//     console.log(s);
//     s = "";
//   }
// }

// function compareBy(propertyName) {
//     return function (a, b) {
//       let x = a[propertyName],
//         y = b[propertyName];

//       if (x > y) {
//         return 1;
//       } else if (x < y) {
//         return -1;
//       } else {
//         return 0;
//       }
//     };
//   }
//   let products = [
//     { name: 'iPhone', price: 900 },
//     { name: 'Samsung Galaxy', price: 850 },
//     { name: 'Sony Xperia', price: 700 },
//   ];

//   // sort products by name
//   console.log(products.sort());
//   products.sort(compareBy('name'));

//   console.table(products);

// let countDown = function f(fromNumber) {
//     console.log(fromNumber);

//     let nextNumber = fromNumber - 1;

//     if (nextNumber > 0) {
//         f(nextNumber);
//     }
// }

// let newYearCountDown = countDown;
// countDown = null;
// newYearCountDown(10);

// function Person(firstName, lastName) {
//     console.log(new.target);

//     this.firstName = firstName;
//     this.lastName  = lastName;

//     this.getFullName = function () {
//         return this.firstName + " " + this.lastName;
//     };
// }
// // the new operator is missing in the call bellow, so 'this' will point to the global object
// let person = Person("John", "Doe"); // undefined

// solution is here
// function Person(firstName, lastName) {
//   if (!new.target) {
//     return new Person(firstName, lastName);
//   }

//   this.firstName = firstName;
//   this.lastName = lastName;

//   this.getFullName = function () {
//     return this.firstName + " " + this.lastName;
//   };
// }
// let person = new Person("John", "Doe");
// console.log(person.firstName); // john
// console.log(person.getFullName());
// console.log(Person); // [Function: Person]
// console.log(person);
// console.log(Person.prototype);
// console.log(Person.__proto__); 
// console.log(Person.prototype.constructor); // [Function: Person]
// console.log(Person.prototype.constructor === Person); // true
// console.log(person.constructor.prototype);

// "use strict" // this wil throw an error
// becouse this is not allowd in strict mode (this = undefined)
// let car = {
//     brand: 'Honda',
//     getBrand: function () {
//         return this.brand;
//     }
// }

// console.log(car.getBrand());

// let brand = car.getBrand; 
// console.log(brand()); // this is now window object
// console.log(car.brand); // brand = getBrand() // honda

// console.log(brand); // [Function: getBrand]

// function Car(brand) {
//     this.brand = brand;
// }

// Car.prototype.getBrand = function () {
//     return this.brand;
// }

// let car = new Car('Honda');
// console.log(car.getBrand());

// "use strict";
// let person = {};

// Object.defineProperty(person, 'ssn', {
//     configurable: false,
//     value: '012-38-9119'
// });

// delete person.ssn;
// console.log(person.ssn);

// 'use strict';

// let person = {};

// Object.defineProperty(person, 'ssn', {
//     configurable: false,
//     value: '012-38-9119'
// });


// Object.defineProperty(person, 'ssn', {
//     configurable: true
// });

// let person = {};
// person.age = 25;
// person.ssn = '012-38-9119';

// Object.defineProperty(person, 'ssn', {
//     enumerable: false
// });

// for (let prop in person) {
//     console.log(prop);
// }

