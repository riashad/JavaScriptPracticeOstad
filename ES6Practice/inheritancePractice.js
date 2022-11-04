class parentClass {

	constructor() {
	}

	helloP(){
		let p1 = "Hi I am from parent class 1";
		let p2 = "Hi I am from parent class 2";
		console.log(p1);
		console.log(p2);
	}
	helloQ( ){
		let p3 = "Hi I am from parent class 3";
		let p4 = "Hi I am from parent class 4";
		console.log(p3);
		console.log(p4);
	}
}

class childClass extends parentClass {

	hello(){
		console.log("This is from child");
	}
}


let childObj = new childClass();
childObj.hello();
childObj.helloP();
childObj.helloQ();