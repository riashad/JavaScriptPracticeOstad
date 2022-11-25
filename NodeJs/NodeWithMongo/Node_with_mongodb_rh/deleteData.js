let MongoClient = require('mongodb').MongoClient;

let DB_REMOTE_URL ="mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";
let config = {useUnifiedTopology: true};

MongoClient.connect(DB_REMOTE_URL, config, function (error, result) {
	if(error){
		console.log("Connection Failed!");
	}else{
		console.log("Connection Successful!");
		// deleteSingleData(result);
		deleteAllData(result);
	}
})

// Delete data from collection
function deleteSingleData(myMongoData){
	let myDatabase = myMongoData.db('school');
	let myCollection  = myDatabase.collection('students');

	//values to delete
	let deleteData = {
		roll: "2"
	}

	myCollection.deleteOne(deleteData, function (error) {
		if(error){
			console.log("data delete failed");
		}else{
			console.log("data delete successful");
		}
	});
}

function deleteAllData(myMongoData){
	let myDatabase = myMongoData.db('school');
	let myCollection = myDatabase.collection('students');

	myCollection.deleteMany(function (error, resultInObj) {
		if(error){
			console.log('delete failed!');
		}else{
			console.log('delete successful!');
			console.log(resultInObj.deletedCount + ' items got deleted!')
		}
	});
}
