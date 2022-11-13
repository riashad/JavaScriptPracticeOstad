//Arrow function is noting but simple anonymous function declaration
// Can't create a constructor
//Simple Anonymous function

let func1 = function (a,b){
	let sum = a +b;
	return sum;
}

console.log(func1(6,4))

// Replace "function" keyword with "=>" and add it after "()"

let func2 = (a,b) => {
	let jog = a + b;
	console.log(jog);
}
func2(24,26);

//Try rest param
let func3 = (...restf) => {
	console.log("Length is: " +restf.length);
	for (let i = 0; i < restf.length ; i++) {
		console.log(restf[i]);
	}
}
func3(1,2,3,4,5,6,7,8,9,10);



function funcName() {
	//basic function
}

let NameLess = function() {
	// anonymous function
}

let NameLessFunctionKeywordLess = () => {

}

