//  Static Keyword
/* ✅Without "Static" keyword class er object er sathe ekta connection thake
Object create kore amra class er Properties gula call korte pari
 But direct class er connection thake na */

/*
 ✅With Static Keyword
 1. Properties gular sathe Class er Object er connection thake na
 2. Properties gular sathe Direct Class er connection thake
*/

// Static keyword use krole Object diye call kora jabe na, class diye call korte hobe

class StaticKeywordPractice {

	//Without Static Keyword
	hello(){
		console.log("Hello, I am without static!")
	}

	//With Static Keyword
	static salam() {
		console.log("I am with Static Keyword!")
	}

}

// Without Static keyword, object is needed to call the method / function
let woStaticObject = new StaticKeywordPractice();
woStaticObject.hello();

// With Static keyword direct ClassName diye access korte hoy / call korte hoy

StaticKeywordPractice.salam();
