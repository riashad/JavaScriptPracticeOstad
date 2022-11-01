// Conditions
// Switch Statements

// Odd or Even finder

let input = 10;

if (input % 2 == 0) {
	console.log("Even Number")
}else {
	console.log("Odd Number")
}

// Switch case

let service = "Student"

switch (service){
	case 0:
		service = "Student";
		break;
	case 1:
		service = "Jobless";
		break;
	case 2:
		service = "Employed";
		break;
	default:
		service = "Looking for Job"
}
console.log(service)


let toDay = new Date().getDay();

switch (toDay) {
	case 0:
		toDay = "Sunday"
		break
	case 1:
		toDay = "Monday"
		break
	case 2:
		toDay = "Tuesday"
		break
	case 3:
		toDay = "Wednesday"
		break
	case 4:
		toDay = "Thursday"
		break
	case 5:
		toDay = "Friday"
		break
	case 6:
		toDay = "Saturday"
		break
}

console.log(toDay)

//If else elseif checking from object

let person = {
	name: 'Riashad Noor',
	age: 36, //change to 36 to get elseif output
	study: "BSc. in CSE",
	hobby: ['travelling', 'cyclig', 'movie'], // change index 1 value to get else output
	color: {
		favCol: 'Blue',
		skinCol: 'Mild brown',
		hairCol: 'Black'
	}
}
console.log(person)
console.log(person.hobby)
console.log(person.hobby[2])
console.log(person.color['favCol'])
console.log(person['hobby'][2])
console.log("\n")

if(person.age >= 30 && person.age <=35 ) {
	console.log(person["name"])
}else if(person['hobby'][1] === "cycling" ) {
	console.log("He loves "+ person["hobby"][1]);
}else if(person.color.favCol !== "Blue" || person["color"]["favCol"] === "black"){
	console.log(person["name"]+" do not like "+ person["color"]["favCol"] +" or black")
} else {
	console.log("The person named "+ person.name +" is a troglodyte!")
}
