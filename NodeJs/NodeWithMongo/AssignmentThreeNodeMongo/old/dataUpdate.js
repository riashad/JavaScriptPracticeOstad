let MongoClient = require('mongodb').MongoClient; // mongodb
let dbAtlasLink = "mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";
let unifiedTopology = {useUnifiedTopology: true}; //jani na :3

MongoClient.connect(dbAtlasLink, unifiedTopology, (error, result)=>{
	if(error){
		console.log("database connection failed")
	} else{
		console.log("database connected successfully!");
		singleDataUpdate(result);
	}
});

function singleDataUpdate(MyMongoData) {
	let myDB = MyMongoData.db('fifaworldcup');
	let myCollection = myDB.collection('fifa_history');

	//query set to update
	let dataToUpdate = {
		year:2022,
		runup: "Germany"
	}
	//set the changes
	let dataToChange = {
		$set: {
			runup: "France",
			champ: "Argentina"
		}
	}
	//Updating Query
	myCollection.updateOne(dataToUpdate, dataToChange, (error, result)=>{
		if(error){
			console.log("data update failed!")
		}else if(result.matchedCount === 1){
			console.log(result.matchedCount + " data matched and it will be updated!");
			console.log("Successfully modified data count: "+result.modifiedCount);
		}else if(result.matchedCount === 0){
			console.log("No mathced data to modify");
		}
	});
}