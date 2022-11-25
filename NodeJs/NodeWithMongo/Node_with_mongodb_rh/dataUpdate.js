let MongoClient = require('mongodb').MongoClient;
let DB_REMOTE_URL ="mongodb+srv://riashad:Ostad%402022@cluster0.fnjwco8.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(DB_REMOTE_URL, (error, result)=>{
	if(error){
		console.log("failed");
	}else{
		console.log("success");
		updateSingleItem(result);
	}
});


function updateSingleItem(MongoData){
	let myDB = MongoData.db('school');
	let myCollection = myDB.collection('students');

	//To update single date we need to search what to change, set the change in motion,
	// result display using callback
	let searchItem = {roll: "03"};
	let setToChange = {$set: {name: "Riashad Noor", roll: "04"}};

	myCollection.updateOne(searchItem,setToChange, (error, result)=>{
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



