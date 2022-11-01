// For - i loop - simple iteration

let first, second, next;
first = 0
second = 1
console.log("\n---Print Fibonacci Series ---\n");
let count = 10
for (let i = 0; i < count; i++) {
	console.log(first+" ")
	next = first + second
	first = second
	second = next
}

// For of loop (like: for each)

let bangladeshCricketTeam = ['Shakib Al Hasan', 'Mushfiqur Rahim', 'Liton Dash', 'Mashrafee Bin', 'Tamim Iqbal'];

for (let singlePlayer of bangladeshCricketTeam) {
	console.log(singlePlayer);
}

// For in loop

let personDetails = {
	pName: 'Riashad Noor',
	pAge: '32',
	pCountry: 'Bangladesh'
}
for (let person in personDetails) {
	console.log(person +": "+ personDetails[person])
}
