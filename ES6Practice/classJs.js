// Class holds many functions / methods, objects, property in once container
// Class is a reusable technology and we can use it as necessary
// Class is created using "Class" keyword
// Class is a template for JS Object
// class automatically creates a constructor() method when initialized
// Class can not be hoisted
/* general methods are usually created using a name like age(), person(), method_1(), it's kind of a function
 just don't need to mention 'function' keyword. */

class firstClass {
	//default constructor
	constructor(firstName, lastName) {
		//default constructor
		//constructor can't "return"

		let a = 9;
		let b = 9;

		console.log("Hi, I'm default constructor method!");
		console.log("Sum: " + (a+b));

		this.fstName = firstName;
		this.lstName = lastName;
	}

	//class method or function
	ageCalculator(bday, bmonth, byear){
		let currentDate = new Date();
		let cDate = currentDate.getDate();
		let cMonth = currentDate.getMonth() + 1; // Add 1 because js starts count from 0 to 11
		let cYear = currentDate.getFullYear();

		let yourAge = "Age: "+(cYear - byear) + " Years " + (cMonth - bmonth) + " Months & " + (-1*(cDate - bday)) + " Days";
		console.log(yourAge);
	}
	getName(){
		let fullName = this.fstName +" "+ this.lstName;
		console.log(fullName);
	}
}

let firstClassObj = new firstClass("Riashad", "Noor"); // Instantiation // Class Object Creation

firstClassObj.ageCalculator(16, 7, 1990);

firstClassObj.getName();

