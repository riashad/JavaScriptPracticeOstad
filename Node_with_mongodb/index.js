// MongoDB has 2 types of library
// 1. npm install mongodb
// 2. npm install mongoose
// we can use one and working process is same

// Importing Mongodb
let MongodbClient = require('mongodb');

//Connecting Mongodb path
let URL = "mongodb+srv://riashad:Ostad@2022#@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";

//Checking the connection

MongodbClient.connect(URL, function (error) {
	if(error){
		console.log("failed");
	}else{
		console.log("success");
	}
})