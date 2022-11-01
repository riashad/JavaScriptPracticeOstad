//Simple Function
function sum(){
	var val1 ="500"
	var val2 = 600
	console.log(val1+val2) //concatenation happened but not summation is done

	var stringToInt = parseInt(val1) //converted to Integer from String
	console.log(stringToInt+val2)
}
sum()

//Parameterized Function
function sum2(x,y,z){
	var newX = x
	var newY = y
	var newZ = z

	console.log((newX*newY)/newZ)
}

sum2(5,25,10)

//Rest Parameter
function restParam(...input){
	//input will be received as Array
	console.log(input)
	//array will be received as Array index value
	console.log("Index 4 value is: " +input[4])
	let add = 0;
	for (let i = 0; i < input.length; i++) {
		console.log(input[i])
	}
	for (let inputElement of input) {
		add +=inputElement
		console.log("Summation for Rest Param: ")
		console.log(add)
	}

}
restParam(1,2,3,4,5,6,7,8,9,10,11,12,13)

//Returning Function
var returningFunction = function(x,y){
	biog = x - y
	return "X - Y = "+x+"-"+y+" = "+ biog;
}
console.log(returningFunction(500,200))

//Anonymous Function
//Parameterized Anonymous Function
//Arrow Function
//The Function Constructor
