"use strict"
let mernStack = ['MongoDB', 'Express', 'React', 'Node']
let meanStack = ['MongoDB', 'Express', 'Angular', 'Node']
//console.log(meanStack +" "+ mernStack) //concat

//console.log(mernStack.push())
mernStack.push(meanStack)

console.log(mernStack)

// PUSH limitation: it's not adding inside the existing array as it's own value.
// it's adding to the end of the array