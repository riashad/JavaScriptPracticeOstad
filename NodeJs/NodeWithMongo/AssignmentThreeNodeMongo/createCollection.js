//Calling MongoDB
let MongoClient = require('mongodb').MongoClient;
//Using MongoDB Atlas Cluster
let dbAtlasLink = "mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";

//Connecting to db
MongoClient.connect(dbAtlasLink, (error, result)=>{
	if(error){
		console.log("database connection failed")
	} else{
		console.log("database connected successfully!");
		//createCollection(result); //method call
		listCollection(result);
		//deleteCollection(result);
	}
});

//Creating new collection
function createCollection(MyMongoData){
	let selectDb = MyMongoData.db('fifaworldcup');
	selectDb.createCollection('fifa_history', (error, result)=>{
		if (error){
			console.log("Collection Not Created!");
		}else{
			console.log("Collection created successfully!");
			console.log(result.namespace);
		}
	});
}

//List all Collections
function listCollection (dataFromMongo) {
	let selectDB = dataFromMongo.db('fifaworldcup');
	selectDB.listCollections().toArray((error, result)=>{
		console.log(result);
	});
}

//Deleting collection if not needed
function deleteCollection(MongoData){
	let selectDb = MongoData.db('fifaworldcup');
	selectDb.dropCollection('countries', (error, result)=>{
		if (error){
			console.log("Collection Not deleted!");
		}else{
			console.log("Collection deleted successfully!");
			console.log(result);
		}
	});

}