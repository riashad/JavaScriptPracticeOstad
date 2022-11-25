let MongoDB = require('mongodb').MongoClient;
let DB_REMOTE_URL ="mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";
let unifiedTopology = {useUnifiedTopology: true}

MongoDB.connect(DB_REMOTE_URL, unifiedTopology, (error, result) => {
	if(error){
		console.log("failed to connect db!");
	}else{
		console.log("connection successful!")
		FindDataByProjection(result);
	}
});

//Find Data by Projection - getting data of specific column
function FindDataByProjection(dataFromMongoDB){
	let selectDB = dataFromMongoDB.db('school');
	let selectCollection = selectDB.collection('students');

	//Calling from all data
	let itemObj = {};
	let itemProjection  = {projection:{roll: 1, _id: 0}}; //  1 means show Data, 0 means hide data
	// Here Roll will display but id will be hidden

	//find(findQuerySpace, ProjectionSpace)
	selectCollection.find(itemObj, itemProjection).toArray((error, result)=>{
		if(error){
			console.log("failed to get data");
		}else{
			console.log("Your data is here! \n");
			console.log(result);
		}
	});

}