// ! OOP ====> Object Orieanted Programming  ===> simulate reality
/**
 * * inheritance
 * * polymerphism   ===> override (supported), overloading (not supported)
 * * abstraction    ===> (not supported)
 * * encapsulation
 */
// ? class-based, prototype-based  "self ==> (an old programing lang)"
// let human = {
//   fName: "ahmed",
//   age: 23,
//   salary: 3000,
// };
// let user = {
//   isLive: true,
//   eat: function () {
//     console.log("eat");
//   },
// };
// let eng = {
//   major: "electric",
//   eat: () => {
//     console.log("eat eng");
//   },
// };

// Object.setPrototypeOf(user, human);  // ? prototypal inheritance
// Object.setPrototypeOf(eng, user);

// user.eat()
// eng.eat()
// console.log(user);
// console.log(eng);

// ! constroctor function

// ? new ===> 1-creat obj    2- set property "using (this.)"    3- run code     4- return obj
// function User(username, age, gender, salary, friends) {
//   this.fName = username;
//   this.age = age;
//   this.gender = gender;
//   this.salary = salary;
//   this.friends = friends; // we mad the array indis cuz every obj will have diff friends so we wanna use this.
// }
// class User {
// class cant not write the declaration "let, var, const, function" we write properities and methods and classes use "use strict"
//   constructor(username, age, gender, salary) {
//     this.fName = username;
//     this.age = age;
//     this.gender = gender;
//     this.salary = salary;
//   }
//   welcome() {
//     let x = "hello";
//     console.log(x + " " + this.fName);  // we have to use this. inside the method to access any property
//   }
// }
// User.prototype.welcome = function () {
// if u want to add a function in the obj and we creat it out of the obj cuz we dont
//   console.log(`welcome ${this.fName}`); // wanna print it every time we creat another obj "new"
// };
// let user1 = new User("ahmed", 21, "male", 4000, ["ahmed", "bog"]);
// let user2 = new User("zanet", 61, "female", 500, ["ali", "mai"]);
// let user3 = new User("bog", 27, "male", 4070, ["zanet", "simon"]);
// let user4 = new User("ahmed", 24, "male", 4030, ["jana", "salma"]);

// user1.welcome();

// console.log(user1);

class User {
  #userName;
  age;
  constructor(userName, age, gender, salary) {
    // this.userName = userName;
    this.#userName = userName;
    this.age = age;
    this.gender = gender;
    this.salary = salary;
  }
  welcome() {
    // console.log("welocme " + this.#userName);
    console.log("welocme " + this.#userName);
  }
}
let user1 = new User("ahmed", 22, "male", 4000)  // we can access the private userName cuz its insise a method
user1.welcome()
class Eng extends User {
  constructor(userName, age, gender, salary, dep, uni) {
    super(userName, age, gender, salary);
    this.dep = dep;
    this.uni = uni;
  }
  welcome() {
    console.log("welocme ENG"); // override
  }
}
let eng1 = new Eng("ahmed", 22, "male", 4000, "CS", "cairo");
console.log(eng1);
eng1.welcome(); // it will print the overrided method

/**
 * ! ACCSESS MODIFIRES
 * ? public: inside & outside
 * ? private: inside  ===> if u wanna use it put "#" b4 the property
 * ? proteted: inside & inherited  ===> (not supported)
 */


// ! Functional programming

/**
 * ? assign function to variable
 * ? pass function to function as prameter
 * ? return function inside function 
 * ? make function as property inside object
 */

// 1- let x = function(){}
// 2- function one(two){}
// function two(){}
//  3- function calcSalary(){


//   function calcTax(){

//   }
//   return calcTax()
// }

// 4- let x = {
//   userName: "ahmed",
//   isAlive: function(){}
// }
