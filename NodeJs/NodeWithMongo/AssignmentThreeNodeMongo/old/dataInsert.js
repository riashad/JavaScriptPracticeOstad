let MongoClient = require('mongodb').MongoClient;
let dbAtlasLink = "mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";
let unifiedTopology = {useUnifiedTopology: true};

MongoClient.connect(dbAtlasLink, unifiedTopology, (error, result)=>{
	if(error){
		console.log("database connection failed")
	} else{
		console.log("database connected successfully!");
		insertDataintodb(result);
	}
});

let insertDataintodb = (GetMongoData)=> {
	//select db from cluster
	let dbSelect = GetMongoData.db('fifaworldcup');
	//select collection from database
	let tableSelect = dbSelect.collection('fifa_history');
	// data formation
	let history = {
		year: 2022,
		champ: 'Do not know',
		runup: 'Do not know',
		third: 'Do not know',
		host: 'Qatar'
	}
	//inserting data
	tableSelect.insertOne(history, (error, result)=>{
		if(error){
			console.log("Data Insert Failed!");
		}else if(result.acknowledged === true ){
			console.log("Data Insert Success!");
			console.log(result.insertedId);
		}
	});

}
