//Dynamic function don't have function name, rather variable is used to assign and call the function.
// Also known as Anonymous function

var status = function (myStatus) {
    return myStatus;
}
console.log(status("Learning...not gonna give up!\n"));

var profile = function (myName, myAge, myCountry, myEducation) {
    return "My Name: " + myName +"\n"+"My Age:" +myAge + "\n" + "Country: " + myCountry + "\n" + "Education: " + myEducation;
}

console.log(profile("Riashad Noor", "31", "Bangladesh", "BSc. in CSE"));

