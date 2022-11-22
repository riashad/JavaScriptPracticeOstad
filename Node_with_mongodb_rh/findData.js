let MongoClient = require('mongodb').MongoClient;

let DB_REMOTE_URL ="mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";

let unifiedTopology = {useUnifiedTopology:true};

MongoClient.connect(DB_REMOTE_URL, unifiedTopology, function (error, result) {
	if(error){
		console.log("Failed to Connect!");
	}else{
		console.log("Connected successfully!");
		// findWithoutCondition(result);
		// findWithCondition(result);
		findAllData(result);
	}
});

//Find data without Conditions
function findWithoutCondition(myMongoData){
	let myDatabase = myMongoData.db('school');
	let myConnection = myDatabase.collection('students');

	let findData = {}; //no condition applied
	myConnection.findOne(findData, function (error, result) {
		if(error){
			console.log("Data Not Found!")
		}else{
			console.log("Find data without condition: \n");
			console.log(result);
		}
	});
}

//Find data without Conditions

function findWithCondition(myMongoDbData){
	let myDB = myMongoDbData.db('school');
	let myColl = myDB.collection('students');

	let find = { "roll": "04"};

	myColl.findOne(find, function (error, result) {
		if(error){
			console.log("Data Not Found!")
		}else{
			console.log("Find data with condition: \n");
			console.log(result);
		}
	})
}

//find all data

function findAllData(allData) {
	let mydb = allData.db('school');
	let mycol = mydb.collection('students');

	mycol.find().toArray(function (error, result) {
		if(error){
			console.log("Data Not Found!")
		}else{
			console.log("Display All data: \n");
			console.log(result);
		}
	});
}
