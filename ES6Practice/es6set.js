//Set is also collection of data but without 'key' and looks like Array
//Set only contains unique values (duplicate not allowed unlike Array)

let setP = new Set(["Riashad", "Uzan", "Tishad"]);
let setQ = new Set();

console.log(setP)

//adding value to setP
setP.add("Uthsab");
setP.add("Ishraq");
setP.add("Abrar");
console.log(setP) // will show the added values

let john = {name: "John"};
let paul = {name: "Paul"};
let erik = {name: "Erik"};
let dick = {name: "Dick"};

//adding value to setQ

setQ.add(john);
setQ.add(paul);
setQ.add(erik);
setQ.add(dick);
console.log(setQ)

//deleting value
setP.delete('Uzan');
console.log(setP);

//finding value

console.log(setP.has('Uzan')) //false
console.log(setP.has('Tishad')) //true

//set size
console.log("SetQ size is: "+setQ.size);
//clearing
setP.clear();
console.log(setP);



