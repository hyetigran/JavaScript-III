/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* This points to one of four places.
* 1. If global scope, it points global obj. windows or could be undefined if strict.
* 2. It could be a function called as a method
* 3. It could be a new binding called by a constructor function
* 4. When call or apply or bind methods are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
// function greetHim(name) {
// 	console.log('Hello ' + name);
// 	console.log(this);
// }
// greetHim('Tigran');
// Principle 2

// code example for Implicit Binding
let greetMe = {
	greeting: 'Hello ',
	speak: function(name) {
		console.log(this.greeting + name);
		console.log(this);
	}
};
greetMe.speak('Jerry');

// Principle 3

// code example for New Binding
function GreetMe(name) {
	this.greeting = 'Hi ';
	this.name = name;
	this.greet = function() {
		console.log(this.greeting + this.name);
		console.log(this);
	};
}

let greetTigran = new GreetMe('Tigran');
let greetRobert = new GreetMe('Robert');
greetTigran.greet();
greetRobert.greet();

// Principle 4

// code example for Explicit Binding
GreetMe.prototype.wishLuck = function() {
	console.log('Good luck ' + this.name);
	console.log(this);
};

greetTigran.wishLuck();
