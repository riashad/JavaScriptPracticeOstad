"use strict"
// 👉Only applicable for "var" - keyword
// Hoisting works for ✅var ❌let ❌const

// 🟢️ First initialize & then declare 🟢

myLearning = "MERN Application Development";
console.log(myLearning);
var myLearning; // so, the variable is declared later and this helps the previous initialization to work

myLearning2 = "Node JS";
console.log(myLearning2);
let myLearning2; // Cannot access 'myLearning2' before initialization

myLearning3 = "Next JS";
console.log(myLearning2);
const myLearning3; //Missing initializer in const declaration


