// MongoDB has 2 types of library
// 1. npm install mongodb
// 2. npm install mongoose
// we can use one and working process is same

// Importing Mongodb
const { MongoClient } = require("mongodb");

//Connecting Mongodb path
let uri = "mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";
let URL = "mongodb://localhost:27017";

//Checking the connection
let configuration = { useNewUrlParser: true };

MongoClient.connect(uri,configuration,function (error) {
	if(error){
		console.log("Connection failed!")
	}else{
		console.log("Connection Success!")
	}
});