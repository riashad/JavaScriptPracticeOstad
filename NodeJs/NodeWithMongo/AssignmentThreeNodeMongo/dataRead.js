let MongoClient = require('mongodb').MongoClient; // mongodb
let dbAtlasLink = "mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";
let unifiedTopology = {useUnifiedTopology: true}; //jani na :3

MongoClient.connect(dbAtlasLink, unifiedTopology, (error, result)=>{
	if(error){
		console.log("database connection failed")
	} else{
		console.log("database connected successfully!");
		findWithCondition(result);
		findWithoutCondition(result);
		findWithProjection(result);
		findAllData(result);
		findWithQuery(result);
	}
});

// Find One with Condition
function findWithCondition(data){
	//select db from cluster
	let dbSelect = data.db('fifaworldcup');
	//select collection from database
	let tableSelect = dbSelect.collection('fifa_history');
	//Condition
	let findCond = {year: 2022};
	//check
	tableSelect.findOne(findCond, (error, result)=>{
		if(error){
			console.log("Data Not Found!")
		}else{
			console.log("Find data with condition: \n");
			console.log(result);
		}
	});

}

// Find One without Condition
function findWithoutCondition(data){
	//select db from cluster
	let dbSelect = data.db('fifaworldcup');
	//select collection from database
	let tableSelect = dbSelect.collection('fifa_history');
	//Condition - empty
	let findWCond = {};
	//check
	tableSelect.findOne(findWCond, (error, result)=>{
		if(error){
			console.log("Data Not Found!")
		}else{
			console.log("Find data without condition: \n");
			console.log(result);
		}
	});

}

function findWithProjection(data){
	//select db from cluster
	let dbSelect = data.db('fifaworldcup');
	//select collection from database
	let tableSelect = dbSelect.collection('fifa_history');
	//Empty Condition
	let cond = {};
	//projection - helps to limit data display, 1: show, 0:hide
	let toShow = {projection: {year:1,champ:1,_id:0}};

	tableSelect.find(cond, toShow).toArray((error, result)=>{
		if(error){
			console.log("failed to get data");
		}else{
			console.log("Your data is here! \n");
			console.log(result);
		}
	});
}

function findAllData(data) {
	//select db from cluster
	let dbSelect = data.db('fifaworldcup');
	//select collection from database
	let tableSelect = dbSelect.collection('fifa_history');

	tableSelect.find().toArray((error, result)=>{
		if(error){
			console.log("No data found!");
		}else{
			console.log(result);
		}
	});
}

function findWithQuery(data){
	//select db from cluster
	let dbSelect = data.db('fifaworldcup');
	//select collection from database
	let tableSelect = dbSelect.collection('fifa_history');
	//Query
	let query = {champ:"Brazil"};
	//sorting Pattern
	let pattern = {year: 1} // 1: ascending, -1: descending
	//Sorting data while display
	tableSelect.find(query).sort(pattern).toArray((error, result)=>{
		if(error){
			console.log("No data found!");
		}else{
			console.log(result);
		}
	});
}