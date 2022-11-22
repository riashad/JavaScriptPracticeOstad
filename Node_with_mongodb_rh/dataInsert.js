// Importing mongodb module
let mongoClient = require('mongodb').MongoClient;

//Mongodb atlas db cluster link
let DB_URL = 'mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority';

//something unavoidable
let unifiedTopology = {useUnifiedTopology: true};

//connecting with database
mongoClient.connect(DB_URL, unifiedTopology, function (error, result) {
	if (error){
		console.log("Connection Failed!");
	}else{
		console.log("Connection Success!");
		insertData(result);
	}
});

//Inserting value to database

function insertData(result){
	//selecting database
	let myDatabase = result.db('school');
	//selecting collection (table)
	let myCollection = myDatabase.collection('students');
	//generating data to insert
	let myData = {
		name: "Mustoba Ahmed",
		course: "MERN Stack",
		roll: "01",
		platform: "OSTAD",
		trainer: "Rabbil Hassan",
		support: "Faisal Ahmed"
	}
	//inserting into collection (table)
	myCollection.insertOne(myData, function (error) {
		if(error){
			console.log("Data Insert Failed!");
		}else{
			console.log("Data Insert Success!");
		}
	});
}
