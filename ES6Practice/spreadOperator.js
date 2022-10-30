//Spread = extend (meaning)
// using ... (three dots) we can use SPREAD operator

//Ex: we are extending Array using ...(spread operator)
"use strict"

let batch08MorningTeam = ['Riashad', 'Zaheen', 'Mahadi', 'Tareq', 'Romi']
let batch08DayTeam = ['Meshkat', 'Sabbir', 'Asif', 'Kanjul', 'Mridul']
let batch08 = [...batch08MorningTeam, ...batch08DayTeam]
console.log(batch08);

//Also adding "strict mode <use strict>" on top as the Police