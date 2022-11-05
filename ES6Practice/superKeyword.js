// Super keyword is used for only calling methods into child class from parent class
// Inheritance chara super - keyword er use nai

class parent {

	p1() {
		console.log("Hello, Bangladesh! this is Parent 1");
    }

	p2() {
		console.log("Hello, Old Dhaka! this is Parent 2");
	}

}

class child extends parent{

	c1(){
		console.log("This, Dhaka! this is from Child 1");
		console.log("----- Now calling form Parent using Super Keyword -----");
		super.p1();
	}

	c2(){
		console.log("This, Jashore! this is from Child 2");
		console.log("----- Now calling form Parent using Super Keyword -----");
		super.p2();
	}
}

let cObj = new child();
cObj.c1();
cObj.c2();
