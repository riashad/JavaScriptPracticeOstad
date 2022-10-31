//Strict mode for showing error
"use static"

//Like spread operator, Rest Parameter users three dot(...)
//100 number manually function er vitore entry dewar thake
// ...number likhle function call korar shomoy 100+ times call kora jay

function result(...input){
    let add = 0, sub = 0, div = 10, mult = 20;
    for (let i of input) {
        add +=i;
        sub -=i;
        div /=i;
        mult *=i;
    }
    console.log("Addition: "+ add)
    console.log("Substitution: "+sub)
    console.log("Division: "+div)
    console.log("Multiplication: "+mult)
}

result(2,3);

//Pre-set value in rest parameter or assigning input value to given variable

function result2(k,l,m,...input2){
    let sum = 0;
    for (let value of input2) {
        sum +=value;
    }
}

result2(20,30,40,50,60,70); //here, 20,30,40 will be assigned to k,l,m respectively
//and rest of the values will be assigned under input2(rest param)

