let MongoClient = require('mongodb').MongoClient;
let db_url_local = "mongodb://localhost:27017";
let unifiedTopology = {useUnifiedTopology: true};

MongoClient.connect(db_url_local,unifiedTopology, (error, result)=>{
	if(error){
		console.log("Database connection failed!")
	}else{
		console.log("Database connection successful!");

		 //listCollection(result);
		//createCollection(result);
		//insertData(result);
		//findData(result);
		//updateData(result);
		 //deleteData(result);
	}
});

function listCollection(DataFromMongo){
	let select_db = DataFromMongo.db('school');
	select_db.listCollections().toArray((error, result)=>{
		if(error){
			console.log("failed!")
		}else{
			console.log("Database collection lists: \n");
			console.log(result);
		}

	});
}

function createCollection(DataFromMongo){
	let select_db = DataFromMongo.db('school');
	let colName = 'students';
	select_db.createCollection(colName, (error, result)=>{
		if(error){
			console.log("Collection Creation failed!")
		}else{
			console.log("Database collection created: \n");
			console.log(result);
		}
	});
}

function insertData(DataFromMongo){
	let select_db = DataFromMongo.db('school');
	let select_collection = select_db.collection('students');

	let myDataMany = [
	{
		name: "Riashad Noor",
		roll: 1,
		class: 5,
		department: "Science",
		teacher: 1
	},
	{
		name: "Ahmed Noor",
		roll: 2,
		class: 5,
		department: "Commerce",
		teacher: 2
	},
	{
		name: "Sinthia Noor",
		roll: 3,
		class: 5,
		department: "Science",
		teacher: 1
	},
	{
		name: "Kamal Uddin",
		roll: 4,
		class: 5,
		department: "Commerce",
		teacher: 2
	}
	];

	let myDataSingle = {
		name: "Karim Sheikh",
		roll: 6,
		class: 5,
		department: "Commerce",
		teacher: 2
	}

	// select_collection.insertMany(myDataMany, (error, result)=>{
	// 	if(error){
	// 		console.log("Data insertion failed!")
	// 	}else{
	// 		console.log("Data inserted: \n");
	// 		console.log(result);
	// 	}
	// });

	select_collection.insertOne(myDataSingle, (error, result)=>{
		if(error){
			console.log("Data insertion failed!")
		}else{
			console.log("Data inserted: \n");
			console.log(result);
		}
	});
}

function findData(DataFromMongo){
	let select_db = DataFromMongo.db('school');
	let select_collection = select_db.collection('students');

	let findObj = {department: "Science"};
	let sortPattern = {roll: 1};
	let projection = {projection:{teacher:0,_id:0}};

	select_collection.find(findObj, projection).sort(sortPattern).toArray((error, result)=>{
		if(error){
			console.log("Data find failed!")
		}else{
			console.log("Data found: \n");
			console.log(result);
		}
	});
}

function updateData(DataFromMongo) {
	let select_db = DataFromMongo.db('school');
	let select_collection = select_db.collection('students');
	let findDataToUpdate = {roll: 6};
	let dataToUpdate ={$set: {roll:5, department: "Science", teacher: 1}};

	select_collection.updateOne(findDataToUpdate, dataToUpdate, (error, result)=>{
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

function deleteData(DataFromMongo){
	let select_db = DataFromMongo.db('school');
	let select_collection = select_db.collection('students');

	let dataToDelete = {roll:6};

	select_collection.deleteOne(dataToDelete, (error, result)=>{
		if(error){
			console.log("data delete failed");
		}else{
			console.log("data delete successful");
			console.log(result);
		}
	});
}

