// import kobe laptop from china
import {laptop, mobilePhone} from './china.js'; //Same name e import export korarke Named Import and Export bole
import {classChina} from './china.js'; //Importing class
import c2bd  from './es6Module.js'; // Importing class using default module


 console.log("Hello, from console");
 console.log(laptop)

 mobilePhone();

// Calling values of imported class through object
let chinaObj = new classChina();
chinaObj.toy();

//default module use
let moduleObj = new c2bd();
moduleObj.defaultModuleTesting();

