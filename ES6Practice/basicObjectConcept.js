var bioData = {
	name: 'Riashad Noor',
	age: 32,
	work: 'Markedium',
	home: 'Shahbag',
	office: 'Panthapath',
	skills: 'Learning',
	family: {
		father: 'Md. Nuruzzaman',
		mother: 'Asma -Ul- Hosna',
		brother: {
			name: 'Tishad',
			age: '27',
			study: 'BRAC',
			subject: 'BBA'
		},
		wife: 'Sinthia Noor',
		kid: 'Faatiha Mehnoor'
	}
}

//Object can be called using 2 ways
// objectName.propertyName or objectName['propertyName']

console.log(bioData['name']) // object to property
console.log(bioData['family']['brother']) // object to property to property
console.log(bioData['family']['brother']['name']) // object to property to property to property

console.log("\n ------------ \n")

console.log(bioData.name)
console.log(bioData.family.brother.name)

// Properties value can be saved using bracket notation
var wifieName = 'wife'
console.log(bioData['family'][wifieName]) // Sinthia Noor

//Properties value can be added using Dot notation
bioData.expersise = "do every morning";
bioData.shoes = {
	nike: true,
	power: true,
	adidas:false
}
console.log(bioData)

//How to know only keys of the object
console.log(Object.keys(bioData)) //will show the keys of the object as an Array
console.log(Object.keys(bioData.family)) //will show the keys of the object as an Array
console.log(Object.keys(bioData.family.brother)) //will show the keys of the object as an Array
console.log(Object.keys(bioData.shoes)) //will show the keys of the object as an Array

//How to know only values of the object

console.log(Object.values(bioData)) //will show the values of the object as
console.log(Object.values(bioData.family)) //will show the values of the object as
console.log(Object.values(bioData.family.brother)) //will show the values of the object as
console.log(Object.values(bioData.shoes)) //will show the keys of the object as an Array
