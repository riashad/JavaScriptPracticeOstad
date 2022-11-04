// Map() stays like key - value pair, like object
// Map () creation is like new object creation with a New - keyword
// Map () - any type of key allow kore

let mapA = new Map(); //map creation

//To set value to a Map() we have to use "set" keyword
mapA.set('key1', 'Bangladesh');
mapA.set('key2', 'India');
mapA.set('key3', 'Canada');
mapA.set('key4', 'Australia');
mapA.set('key5', 'Japan');
mapA.set('key6', 'Singapore');
mapA.set('key7', 'Malaysia');
mapA.set('key8', 'China');
mapA.set('key9', 'Indonesia');

//getting values
mapA.values();
console.log(mapA.values());

//getting keys
mapA.keys();
console.log("\n"+mapA.keys())


//we can iterate maps key-value pair using For of loop
for (let mapAElement of mapA) {
	console.log(mapAElement);
}
console.log("\n");

//getting only values using for-of loop
for (let mapAElem of mapA.values()){
	console.log(mapAElem);
}
console.log("\n");
//getting only keys using for-of loop
for (let keyElements of mapA.keys()){
	console.log(keyElements);
}
console.log("\n");
//getting Specific key value - Get Method
mapA.get('key3');
console.log(mapA.get('key3'));

// deleting specific 'value' by the 'key' from Map() - Delete Method

mapA.delete('key7')
mapA.delete('key9')

for (let mapAEle of mapA.values()){
	console.log(mapAEle);
}
console.log("\n");

//Return map size / length - size() method
console.log("Map size is: "+ mapA.size);

// Returns 'true' if the key exists - has(key) method
mapA.has('key4');
console.log("Key exist: "+mapA.has('key4'));

// removes everything from the map - clear() method
console.log("Before Clearing: \n")
console.log(mapA);
mapA.clear();

console.log("After Clearing: \n")
console.log(mapA);