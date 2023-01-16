const ToDoModel = require("../models/ToDoListModel");

//Create To Do
exports.CreateToDo = (req,res) => {
	// let reqBody=req.body;
	let UserName = req.headers['username'];
	let TSubject = req.body['TSubject'];
	let TDescription = req.body['TDescription'];
	let TCategory = req.body['TCategory'];
	let TCDate = Date.now();
	let TUDate = Date.now();
	let TEDate = req.body['TEDate'];
	let TFDate = req.body['TFDate'];
	let TStatus = req.body['TStatus'];

	let PostToDoList = {
		UserName:       UserName,
		TSubject:       TSubject,
		TDescription:   TDescription,
		TCategory:      TCategory,
		TStatus:        TStatus,
		TCDate:         TCDate,
		TUDate:         TUDate,
		TEDate:         TEDate,
		TFDate:         TFDate
	};



	ToDoModel.create(PostToDoList,(err,data)=>{
		if(err){
			res.status(400).json({
				status:"failed to add to the list",
				data:err
			})
		}
		else {
			res.status(200).json({
				status:"successfully added to the list",
				data:data
			})
		}
	})
}

//Select To Do
exports.SelectToDo = (req, res) => {
	let username = req.headers['username'];
	ToDoModel.find({UserName:username}, (error, result) => {
		if(error){
			res.status(400).json({
				status:"failed to get To Do Lists",
				data:error
			})
		}
		else {
			res.status(200).json({
				status:"Successfully retrieved all  To Do Lists",
				data:result
			})
		}
	})
}

//Update To Do
exports.UpdateToDo = (req, res) => {

	let _id = req.body['_id'];
	let TSubject = req.body['TSubject'];
	let TDescription = req.body['TDescription'];
	let TCategory = req.body['TCategory'];
	let TUDate = Date.now();
	let TEDate = req.body['TEDate'];
	let TFDate = req.body['TFDate'];
	let TStatus = req.body['TStatus'];

	let UpdateToDoList = {
		_id:            _id,
		TSubject:       TSubject,
		TDescription:   TDescription,
		TCategory:      TCategory,
		TStatus:        TStatus,
		TUDate:         TUDate,
		TEDate:         TEDate,
		TFDate:         TFDate
	};

	ToDoModel.updateOne({_id:_id}, {$set:UpdateToDoList}, {upsert:true}, (error, result) => {
		if(error){
			res.status(400).json({
				status:"List Not Updated",
				data:error
			});
		}else{
			res.status(200).json({
				status:"List Data Updated",
				data:result
			})
		}
	});
}

//Update To Do Status
exports.UpdateToDoStatus = (req, res) => {
	let _id = req.body['_id'];
	let TUDate = Date.now();
	let TStatus = req.body['TStatus'];

	let UpdateStatusToDoList = {
		_id:            _id,
		TStatus:        TStatus,
		TUDate:         TUDate,
	};

	ToDoModel.updateOne({_id:_id}, {$set:UpdateStatusToDoList}, {upsert:true}, (error, result) => {
		if(error){
			res.status(400).json({
				status:"Not Updated",
				data:error
			});
		}else{
			res.status(200).json({
				status:"Data Updated",
				data:result
			})
		}
	});
}

//Delete To Do
exports.DeleteToDo = (req, res) => {
	let _id = req.body['_id'];

	ToDoModel.deleteOne({_id:_id},(error, data) => {
		if(error){
			res.status(400).json({
				status:"to do delete failed",
				data:error
			})
		}
		else {
			res.status(200).json({
				status:"to do list delete success",
				data:data
			})
		}
	});
}


//Select To Do By Category
exports.SelectToDoByCategory = (req, res) => {
	// Categories: Learning, Work, Personal
	let username = req.headers['username'];
	let category = req.body['TCategory'];
	ToDoModel.find({UserName:username, TCategory:category}, (error, result) => {
		if(error){
			res.status(400).json({
				status:"failed to get To Do Lists",
				data:error
			})
		}
		else {
			res.status(200).json({
				status:"Successfully retrieved Category wise all To Do Lists ",
				data:result
			})
		}
	})
}

//Select To Do By Status
exports.SelectToDoByStatus = (req, res) => {
	//Status: Completed, New, Canceled
	let username = req.headers['username'];
	let status = req.body['TStatus'];
	ToDoModel.find({UserName:username, TStatus:status}, (error, result) => {
		if(error){
			res.status(400).json({
				status:"failed to get To Do Lists",
				data:error
			})
		}
		else {
			res.status(200).json({
				status:"Successfully retrieved Status wise all To Do Lists ",
				data:result
			})
		}
	})
}

//Select To Do By Date
exports.SelectToDoByDate = (req, res) => {
	let username = req.headers['username'];
	let fromDate = req.body['FromDate'];
	let toDate = req.body['ToDate'];

	ToDoModel.find({UserName:username, TCDate:{$gte:new Date(fromDate), $lte:new Date(toDate)}}, (error, result) => {
		if(error){
			res.status(400).json({
				status:"failed get date wise data",
				data:error
			})
		}
		else {
			res.status(200).json({
				status:"successfully get date wise data",
				data:result
			})
		}
	})
}