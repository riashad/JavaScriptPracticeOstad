   let MongoDb = require('mongodb').MongoClient;
let db_url ="mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";
let unifiedTopology = {useUnifiedTopology: true};

MongoDb.connect(db_url, (error, result)=>{
	if(error){
		console.log("DB not connected!");
	}else{
		console.log("DB Connected! ");
		//findWithQuery(result);
		// findLimitingQuery(result);
		findSortQuery(result);
	}
});

//Set Query for fetching
let findWithQuery = (myMongoClient)=>{
	let db_select = myMongoClient.db('school');
	let col_select = db_select.collection('students');

	let db_query = {roll:"03", location: "Dhaka"}
	col_select.find(db_query).toArray((error, result) => {
		if(error){
			console.log("No data found!");
		}else{
			console.log(result);
		}
	});
}

// Limiting data fetch
let findLimitingQuery = (myMongoClient)=> {
	let db_select = myMongoClient.db('school');
	let col_select = db_select.collection('students');

	//Calling from all data
	let itemObj = {};
	let itemProjection  = {projection:{roll: 1, location:1, _id: 0}}; //  1 means show Data, 0 means hide data

	col_select.find(itemObj, itemProjection).limit(4).toArray((error, result) => {
		if(error){
			console.log("No data found")
		}else{
			console.log(result);
		}
	});
}

// Sorting data while fetching
let findSortQuery = (dbmongo) => {
	let dbSelect = dbmongo.db('school');
	let dbCollection = dbSelect.collection('students')

	let itemObj = {};
	//use projection to limit display data
	let itemProjection = {projection: {roll:1, name:1, _id: 0}}
	let sortPattern = {roll:-1} // 1 means Ascending , -1 means descending
	dbCollection.find(itemObj, itemProjection).sort(sortPattern).toArray((error, result)=>{
		console.log(result);
	});
}