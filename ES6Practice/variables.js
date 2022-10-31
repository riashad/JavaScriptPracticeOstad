//var : re-declare --- possible ✅
//var : new value assign --- possible ✅

//let : re-declare --- not possible ❌
//let : new value assign --- possible ✅

//const: re-declare --- not possible ❌
//const : new value assign --- not possible ❌

console.log("\n------------- var keyword ----------------\n");
var varValue = "Riashad Noor";
console.log("✅ Var - Initially assigned Value: "+varValue);

varValue = "Sinthia Noor";
console.log("✅ Var - Re-assigned value: " + varValue)

var varValue = "Fatiha Mehnoor";
console.log("✅ Var - Re-declared value: "+ varValue);

console.log("\n------------- let keyword ----------------\n");
let letValue = "Md. Nuruzzaman Noor";
console.log("✅ Let - Initially assigned Value: "+letValue);

letValue = "Rasheduzzaman";
console.log("✅ Let - Re-assigned value: " + letValue)

//let letValue = "Kasheduzzaman";
console.log("❌ Let - Re-declared value: "+ letValue); //Identifier 'letValue' has already been declared


console.log("\n------------- const keyword ----------------\n");
const constValue = "Abtahi Rahman";
console.log("✅ const - Initially assigned Value: "+constValue);

constValue = "Faisal Rahman";
console.log("❌ const - Re-assigned value: " + constValue) //TypeError: Assignment to constant variable.

constValue constValue = "Sohayel Rahman";
console.log("❌ const - Re-declared value: "+ constValue); // Unexpected identifier