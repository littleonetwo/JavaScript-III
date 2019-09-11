/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When you're using the this in a global scope it is referring to the window/console object so it allows you to mess with those properties.
* 2. When using as a way to use a property in a function this will imply that what is being processed is being used.. so you pass an object and this.whatever will take the object you passed and find that property in that object.
* 3. When using a contructor it refers to the function your using in that instance.
* 4. The ability to change what this is referring to through functions.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

function sayNametest(name){
  console.log(this);
  return name;
}

sayNametest("Mike");

// Principle 2
// code example for Implicit Binding
const sayNameFunc = obj => {
  obj.sayName = function() {
    console.log(`Hello my name is ${this.name}`);
    console.log(this);
  };
};
const me = { name: 'Michael'};
const you = { name: 'Jimmy'};

sayNameFunc(me);
sayNameFunc(you);

//Invoke Methods on our objects
me.sayName();
you.sayName();

// Principle 3
// code example for New Binding

function Person(name) {
  this.greeting = 'Hi ';
  this.greeter = name;
  this.speak = function() {
    console.log(this.greeting + this.greeter);
    console.log(this);
  };
}

const jimmy = new Person('Nooman');
const nooman = new Person('Jimmy');

jimmy.speak();
nooman.speak();

// Principle 4
// code example for Explicit Binding
jimmy.speak.call(nooman);
nooman.speak.apply(jimmy);
