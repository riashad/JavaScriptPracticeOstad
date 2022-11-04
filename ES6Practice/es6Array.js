//Simple Array

let arrayOne = ["Riashad", "Uzan", "Uthsab", "Tishad"];
console.log(arrayOne);
for (let singleIndexValue of arrayOne) {
	console.log(singleIndexValue)
}

//Declaring Array Using class New keyword

let arrayTwo = new Array("Riashad", "Uzan", "Tishad", "Utshab");
console.log(arrayTwo)
for (let singleIndexValue of arrayTwo) {
	console.log(singleIndexValue)
}

//Multidimensional Array

let dhaka = ["Mohammadpur", "Shamoly", "Shahbag", "Malibag"];
let jessore = ["New Market", "Bejpara", "Kathal Toal", "babla Tola"]
let ponchogor = ["Vitor gar", "Bahir Gor", "Dimla"];

let bangladeshCity = [dhaka, jessore, ponchogor];
console.log(bangladeshCity)

//If I want to select Babla Tola then I have to do the following
//Here: dhaka = index 0, jessore = index 1, ponchogor index 2
//"Babla Tola" is in index 1's 3 no index, so

let showArea = bangladeshCity[1][3]
console.log(showArea);

// Array Destructuring
//used to assign value in a variable from a complex Array
//we can choose what to pick from an array based on the index number

//let us create an array using spread operator from the previous arrays

let bangladeshSohor = [...dhaka, ...jessore, ...ponchogor];
let bangladeshSohor2 = [ 'Mohammadpur', 'Shamoly', 'Shahbag', 'Malibag', 'New Market',  'Bejpara', 'Kathal Toal', 'babla Tola', 'Vitor gar',   'Bahir Gor', 'Dimla'];
console.log(bangladeshSohor);
console.log(bangladeshSohor2);


let [q,,,,c] = bangladeshSohor2;
console.log(q, c)
