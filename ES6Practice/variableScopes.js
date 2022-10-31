// global: can be accessed from everywhere
// local: only accessible from inside a function or class where the variable is declared

var globalVar = "Bangladesh";

function profile(uname, uage){
    var name = uname
    var age = uage
    var ucountry = globalVar
    console.log("My name is "+ name +", age: "+ age +" and my country is "+ucountry)
}

profile("Riashad Noor", 32) //here globalVar is accessible from anywhere

var profile2 = function(uname, uage){
    var localVar = "London"
    var name = uname
    var age = uage
    console.log("My cousin is "+name+" , "+age + " old and he lives in "+localVar+" but he is from "+globalVar);
}

profile2("Uzan Rahman", 33) // here localVar, name, age -- all local Variable