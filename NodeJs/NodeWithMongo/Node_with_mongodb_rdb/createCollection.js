let MongoClient = require('mongodb').MongoClient;
let db_url ="mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";

//connection establishment
MongoClient.connect(db_url, (error, result)=>{
	if (error){
		console.log("DB Not Connected!");
	}else{
		console.log("DB Connected!");
		// createCollectionFunc(result);
		//listCollections(result);
		deleteCollection(result);
	}
});

//Creating new collection
let createCollectionFunc = (resultFromDB) =>{
	let selectDB = resultFromDB.db('school');
	//make a new collection (table)
	let collectionName = "staffs";
	selectDB.createCollection(collectionName, (error, result)=>{
		if (error){
			console.log("Collection Not Created!");
		}else{
			console.log("Collection created successfully!");
			console.log(result.namespace);
		}
	});
};

//Listing Existing collections before deleting

function listCollections(dataFromMongo){
	let selectDB = dataFromMongo.db('school');
	selectDB.listCollections().toArray((error, result)=>{
		console.log(result.name);
	});

}

// Deleting collection (drop)

function deleteCollection(dataFromMongo) {
	let selectDB = dataFromMongo.db('school');
	let collectionToDelete = 'staffs';
	selectDB.dropCollection(collectionToDelete, (error, result)=>{
		if (error){
			console.log("Collection Not deleted!");
		}else{
			console.log("Collection deleted successfully!");
			console.log(result);
		}
	});
}
