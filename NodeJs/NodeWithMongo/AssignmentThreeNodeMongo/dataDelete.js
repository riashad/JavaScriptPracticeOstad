let MongoClient = require('mongodb').MongoClient;
let dbAtlasLink = "mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";
let unifiedTopology = {useUnifiedTopology: true};

MongoClient.connect(dbAtlasLink, unifiedTopology, (error, result)=>{
	if(error){
		console.log("database connection failed")
	} else{
		console.log("database connected successfully!");
		deleteSingleDataFromDb(result);
		//deleteAllData(result);
	}
});

// Deleting Single Data
function deleteSingleDataFromDb(GetMongoData){
	//select db from cluster
	let dbSelect = GetMongoData.db('fifaworldcup');
	//select collection from database
	let colSelect = dbSelect.collection('fifa_history');
	//which one to delete
	let dataToDelete = {
		year: 2022,
		champ:"Do not know"
	}
	//delete one data
	colSelect.deleteOne(dataToDelete, (error, result)=>{
		if(error){
			console.log("data delete failed");
		}else{
			console.log("data delete successful");
			console.log(result.acknowledged);
		}
	});
}

//Deleting All Data
function deleteAllData(MongoData){
	let selDB = MongoData.db('fifaworldcup');
	let selCol = selDB.collection('fifa_history');

	//delete all data
	selCol.deleteMany((error, resultInObj)=>{
		if(error){
			console.log('delete failed!');
		}else{
			console.log('delete successful!');
			console.log(resultInObj.deletedCount + ' items got deleted!')
		}
	});

}